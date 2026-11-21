import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { HEADER_IMAGES } from "@/lib/headerImages";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Event Production & Staging",
  description:
    "Full-service AV event production in Connecticut. Audio, lighting, video, projection, staging and on-site technical support for corporate events, galas and conferences from A/V DAVEY.",
};

const capabilities = [
  { category: "Audio", items: ["Professional sound systems", "Wireless microphones", "In-ear monitoring", "Live mixing"] },
  { category: "Lighting", items: ["Architectural lighting", "Stage wash & specials", "Intelligent lighting", "Lighting control"] },
  { category: "Video", items: ["Video switching & playback", "IMAG systems", "LED video walls", "Confidence monitors"] },
  { category: "Staging", items: ["Stage design & build", "Podiums & lecterns", "Drapery & backdrops", "Custom staging elements"] },
];

const SAVINGS = [
  {
    amount: "50%",
    title: "Pick up your rental order",
    text: "Collect your rental equipment yourself instead of having it delivered, and save 50%.",
    cta: "Get a pickup quote",
    href: "/request-quote?type=event-production&promo=pickup",
    bg: "bg-[#1265B7] shadow-[0_24px_50px_-28px_rgba(18,101,183,0.8)]",
  },
  {
    amount: "20%",
    title: "Registered non-profits",
    text: "Registered non-profit organizations save 20% on all AV services.",
    cta: "Claim your discount",
    href: "/request-quote?type=event-production&promo=ngo",
    bg: "bg-[#B2081B] shadow-[0_24px_50px_-28px_rgba(178,8,27,0.8)]",
  },
];

export default function EventProductionPage() {
  return (
    <>
      <PageHero
        image={{ src: HEADER_IMAGES["event-production"] }}
        eyebrow="Event Production & Staging"
        title="Your Event Deserves"
        titleRed="Professional AV."
        subtitle="From brunches, private parties and club dinners to large-scale galas and conferences, A/V DAVEY delivers complete event AV production, whatever the size. We're first to show and last to go."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Event Production & Staging" }]}
      />

      {/* Overview */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1700514077430-3659e38eb5e7?auto=format&fit=crop&w=1600&q=80"
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
              <div key={cat.category} className="rounded-2xl bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(7,30,85,0.04),0_10px_30px_-18px_rgba(7,30,85,0.18)] p-6 lg:p-7">
                <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-2xl mb-4 pb-3 border-b border-[#DDE3EE]">
                  {cat.category}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-['Barlow'] text-base lg:text-[17px] leading-snug text-slate-700">
                      <CheckCircle2 size={18} className="text-[#1265B7] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to save */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="ways-to-save-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
            <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
              Ways to Save
            </span>
          </div>
          <h2
            id="ways-to-save-heading"
            className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-10"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Great AV That Fits Your Budget
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAVINGS.map((offer) => (
              <Link
                key={offer.title}
                href={offer.href}
                className={`group relative overflow-hidden flex flex-col sm:flex-row sm:items-center gap-6 rounded-2xl p-7 lg:p-9 text-white transition-all duration-300 hover:-translate-y-1 ${offer.bg}`}
              >
                <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
                <div className="relative flex-shrink-0 font-['Barlow_Condensed'] font-extrabold leading-none">
                  <span className="block text-6xl lg:text-7xl">{offer.amount}</span>
                  <span className="block text-lg uppercase tracking-[0.12em] text-white/80 mt-1">off</span>
                </div>
                <div className="relative">
                  <h3 className="font-['Barlow'] font-semibold text-xl lg:text-2xl leading-tight">{offer.title}</h3>
                  <p className="font-['Barlow'] text-white/80 text-[15px] lg:text-base leading-relaxed mt-2">{offer.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-['Barlow'] font-semibold text-[15px]">
                    {offer.cta}
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
