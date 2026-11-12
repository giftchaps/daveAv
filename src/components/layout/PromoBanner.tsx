'use client';

import React, { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { X, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { Promotion } from '@/lib/promotions';

// Each theme: bar background, the highlight badge, and the CTA link.
const THEMES = {
  red: {
    bar: 'bg-[#B2081B]',
    badge: 'bg-white text-[#B2081B]',
    cta: 'text-white decoration-white/40 hover:decoration-white',
  },
  blue: {
    bar: 'bg-[#1265B7]',
    badge: 'bg-white text-[#1265B7]',
    cta: 'text-white decoration-white/40 hover:decoration-white',
  },
  gold: {
    bar: 'bg-[#c8960c]',
    badge: 'bg-[#071E55] text-white',
    cta: 'text-white decoration-white/40 hover:decoration-white',
  },
} as const;

// A faint diagonal texture so the bar reads as a deliberate band, not a flat block.
const TEXTURE: React.CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(135deg, rgba(255,255,255,0.045) 0 2px, transparent 2px 14px), linear-gradient(90deg, rgba(0,0,0,0.10), transparent 30%, transparent 70%, rgba(0,0,0,0.10))',
};

const noopSubscribe = () => () => {};

interface PromoBannerProps {
  promotions: Promotion[];
}

export function PromoBanner({ promotions }: PromoBannerProps) {
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const key = `promo-dismissed-${promotions.map((p) => p.id).join(',')}`;

  // Read the per-session dismissal from sessionStorage. On the server (and during
  // hydration) this returns 'server', so the banner only appears in the browser.
  const stored = useSyncExternalStore(
    noopSubscribe,
    () => {
      try {
        return sessionStorage.getItem(key) === '1' ? 'dismissed' : 'show';
      } catch {
        return 'show';
      }
    },
    () => 'server',
  );

  if (stored !== 'show' || dismissed || promotions.length === 0) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(key, '1');
    } catch {
      // storage unavailable (private mode); dismissal lasts for this page view
    }
  };

  const prev = () => setCurrent((c) => (c - 1 + promotions.length) % promotions.length);
  const next = () => setCurrent((c) => (c + 1) % promotions.length);

  const promo = promotions[current];
  const theme = THEMES[promo.color ?? 'red'];

  return (
    <div className={`${theme.bar} relative text-white`} style={TEXTURE} role="region" aria-label="Current offer">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-4 min-h-[44px] py-1.5">
          {promotions.length > 1 && (
            <button
              onClick={prev}
              className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/15 transition-colors flex-shrink-0"
              aria-label="Previous offer"
            >
              <ChevronLeft size={15} />
            </button>
          )}

          {/* Offer */}
          <div className="flex flex-1 items-center justify-start sm:justify-center gap-2.5 sm:gap-4 min-w-0">
            {/* Label (wider screens) */}
            <span className="hidden lg:inline-flex items-center gap-1.5 font-['Barlow_Condensed'] font-bold uppercase tracking-[0.16em] text-[12px] text-white/85 flex-shrink-0">
              <Star size={11} className="fill-[#FFC93C] text-[#FFC93C]" aria-hidden="true" />
              {promo.label}
            </span>
            <span className="hidden lg:block w-px h-5 bg-white/25 flex-shrink-0" aria-hidden="true" />

            {/* Highlight badge */}
            {promo.highlight && (
              <span
                className={`inline-flex items-center font-['Barlow_Condensed'] font-extrabold uppercase leading-none tracking-wide text-[15px] sm:text-[17px] px-2 sm:px-2.5 py-1 rounded-[3px] shadow-sm flex-shrink-0 ${theme.badge}`}
              >
                {promo.highlight}
              </span>
            )}

            {/* Message (on phones the whole message is the link) */}
            <p className="font-['Barlow'] font-semibold text-[13px] sm:text-[15px] leading-snug min-w-0">
              {promo.cta ? (
                <Link href={promo.cta.href} className="sm:hidden underline underline-offset-[3px] decoration-white/40">
                  {promo.shortHeadline ?? promo.headline}
                </Link>
              ) : (
                <span className="sm:hidden">{promo.shortHeadline ?? promo.headline}</span>
              )}
              <span className="hidden sm:inline">{promo.headline}</span>
            </p>

            {/* CTA */}
            {promo.cta && (
              <Link
                href={promo.cta.href}
                className={`group hidden sm:inline-flex items-center gap-1.5 font-['Barlow_Condensed'] font-bold uppercase tracking-[0.08em] text-[14px] underline underline-offset-4 decoration-2 transition-colors flex-shrink-0 ${theme.cta}`}
              >
                {promo.cta.text}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {promotions.length > 1 && (
              <>
                <button
                  onClick={next}
                  className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/15 transition-colors"
                  aria-label="Next offer"
                >
                  <ChevronRight size={15} />
                </button>
                <span className="hidden sm:block font-['Barlow'] text-[11px] text-white/60 w-7 text-center">
                  {current + 1}/{promotions.length}
                </span>
              </>
            )}
            <button
              onClick={dismiss}
              className="flex items-center justify-center w-8 h-8 rounded-full text-white/75 hover:text-white hover:bg-white/15 transition-colors"
              aria-label="Dismiss offer"
            >
              <X size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
