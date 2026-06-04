import sgMail from "@sendgrid/mail";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./EmailTemplate.js";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const SENDER_EMAIL = process.env.SENDER_EMAIL; // your verified SendGrid sender email

export const sendVerificationEmail = async (toEmail, otp) => {
 try {
  await sgMail.send({
    to: toEmail,
    from: SENDER_EMAIL,
    subject: "VidTube — Verify Your Email",
    html: VERIFICATION_EMAIL_TEMPLATE(otp),
  });
} catch (error) {
  console.log(error.response?.body || error);
}
};

export const sendWelcomeEmail = async (toEmail, userName) => {
  await sgMail.send({
    to: toEmail,
    from: SENDER_EMAIL,
    subject: "Welcome to VidTube!",
    html: WELCOME_EMAIL_TEMPLATE(userName),
  });
};

export const sendPasswordResetEmail = async (toEmail, resetURL) => {
  await sgMail.send({
    to: toEmail,
    from: SENDER_EMAIL,
    subject: "VidTube — Reset Your Password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE(resetURL),
  });
};

export const sendPasswordResetSuccessEmail = async (toEmail) => {
  await sgMail.send({
    to: toEmail,
    from: SENDER_EMAIL,
    subject: "VidTube — Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  });
};