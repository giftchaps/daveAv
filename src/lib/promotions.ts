export interface Promotion {
  id: string;
  active: boolean;
  label: string;           // short badge text e.g. "Non-Profit Pricing"
  highlight?: string;      // the offer in a few characters, shown as a badge e.g. "20% OFF"
  headline: string;        // main message
  shortHeadline?: string;  // optional shorter message for phones
  cta?: { text: string; href: string };
  expiresAt?: string;      // ISO date string — banner auto-hides after this date
  color?: 'red' | 'gold' | 'blue'; // accent color
}

// ─── ADD / EDIT PROMOTIONS HERE ────────────────────────────────────────────
// Set active: false to hide a promotion without deleting it.
// Set expiresAt to automatically stop showing it after a date.
// ───────────────────────────────────────────────────────────────────────────
export const PROMOTIONS: Promotion[] = [
  {
    id: 'nonprofit-20',
    active: true,
    label: 'Non-Profit Pricing',
    highlight: '20% OFF',
    headline: 'Registered non-profits save 20% on all AV services.',
    shortHeadline: 'For non-profits on all AV services.',
    cta: { text: 'Claim your discount', href: '/request-quote?promo=ngo' },
    color: 'red',
  },
  {
    id: 'winter-event-2024',
    active: true,
    label: 'Holiday Offer',
    headline: 'Book your holiday event production before Dec 31 and save 10%.',
    shortHeadline: 'Book holiday events by Dec 31, save 10%.',
    cta: { text: 'Book Now', href: '/request-quote?promo=holiday' },
    expiresAt: '2024-12-31',
    color: 'red',
  },
];

export function getActivePromotions(): Promotion[] {
  const now = new Date();
  return PROMOTIONS.filter((p) => {
    if (!p.active) return false;
    if (p.expiresAt && new Date(p.expiresAt) < now) return false;
    return true;
  });
}

/** Finds the promotion whose call-to-action link carries ?promo=<code>. */
export function getPromotionByCode(code: string): Promotion | undefined {
  if (!code) return undefined;
  return PROMOTIONS.find((p) => new URLSearchParams(p.cta?.href.split('?')[1] ?? '').get('promo') === code);
}
