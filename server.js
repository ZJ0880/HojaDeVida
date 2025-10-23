const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'miguelzj0909@gmail.com',
      pass: 'cddx lweo ytfr naci' // Usa siempre contraseña de aplicación de Gmail
    }
  });

  try {
    await transporter.sendMail({
      from: 'miguelzj0909@gmail.com',       // Tu propio correo
      to: 'miguelzj0909@gmail.com',         // Correo de destino (tú mismo)
      replyTo: email,                       // Permite responder directamente al usuario
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    });
    res.json({ ok: true });
  } catch (error) {
    console.error('Nodemailer error:', error);
    res.status(500).json({ ok: false, error: 'Error al enviar el correo' });
  }
});

app.listen(3000, () => console.log('Servidor iniciado en http://localhost:3000'));
