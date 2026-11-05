// Nodemailer transport, configured entirely from environment variables so no
// credentials live in the code. See .env.example for the full list.

import nodemailer, { type Transporter } from 'nodemailer';
import { EMAIL } from '@/lib/constants';

let cached: Transporter | null = null;

export function mailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export function getTransport(): Transporter {
  if (cached) return cached;
  const port = Number(process.env.SMTP_PORT || 587);
  cached = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    // true for port 465 (implicit TLS); false for 587 (STARTTLS, upgraded automatically)
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return cached;
}

/** Address the emails are sent from, e.g. "A/V DAVEY Website <website@avdavey.com>". */
export function fromAddress(): string {
  return process.env.MAIL_FROM || `"A/V DAVEY Website" <${process.env.SMTP_USER}>`;
}

/** Where new form submissions are delivered. Comma-separate for several people. */
export function teamInbox(): string {
  return process.env.MAIL_TO || EMAIL;
}

export function sendConfirmations(): boolean {
  return process.env.MAIL_SEND_CONFIRMATION !== 'false';
}
