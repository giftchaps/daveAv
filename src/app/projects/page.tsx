import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Recent A/V DAVEY projects across Connecticut: conference streaming, corporate meetings, architectural lighting and live events for Nuvance Health, Belimo, Garde Arts Theater and more.",
};

const projects = [
  {
    id: 1,
    category: "Conference & Streaming",
    title: "Nuvance Health Fourth Annual Global Health Conference",
    location: "Ethan Allen Hotel, Danbury, CT",
    summary:
      "2.5 days of meetings streamed internationally, with every room audio recorded. Dual projection, sound and a console to switch any source to either screen across two ballroom events and four breakout sessions.",
    image: "/images/projects/nuvance-global-health.jpg",
    alt: "A/V DAVEY control table with switching console overlooking the Nuvance Health conference ballroom",
  },
  {
    id: 2,
    category: "Architectural Lighting",
    title: "Garde Arts Theater 100th Anniversary",
    location: "New London, CT",
    summary:
      "Architectural uplighting and follow spots to capture the feel of opening night when the theater first opened its doors in 1926.",
    image: "/images/projects/garde-arts-theater.jpg",
    alt: "Garde Arts Theater facade lit with architectural uplighting at night",
  },
  {
    id: 3,
    category: "Live Event",
    title: "The August at Steelpointe Ribbon Cutting",
    location: "Bridgeport, CT",
    summary:
      "Sound, video cues and a press feed in the lobby for the ribbon cutting that launched this new Bridgeport residential complex, with a series of speeches from local officials.",
    image: "/images/projects/the-august-ribbon-cutting.jpg",
    alt: "Digital mixer and video laptop running The August ribbon cutting in Bridgeport",
  },
  {
    id: 4,
    category: "Corporate Meeting",
    title: "Belimo Annual Meeting",
    location: "Ethan Allen Hotel, Danbury, CT",
    summary:
      "Our fourth year with Belimo: a full-range sound system, a draped wall with two 7' x 12' screens and 8,500-lumen projectors, two digital consoles, three breakout rooms and power for 21 trade show tables.",
    image: "/images/projects/belimo-ethan-allen.jpg",
    alt: "Belimo meeting in the Ethan Allen Hotel ballroom with twin projection screens",
  },
  {
    id: 5,
    category: "Hybrid Meeting",
    title: "Global Jet Annual All-Hands Meeting",
    location: "Hotel Zero, Danbury, CT",
    summary:
      "When a snowstorm cancelled attendees' flights, we set up ahead of the storm, moved the meeting a day and added an interactive Zoom stream so key people could join the conversation remotely.",
    image: "/images/projects/global-jet-all-hands.jpg",
    alt: "Presenter on stage between two projection screens at the Global Jet all-hands meeting",
  },
  {
    id: 6,
    category: "Corporate Meeting",
    title: "Newtown Savings Bank Annual Meeting",
    location: "Wyndham Southbury, Southbury, CT",
    summary:
      "Another year of sound and visuals for the bank's employee meeting, upgraded to 10' wide screens and 8,500-lumen projectors, plus a choir mic setup for a performance by five audience members.",
    image: "/images/projects/newtown-savings-bank.jpg",
    alt: "Carolers performing at the Newtown Savings Bank annual meeting with large screens on either side",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real Projects."
        titleRed="Real AV Solutions."
        subtitle="From international conferences and annual meetings to theater lighting and ribbon cuttings, here is a look at recent A/V DAVEY work across Connecticut."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="py-14 lg:py-20 bg-white" aria-labelledby="projects-grid-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="projects-grid-heading" className="sr-only">Project portfolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group border border-[#DDE3EE] hover:border-[#1265B7]/40 transition-all overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#B2081B] text-white text-xs font-['Barlow'] font-bold uppercase tracking-wide px-3 py-1">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-xl leading-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="font-['Barlow'] text-slate-600 text-xs uppercase tracking-wide mb-3">
                    {project.location}
                  </p>
                  <p className="font-['Barlow'] text-slate-600 text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to get in touch */}
      <section className="py-12 lg:py-16 bg-[#F4F6FA] border-t border-[#DDE3EE]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Have a Project in Mind?
          </h2>
          <p className="font-['Barlow'] text-slate-600 mb-6 max-w-lg mx-auto">
            Let&apos;s talk about what you need. We&apos;ll help you find the right AV solution.
          </p>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 bg-[#B2081B] text-white px-7 py-3.5 font-['Barlow'] font-bold uppercase tracking-wide hover:bg-[#8e0615] transition-colors group"
          >
            Request a Quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
