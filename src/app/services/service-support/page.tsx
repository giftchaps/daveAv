import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Wrench, Phone, Mail, HelpCircle, CheckCircle2 } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AV Service & Support",
  description:
    "Responsive AV service and support in Connecticut. Troubleshooting, repair, preventive maintenance and on-site assistance from A/V DAVEY.",
};

const capabilities = [
  "System troubleshooting & diagnosis",
  "Equipment repair & replacement",
  "Preventive maintenance programs",
  "System optimization & calibration",
  "Firmware & software updates",
  "On-site technical assistance",
  "Third-party system support",
  "Documentation & system review",
];

export default function ServiceSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Service & Support"
        title="When Your AV Needs Help,"
        titleRed="Call People Who Know AV."
        subtitle="A/V DAVEY provides fast, knowledgeable service for AV systems of all types. Whether we installed it or not, we can help get it working."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Service & Support" }]}
      />

      {/* Action cards */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="service-actions-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
            <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
              Get Help Now
            </span>
          </div>
          <h2
            id="service-actions-heading"
            className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-10"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            How Can We Help You?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/request-quote"
              className="group flex flex-col items-center text-center p-8 bg-[#071E55] text-white hover:bg-[#0d2a6e] transition-colors border-b-4 border-[#B2081B]"
            >
              <Wrench size={36} className="mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <div className="font-['Barlow_Condensed'] font-bold uppercase text-xl mb-2">Request Service</div>
              <p className="font-['Barlow'] text-white/85 text-sm">
                Submit a service request and our team will respond promptly.
              </p>
            </Link>

            <a
              href={PHONE_HREF}
              className="group flex flex-col items-center text-center p-8 bg-[#1265B7] text-white hover:bg-[#0f54a0] transition-colors border-b-4 border-[#071E55]"
            >
              <Phone size={36} className="mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <div className="font-['Barlow_Condensed'] font-bold uppercase text-xl mb-2">Call A/V DAVEY</div>
              <p className="font-['Barlow'] text-white/85 text-sm">{PHONE}</p>
            </a>

            <Link
              href="/contact"
              className="group flex flex-col items-center text-center p-8 bg-[#F4F6FA] text-[#071E55] hover:bg-[#DDE3EE] transition-colors border-b-4 border-[#B2081B]"
            >
              <HelpCircle size={36} className="mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <div className="font-['Barlow_Condensed'] font-bold uppercase text-xl mb-2">Ask a Question</div>
              <p className="font-['Barlow'] text-slate-600 text-sm">
                Not sure what you need? We&apos;re happy to talk it through.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-14 lg:py-20 bg-[#F4F6FA]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
                <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                  Service Capabilities
                </span>
              </div>
              <h2
                className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                We Service What Others Can&apos;t
              </h2>
              <p className="font-['Barlow'] text-slate-600 leading-relaxed mb-6 text-base lg:text-lg">
                A/V DAVEY technicians have the experience to troubleshoot and repair virtually any AV system. We support the equipment we sell and install, and we also service systems originally installed by others.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2.5 font-['Barlow'] text-sm text-slate-700">
                    <CheckCircle2 size={15} className="text-[#1265B7] flex-shrink-0" aria-hidden="true" />
                    {cap}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#071E55] text-white p-8 lg:p-10">
              <div className="font-['Barlow_Condensed'] font-bold uppercase text-xl text-[#B2081B] mb-4 tracking-wide">
                Contact Our Service Team
              </div>
              <div className="space-y-5">
                <a href={PHONE_HREF} className="flex items-center gap-4 hover:text-white/80 transition-colors group">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20 group-hover:border-white/40">
                    <Phone size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-['Barlow'] text-white/85 text-xs uppercase tracking-wide">Phone</div>
                    <div className="font-['Barlow'] font-semibold">{PHONE}</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 hover:text-white/80 transition-colors group">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20 group-hover:border-white/40">
                    <Mail size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-['Barlow'] text-white/85 text-xs uppercase tracking-wide">Email</div>
                    <div className="font-['Barlow'] font-semibold">{EMAIL}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
