const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Método no permitido' });
  }

  const { name, email, message } = req.body;

  // Validación
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Todos los campos son requeridos' });
  }

  // Configurar transporter con variables de entorno
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f4f4f4;">
          <div style="background: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #6366f1; margin-top: 0;">Nuevo mensaje desde tu portafolio</h2>
            <hr style="border: none; border-top: 2px solid #6366f1; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-left: 4px solid #6366f1;">
              <p style="margin: 0;"><strong>Mensaje:</strong></p>
              <p style="margin-top: 10px; line-height: 1.6;">${message}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              Este mensaje fue enviado desde tu portafolio web
            </p>
          </div>
        </div>
      `,
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`
    });

    return res.status(200).json({ ok: true, message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ ok: false, error: 'Error al enviar el correo', details: error.message });
  }
};
