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
    <p id={id} className="mt-1.5 flex items-center gap-1.5 font-['Barlow'] text-sm text-[#B2081B]">
      {message}
    </p>
  );
}

export function ErrorBanner({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div role="alert" className="flex items-start gap-3 rounded-lg border border-[#B2081B]/20 bg-[#FDF2F3] px-4 py-3">
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
      className="relative overflow-hidden rounded-2xl bg-[#071E55] text-white p-8 lg:p-12 scroll-mt-32 outline-none shadow-[0_24px_60px_-20px_rgba(7,30,85,0.45)]"
    >
      <div className="w-14 h-14 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center mb-6"><CheckCircle2 size={28} className="text-[#7CE0A8]" aria-hidden="true" /></div>
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
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B2081B] text-white px-6 py-3 font-['Barlow'] font-semibold text-[15px] hover:bg-[#8e0615] transition-colors"
        >
          <Phone size={15} aria-hidden="true" /> Need us sooner? {PHONE}
        </a>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center rounded-lg border border-white/25 text-white px-6 py-3 font-['Barlow'] font-semibold text-[15px] hover:bg-white/10 transition-colors"
        >
          {resetLabel}
        </button>
      </div>
    </div>
  );
}

export function PrivacyNote() {
  return (
    <p className="font-['Barlow'] text-[13px] text-slate-500">
      <Lock size={12} className="inline-block align-[-1px] mr-1.5" aria-hidden="true" />
      We only use your details to respond to you. See our{' '}
      <Link href="/privacy-policy" className="underline hover:text-[#1265B7]">
        Privacy Policy
      </Link>
      .
    </p>
  );
}

/** Primary submit button used by both forms. */
export const submitClass =
  "group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#B2081B] text-white h-14 px-9 font-['Barlow'] font-semibold text-[16px] tracking-wide shadow-[0_10px_24px_-10px_rgba(178,8,27,0.7)] hover:bg-[#9a0717] hover:shadow-[0_14px_30px_-10px_rgba(178,8,27,0.8)] active:translate-y-px transition-all disabled:opacity-70 disabled:cursor-wait";
