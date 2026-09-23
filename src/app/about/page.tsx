import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About A/V DAVEY",
  description:
    "A/V DAVEY has been Connecticut's trusted AV partner since 1989. Learn about our history, our founder Davey Katz, and what drives our commitment to personal service.",
};

const timeline = [
  {
    year: "1989",
    title: "A/V DAVEY is Founded",
    description:
      "Davey Katz establishes A/V DAVEY in May 1989 in Bridgeport, CT, building on years of hands-on AV experience in New York and Connecticut.",
  },
  {
    year: "1990s",
    title: "Commercial & Event Growth",
    description:
      "The company expands its commercial installation and event production work across Connecticut, building relationships with corporate clients and institutions throughout the region.",
  },
  {
    year: "2000s",
    title: "Technology Evolution",
    description:
      "As AV technology evolves from analog to digital, A/V DAVEY adapts, adding video conferencing, digital signage, and networked AV systems to its portfolio.",
  },
  {
    year: "2010s",
    title: "Collaboration & Unified Communications",
    description:
      "A/V DAVEY embraces the shift toward collaboration technology, delivering Unified Communications and video conferencing systems for corporate clients throughout Connecticut.",
  },
  {
    year: "Today",
    title: "Still First to Show, Last to Go",
    description:
      "More than 35 years later, A/V DAVEY continues to deliver professional AV solutions with the same personal service and commitment to quality that has defined the company since day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Built on Experience."
        titleRed="Driven by Service."
        subtitle="A/V DAVEY has been Connecticut's trusted AV partner since 1989. We combine decades of hands-on expertise with the kind of personal service that most companies have forgotten how to give."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Davey Story */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="story-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
                <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                  The Founder
                </span>
              </div>
              <h2
                id="story-heading"
                className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Davey&apos;s Story
              </h2>
              <div className="font-['Barlow'] text-slate-600 leading-relaxed space-y-4 text-base lg:text-lg">
                <p>
                  Before founding A/V DAVEY, Davey Katz was working freelance AV gigs in New York, learning the craft in hotel ballrooms and conference centers, and developing the kind of hands-on knowledge that only comes from doing the work.
                </p>
                <p>
                  In May 1989, Davey established A/V DAVEY in Bridgeport, Connecticut. The goal was straightforward: provide professional AV services with the kind of personal commitment that transforms a vendor into a partner.
                </p>
                <p>
                  More than three decades later, that original vision still drives the company. Every project is approached with the same care and attention Davey brought to his first jobs. Every client is treated like family.
                </p>
              </div>
            </div>

            {/* Davey image + card */}

            <div className="flex flex-col gap-0">
              <div className="relative overflow-hidden bg-[#F4F6FA]" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/davey-hero.png"
                  alt="Generated AV equipment illustration, awaiting Davey's portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="bg-[#071E55] text-white p-6 border-t-4 border-[#B2081B]">
                <div className="font-['Barlow_Condensed'] font-bold text-xl uppercase">Davey Katz</div>
                <div className="font-['Barlow'] text-[#b9ddff] text-sm font-semibold uppercase tracking-wider mb-3">
                  CEO / Head Cheerleader
                </div>
                <p className="font-['Barlow'] text-white/75 text-sm leading-relaxed">
                  Davey founded A/V DAVEY in May 1989, building on years of hands-on AV experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 lg:py-20 bg-[#F4F6FA]" aria-labelledby="timeline-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
            <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
              Our History
            </span>
          </div>
          <h2
            id="timeline-heading"
            className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-12"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            1989 to Today
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#DDE3EE] hidden sm:block" aria-hidden="true" />

            <div className="space-y-8">
              {timeline.map((event) => (
                <div key={event.year} className="flex gap-6 sm:gap-10 items-start">
                  {/* Year bubble */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#071E55] flex items-center justify-center text-white font-['Barlow_Condensed'] font-bold text-xs uppercase relative z-10">
                    <span className="leading-tight text-center">{event.year.replace(/s$/, '').slice(-2)}<span className="text-[8px]">{event.year.endsWith('s') ? 's' : ''}</span></span>
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg mb-1">
                      <span className="text-[#B2081B] mr-2">{event.year}</span>
                      {event.title}
                    </div>
                    <p className="font-['Barlow'] text-slate-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A/V-ATORS identity */}
      <section className="py-14 lg:py-20 bg-[#071E55] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-52 h-52 lg:w-64 lg:h-64">
                <Image
                  src="/images/avators-emblem.png"
                  alt="A/V-ATORS, Honor Those Who Serve"
                  fill
                  className="object-contain drop-shadow-2xl"
                  unoptimized
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
                <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                  Our Identity
                </span>
              </div>
              <h2
                className="font-['Barlow_Condensed'] font-extrabold uppercase text-white leading-[1.05] mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                The A/V-ATORS Spirit
              </h2>
              <p className="font-['Barlow'] text-white/75 leading-relaxed mb-4">
                The A/V-ATORS motto <em>First to Show, Last to Go. Honor Those Who Serve</em> captures something essential about how A/V DAVEY approaches every project. We show up first, prepared and ready. We stay until the job is done right.
              </p>
              <p className="font-['Barlow'] text-white/75 leading-relaxed">
                It&apos;s not just a slogan. It&apos;s the standard A/V DAVEY has held itself to since 1989.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-12 bg-white border-b border-[#DDE3EE]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-xl mb-1">Meet the Team</div>
            <p className="font-['Barlow'] text-slate-600 text-sm">The people who make it happen.</p>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 bg-[#071E55] text-white px-6 py-3 font-['Barlow'] font-bold uppercase tracking-wide hover:bg-[#1265B7] transition-colors group flex-shrink-0"
          >
            View Our Team <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

