// Shared form definitions and validation for the contact and quote forms.
// Used by the client components (for instant feedback) and the API route
// (the source of truth — never trust the browser).

export const PROJECT_TYPES = [
  { slug: 'installation', label: 'Installation & Integration' },
  { slug: 'event-production', label: 'Event Production & Staging' },
  { slug: 'service-support', label: 'Service & Support' },
  { slug: 'video-production', label: 'Video Production & Streaming' },
  { slug: 'equipment-sales', label: 'Equipment Sales' },
  { slug: 'other', label: 'Other' },
] as const;

export const PROJECT_TYPE_LABELS: string[] = PROJECT_TYPES.map((t) => t.label);

export type FormType = 'contact' | 'quote';

export interface ContactSubmission {
  formType: 'contact';
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export interface QuoteSubmission {
  formType: 'quote';
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  date: string;
  description: string;
  promo: string;
}

export type Submission = ContactSubmission | QuoteSubmission;

export type FieldErrors = Partial<Record<string, string>>;

const LIMITS: Record<string, number> = {
  name: 100,
  company: 120,
  email: 254,
  phone: 40,
  message: 5000,
  description: 5000,
  location: 120,
  date: 120,
  projectType: 60,
  promo: 40,
};

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  // Strip control characters (keep newlines and tabs), trim, and cap length.
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);
}

function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ');
}

export function validateSubmission(
  input: Record<string, unknown>,
): { ok: true; data: Submission } | { ok: false; errors: FieldErrors } {
  const formType = input.formType === 'quote' ? 'quote' : 'contact';
  const errors: FieldErrors = {};

  const name = oneLine(clean(input.name, LIMITS.name));
  const company = oneLine(clean(input.company, LIMITS.company));
  const email = oneLine(clean(input.email, LIMITS.email));
  const phone = oneLine(clean(input.phone, LIMITS.phone));

  if (name.length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
  if (phone && !/^[0-9+().\-\s x ext]{7,40}$/i.test(phone)) errors.phone = 'Please enter a valid phone number.';

  if (formType === 'contact') {
    const message = clean(input.message, LIMITS.message);
    if (message.length < 10) errors.message = 'Please tell us a little more (at least 10 characters).';
    if (Object.keys(errors).length) return { ok: false, errors };
    return { ok: true, data: { formType, name, company, email, phone, message } };
  }

  const projectType = oneLine(clean(input.projectType, LIMITS.projectType));
  const location = oneLine(clean(input.location, LIMITS.location));
  const date = oneLine(clean(input.date, LIMITS.date));
  const description = clean(input.description, LIMITS.description);
  const promo = oneLine(clean(input.promo, LIMITS.promo)).replace(/[^a-z0-9-]/gi, '');

  if (!PROJECT_TYPE_LABELS.includes(projectType)) errors.projectType = 'Please choose a project type.';
  if (description.length < 10) errors.description = 'Please describe your project (at least 10 characters).';

  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    data: { formType, name, company, email, phone, projectType, location, date, description, promo },
  };
}
