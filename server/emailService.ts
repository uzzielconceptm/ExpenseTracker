
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export const sendConfirmationEmail = async (email: string, fullName: string) => {
  try {
    // Verify SMTP connection
    await transporter.verify();
    
    const msg = {
      from: `"ExpenseWise" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to ExpenseWise!',
      text: 'Thanks for subscribing! This confirms your email.',
      html: `
        <h1>Welcome to ExpenseWise${fullName ? `, ${fullName}` : ''}!</h1>
        <p>Thank you for signing up for early access to ExpenseWise. We're excited to have you join us!</p>
        <p>This email confirms your subscription to our updates.</p>
      `
    };

    const info = await transporter.sendMail(msg);
    console.log('Confirmation email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    throw new Error(`Failed to send confirmation email: ${error.message}`);
  }
};
