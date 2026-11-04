export interface Promotion {
  id: string;
  active: boolean;
  label: string;           // short badge text e.g. "NGO Discount"
  headline: string;        // main message
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
    id: 'ngo-discount-2024',
    active: true,
    label: 'NGO Special',
    headline: 'Non-profit & community organizations receive 15% off all AV services.',
    cta: { text: 'Claim Discount', href: '/request-quote?promo=ngo' },
    color: 'gold',
  },
  {
    id: 'winter-event-2024',
    active: true,
    label: 'Holiday Offer',
    headline: 'Book your holiday event production before Dec 31 and save 10%.',
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
