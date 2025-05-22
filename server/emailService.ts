
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (!process.env.SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY environment variable not set');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export const sendConfirmationEmail = async (email: string, fullName: string) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_VERIFIED_SENDER || 'your-verified@email.com',
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

  await sgMail.send(msg);
};
