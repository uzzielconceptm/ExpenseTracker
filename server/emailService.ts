
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendConfirmationEmail = async (email: string, fullName: string) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Welcome to ExpenseWise!',
    html: `
      <h1>Welcome to ExpenseWise, ${fullName}!</h1>
      <p>Thank you for signing up for early access to ExpenseWise. We're excited to have you join us!</p>
      <p>We'll keep you updated on our launch and send you exclusive early access information soon.</p>
      <br/>
      <p>Best regards,</p>
      <p>The ExpenseWise Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
};
