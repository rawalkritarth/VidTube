import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendPasswordResetSuccessEmail,
} from "../utils/Sendemail.js";


// ─── STEP 1: Register — upload files, save user, send OTP ────────────────────
// POST /api/v1/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;
 
  // 1. Validate all fields present
  if ([fullname, email, username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
 
  // 2. Check if user already exists
  // NEW - only block if user is already verified
const existedUser = await User.findOne({ $or: [{ username }, { email }] });

if (existedUser) {
  if (existedUser.isEmailVerified) {
    // fully registered user → block them
    throw new ApiError(409, "User with email or username already exists");
  } else {
    // unverified user → delete old record and let them re-register
    await User.findByIdAndDelete(existedUser._id);
  }
}
  // 3. Handle file uploads
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverLocalPath = req.files?.coverImage?.[0]?.path;
 
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }
 
  // 4. Upload to Cloudinary
  let avatar;
  try {
    avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log("Uploaded avatar", avatar);
  } catch (error) {
    console.log("Error uploading avatar", error);
    throw new ApiError(500, "Failed to upload avatar");
  }
 
  let coverImage;
  try {
    if (coverLocalPath) {
      coverImage = await uploadOnCloudinary(coverLocalPath);
      console.log("Uploaded coverImage", coverImage);
    }
  } catch (error) {
    console.log("Error uploading coverImage", error);
    throw new ApiError(500, "Failed to upload cover image");
  }
 
  // 5. Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const hashedOTP = crypto.createHash("sha256").update(otp).digest("hex");
  const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
 
  // 6. Create user in DB (unverified)
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
    isEmailVerified: false,
    emailOTP: hashedOTP,
    emailOTPExpiry: otpExpiry,
  });
 
  if (!user) {
    throw new ApiError(500, "Something went wrong while registering user");
  }
 
  // 7. Send OTP email
  await sendVerificationEmail(email, otp);
 
  return res
    .status(201)
    .json(new ApiResponse(201, { email }, "OTP sent to your email. Please verify to complete registration."));
});
 
// ─── STEP 2: Verify OTP — mark user as verified, send welcome email ───────────
// POST /api/v1/users/verify-otp
const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;
 
  if (!email || !otp) {
    throw new ApiError(400, "Email and OTP are required");
  }
 
  // Hash the incoming OTP and compare with DB
  const hashedOTP = crypto.createHash("sha256").update(otp).digest("hex");
 
  const user = await User.findOne({
    email,
    emailOTP: hashedOTP,
    emailOTPExpiry: { $gt: Date.now() }, // check not expired
  });
 
  if (!user) {
    throw new ApiError(400, "Invalid or expired OTP");
  }
 
  // Mark as verified and clear OTP fields
  user.isEmailVerified = true;
  user.emailOTP = undefined;
  user.emailOTPExpiry = undefined;
  await user.save({ validateBeforeSave: false });
 
  // Send welcome email
  await sendWelcomeEmail(email, user.fullname);
 
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Email verified successfully! You can now login."));
});



export {
    registerUser,verifyOTP

}


