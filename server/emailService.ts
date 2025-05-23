
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

const sendAdminNotification = async (userEmail: string, fullName: string) => {
  try {
    const msg = {
      from: `"ExpenseWise" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: 'New ExpenseWise Sign Up!',
      text: `New user signed up: ${fullName} (${userEmail})`,
      html: `
        <h2>New User Registration</h2>
        <p>A new user has signed up for ExpenseWise:</p>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${userEmail}</li>
        </ul>
      `
    };

    const info = await transporter.sendMail(msg);
    console.log('Admin notification sent:', info.messageId);
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    // Don't throw - we don't want to interrupt the signup process
  }
};

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
    
    // Send notification to admin
    await sendAdminNotification(email, fullName);
    
    return info;
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    throw new Error(`Failed to send confirmation email: ${error.message}`);
  }
};
