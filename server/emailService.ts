
import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD // Use App Password, not regular Gmail password
  }
});

export const sendConfirmationEmail = async (email: string, fullName: string) => {
  const msg = {
    from: process.env.GMAIL_USER,
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

  await transporter.sendMail(msg);
};
