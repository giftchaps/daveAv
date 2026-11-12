import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { HEADER_IMAGES } from "@/lib/headerImages";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, ArrowRight, type LucideIcon } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact A/V DAVEY",
  description:
    "Contact A/V DAVEY in Bridgeport, CT. Call, email, or send a message. Connecticut's trusted AV partner since 1989.",
};

const CHANNELS: { icon: LucideIcon; label: string; value: string; href?: string; note?: string }[] = [
  { icon: Phone, label: "Call", value: PHONE, href: PHONE_HREF },
  { icon: Mail, label: "Email", value: EMAIL, href: EMAIL_HREF },
  { icon: MapPin, label: "Based in", value: LOCATION, note: "Serving Connecticut & the Tri-State" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={{ src: HEADER_IMAGES["contact"] }}
        eyebrow="Get in Touch"
        title="Let's Talk About"
        titleRed="Your Project."
        subtitle="Ready to discuss your AV needs? We'd love to hear from you. Call, email, or fill out the form below."
        breadcrumbs={[{ label: "Contact" }]}
        overlap
      />

      <section className="relative flow-root bg-[#F4F6FA] pb-16 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 -mt-10 lg:-mt-16 grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(7,30,85,0.04),0_24px_60px_-28px_rgba(7,30,85,0.25)]">
            {/* Contact details */}
            <div className="relative lg:col-span-5 xl:col-span-4 bg-[#071E55] text-white p-8 sm:p-10 overflow-hidden order-2 lg:order-1">
              <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-[#1265B7]/25 blur-3xl" aria-hidden="true" />
              <div className="relative flex flex-col h-full">
                <h2 className="font-['Barlow'] font-semibold text-2xl">Talk to Davey</h2>
                <p className="font-['Barlow'] text-white/70 text-[15px] leading-relaxed mt-2 mb-8">
                  You&apos;ll reach Davey and the team directly. We typically respond within one business day.
                </p>

                <ul className="space-y-3">
                  {CHANNELS.map((c) => {
                    const inner = (
                      <>
                        <span className="flex-shrink-0 w-11 h-11 rounded-lg bg-white/10 ring-1 ring-white/15 flex items-center justify-center group-hover:bg-[#B2081B] group-hover:ring-[#B2081B] transition-colors">
                          <c.icon size={19} aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-['Barlow'] text-[13px] uppercase tracking-[0.08em] text-white/55">{c.label}</span>
                          <span className="block font-['Barlow'] font-semibold text-[17px] break-words">{c.value}</span>
                          {c.note && <span className="block font-['Barlow'] text-[14px] text-white/60">{c.note}</span>}
                        </span>
                      </>
                    );
                    return (
                      <li key={c.label}>
                        {c.href ? (
                          <a href={c.href} className="group flex items-center gap-4 rounded-xl p-3 -mx-3 hover:bg-white/[0.06] transition-colors">
                            {inner}
                          </a>
                        ) : (
                          <div className="group flex items-center gap-4 p-3 -mx-3">{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="font-['Barlow'] text-white/70 text-[15px] mb-4">Planning a project? The quote form asks the right questions.</p>
                  <Link
                    href="/request-quote"
                    className="group inline-flex items-center gap-2 rounded-lg bg-white text-[#071E55] h-12 px-6 font-['Barlow'] font-semibold hover:bg-white/90 transition-colors"
                  >
                    Request a quote <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-10 xl:p-12 order-1 lg:order-2">
              <h2 className="font-['Barlow'] font-semibold text-[#071E55] text-2xl">Send us a message</h2>
              <p className="font-['Barlow'] text-slate-500 text-[15px] mt-1 mb-8">
                Questions, service calls or ideas. Tell us what&apos;s on your mind.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
