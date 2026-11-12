import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm, QuoteFormWithParams } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/ui/PageHero";
import { Phone, Mail } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote from A/V DAVEY for AV installation, event production, service, video production or equipment. Connecticut's trusted AV partner since 1989.",
};


export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        image={{ src: "/images/heroes/request-quote.jpg", alt: "Ballroom with two large screens at the Newtown Savings Bank annual meeting", caption: "Newtown Savings Bank \u00b7 Annual Meeting" }}
        eyebrow="Get Started"
        title="Request a Quote"
        subtitle="Tell us about your project and we'll put together a proposal. Just straightforward expertise. We typically respond within one business day."
        breadcrumbs={[{ label: "Request a Quote" }]}
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
              <div className="bg-[#F4F6FA] border border-[#DDE3EE] p-6">
                <div className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg mb-4">
                  Prefer to Talk?
                </div>
                <div className="space-y-4">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-3 font-['Barlow'] text-sm text-slate-600 hover:text-[#1265B7] transition-colors group"
                  >
                    <Phone size={16} className="text-[#B2081B]" aria-hidden="true" />
                    {PHONE}
                  </a>
                  <a
                    href={EMAIL_HREF}
                    className="flex items-center gap-3 font-['Barlow'] text-sm text-slate-600 hover:text-[#1265B7] transition-colors group"
                  >
                    <Mail size={16} className="text-[#B2081B]" aria-hidden="true" />
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="bg-[#071E55] text-white p-6">
                <div className="font-['Barlow_Condensed'] font-bold uppercase text-lg mb-3">
                  What to Expect
                </div>
                <ul className="space-y-2.5 font-['Barlow'] text-white/85 text-sm">
                  <li className="flex gap-2.5">
                    <span className="text-[#B2081B] font-bold">01</span>
                    We review your request within one business day
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-[#B2081B] font-bold">02</span>
                    We may schedule a brief call or site visit
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-[#B2081B] font-bold">03</span>
                    We prepare a detailed proposal
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-[#B2081B] font-bold">04</span>
                    We walk you through every step
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <Suspense fallback={<QuoteForm />}>
                <QuoteFormWithParams />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
