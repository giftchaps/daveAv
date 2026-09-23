import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote from A/V DAVEY for AV installation, event production, service, video production or equipment. Connecticut's trusted AV partner since 1989.",
};

const projectTypes = [
  "Installation & Integration",
  "Event Production & Staging",
  "Service & Support",
  "Video Production & Streaming",
  "Equipment Sales",
  "Other",
];

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Request a Quote"
        subtitle="Tell us about your project and we'll put together a proposal. Just straightforward expertise. We typically respond within one business day."
        breadcrumbs={[{ label: "Request a Quote" }]}
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
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
            <div className="lg:col-span-2">
              <form className="space-y-6" noValidate>
                {/* Contact info */}
                <fieldset>
                  <legend className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg mb-4 pb-2 border-b border-[#DDE3EE] w-full">
                    Your Information
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quote-name" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                        Full Name <span className="text-[#B2081B]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="quote-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-company" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                        Company
                      </label>
                      <input
                        id="quote-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                        Email <span className="text-[#B2081B]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="quote-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-phone" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                        Phone
                      </label>
                      <input
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Project details */}
                <fieldset>
                  <legend className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg mb-4 pb-2 border-b border-[#DDE3EE] w-full">
                    Project Details
                  </legend>

                  <div className="space-y-5">
                    <div>
                      <fieldset>
                        <legend className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-2">
                          Project Type <span className="text-[#B2081B]" aria-hidden="true">*</span>
                        </legend>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {projectTypes.map((type) => (
                            <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
                              <input
                                type="radio"
                                name="projectType"
                                value={type}
                                className="w-4 h-4 accent-[#B2081B]"
                              />
                              <span className="font-['Barlow'] text-sm text-slate-700 group-hover:text-[#071E55]">
                                {type}
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="quote-location" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                          Project Location
                        </label>
                        <input
                          id="quote-location"
                          name="location"
                          type="text"
                          className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white"
                          placeholder="City, State"
                        />
                      </div>
                      <div>
                        <label htmlFor="quote-date" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                          Desired Date / Timeline
                        </label>
                        <input
                          id="quote-date"
                          name="date"
                          type="text"
                          className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white"
                          placeholder="e.g. March 2026 or ASAP"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="quote-description" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                        Project Description <span className="text-[#B2081B]" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="quote-description"
                        name="description"
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white resize-y"
                        placeholder="Describe your project: space details, current systems, what you'd like to achieve, approximate budget if known..."
                      />
                    </div>
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#B2081B] text-white px-8 py-4 font-['Barlow'] font-bold uppercase tracking-wide text-base hover:bg-[#8e0615] transition-colors group"
                >
                  Submit Quote Request
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
