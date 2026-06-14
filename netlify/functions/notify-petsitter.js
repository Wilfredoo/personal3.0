const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (_) {
    return { statusCode: 400, body: 'Bad Request' };
  }

  const {
    petNames, startDate, endDate,
    primary, primaryPhone,
    backup, backupPhone,
    address, landmark, notes,
    ownerChoice,
    emergencyB64,
    taskB64,
  } = data;

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_APP_PASSWORD,
    },
  });

  const html = `
    <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:24px;border:2px solid #000">
      <h2 style="margin:0 0 20px;text-transform:uppercase;letter-spacing:0.05em">New Pet Sit Submission</h2>
      <p style="margin:0 0 6px"><strong>Owner choice:</strong> ${ownerChoice}</p>
      <hr style="border:1px solid #000;margin:20px 0"/>
      <p style="margin:0 0 6px"><strong>Pet(s):</strong> ${petNames || '—'}</p>
      <p style="margin:0 0 6px"><strong>Start:</strong> ${startDate || '—'}</p>
      <p style="margin:0 0 6px"><strong>End:</strong> ${endDate || '—'}</p>
      <hr style="border:1px solid #000;margin:20px 0"/>
      <p style="margin:0 0 6px"><strong>Primary contact:</strong> ${primary || '—'} · ${primaryPhone || '—'}</p>
      <p style="margin:0 0 6px"><strong>Backup contact:</strong> ${backup || '—'} · ${backupPhone || '—'}</p>
      <hr style="border:1px solid #000;margin:20px 0"/>
      <p style="margin:0 0 6px"><strong>Address:</strong> ${address || '—'}</p>
      <p style="margin:0 0 6px"><strong>Landmark:</strong> ${landmark || '—'}</p>
      <p style="margin:0 0 6px"><strong>Notes:</strong> ${notes || '—'}</p>
    </div>
  `;

  const attachments = [];
  if (emergencyB64) {
    attachments.push({
      filename: `emergency-card-${petNames || 'pet'}.pdf`,
      content: Buffer.from(emergencyB64, 'base64'),
      contentType: 'application/pdf',
    });
  }
  if (taskB64) {
    attachments.push({
      filename: `task-checklist-${petNames || 'pet'}.pdf`,
      content: Buffer.from(taskB64, 'base64'),
      contentType: 'application/pdf',
    });
  }

  try {
    await transporter.sendMail({
      from: `"Pet Sitter Form" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      subject: `[Pet sit] ${petNames || 'New submission'} — ${ownerChoice}`,
      html,
      attachments,
    });
    return { statusCode: 200, body: 'OK' };
  } catch (err) {
    console.error('Zoho SMTP error:', err.message);
    return { statusCode: 500, body: err.message };
  }
};
