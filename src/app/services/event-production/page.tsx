import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Event Production & Staging",
  description:
    "Full-service AV event production in Connecticut. Audio, lighting, video, projection, staging and on-site technical support for corporate events, galas and conferences from A/V DAVEY.",
};

const capabilities = [
  { category: "Audio", items: ["Professional sound systems", "Wireless microphones", "In-ear monitoring", "Live mixing"] },
  { category: "Lighting", items: ["Architectural lighting", "Stage wash & specials", "Intelligent lighting", "Lighting control"] },
  { category: "Video", items: ["Video switching & switching", "IMAG systems", "LED video walls", "Confidence monitors"] },
  { category: "Staging", items: ["Stage design & build", "Podiums & lecterns", "Drapery & backdrops", "Custom staging elements"] },
];

export default function EventProductionPage() {
  return (
    <>
      <PageHero
        eyebrow="Event Production & Staging"
        title="Your Event Deserves"
        titleRed="Professional AV."
        subtitle="From intimate corporate meetings to large-scale galas and conferences, A/V DAVEY delivers complete event AV production. We're first to show and last to go."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Event Production & Staging" }]}
      />

      {/* Overview */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/services/event-production-preview-v2.jpg"
                alt="Professional event production with lighting and staging"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
                <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                  Full-Service Event AV
                </span>
              </div>
              <h2
                className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                A/V DAVEY at Your Event
              </h2>
              <p className="font-['Barlow'] text-slate-600 leading-relaxed mb-6 text-base lg:text-lg">
                We&apos;ve been producing events in Connecticut and the Tri-State region for decades. Our team handles the full technical scope, audio, lighting, video, projection, staging, and on-site support, so you can focus on your program.
              </p>
              <p className="font-['Barlow'] text-slate-600 leading-relaxed text-base">
                We bring professional-grade equipment and experienced technicians to every event. From load-in through strike, A/V DAVEY is first to show and last to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-14 lg:py-20 bg-[#F4F6FA]" aria-labelledby="capabilities-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
            <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
              What We Provide
            </span>
          </div>
          <h2
            id="capabilities-heading"
            className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-10"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Event Production Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cat) => (
              <div key={cat.category} className="bg-white border border-[#DDE3EE] p-6">
                <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-xl mb-4 pb-3 border-b border-[#DDE3EE]">
                  {cat.category}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 font-['Barlow'] text-sm text-slate-600">
                      <CheckCircle2 size={14} className="text-[#1265B7] flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
