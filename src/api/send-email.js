const nodemailer = require('nodemailer');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Méthode non autorisée
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Vous pouvez utiliser un autre service SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'sarahvarin95@gmail.com',
    subject: `Message de ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: 'Email envoyé' });
  });
};
