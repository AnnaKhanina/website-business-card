const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
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
        to: process.env.MAILTRAP_URL,
        subject: 'Contact Form Submission - Beerking',
        html: `<p>Name: ${firstName} ${lastName}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
      });

      res
        .status(200)
        .json({ success: true, message: 'Повідомлення успішно надіслано' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({
        success: false,
        message: 'Щось пішло не так, спробуйте пізніше.',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
