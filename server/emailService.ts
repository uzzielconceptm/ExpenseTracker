
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  },
  debug: true // Enable debug logs
});

export const sendConfirmationEmail = async (email: string, fullName: string) => {
  try {
    // Verify connection configuration
    await transporter.verify();
    
    const msg = {
      from: `"ExpenseWise" <${process.env.GMAIL_USER}>`,
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

    const info = await transporter.sendMail(msg);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Detailed email error:', error);
    throw new Error('Failed to send confirmation email');
  }
};
