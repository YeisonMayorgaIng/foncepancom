import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { nombre, correo, mensaje } = req.body;

  const data = {
    from: 'web@foncepan.com',
    to: 'foncepansas@gmail.com',
    subject: 'desde el formulario de contacto Foncepan.com',
    text: mensaje,
    html: `
      <b>From:</b> ${nombre} <br />
      <b>Message:</b> ${mensaje} <br />
      <b>email:</b> ${correo}
    `,
  };
  try {
    const response = await resend.emails.send(data);
    console.log(response);
    res.status(200).send('Mensaje enviado');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al enviar');
  }
};

export default handler;
