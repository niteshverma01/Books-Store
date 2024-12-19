import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Your OAuth2 credentials
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = 'YOUR_REFRESH_TOKEN'; // You get this after authenticating

// Create an OAuth2 client
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Set the refresh token
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Generate an access token
async function generateAccessToken() {
  const { token } = await oauth2Client.getAccessToken();
  return token;
}

// Send email using nodemailer
export async function sendEmail(senderEmail, message) {
  try {
    const accessToken = await generateAccessToken();

    // Create a transporter using OAuth2
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'niteshvrma02@gmail.com', // Your email (sender)
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    // Email options
    const mailOptions = {
      from: senderEmail,  // Sender's email from the contact form
      to: 'niteshvrma02@gmail.com', // Your email (receiver)
      subject: 'Contact Form Message', // Subject of the email
      text: message, // Message from the form
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log('Error sending email:', error);
  }
}
