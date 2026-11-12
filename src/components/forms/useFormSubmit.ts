'use client';

import { useCallback, useRef, useState } from 'react';
import { validateSubmission, type FieldErrors } from '@/lib/forms';

export type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

/** Submits a form's values to /api/contact and tracks status and field errors. */
export function useFormSubmit(formType: 'contact' | 'quote') {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');
  const [fields, setFields] = useState<FieldErrors>({});
  const [sentTo, setSentTo] = useState('');
  const startedAt = useRef<number | null>(null);

  /** Attach to the form's onFocus so we know when a person started filling it in. */
  const markStarted = useCallback(() => {
    if (startedAt.current === null) startedAt.current = Date.now();
  }, []);

  const submit = useCallback(
    async (values: Record<string, string>) => {
      const check = validateSubmission({ ...values, formType });
      if (!check.ok) {
        setFields(check.errors);
        setError('Please check the highlighted fields.');
        setStatus('error');
        return false;
      }
      setStatus('sending');
      setError('');
      setFields({});
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...values,
            formType,
            elapsedMs: startedAt.current === null ? undefined : Date.now() - startedAt.current,
          }),
        });
        const body = await res.json().catch(() => ({}));
        if (res.ok && body.ok) {
          setSentTo(values.email || '');
          setStatus('sent');
          return true;
        }
        setFields(body.fields || {});
        setError(body.error || 'Something went wrong. Please try again.');
        setStatus('error');
      } catch {
        setError('We could not reach the server. Please check your connection and try again.');
        setStatus('error');
      }
      return false;
    },
    [formType],
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setError('');
    setFields({});
    startedAt.current = null;
  }, []);

  return { status, error, fields, sentTo, submit, reset, markStarted };
}

export function formValues(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  const out: Record<string, string> = {};
  data.forEach((v, k) => {
    if (typeof v !== 'string') return;
    // Several checkboxes can share a name (e.g. project types): join them.
    out[k] = k in out ? `${out[k]}, ${v}` : v;
  });
  return out;
}

export const inputClass = (hasError: boolean) =>
  `w-full h-12 px-4 rounded-lg border font-['Barlow'] text-[#071E55] text-base placeholder:text-slate-400 bg-slate-50/70 hover:bg-white focus:bg-white transition-[border-color,box-shadow,background-color] duration-150 focus:outline-none focus:ring-4 ${
    hasError
      ? 'border-[#B2081B] focus:border-[#B2081B] focus:ring-[#B2081B]/15'
      : 'border-slate-200 hover:border-slate-300 focus:border-[#1265B7] focus:ring-[#1265B7]/15'
  }`;

/** Same as inputClass, for multi-line fields (no fixed height). */
export const textareaClass = (hasError: boolean) =>
  inputClass(hasError).replace('h-12 ', '') + ' py-3 min-h-[150px] resize-y leading-relaxed';

export const labelClass = "block font-['Barlow'] font-semibold text-[14px] text-[#071E55] mb-2";
