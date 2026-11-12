'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  ArrowRight,
  Check,
  Clapperboard,
  Ellipsis,
  MonitorSpeaker,
  Package,
  Presentation,
  Tag,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { PROJECT_TYPES } from '@/lib/forms';
import { getPromotionByCode } from '@/lib/promotions';
import { useFormSubmit, formValues, inputClass, textareaClass, labelClass } from './useFormSubmit';
import {
  ErrorBanner,
  FieldError,
  Honeypot,
  PrivacyNote,
  SendingLabel,
  SuccessPanel,
  submitClass,
} from './FormParts';

const TYPE_DETAILS: Record<string, { icon: LucideIcon; hint: string }> = {
  installation: { icon: MonitorSpeaker, hint: 'Meeting rooms, venues, homes' },
  'event-production': { icon: Presentation, hint: 'Conferences, galas, live shows' },
  'service-support': { icon: Wrench, hint: 'Repairs, upgrades, maintenance' },
  'video-production': { icon: Clapperboard, hint: 'Filming, streaming, editing' },
  'equipment-sales': { icon: Package, hint: 'Gear sourced to fit your space' },
  other: { icon: Ellipsis, hint: 'Something else? Tell us below' },
};

/** Reads ?type=<service-slug> and ?promo=<code> from the URL, then renders the form. */
export function QuoteFormWithParams() {
  const params = useSearchParams();
  const typeSlug = params.get('type') || '';
  const initialType = PROJECT_TYPES.find((t) => t.slug === typeSlug)?.label ?? '';
  const code = (params.get('promo') || '').toLowerCase().replace(/[^a-z0-9-]/g, '');
  const promo = getPromotionByCode(code);
  const promoActive = promo && promo.active && (!promo.expiresAt || new Date(promo.expiresAt) >= new Date());
  return (
    <QuoteForm
      key={`${initialType}|${code}`}
      initialType={initialType}
      promoCode={promoActive ? code : ''}
      promoLabel={promoActive ? promo.label : ''}
      promoHeadline={promoActive ? promo.headline : ''}
    />
  );
}

function Step({ n, title, hint, children }: { n: number; title: string; hint?: string; children: ReactNode }) {
  return (
    <fieldset className="px-6 py-8 sm:px-10 sm:py-10 border-t border-slate-100 first:border-t-0">
      <legend className="sr-only">{title}</legend>
      <div className="flex items-start gap-4 mb-7">
        <span
          className="flex-shrink-0 w-9 h-9 rounded-full bg-[#071E55] text-white font-['Barlow_Condensed'] font-bold text-lg flex items-center justify-center"
          aria-hidden="true"
        >
          {n}
        </span>
        <div>
          <h2 className="font-['Barlow'] font-semibold text-[#071E55] text-xl leading-tight">{title}</h2>
          {hint && <p className="font-['Barlow'] text-slate-500 text-[15px] mt-1">{hint}</p>}
        </div>
      </div>
      {children}
    </fieldset>
  );
}

export function QuoteForm({
  initialType = '',
  promoCode = '',
  promoLabel = '',
  promoHeadline = '',
}: {
  initialType?: string;
  promoCode?: string;
  promoLabel?: string;
  promoHeadline?: string;
}) {
  const { status, error, fields, sentTo, submit, reset, markStarted } = useFormSubmit('quote');
  const [types, setTypes] = useState<string[]>(initialType ? [initialType] : []);
  const sending = status === 'sending';

  const toggle = (label: string) =>
    setTypes((cur) => (cur.includes(label) ? cur.filter((t) => t !== label) : [...cur, label]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const ok = await submit(formValues(form));
    if (ok) {
      form.reset();
      setTypes(initialType ? [initialType] : []);
    } else {
      requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
    }
  }

  if (status === 'sent') {
    return (
      <SuccessPanel
        title="Quote request received!"
        body="Thanks for thinking of A/V DAVEY. We review every request within one business day and will be in touch to talk through the details."
        sentTo={sentTo}
        onReset={reset}
        resetLabel="Submit another request"
      />
    );
  }

  const invalid = (name: string) => Boolean(fields[name]);
  const describedBy = (name: string) => (fields[name] ? `quote-${name}-error` : undefined);
  const req = (
    <span className="text-[#B2081B]" aria-hidden="true">
      {' '}*
    </span>
  );

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onFocus={markStarted}
      aria-busy={sending}
      className="relative rounded-2xl bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(7,30,85,0.04),0_24px_60px_-28px_rgba(7,30,85,0.25)]"
    >
      <Honeypot />
      <input type="hidden" name="promo" value={promoCode} />

      {promoLabel && (
        <div className="flex items-start gap-3 rounded-t-2xl bg-[#FFF8E6] border-b border-[#c8960c]/25 px-6 sm:px-10 py-4">
          <Tag size={17} className="text-[#a87b06] flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="font-['Barlow'] text-[15px] text-[#5b4300]">
            <span className="font-semibold">{promoLabel}:</span> {promoHeadline} We&apos;ll apply it to your quote.
          </p>
        </div>
      )}

      {/* 1. What you need */}
      <Step n={1} title="What can we help with?" hint="Choose everything that applies. You can pick more than one.">
        <div
          role="group"
          aria-label="Project types"
          aria-describedby={describedBy('projectType')}
          className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {PROJECT_TYPES.map((type, i) => {
            const Icon = TYPE_DETAILS[type.slug].icon;
            const on = types.includes(type.label);
            return (
              <label
                key={type.slug}
                className={`group relative flex items-start gap-3.5 rounded-xl border p-4 cursor-pointer select-none transition-all duration-150 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-[#1265B7]/20 ${
                  on
                    ? 'border-[#1265B7] bg-[#1265B7]/[0.05] shadow-[0_0_0_1px_#1265B7]'
                    : invalid('projectType')
                      ? 'border-[#B2081B]/50 hover:border-[#B2081B]'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  name="projectType"
                  value={type.label}
                  checked={on}
                  onChange={() => toggle(type.label)}
                  aria-invalid={i === 0 && invalid('projectType') ? true : undefined}
                  className="sr-only"
                />
                <span
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    on ? 'bg-[#1265B7] text-white' : 'bg-slate-100 text-[#071E55] group-hover:bg-slate-200/70'
                  }`}
                  aria-hidden="true"
                >
                  <Icon size={19} strokeWidth={1.9} />
                </span>
                <span className="min-w-0 pr-5">
                  <span className="block font-['Barlow'] font-semibold text-[15px] leading-snug text-[#071E55]">
                    {type.label}
                  </span>
                  <span className="block font-['Barlow'] text-[13px] leading-snug text-slate-500 mt-0.5">
                    {TYPE_DETAILS[type.slug].hint}
                  </span>
                </span>
                <span
                  className={`absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                    on ? 'bg-[#1265B7] text-white scale-100' : 'border border-slate-300 text-transparent scale-90'
                  }`}
                  aria-hidden="true"
                >
                  <Check size={12} strokeWidth={3} />
                </span>
              </label>
            );
          })}
        </div>
        <FieldError id="quote-projectType-error" message={fields.projectType} />
        <p className="sr-only" aria-live="polite">
          {types.length ? `Selected: ${types.join(', ')}` : 'No project type selected'}
        </p>
      </Step>

      {/* 2. Project details */}
      <Step n={2} title="Tell us about the project" hint="A few details help us give you an accurate quote.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="quote-location" className={labelClass}>Location</label>
            <input id="quote-location" name="location" type="text" maxLength={120}
              className={inputClass(false)} placeholder="City, State" />
          </div>
          <div>
            <label htmlFor="quote-date" className={labelClass}>Date or timeline</label>
            <input id="quote-date" name="date" type="text" maxLength={120}
              className={inputClass(false)} placeholder="e.g. March 2027, or ASAP" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="quote-description" className={labelClass}>Project description{req}</label>
            <textarea id="quote-description" name="description" required rows={6} maxLength={5000}
              aria-invalid={invalid('description')} aria-describedby={describedBy('description')}
              className={textareaClass(invalid('description'))}
              placeholder="The space or event, what you have now, what you'd like to achieve, and a rough budget if you know it." />
            <FieldError id="quote-description-error" message={fields.description} />
          </div>
        </div>
      </Step>

      {/* 3. Contact */}
      <Step n={3} title="How can we reach you?" hint="We reply within one business day.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="quote-name" className={labelClass}>Full name{req}</label>
            <input id="quote-name" name="name" type="text" required autoComplete="name" maxLength={100}
              aria-invalid={invalid('name')} aria-describedby={describedBy('name')}
              className={inputClass(invalid('name'))} />
            <FieldError id="quote-name-error" message={fields.name} />
          </div>
          <div>
            <label htmlFor="quote-company" className={labelClass}>
              Company or organization <span className="font-normal text-slate-400">(optional)</span>
            </label>
            <input id="quote-company" name="company" type="text" autoComplete="organization" maxLength={120}
              className={inputClass(false)} />
          </div>
          <div>
            <label htmlFor="quote-email" className={labelClass}>Email{req}</label>
            <input id="quote-email" name="email" type="email" required autoComplete="email" maxLength={254}
              aria-invalid={invalid('email')} aria-describedby={describedBy('email')}
              className={inputClass(invalid('email'))} />
            <FieldError id="quote-email-error" message={fields.email} />
          </div>
          <div>
            <label htmlFor="quote-phone" className={labelClass}>
              Phone <span className="font-normal text-slate-400">(optional)</span>
            </label>
            <input id="quote-phone" name="phone" type="tel" autoComplete="tel" maxLength={40}
              aria-invalid={invalid('phone')} aria-describedby={describedBy('phone')}
              className={inputClass(invalid('phone'))} />
            <FieldError id="quote-phone-error" message={fields.phone} />
          </div>
        </div>
      </Step>

      {/* Submit */}
      <div className="px-6 pb-8 sm:px-10 sm:pb-10 space-y-5">
        <ErrorBanner message={error} />
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-slate-100">
          <PrivacyNote />
          <button type="submit" disabled={sending} className={submitClass}>
            {sending ? (
              <SendingLabel label="Sending..." />
            ) : (
              <>
                Request my quote
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
