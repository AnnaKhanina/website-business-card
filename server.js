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
      // user: process.env.MAILTRAP_USER,
      // pass: process.env.MAILTRAP_PASSWORD,
      user: '9895b2fec7b806',
      pass: '231603bc7596ac',
    },
  });

  try {
    await transport.sendMail({
      from: email,
      to: 'https://mailtrap.io/inboxes/2831124/messages',
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
