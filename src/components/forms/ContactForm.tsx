'use client';

import type { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { useFormSubmit, formValues, inputClass } from './useFormSubmit';
import { ErrorBanner, FieldError, Honeypot, PrivacyNote, SendingLabel, SuccessPanel } from './FormParts';

const label = "block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5";

export function ContactForm() {
  const { status, error, fields, sentTo, submit, reset, markStarted } = useFormSubmit('contact');
  const sending = status === 'sending';

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const ok = await submit(formValues(form));
    if (ok) form.reset();
    else requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
  }

  if (status === 'sent') {
    return (
      <SuccessPanel
        title="Message sent. Thank you!"
        body="Davey and the team have your message and typically respond within one business day."
        sentTo={sentTo}
        onReset={reset}
        resetLabel="Send another message"
      />
    );
  }

  const invalid = (name: string) => Boolean(fields[name]);
  const describedBy = (name: string) => (fields[name] ? `contact-${name}-error` : undefined);

  return (
    <form className="space-y-5" noValidate onSubmit={onSubmit} onFocus={markStarted} aria-busy={sending}>
      <Honeypot />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className={label}>
            Full Name <span className="text-[#B2081B]" aria-hidden="true">*</span>
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" maxLength={100}
            aria-invalid={invalid('name')} aria-describedby={describedBy('name')}
            className={inputClass(invalid('name'))} placeholder="Your name" />
          <FieldError id="contact-name-error" message={fields.name} />
        </div>
        <div>
          <label htmlFor="contact-company" className={label}>Company</label>
          <input id="contact-company" name="company" type="text" autoComplete="organization" maxLength={120}
            className={inputClass(false)} placeholder="Company name" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-email" className={label}>
            Email <span className="text-[#B2081B]" aria-hidden="true">*</span>
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" maxLength={254}
            aria-invalid={invalid('email')} aria-describedby={describedBy('email')}
            className={inputClass(invalid('email'))} placeholder="your@email.com" />
          <FieldError id="contact-email-error" message={fields.email} />
        </div>
        <div>
          <label htmlFor="contact-phone" className={label}>Phone</label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40}
            aria-invalid={invalid('phone')} aria-describedby={describedBy('phone')}
            className={inputClass(invalid('phone'))} placeholder="(203) 000-0000" />
          <FieldError id="contact-phone-error" message={fields.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={label}>
          Message <span className="text-[#B2081B]" aria-hidden="true">*</span>
        </label>
        <textarea id="contact-message" name="message" required rows={6} maxLength={5000}
          aria-invalid={invalid('message')} aria-describedby={describedBy('message')}
          className={`${inputClass(invalid('message'))} resize-y`}
          placeholder="Tell us about your project or question..." />
        <FieldError id="contact-message-error" message={fields.message} />
      </div>

      <ErrorBanner message={error} />
      <PrivacyNote />

      <button
        type="submit"
        disabled={sending}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B2081B] text-white px-8 py-3.5 font-['Barlow'] font-bold uppercase tracking-wide hover:bg-[#8e0615] transition-colors group disabled:opacity-70 disabled:cursor-wait"
      >
        {sending ? (
          <SendingLabel label="Sending..." />
        ) : (
          <>
            Send Message
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
