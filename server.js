const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });

  try {
    await transport.sendMail({
      from: email,
      to: '6d21c2fc0b-bfc600@inbox.mailtrap.io',
      subject: 'Contact Form Submission - Beerking',
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    });

    res
      .status(200)
      .json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong, please try again later.',
    });
  }
});

module.exports = app;
