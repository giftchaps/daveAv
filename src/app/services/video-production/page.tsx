import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Video Production & Streaming",
  description:
    "Professional video production and live streaming in Connecticut. Corporate video, interviews, event filming and broadcast-quality streaming from A/V DAVEY.",
};

const services = [
  { title: "Corporate Video", description: "Professional corporate communications, marketing and training videos." },
  { title: "Executive Interviews", description: "Studio-quality single and multi-camera interview productions." },
  { title: "Event Filming", description: "Complete video capture of your conference, gala or meeting." },
  { title: "Live Streaming", description: "Broadcast-quality streaming to any platform, live or on-demand." },
  { title: "Post-Production", description: "Professional editing, color grading and delivery." },
  { title: "Multi-Camera Production", description: "Switching, graphics and full broadcast production workflow." },
];

export default function VideoProductionPage() {
  return (
    <>
      <PageHero
        eyebrow="Video Production & Streaming"
        title="Your Message, Delivered"
        titleRed="Professionally."
        subtitle="A/V DAVEY brings broadcast-quality video production to corporate communications, live events, and digital distribution."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Video Production & Streaming" }]}
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
                <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                  Video Services
                </span>
              </div>
              <h2
                className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                From Camera to Screen
              </h2>
              <p className="font-['Barlow'] text-slate-600 leading-relaxed mb-6 text-base lg:text-lg">
                Whether you need a polished corporate video, a live-streamed event, or a multi-camera production, A/V DAVEY has the equipment and expertise to deliver broadcast-quality results on time and on budget.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <div key={s.title} className="flex gap-3">
                    <CheckCircle2 size={16} className="text-[#1265B7] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="font-['Barlow'] font-semibold text-[#071E55] text-sm">{s.title}</div>
                      <div className="font-['Barlow'] text-slate-500 text-xs mt-0.5">{s.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/services/video-production-preview-v2.jpg"
                alt="Professional video production setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
