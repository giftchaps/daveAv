import type { NextRequest } from 'next/server';
import { validateSubmission } from '@/lib/forms';
import { customerConfirmation, teamNotification } from '@/lib/email/templates';
import { fromAddress, getTransport, mailConfigured, sendConfirmations, teamInbox } from '@/lib/email/mailer';
import { PHONE } from '@/lib/constants';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 20_000;
const MIN_FILL_MS = 2_500; // humans take longer than this to fill a form
const RATE_WINDOW_MS = 10 * 60_000;
const RATE_MAX = 5;

// Best-effort, per-instance rate limit. Serverless instances are short-lived,
// so this stops bursts from one client rather than acting as a hard quota.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) hits.clear();
  return recent.length > RATE_MAX;
}

function clientIp(req: NextRequest): string {
  return (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
}

function sameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin');
  if (!origin) return true; // non-browser clients; other checks still apply
  try {
    const host = req.headers.get('x-forwarded-host') || req.headers.get('host');
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

const json = (body: unknown, status = 200) => Response.json(body, { status });

export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return json({ ok: false, error: 'Forbidden.' }, 403);

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: 'Your message is too long.' }, 413);

  let input: Record<string, unknown>;
  try {
    input = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // Spam traps: a hidden field real people never fill in, and a minimum fill time.
  // Bots get a normal-looking success so they don't learn to adapt.
  const elapsed = Number(input.elapsedMs);
  if (input.website || (Number.isFinite(elapsed) && elapsed < MIN_FILL_MS)) {
    return json({ ok: true });
  }

  if (rateLimited(clientIp(req))) {
    return json({ ok: false, error: `Too many messages in a short time. Please try again later or call us at ${PHONE}.` }, 429);
  }

  const result = validateSubmission(input);
  if (!result.ok) return json({ ok: false, error: 'Please check the highlighted fields.', fields: result.errors }, 422);
  const data = result.data;

  if (!mailConfigured()) {
    console.error('[contact] SMTP is not configured — set SMTP_HOST, SMTP_USER and SMTP_PASS.');
    return json({ ok: false, error: `Our form is temporarily unavailable. Please email us or call ${PHONE}.` }, 503);
  }

  const transport = getTransport();
  const submittedAt = new Date();
  const team = teamNotification(data, submittedAt);

  try {
    await transport.sendMail({
      from: fromAddress(),
      to: teamInbox(),
      bcc: process.env.MAIL_BCC || undefined,
      replyTo: { name: data.name, address: data.email },
      subject: team.subject,
      html: team.html,
      text: team.text,
    });
  } catch (err) {
    console.error('[contact] Failed to send team notification:', err);
    return json({ ok: false, error: `We couldn't send your message just now. Please try again, or call us at ${PHONE}.` }, 502);
  }

  if (sendConfirmations()) {
    const confirmation = customerConfirmation(data);
    try {
      await transport.sendMail({
        from: fromAddress(),
        to: { name: data.name, address: data.email },
        replyTo: teamInbox(),
        subject: confirmation.subject,
        html: confirmation.html,
        text: confirmation.text,
      });
    } catch (err) {
      // The team already has the request, so the visitor still sees success.
      console.error('[contact] Failed to send confirmation email:', err);
    }
  }

  return json({ ok: true });
}
