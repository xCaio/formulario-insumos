import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  console.log('Recebido no backend:', req.body);

  const { insumo, quantidade, pa, pn, setor, centroCusto, observacao } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Nova Solicitação de Insumos',
    text: `
Solicitação de insumos:

Tipo de Insumo: ${insumo}
Quantidade: ${quantidade}
PA: ${pa}
PN: ${pn}
Setor: ${setor}
Centro de Custo: ${centroCusto}
Observações: ${observacao}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'E-mail enviado!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json({ error: 'Falha no envio de e-mail' });
  }
}
