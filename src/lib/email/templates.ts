// Branded HTML + plain-text emails for the website forms.
// Email clients ignore most modern CSS, so these use tables and inline styles
// with web-safe fallbacks. Every piece of user input goes through esc().

import { BRAND, EMAIL, FACEBOOK_URL, PHONE, PHONE_HREF, SITE_URL } from '@/lib/constants';
import type { Submission } from '@/lib/forms';

const HEAD_FONT = "'Barlow Condensed','Arial Narrow',Arial,Helvetica,sans-serif";
const BODY_FONT = "'Barlow',Arial,Helvetica,sans-serif";

export interface RenderedEmail {
  subject: string;
  html: string;
  text: string;
}

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function multiline(value: string): string {
  return esc(value).replace(/\r?\n/g, '<br>');
}

function firstName(name: string): string {
  return name.split(/\s+/)[0] || name;
}

function telHref(phone: string): string {
  return 'tel:' + phone.replace(/[^0-9+]/g, '');
}

export function formatSubmittedAt(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(date);
}

function siteHost(): string {
  return SITE_URL.replace(/^https?:\/\//, '');
}

// ─── Building blocks ────────────────────────────────────────────────────────

function layout(opts: { preheader: string; badge: string; body: string; footerNote: string }): string {
  const logo = `${SITE_URL}/images/logo-avdavey.png`;
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>A/V DAVEY</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  body{margin:0;padding:0;width:100%!important;-webkit-text-size-adjust:100%;}
  a{color:${BRAND.blue};}
  @media (max-width:620px){
    .container{width:100%!important;}
    .px{padding-left:22px!important;padding-right:22px!important;}
    .stack{display:block!important;width:100%!important;}
    .btn-gap{height:10px!important;display:block!important;width:100%!important;}
    .h1{font-size:28px!important;line-height:32px!important;}
    .label-col{width:110px!important;}
    .logo{width:120px!important;}
    .badge{font-size:10px!important;letter-spacing:1.2px!important;padding:6px 8px!important;}
  }
</style>
</head>
<body style="margin:0;padding:0;background:#E9EDF5;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">${esc(opts.preheader)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#E9EDF5;">
<tr><td align="center" style="padding:28px 12px;">
  <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:#FFFFFF;border-radius:6px;overflow:hidden;box-shadow:0 2px 10px rgba(7,30,85,0.10);">
    <!-- Header -->
    <tr><td style="background:#FFFFFF;padding:22px 32px 20px;" class="px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td valign="middle"><a href="${SITE_URL}" style="text-decoration:none;"><img src="${logo}" width="160" height="67" alt="A/V DAVEY" class="logo" style="display:block;border:0;width:160px;height:auto;"></a></td>
        <td valign="middle" align="right">
          <span class="badge" style="display:inline-block;white-space:nowrap;background:${BRAND.navy};color:#FFFFFF;font-family:${HEAD_FONT};font-weight:700;font-size:12px;letter-spacing:2px;text-transform:uppercase;padding:7px 12px;border-radius:2px;">${esc(opts.badge)}</span>
        </td>
      </tr></table>
    </td></tr>
    <tr><td style="background:${BRAND.navy};height:6px;line-height:6px;font-size:0;">&nbsp;</td></tr>
    <tr><td style="background:${BRAND.red};height:4px;line-height:4px;font-size:0;">&nbsp;</td></tr>
    ${opts.body}
    <!-- Footer -->
    <tr><td style="background:${BRAND.navy};padding:26px 32px;" class="px">
      <p style="margin:0 0 6px;font-family:${HEAD_FONT};font-weight:800;font-size:18px;letter-spacing:1px;text-transform:uppercase;color:#FFFFFF;">First to Show. Last to Go.</p>
      <p style="margin:0 0 14px;font-family:${BODY_FONT};font-size:13px;line-height:20px;color:${BRAND.sky};">Quality Equipment &middot; Personal Service &middot; Guaranteed Results</p>
      <p style="margin:0;font-family:${BODY_FONT};font-size:13px;line-height:21px;color:#FFFFFF;">
        A/V DAVEY &middot; Bridgeport, CT &middot; Since 1989<br>
        <a href="${PHONE_HREF}" style="color:#FFFFFF;text-decoration:none;">${PHONE}</a> &middot;
        <a href="mailto:${EMAIL}" style="color:#FFFFFF;text-decoration:none;">${EMAIL}</a><br>
        <a href="${SITE_URL}" style="color:${BRAND.sky};">${siteHost()}</a> &middot;
        <a href="${FACEBOOK_URL}" style="color:${BRAND.sky};">Facebook</a>
      </p>
      <p style="margin:16px 0 0;font-family:${BODY_FONT};font-size:11px;line-height:17px;color:#8FA3C8;">${opts.footerNote}</p>
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}

function intro(eyebrow: string, heading: string, sub: string): string {
  return `<tr><td style="padding:32px 32px 8px;" class="px">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="width:28px;border-top:3px solid ${BRAND.red};font-size:0;line-height:0;">&nbsp;</td>
      <td style="padding-left:10px;font-family:${HEAD_FONT};font-weight:700;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:${BRAND.red};">${esc(eyebrow)}</td>
    </tr></table>
    <h1 class="h1" style="margin:12px 0 10px;font-family:${HEAD_FONT};font-weight:800;font-size:32px;line-height:36px;text-transform:uppercase;color:${BRAND.navy};">${heading}</h1>
    <p style="margin:0;font-family:${BODY_FONT};font-size:15px;line-height:24px;color:${BRAND.slate};">${sub}</p>
  </td></tr>`;
}

function button(href: string, label: string, variant: 'red' | 'navy' | 'outline'): string {
  const bg = variant === 'red' ? BRAND.red : variant === 'navy' ? BRAND.navy : '#FFFFFF';
  const color = variant === 'outline' ? BRAND.navy : '#FFFFFF';
  const border = variant === 'outline' ? BRAND.navy : bg;
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" class="stack"><tr>
    <td style="background:${bg};border:2px solid ${border};border-radius:3px;">
      <a href="${href}" style="display:block;padding:12px 22px;font-family:${HEAD_FONT};font-weight:700;font-size:15px;letter-spacing:1px;text-transform:uppercase;color:${color};text-decoration:none;text-align:center;">${label}</a>
    </td></tr></table>`;
}

function buttonRow(buttons: string[]): string {
  const cells = buttons
    .map((b, i) => (i === 0 ? `<td class="stack">${b}</td>` : `<td class="btn-gap" style="width:12px;">&nbsp;</td><td class="stack">${b}</td>`))
    .join('');
  return `<tr><td style="padding:18px 32px 6px;" class="px">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>${cells}</tr></table>
  </td></tr>`;
}

function detailsTable(title: string, rows: [string, string][]): string {
  const body = rows
    .filter(([, v]) => v)
    .map(
      ([label, value], i) => `<tr>
      <td class="label-col" valign="top" style="width:140px;padding:11px 14px;${i ? `border-top:1px solid ${BRAND.line};` : ''}font-family:${HEAD_FONT};font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase;color:${BRAND.navy};">${esc(label)}</td>
      <td valign="top" style="padding:11px 14px;${i ? `border-top:1px solid ${BRAND.line};` : ''}font-family:${BODY_FONT};font-size:15px;line-height:22px;color:#1F2937;word-break:break-word;">${value}</td>
    </tr>`,
    )
    .join('');
  return `<tr><td style="padding:22px 32px 4px;" class="px">
    <p style="margin:0 0 10px;font-family:${HEAD_FONT};font-weight:700;font-size:15px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.navy};">${esc(title)}</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.mist};border:1px solid ${BRAND.line};border-top:3px solid ${BRAND.navy};">${body}</table>
  </td></tr>`;
}

function messageBlock(title: string, text: string): string {
  return `<tr><td style="padding:20px 32px 8px;" class="px">
    <p style="margin:0 0 10px;font-family:${HEAD_FONT};font-weight:700;font-size:15px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.navy};">${esc(title)}</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="border-left:4px solid ${BRAND.red};background:#FFFFFF;padding:4px 0 4px 16px;font-family:${BODY_FONT};font-size:15px;line-height:24px;color:#1F2937;">${multiline(text)}</td>
    </tr></table>
  </td></tr>`;
}

function spacer(h: number): string {
  return `<tr><td style="height:${h}px;line-height:${h}px;font-size:0;">&nbsp;</td></tr>`;
}

// ─── Field helpers ──────────────────────────────────────────────────────────

function linkedEmail(email: string): string {
  return `<a href="mailto:${esc(email)}" style="color:${BRAND.blue};text-decoration:underline;">${esc(email)}</a>`;
}

function linkedPhone(phone: string): string {
  return phone ? `<a href="${telHref(phone)}" style="color:${BRAND.blue};text-decoration:none;">${esc(phone)}</a>` : '';
}

function promoLabel(promo: string): string {
  if (!promo) return '';
  const known: Record<string, string> = { ngo: 'NGO Special (non-profit discount)', holiday: 'Holiday Offer' };
  return esc(known[promo.toLowerCase()] || promo);
}

function submissionRows(s: Submission, forTeam: boolean): [string, string][] {
  const rows: [string, string][] = [
    ['Name', esc(s.name)],
    ['Company', esc(s.company)],
    ['Email', forTeam ? linkedEmail(s.email) : esc(s.email)],
    ['Phone', forTeam ? linkedPhone(s.phone) : esc(s.phone)],
  ];
  if (s.formType === 'quote') {
    rows.push(
      ['Project type', esc(s.projectType)],
      ['Location', esc(s.location)],
      ['Timeline', esc(s.date)],
      ['Promotion', promoLabel(s.promo)],
    );
  }
  return rows;
}

function textBlock(s: Submission): string {
  const lines: string[] = [`Name: ${s.name}`];
  if (s.company) lines.push(`Company: ${s.company}`);
  lines.push(`Email: ${s.email}`);
  if (s.phone) lines.push(`Phone: ${s.phone}`);
  if (s.formType === 'quote') {
    lines.push(`Project type: ${s.projectType}`);
    if (s.location) lines.push(`Location: ${s.location}`);
    if (s.date) lines.push(`Timeline: ${s.date}`);
    if (s.promo) lines.push(`Promotion: ${s.promo}`);
    lines.push('', 'Project description:', s.description);
  } else {
    lines.push('', 'Message:', s.message);
  }
  return lines.join('\n');
}

// ─── Email to the A/V DAVEY team ────────────────────────────────────────────

export function teamNotification(s: Submission, submittedAt: Date): RenderedEmail {
  const isQuote = s.formType === 'quote';
  const when = formatSubmittedAt(submittedAt);
  const who = s.company ? `${s.name} (${s.company})` : s.name;
  const subject = isQuote
    ? `New quote request: ${s.projectType} from ${who}`
    : `New website message from ${who}`;

  const replySubject = encodeURIComponent(
    isQuote ? `Re: Your ${s.projectType} quote request — A/V DAVEY` : 'Re: Your message to A/V DAVEY',
  );
  const buttons = [button(`mailto:${encodeURIComponent(s.email)}?subject=${replySubject}`, `Reply to ${esc(firstName(s.name))}`, 'red')];
  if (s.phone) buttons.push(button(telHref(s.phone), `Call ${esc(s.phone)}`, 'outline'));

  const body =
    intro(
      isQuote ? `Quote request · ${s.projectType}` : 'Website message',
      isQuote ? `New quote request from ${esc(firstName(s.name))}` : `New message from ${esc(firstName(s.name))}`,
      `Submitted ${esc(when)} through the ${isQuote ? 'Request a Quote' : 'Contact'} form. Hit reply to answer ${esc(firstName(s.name))} directly.`,
    ) +
    buttonRow(buttons) +
    detailsTable(isQuote ? 'Contact & project' : 'Contact details', submissionRows(s, true)) +
    messageBlock(isQuote ? 'Project description' : 'Message', isQuote ? s.description : s.message) +
    spacer(26);

  const html = layout({
    preheader: isQuote ? `${s.projectType}: ${s.description.slice(0, 110)}` : s.message.slice(0, 130),
    badge: isQuote ? 'New Quote Request' : 'New Message',
    body,
    footerNote: `Sent automatically from the ${isQuote ? 'quote request' : 'contact'} form on ${siteHost()}.`,
  });

  const text = [
    isQuote ? `NEW QUOTE REQUEST — ${s.projectType}` : 'NEW WEBSITE MESSAGE',
    `Submitted ${when}`,
    '',
    textBlock(s),
    '',
    '—',
    `Reply to this email to answer ${firstName(s.name)} directly.`,
  ].join('\n');

  return { subject, html, text };
}

// ─── Confirmation to the person who filled in the form ─────────────────────

export function customerConfirmation(s: Submission): RenderedEmail {
  const isQuote = s.formType === 'quote';
  const name = esc(firstName(s.name));
  const subject = isQuote ? 'We received your quote request — A/V DAVEY' : 'Thanks for reaching out — A/V DAVEY';

  const steps = [
    'We review your request within one business day',
    'We may schedule a brief call or site visit',
    'We prepare a detailed proposal',
    'We walk you through every step',
  ];
  const stepsHtml = `<tr><td style="padding:22px 32px 4px;" class="px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.navy};border-radius:4px;">
      <tr><td style="padding:22px 24px 8px;font-family:${HEAD_FONT};font-weight:700;font-size:16px;letter-spacing:1.5px;text-transform:uppercase;color:#FFFFFF;">What happens next</td></tr>
      ${steps
        .map(
          (step, i) => `<tr><td style="padding:6px 24px ${i === steps.length - 1 ? 22 : 6}px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td valign="top" style="width:34px;font-family:${HEAD_FONT};font-weight:800;font-size:17px;color:#FF5A6A;">0${i + 1}</td>
          <td valign="top" style="font-family:${BODY_FONT};font-size:15px;line-height:22px;color:#E6ECF7;">${step}</td>
        </tr></table>
      </td></tr>`,
        )
        .join('')}
    </table>
  </td></tr>`;

  const callout = `<tr><td style="padding:22px 32px 4px;" class="px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BRAND.line};border-left:4px solid ${BRAND.blue};background:#FFFFFF;">
      <tr><td style="padding:16px 18px;font-family:${BODY_FONT};font-size:15px;line-height:23px;color:${BRAND.slate};">
        <strong style="font-family:${HEAD_FONT};font-size:16px;letter-spacing:1px;text-transform:uppercase;color:${BRAND.navy};">Need us sooner?</strong><br>
        Call <a href="${PHONE_HREF}" style="color:${BRAND.red};font-weight:700;text-decoration:none;">${PHONE}</a> and you'll reach someone who knows AV.
      </td></tr>
    </table>
  </td></tr>`;

  const body =
    intro(
      isQuote ? 'Quote request received' : 'Message received',
      `Thanks, ${name}.<br>We've got it from here.`,
      isQuote
        ? `Your ${esc(s.projectType.toLowerCase())} request is with Davey and the team. We typically respond within one business day, usually sooner.`
        : `Your message is with Davey and the team. We typically respond within one business day, usually sooner.`,
    ) +
    (isQuote ? stepsHtml : '') +
    detailsTable('Here’s what you sent us', submissionRows(s, false)) +
    messageBlock(isQuote ? 'Project description' : 'Your message', isQuote ? s.description : s.message) +
    callout +
    buttonRow([button(SITE_URL + '/projects', 'See our recent work', 'navy')]) +
    spacer(28);

  const html = layout({
    preheader: isQuote
      ? 'Your quote request is in. Here is what happens next.'
      : 'Your message is in. We typically respond within one business day.',
    badge: isQuote ? 'Quote Request' : 'Message Received',
    body,
    footerNote: `You're receiving this one-time confirmation because you submitted a form on ${siteHost()}. Questions? Just reply to this email.`,
  });

  const text = [
    `Thanks, ${firstName(s.name)}. We've got it from here.`,
    '',
    isQuote
      ? `Your ${s.projectType.toLowerCase()} request is with Davey and the team. We typically respond within one business day, usually sooner.`
      : 'Your message is with Davey and the team. We typically respond within one business day, usually sooner.',
    '',
    ...(isQuote ? ['What happens next:', ...steps.map((st, i) => `  0${i + 1}  ${st}`), ''] : []),
    'Here is what you sent us:',
    textBlock(s),
    '',
    `Need us sooner? Call ${PHONE}.`,
    '',
    'A/V DAVEY · Bridgeport, CT · Since 1989',
    `${PHONE} · ${EMAIL} · ${SITE_URL}`,
  ].join('\n');

  return { subject, html, text };
}
