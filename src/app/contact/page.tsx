import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact A/V DAVEY",
  description:
    "Contact A/V DAVEY in Bridgeport, CT. Call, email, or send a message. Connecticut's trusted AV partner since 1989.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk About"
        titleRed="Your Project."
        subtitle="Ready to discuss your AV needs? We'd love to hear from you. Call, email, or fill out the form below."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <a
                href={PHONE_HREF}
                className="flex items-start gap-4 p-5 border border-[#DDE3EE] hover:border-[#1265B7]/40 hover:bg-[#F4F6FA] transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#071E55] flex-shrink-0">
                  <Phone size={18} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg">Phone</div>
                  <div className="font-['Barlow'] text-slate-600 group-hover:text-[#1265B7] transition-colors">{PHONE}</div>
                </div>
              </a>

              <a
                href={EMAIL_HREF}
                className="flex items-start gap-4 p-5 border border-[#DDE3EE] hover:border-[#1265B7]/40 hover:bg-[#F4F6FA] transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#071E55] flex-shrink-0">
                  <Mail size={18} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg">Email</div>
                  <div className="font-['Barlow'] text-slate-600 group-hover:text-[#1265B7] transition-colors">{EMAIL}</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 border border-[#DDE3EE]">
                <div className="w-10 h-10 flex items-center justify-center bg-[#071E55] flex-shrink-0">
                  <MapPin size={18} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg">Location</div>
                  <div className="font-['Barlow'] text-slate-600">{LOCATION}</div>
                  <div className="font-['Barlow'] text-slate-600 text-sm mt-1">Serving CT &amp; Greater Tri-State</div>
                </div>
              </div>

              <div className="bg-[#071E55] text-white p-5">
                <div className="font-['Barlow_Condensed'] font-bold uppercase text-lg mb-2">Ready for a Quote?</div>
                <p className="font-['Barlow'] text-white/85 text-sm mb-4">
                  Fill out our detailed quote request form and we&apos;ll get back to you with a proposal.
                </p>
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 bg-[#B2081B] text-white px-5 py-2.5 font-['Barlow'] font-bold uppercase tracking-wide text-sm hover:bg-[#8e0615] transition-colors group"
                >
                  Request a Quote <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
                <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                  Send a Message
                </span>
              </div>

              <form className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                      Full Name <span className="text-[#B2081B]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                      Email <span className="text-[#B2081B]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white"
                      placeholder="(203) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-['Barlow'] font-semibold text-sm text-[#071E55] mb-1.5">
                    Message <span className="text-[#B2081B]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#DDE3EE] font-['Barlow'] text-[#071E55] text-sm focus:outline-none focus:border-[#1265B7] focus:ring-1 focus:ring-[#1265B7] bg-white resize-y"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#B2081B] text-white px-8 py-3.5 font-['Barlow'] font-bold uppercase tracking-wide hover:bg-[#8e0615] transition-colors group"
                >
                  Send Message
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
