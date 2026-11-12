'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const SHOW_AFTER_PX = 600;
const R = 21;
const CIRCUMFERENCE = 2 * Math.PI * R;

/** Floating "back to top" button with a ring that fills as you scroll down the page. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setVisible(y > SHOW_AFTER_PX);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    // Move keyboard focus back to the top of the page as well.
    document.querySelector<HTMLElement>('header a, header button')?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`group fixed z-40 right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-[#071E55] text-white shadow-[0_6px_20px_rgba(7,30,85,0.35)] hover:bg-[#B2081B] hover:shadow-[0_8px_24px_rgba(178,8,27,0.4)] transition-all duration-300 ease-out flex items-center justify-center ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-90 pointer-events-none'
      }`}
    >
      {/* Scroll progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r={R} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
        <circle
          cx="24"
          cy="24"
          r={R}
          fill="none"
          stroke="#E8394B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          className="transition-[stroke] duration-300 group-hover:stroke-white"
        />
      </svg>
      <ArrowUp size={20} strokeWidth={2.4} className="relative transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
    </button>
  );
}
