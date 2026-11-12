'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Fades sections up into view as the visitor scrolls, and cascades the cards in
 * any grid one after another. It works on the existing markup, so no page needs
 * changing: every <section> inside <main> except the first one (the page hero)
 * is animated.
 *
 * Content is fully visible without JavaScript and for visitors who prefer
 * reduced motion; the hidden starting state only exists once this has run.
 */
const STAGGER_MS = 80;
const MAX_STAGGER_MS = 480;

function isGrid(el: Element) {
  const display = getComputedStyle(el).display;
  return (display === 'grid' || display === 'inline-grid') && el.children.length > 1;
}

/** The content wrapper of a section (skips absolutely positioned background layers). */
function contentRoot(section: Element): Element {
  const candidates = Array.from(section.children).filter(
    (c) => getComputedStyle(c).position !== 'absolute' && c.tagName !== 'svg',
  );
  return candidates.length === 1 ? candidates[0] : section;
}

function collectTargets(): HTMLElement[] {
  const main = document.querySelector('main');
  if (!main) return [];
  const sections = Array.from(main.querySelectorAll('section')).filter(
    // only top-level sections, never a section nested in another
    (s) => !s.parentElement?.closest('main section'),
  );
  const targets: HTMLElement[] = [];

  sections.slice(1).forEach((section) => {
    const root = contentRoot(section);
    Array.from(root.children).forEach((block) => {
      const el = block as HTMLElement;
      if (isGrid(el)) {
        Array.from(el.children).forEach((card, i) => {
          const c = card as HTMLElement;
          c.style.setProperty('--reveal-delay', `${Math.min(i * STAGGER_MS, MAX_STAGGER_MS)}ms`);
          targets.push(c);
        });
      } else {
        targets.push(el);
      }
    });
  });
  return targets;
}

export function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const targets = collectTargets();
    const viewportH = window.innerHeight;

    targets.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      el.dataset.reveal = '';
      // Anything already on screen when the page opens is shown straight away.
      if (top < viewportH * 0.92) el.classList.add('is-revealed');
    });
    document.documentElement.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    targets.forEach((el) => {
      if (!el.classList.contains('is-revealed')) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
