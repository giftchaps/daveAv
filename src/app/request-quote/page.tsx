import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm, QuoteFormWithParams } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/ui/PageHero";
import { HEADER_IMAGES } from "@/lib/headerImages";
import { Phone, Mail, ShieldCheck } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote from A/V DAVEY for AV installation, event production, service, video production or equipment. Connecticut's trusted AV partner since 1989.",
};


const STEPS = [
  { title: "We review your request", text: "Within one business day, usually sooner." },
  { title: "We talk it through", text: "A quick call or a site visit if the project needs one." },
  { title: "You get a detailed proposal", text: "Tailored to your space, event and budget." },
  { title: "We walk you through it", text: "Every step, from the first plan to the final check." },
];

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        image={{ src: HEADER_IMAGES["request-quote"] }}
        eyebrow="Get Started"
        title="Request a Quote"
        subtitle="Tell us about your project and we'll put together a proposal. Just straightforward expertise. We typically respond within one business day."
        breadcrumbs={[{ label: "Request a Quote" }]}
        overlap
      />

      <section className="relative flow-root bg-[#F4F6FA] pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
            {/* Form, lifted onto the header */}
            <div className="lg:col-span-8 relative z-10 -mt-10 lg:-mt-16">
              <Suspense fallback={<QuoteForm />}>
                <QuoteFormWithParams />
              </Suspense>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:mt-12 space-y-6">
              <div className="rounded-2xl bg-white border border-slate-200/80 p-7 shadow-[0_1px_2px_rgba(7,30,85,0.04)]">
                <h2 className="font-['Barlow'] font-semibold text-[#071E55] text-lg mb-6">What happens next</h2>
                <ol className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
                  {STEPS.map((step, i) => (
                    <li key={step.title} className="relative flex gap-4">
                      <span className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 text-[#B2081B] font-['Barlow_Condensed'] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <div className="pt-1">
                        <div className="font-['Barlow'] font-semibold text-[#071E55] text-[15px]">{step.title}</div>
                        <p className="font-['Barlow'] text-slate-500 text-[14px] leading-relaxed mt-0.5">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-[#071E55] text-white p-7">
                <div
                  className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[#1265B7]/30 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <h2 className="font-['Barlow'] font-semibold text-lg">Prefer to talk it through?</h2>
                  <p className="font-['Barlow'] text-white/70 text-[15px] leading-relaxed mt-1 mb-5">
                    Call Davey directly. Most quotes start with a quick conversation.
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center gap-2.5 rounded-lg bg-white text-[#071E55] h-12 font-['Barlow'] font-semibold hover:bg-white/90 transition-colors"
                  >
                    <Phone size={17} aria-hidden="true" /> {PHONE}
                  </a>
                  <a
                    href={EMAIL_HREF}
                    className="mt-3 flex items-center justify-center gap-2.5 rounded-lg border border-white/20 h-12 font-['Barlow'] font-medium text-white/90 hover:bg-white/10 transition-colors"
                  >
                    <Mail size={17} aria-hidden="true" /> {EMAIL}
                  </a>
                </div>
              </div>

              <p className="flex items-center gap-2.5 px-2 font-['Barlow'] text-[14px] text-slate-500">
                <ShieldCheck size={18} className="text-[#1265B7] flex-shrink-0" aria-hidden="true" />
                No obligation. Connecticut&apos;s trusted AV partner since 1989.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
