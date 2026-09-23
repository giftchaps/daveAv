import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AV Equipment Sales",
  description:
    "Professional-grade AV equipment in Connecticut. Audio, displays, projection, lighting, control systems and more from A/V DAVEY, your trusted AV equipment partner.",
};

const categories = [
  { name: "Audio Systems", description: "Microphones, amplifiers, speakers, mixers and DSP processors." },
  { name: "Displays & Monitors", description: "Commercial-grade flat panels, interactive displays and video walls." },
  { name: "Projection Systems", description: "Projectors and screens for any room size and application." },
  { name: "Lighting Equipment", description: "Architectural, stage and specialty lighting fixtures and control." },
  { name: "Control Systems", description: "Touch panels, control processors and automation systems." },
  { name: "Screens & Mounts", description: "Motorized and fixed screens, projector and display mounting solutions." },
  { name: "Collaboration Technology", description: "Video conferencing cameras, speakerphones and collaboration software." },
  { name: "Sound Masking", description: "Speech privacy and ambient sound systems for open office environments." },
  { name: "AV Furniture", description: "Credenzas, carts, racks and custom AV furniture solutions." },
  { name: "Signal Distribution", description: "Switchers, extenders, converters and distribution amplifiers." },
];

export default function EquipmentSalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipment Sales"
        title="The Right Equipment"
        titleRed="For Your Application."
        subtitle="A/V DAVEY sources and supplies professional-grade AV equipment from the industry's leading manufacturers. We match the right equipment to your specific needs."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Equipment Sales" }]}
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
            <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
              Equipment Categories
            </span>
          </div>
          <h2
            className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            We Supply What You Need
          </h2>
          <p className="font-['Barlow'] text-slate-600 mb-10 max-w-2xl">
            We work with the industry&apos;s top manufacturers, not to push specific brands, but to match the best equipment to your application and budget.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {categories.map((cat) => (
              <div key={cat.name} className="p-5 border border-[#DDE3EE] hover:border-[#1265B7]/40 hover:bg-[#F4F6FA] transition-all">
                <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg mb-2">
                  {cat.name}
                </h3>
                <p className="font-['Barlow'] text-slate-500 text-sm">{cat.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#071E55] text-white p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="font-['Barlow_Condensed'] font-bold uppercase text-xl text-white mb-2">
                Not sure what you need?
              </div>
              <p className="font-['Barlow'] text-white/85 text-sm max-w-lg">
                Tell us about your project and we&apos;ll recommend the right equipment for your specific application and budget. No pressure. Just expertise.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B2081B] text-white px-6 py-3 font-['Barlow'] font-bold uppercase tracking-wide hover:bg-[#8e0615] transition-colors group flex-shrink-0"
            >
              Discuss Your Needs
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
