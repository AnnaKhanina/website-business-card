const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

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
        from: process.env.MAILTRAP_URL,
        to: email,
        subject: 'Дякую за підписку!',
        text: 'Ви успішно підписалися на наших новинах.',
      });

      res.status(200).json({ success: true, message: 'Підписка успішна!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res
        .status(500)
        .json({ success: false, message: 'Помилка при надсиланні пошти.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
