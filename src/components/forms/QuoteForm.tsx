'use client';

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Tag } from 'lucide-react';
import { PROJECT_TYPES } from '@/lib/forms';
import { getPromotionByCode } from '@/lib/promotions';
import { useFormSubmit, formValues, inputClass } from './useFormSubmit';
import { ErrorBanner, FieldError, Honeypot, PrivacyNote, SendingLabel, SuccessPanel } from './FormParts';

const label = "block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5";
const legend =
  "font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg mb-4 pb-2 border-b border-[#DDE3EE] w-full";

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
  const [projectType, setProjectType] = useState(initialType);
  const sending = status === 'sending';

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const ok = await submit(formValues(form));
    if (ok) {
      form.reset();
      setProjectType(initialType);
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

  return (
    <form className="space-y-6" noValidate onSubmit={onSubmit} onFocus={markStarted} aria-busy={sending}>
      <Honeypot />
      <input type="hidden" name="promo" value={promoCode} />

      {promoLabel && (
        <div className="flex items-start gap-3 bg-[#FFF8E6] border border-[#c8960c]/40 border-l-4 border-l-[#c8960c] px-4 py-3">
          <Tag size={16} className="text-[#c8960c] flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="font-['Barlow'] text-sm text-[#5b4300]">
            <span className="font-bold uppercase tracking-wide">{promoLabel}:</span> {promoHeadline} We&apos;ll apply it to
            your quote.
          </p>
        </div>
      )}

      {/* Contact info */}
      <fieldset>
        <legend className={legend}>Your Information</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="quote-name" className={label}>
              Full Name <span className="text-[#B2081B]" aria-hidden="true">*</span>
            </label>
            <input id="quote-name" name="name" type="text" required autoComplete="name" maxLength={100}
              aria-invalid={invalid('name')} aria-describedby={describedBy('name')}
              className={inputClass(invalid('name'))} />
            <FieldError id="quote-name-error" message={fields.name} />
          </div>
          <div>
            <label htmlFor="quote-company" className={label}>Company</label>
            <input id="quote-company" name="company" type="text" autoComplete="organization" maxLength={120}
              className={inputClass(false)} />
          </div>
          <div>
            <label htmlFor="quote-email" className={label}>
              Email <span className="text-[#B2081B]" aria-hidden="true">*</span>
            </label>
            <input id="quote-email" name="email" type="email" required autoComplete="email" maxLength={254}
              aria-invalid={invalid('email')} aria-describedby={describedBy('email')}
              className={inputClass(invalid('email'))} />
            <FieldError id="quote-email-error" message={fields.email} />
          </div>
          <div>
            <label htmlFor="quote-phone" className={label}>Phone</label>
            <input id="quote-phone" name="phone" type="tel" autoComplete="tel" maxLength={40}
              aria-invalid={invalid('phone')} aria-describedby={describedBy('phone')}
              className={inputClass(invalid('phone'))} />
            <FieldError id="quote-phone-error" message={fields.phone} />
          </div>
        </div>
      </fieldset>

      {/* Project details */}
      <fieldset>
        <legend className={legend}>Project Details</legend>

        <div className="space-y-5">
          <fieldset aria-describedby={describedBy('projectType')}>
            <legend className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-2">
              Project Type <span className="text-[#B2081B]" aria-hidden="true">*</span>
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PROJECT_TYPES.map((type, i) => (
                <label key={type.slug} className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="radio"
                    name="projectType"
                    value={type.label}
                    checked={projectType === type.label}
                    onChange={() => setProjectType(type.label)}
                    aria-invalid={i === 0 && invalid('projectType') ? true : undefined}
                    className="w-4 h-4 accent-[#B2081B]"
                  />
                  <span className="font-['Barlow'] text-sm text-slate-700 group-hover:text-[#071E55]">{type.label}</span>
                </label>
              ))}
            </div>
            <FieldError id="quote-projectType-error" message={fields.projectType} />
          </fieldset>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="quote-location" className={label}>Project Location</label>
              <input id="quote-location" name="location" type="text" maxLength={120}
                className={inputClass(false)} placeholder="City, State" />
            </div>
            <div>
              <label htmlFor="quote-date" className={label}>Desired Date / Timeline</label>
              <input id="quote-date" name="date" type="text" maxLength={120}
                className={inputClass(false)} placeholder="e.g. March 2027 or ASAP" />
            </div>
          </div>

          <div>
            <label htmlFor="quote-description" className={label}>
              Project Description <span className="text-[#B2081B]" aria-hidden="true">*</span>
            </label>
            <textarea id="quote-description" name="description" required rows={6} maxLength={5000}
              aria-invalid={invalid('description')} aria-describedby={describedBy('description')}
              className={`${inputClass(invalid('description'))} resize-y`}
              placeholder="Describe your project: space details, current systems, what you'd like to achieve, approximate budget if known..." />
            <FieldError id="quote-description-error" message={fields.description} />
          </div>
        </div>
      </fieldset>

      <ErrorBanner message={error} />
      <PrivacyNote />

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 bg-[#B2081B] text-white px-8 py-4 font-['Barlow'] font-bold uppercase tracking-wide text-base hover:bg-[#8e0615] transition-colors group disabled:opacity-70 disabled:cursor-wait"
      >
        {sending ? (
          <SendingLabel label="Sending..." />
        ) : (
          <>
            Submit Quote Request
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
