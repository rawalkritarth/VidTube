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
      
      <div style="background: linear-gradient(to right, #FF0000, #cc0000); color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">VidTube Networks</h1>
        <p style="margin: 5px 0 0;">Email Verification Process</p>
      </div>

      <div style="padding: 30px; color: #333333;">
        <p style="font-size: 16px;">Hello,</p>
        <p style="font-size: 15px; line-height: 1.5;">Thank you for registering an account with our media streaming platform. To ensure security and complete your registration profile, please confirm your identity by submitting the authorization code below into your open registration window.</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; background-color: #ffe5e5; color: #cc0000; font-size: 30px; font-weight: bold; padding: 12px 24px; border-radius: 8px; letter-spacing: 4px;">
            ${verificationToken}
          </span>
        </div>

        <p style="font-size: 14px; color: #555; line-height: 1.5;">This security parameter is valid for a limited active session window. Please safeguard this code appropriately and do not share it with anyone.</p>
        <p style="font-size: 14px; line-height: 1.5;">If you did not initiate this request, you can safely disregard this automated statement and no adjustments will be made to your account details.</p>
      </div>

      <div style="text-align: center; background-color: #f1f1f1; padding: 20px; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0;">
        <p style="margin: 0 0 5px 0; font-weight: bold;">VidTube Networks Inc.</p>
        <p style="margin: 0 0 10px 0; color: #999;">Kathmandu, Bagmati, Nepal</p>
        <p style="margin: 0; font-size: 11px; color: #aaa;">This transmission is an automated transactional notice sent regarding account adjustments. Replies are unmonitored.</p>
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
      
      <div style="background: linear-gradient(to right, #FF0000, #cc0000); color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Welcome to VidTube, ${userName}!</h1>
      </div>

      <div style="padding: 30px; color: #333333;">
        <p style="font-size: 16px;">Hi ${userName},</p>
        <p style="font-size: 15px; line-height: 1.5;">Your user account profile has been successfully generated within our system network. We are excited to welcome you to our growing community of media enthusiasts and content creators.</p>
        
        <p style="font-size: 15px; margin-top: 20px;">With your active platform access dashboard, you can manage your assets directly:</p>
        <ul style="font-size: 14px; color: #444; line-height: 1.6;">
          <li>Upload digital media assets and compile stream configurations.</li>
          <li>Subscribe to independent platform provider channels and stay updated.</li>
          <li>Organize personal curated collection lists and high-definition playlists.</li>
        </ul>

        <p style="margin-top: 30px; font-size: 14px; line-height: 1.5;">If you have any questions or need technical support setting up your initial stream, please visit our documentation dashboard.</p>
        <p style="margin-top: 20px;">Best regards,<br><strong>VidTube Administration Team</strong></p>
      </div>

      <div style="text-align: center; background-color: #f1f1f1; padding: 20px; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0;">
        <p style="margin: 0 0 5px 0; font-weight: bold;">VidTube Networks Inc.</p>
        <p style="margin: 0 0 10px 0; color: #999;">Kathmandu, Bagmati, Nepal</p>
        <p style="margin: 0; font-size: 11px; color: #aaa;">You are receiving this system notice because you registered for an account profile link.</p>
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
  <div style="background: linear-gradient(to right, #FF0000, #cc0000); padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">VidTube Account Administration</h1>
  </div>
  <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 5px 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 1px solid #e0e0e0; border-top: none;">
    <p>Hello,</p>
    <p>A system access safety token configuration has been requested for your security profile. If this modification wasn't requested by you, you can safely discard this notification and your security settings will remain unaffected.</p>
    <p>To establish a new functional login profile key credential, navigate using the encrypted access button portal layout provided below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${resetURL}" style="background-color: #FF0000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Modify Password Profile</a>
    </div>
    <p style="font-size: 13px; color: #666;">This verification target path link will remain completely operational within your current active system transaction lifecycle window. Please act promptly.</p>
    <p>Best regards,<br>VidTube Administration Team</p>
  </div>
  
  <div style="text-align: center; padding: 20px; font-size: 12px; color: #777;">
    <p style="margin: 0 0 5px 0; font-weight: bold;">VidTube Networks Inc.</p>
    <p style="margin: 0 0 10px 0; color: #999;">Kathmandu, Bagmati, Nepal</p>
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
<body style="margin: 0; font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
    
    <div style="background: linear-gradient(to right, #FF0000, #cc0000); color: white; padding: 20px; text-align: center;">
      <h1 style="margin: 0;">Password Reset Successful</h1>
      <p style="margin: 5px 0 0;">VidTube Security Update</p>
    </div>

    <div style="padding: 30px; color: #333333; text-align: center;">
      <div style="margin: 10px 0 25px 0;">
        <span style="display: inline-block; background-color: #e6ffe6; color: #008800; font-size: 40px; padding: 15px 25px; border-radius: 50%; font-weight: bold;">✓</span>
      </div>
      <p style="font-size: 16px; text-align: left;">Hello,</p>
      <p style="font-size: 15px; text-align: left; line-height: 1.5;">This notice confirms that your profile access security key configurations have been successfully modified. Your updated credentials are now operational within the VidTube centralized authentication gateway system.</p>
      
      <p style="font-size: 14px; color: #666; background-color: #fdfdfd; border: 1px dashed #e0e0e0; padding: 12px; border-radius: 6px; margin: 25px 0; text-align: left;">
        <strong>Security Reminder:</strong> If you did not personally perform or authorize this update to your account credential configurations, please immediately contact the VidTube system response desk to lock and protect your database assets.
      </p>

      <p style="margin-top: 30px; text-align: left;">Best regards,<br><strong>VidTube Administration Team</strong></p>
    </div>

    <div style="text-align: center; background-color: #f1f1f1; padding: 20px; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0;">
      <p style="margin: 0 0 5px 0; font-weight: bold;">VidTube Networks Inc.</p>
      <p style="margin: 0 0 10px 0; color: #999;">Kathmandu, Bagmati, Nepal</p>
      <p style="margin: 0; font-size: 11px; color: #aaa;">This transaction safety confirmation was generated automatically. Replies directly to this link address are unmonitored.</p>
    </div>
  </div>
</body>
</html>
`;