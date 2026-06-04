export const VERIFICATION_EMAIL_TEMPLATE = (verificationToken) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Verify Your Email</title>
  </head>
  <body style="margin: 0; font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
      
      <!-- Header -->
      <div style="background: linear-gradient(to right, #FF0000, #cc0000); color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">VidTube</h1>
        <p style="margin: 5px 0 0;">Email Verification</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">
        <p style="font-size: 16px;">Hi there,</p>
        <p style="font-size: 15px;">Thanks for signing up! Please use the verification code below to complete your registration:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; background-color: #ffe5e5; color: #cc0000; font-size: 30px; font-weight: bold; padding: 12px 24px; border-radius: 8px; letter-spacing: 4px;">
            ${verificationToken}
          </span>
        </div>

        <p style="font-size: 14px; color: #555;">This code is valid for <strong>10 minutes</strong>. Please do not share this code with anyone.</p>
        <p style="font-size: 14px;">If you didn't request this email, you can safely ignore it.</p>
      </div>

      <!-- Footer -->
      <div style="text-align: center; background-color: #f1f1f1; padding: 15px; font-size: 12px; color: #777;">
        <p style="margin: 0;">&copy; ${new Date().getFullYear()} VidTube. All rights reserved.</p>
        <p style="margin: 5px 0 0;">This is an automated message. Please do not reply.</p>
      </div>
    </div>
  </body>
  </html>
`;

export const WELCOME_EMAIL_TEMPLATE = (userName) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Welcome to VidTube</title>
  </head>
  <body style="margin: 0; font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
      
      <!-- Header -->
      <div style="background: linear-gradient(to right, #FF0000, #cc0000); color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Welcome to VidTube, ${userName}!</h1>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">
        <p style="font-size: 16px;">Hi ${userName},</p>
        <p style="font-size: 15px;">We're excited to have you join VidTube! Your account has been created successfully.</p>
        
        <p style="font-size: 15px;">With VidTube, you can:</p>
        <ul style="font-size: 14px; color: #444;">
          <li>Upload and share your videos</li>
          <li>Subscribe to your favourite channels</li>
          <li>Like, comment and build playlists</li>
          <li>Grow your own channel</li>
        </ul>

        <p style="font-size: 14px;">Need help? Contact us at 
          <a href="mailto:support@vidtube.com" style="color: #FF0000;">support@vidtube.com</a>.
        </p>

        <p style="margin-top: 30px;">Cheers,<br><strong>VidTube Team</strong></p>
      </div>

      <!-- Footer -->
      <div style="text-align: center; background-color: #f0f0f0; padding: 15px; font-size: 12px; color: #777;">
        <p style="margin: 0;">&copy; ${new Date().getFullYear()} VidTube. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = (resetURL) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #FF0000, #cc0000); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">VidTube — Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${resetURL}" style="background-color: #FF0000; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in <strong>1 hour</strong> for security reasons.</p>
    <p>Best regards,<br>VidTube Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #FF0000, #cc0000); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your VidTube password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #FF0000; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately at <a href="mailto:support@vidtube.com" style="color:#FF0000;">support@vidtube.com</a>.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Best regards,<br>VidTube Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;