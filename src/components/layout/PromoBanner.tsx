'use client';

import React, { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { X, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Promotion } from '@/lib/promotions';

const COLOR_MAP = {
  red:  { bg: 'bg-[#B2081B]',    badge: 'bg-white/20 text-white',      text: 'text-white',      cta: 'bg-white text-[#B2081B] hover:bg-white/90' },
  gold: { bg: 'bg-[#c8960c]',    badge: 'bg-white/20 text-white',      text: 'text-white',      cta: 'bg-white text-[#c8960c] hover:bg-white/90' },
  blue: { bg: 'bg-[#1265B7]',    badge: 'bg-white/20 text-white',      text: 'text-white',      cta: 'bg-white text-[#1265B7] hover:bg-white/90' },
} as const;

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
  const colors = COLOR_MAP[promo.color ?? 'blue'];

  return (
    <div
      className={`${colors.bg} relative overflow-hidden`}
      role="region"
      aria-label="Promotion banner"
    >
      {/* Subtle shimmer line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-2.5 min-h-[42px]">

          {/* Left: multi-promo prev arrow */}
          {promotions.length > 1 && (
            <button
              onClick={prev}
              className="hidden sm:flex items-center justify-center w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 transition-colors flex-shrink-0"
              aria-label="Previous promotion"
            >
              <ChevronLeft size={13} className="text-white" />
            </button>
          )}

          {/* Center content */}
          <div className="flex flex-1 items-center justify-center gap-2.5 flex-wrap min-w-0">
            {/* Badge */}
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-['Barlow'] font-bold uppercase tracking-widest flex-shrink-0 ${colors.badge}`}>
              <Tag size={9} aria-hidden="true" />
              {promo.label}
            </span>

            {/* Headline */}
            <p className={`font-['Barlow'] text-sm font-medium ${colors.text} text-center leading-tight`}>
              {promo.headline}
            </p>

            {/* CTA */}
            {promo.cta && (
              <Link
                href={promo.cta.href}
                className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-['Barlow'] font-bold uppercase tracking-wide rounded-sm transition-colors flex-shrink-0 ${colors.cta}`}
              >
                {promo.cta.text}
                <ArrowRight size={11} aria-hidden="true" />
              </Link>
            )}
          </div>

          {/* Right: next arrow + dismiss */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {promotions.length > 1 && (
              <>
                <button
                  onClick={next}
                  className="hidden sm:flex items-center justify-center w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 transition-colors"
                  aria-label="Next promotion"
                >
                  <ChevronRight size={13} className="text-white" />
                </button>
                <span className="hidden sm:block font-['Barlow'] text-[10px] text-white/60 w-7 text-center">
                  {current + 1}/{promotions.length}
                </span>
              </>
            )}
            <button
              onClick={dismiss}
              className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Dismiss promotion"
            >
              <X size={14} className="text-white/80" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
