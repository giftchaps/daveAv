'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Loader2, Lock, Phone } from 'lucide-react';
import { PHONE, PHONE_HREF } from '@/lib/constants';

/** Hidden field real people never see or fill in; bots usually do. */
export function Honeypot() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
      <label htmlFor="website">Leave this field empty</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
    </div>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 font-['Barlow'] text-sm text-[#B2081B]">
      {message}
    </p>
  );
}

export function ErrorBanner({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div role="alert" className="flex items-start gap-3 border border-[#B2081B]/30 border-l-4 border-l-[#B2081B] bg-[#FDF2F3] px-4 py-3">
      <AlertCircle size={18} className="text-[#B2081B] flex-shrink-0 mt-0.5" aria-hidden="true" />
      <p className="font-['Barlow'] text-sm text-[#5C0A13]">{message}</p>
    </div>
  );
}

export function SendingLabel({ label }: { label: string }) {
  return (
    <>
      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
      {label}
    </>
  );
}

export function SuccessPanel({
  title,
  body,
  sentTo,
  onReset,
  resetLabel,
}: {
  title: string;
  body: string;
  sentTo: string;
  onReset: () => void;
  resetLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Bring the confirmation into view and move focus to it for screen readers.
    ref.current?.focus({ preventScroll: true });
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="status"
      aria-live="polite"
      className="bg-[#071E55] text-white border-t-4 border-[#B2081B] p-8 lg:p-10 scroll-mt-32 outline-none"
    >
      <CheckCircle2 size={40} className="text-[#B9DDFF] mb-4" aria-hidden="true" />
      <h2 className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[1.05] mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
        {title}
      </h2>
      <p className="font-['Barlow'] text-white/90 text-base lg:text-lg leading-relaxed mb-2 max-w-xl">{body}</p>
      {sentTo && (
        <p className="font-['Barlow'] text-white/75 text-sm mb-6">
          A confirmation is on its way to <span className="text-white font-semibold">{sentTo}</span>.
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center gap-2 bg-[#B2081B] text-white px-6 py-3 font-['Barlow'] font-bold uppercase tracking-wide text-sm hover:bg-[#8e0615] transition-colors"
        >
          <Phone size={15} aria-hidden="true" /> Need us sooner? {PHONE}
        </a>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center border border-white/40 text-white px-6 py-3 font-['Barlow'] font-bold uppercase tracking-wide text-sm hover:bg-white/10 transition-colors"
        >
          {resetLabel}
        </button>
      </div>
    </div>
  );
}

export function PrivacyNote() {
  return (
    <p className="font-['Barlow'] text-xs text-slate-500">
      <Lock size={12} className="inline-block align-[-1px] mr-1.5" aria-hidden="true" />
      We only use your details to respond to you. See our{' '}
      <Link href="/privacy-policy" className="underline hover:text-[#1265B7]">
        Privacy Policy
      </Link>
      .
    </p>
  );
}
