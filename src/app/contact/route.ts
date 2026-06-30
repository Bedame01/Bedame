import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';

async function sendMail({ subject, html, text }: { subject: string; html: string; text?: string }) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL || siteConfig.email;

  if (!host || !port || !user || !pass) {
    throw new Error('SMTP configuration is missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS.');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const info = await transporter.sendMail({
    from: `${siteConfig.name} <${user}>`,
    to,
    subject,
    text: text || html.replace(/<[^>]+>/g, ''),
    html,
  });

  return info;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body || !body.type) return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });

    if (body.type === 'contact') {
      const { name, email, subject, message } = body;
      if (!name || !email || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

      const html = `
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || '—'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;

      await sendMail({ subject: `New message from ${name}`, html });
      return NextResponse.json({ ok: true });
    }

    if (body.type === 'subscribe') {
      const { email } = body;
      if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

      const html = `
        <h2>Newsletter subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
      `;

      await sendMail({ subject: `New newsletter subscriber`, html });
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: 'Unknown type' }, { status: 400 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
