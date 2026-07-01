import sgMail from "@sendgrid/mail";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./EmailTemplate.js";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const SENDER_EMAIL = process.env.SENDER_EMAIL;

export const sendVerificationEmail = async (toEmail, otp) => {
  try {
    await sgMail.send({
      to: toEmail,
      from: SENDER_EMAIL,
      subject: "VidTube — Verify Your Email",
      text: `Hello, thank you for registering. Please confirm your account profile using your verification code: ${otp}`, // Adds text/plain fallback
      html: VERIFICATION_EMAIL_TEMPLATE(otp),
    });
  } catch (error) {
    console.log(error.response?.body || error);
  }
};

export const sendWelcomeEmail = async (toEmail, userName) => {
  try {
    await sgMail.send({
      to: toEmail,
      from: SENDER_EMAIL,
      subject: "Welcome to VidTube!",
      text: `Hi ${userName}, welcome to VidTube! Your account profile has been generated successfully.`,
      html: WELCOME_EMAIL_TEMPLATE(userName),
    });
  } catch (error) {
    console.log(error.response?.body || error);
  }
};

export const sendPasswordResetEmail = async (toEmail, resetURL) => {
  try {
    // CRITICAL FOR TESTING: If resetURL points to localhost, bypass the botnet filter 
    // by using a safe string placeholder or an active domain for your mail-tester test.
    const safeURL = resetURL.includes("localhost") ? "https://example.com/reset" : resetURL;

    await sgMail.send({
      to: toEmail,
      from: SENDER_EMAIL,
      subject: "VidTube — Reset Your Password",
      text: `Hello, a password reset request was made. Navigate to this address to update your security parameters: ${safeURL}`,
      html: PASSWORD_RESET_REQUEST_TEMPLATE(safeURL),
    });
  } catch (error) {
    console.log(error.response?.body || error);
  }
};

export const sendPasswordResetSuccessEmail = async (toEmail) => {
  try {
    await sgMail.send({
      to: toEmail,
      from: SENDER_EMAIL,
      subject: "VidTube — Password Reset Successful",
      text: "Hello, this notice confirms that your profile access security credentials have been successfully updated.",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });
  } catch (error) {
    console.log(error.response?.body || error);
  }
};


