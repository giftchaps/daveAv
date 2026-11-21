import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { HEADER_IMAGES } from "@/lib/headerImages";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Recent A/V DAVEY projects, big and small: conference streaming, corporate meetings and architectural lighting, plus holiday brunches, club dinners, private parties and live music.",
};

const projects = [
  {
    id: 1,
    category: "Conference & Streaming",
    title: "Nuvance Health Fourth Annual Global Health Conference",
    location: "Ethan Allen Hotel, Danbury, CT",
    summary:
      "2.5 days of meetings streamed internationally, with every room audio recorded. Dual projection, sound and a console to switch any source to either screen across two ballroom events and four breakout sessions.",
    image: "/images/projects/nuvance-global-health-hd.jpg",
    alt: "A/V DAVEY control table with switching console overlooking the Nuvance Health conference ballroom",
  },
  {
    id: 2,
    category: "Architectural Lighting",
    title: "Garde Arts Theater 100th Anniversary",
    location: "New London, CT",
    summary:
      "Architectural uplighting and follow spots to capture the feel of opening night when the theater first opened its doors in 1926.",
    image: "/images/projects/garde-arts-theater-hd.jpg",
    alt: "Garde Arts Theater facade lit with architectural uplighting at night",
  },
  {
    id: 3,
    category: "Live Event",
    title: "The August at Steelpointe Ribbon Cutting",
    location: "Bridgeport, CT",
    summary:
      "Sound, video cues and a press feed in the lobby for the ribbon cutting that launched this new Bridgeport residential complex, with a series of speeches from local officials.",
    image: "/images/projects/the-august-console.jpg",
    alt: "Video switcher, mixer and laptop running The August ribbon cutting in Bridgeport",
  },
  {
    id: 4,
    category: "Corporate Meeting",
    title: "Belimo Annual Meeting",
    location: "Ethan Allen Hotel, Danbury, CT",
    summary:
      "Our fourth year with Belimo: a full-range sound system, a draped wall with two 7' x 12' screens and 8,500-lumen projectors, two digital consoles, three breakout rooms and power for 21 trade show tables.",
    image: "/images/projects/belimo-ethan-allen-hd.jpg",
    alt: "Belimo meeting in the Ethan Allen Hotel ballroom with twin projection screens",
  },
  {
    id: 5,
    category: "Hybrid Meeting",
    title: "Global Jet Annual All-Hands Meeting",
    location: "Hotel Zero, Danbury, CT",
    summary:
      "When a snowstorm cancelled attendees' flights, we set up ahead of the storm, moved the meeting a day and added an interactive Zoom stream so key people could join the conversation remotely.",
    image: "/images/projects/global-jet-all-hands-hd.jpg",
    alt: "Presenter on stage between two projection screens at the Global Jet all-hands meeting",
  },
  {
    id: 6,
    category: "Corporate Meeting",
    title: "Newtown Savings Bank Annual Meeting",
    location: "Wyndham Southbury, Southbury, CT",
    summary:
      "Another year of sound and visuals for the bank's employee meeting, upgraded to 10' wide screens and 8,500-lumen projectors, plus a choir mic setup for a performance by five audience members.",
    image: "/images/projects/newtown-savings-bank-hd.jpg",
    alt: "Carolers performing at the Newtown Savings Bank annual meeting with large screens on either side",
  },
];

// Smaller jobs, straight from Davey's Facebook posts. We support both.
const smallEvents = [
  {
    id: "bar-taco",
    category: "Live Music",
    title: "Cinco de Mayo at Bar Taco",
    location: "Port Chester, NY",
    summary:
      "A sound-only job we've done year after year for a live band on the restaurant patio. When rain found a leak in the roof, we moved the mix position and the show went on.",
    image: "/images/projects/bar-taco-cinco.jpg",
    alt: "Live band playing Cinco de Mayo on the Bar Taco patio with A/V DAVEY sound",
  },
  {
    id: "easter-brunch",
    category: "Holiday Brunch",
    title: "Easter Brunch Uplighting",
    location: "Ethan Allen Hotel, Danbury, CT",
    summary:
      "Simple uplighting that turns a hotel ballroom into a festive room for Easter brunch, and again for Mother's Day. Light does make a difference.",
    image: "/images/projects/ethan-allen-easter-brunch.jpg",
    alt: "Ballroom set for Easter brunch with blue uplighting along the walls",
  },
  {
    id: "waterat",
    category: "Club Dinner",
    title: "Waterat Swim Program Sunday Dinner",
    location: "Brooklawn Country Club, Fairfield, CT",
    summary:
      "A long dining room with blind spots, so we added two monitors and a live camera shot of the podium between videos and slides. Every table stayed connected to the program.",
    image: "/images/projects/waterat-swim-dinner.jpg",
    alt: "Camera on a tripod capturing the podium at the Waterat swim program dinner, with a screen showing the swimmers",
  },
  {
    id: "world-ballet",
    category: "Private Party",
    title: "World Ballet Cast Party",
    location: "The Heritage",
    summary:
      "When two casts of World Ballet wrapped their tour, we brought sound, lighting and projection to their late-night cast party, from 10 p.m. to 2 a.m., with Felix on the mix.",
    image: "/images/projects/world-ballet-cast-party.jpg",
    alt: "World Ballet cast party with live music and red stage lighting",
  },
];

type Project = (typeof projects)[number] | (typeof smallEvents)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-2xl bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(7,30,85,0.04),0_10px_30px_-18px_rgba(7,30,85,0.18)] hover:shadow-[0_20px_40px_-20px_rgba(7,30,85,0.3)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="rounded-md bg-[#B2081B] text-white text-xs font-['Barlow'] font-bold uppercase tracking-wide px-3 py-1">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-xl leading-tight mb-1">
          {project.title}
        </h3>
        <p className="font-['Barlow'] text-slate-600 text-xs uppercase tracking-wide mb-3">{project.location}</p>
        <p className="font-['Barlow'] text-slate-600 text-[15px] leading-relaxed">{project.summary}</p>
      </div>
    </div>
  );
}

function SectionIntro({ eyebrow, title, text, id }: { eyebrow: string; title: string; text: string; id: string }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-12">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
          <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">{eyebrow}</span>
        </div>
        <h2
          id={id}
          className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05]"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
        >
          {title}
        </h2>
      </div>
      <p className="font-['Barlow'] text-slate-600 text-base lg:text-lg leading-relaxed max-w-xl">{text}</p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        image={{ src: HEADER_IMAGES["projects"] }}
        eyebrow="Our Work"
        title="Real Projects."
        titleRed="Real AV Solutions."
        subtitle="From international conferences and annual meetings to holiday brunches, club dinners and live music at the local restaurant. Big or small, here is a look at recent A/V DAVEY work."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="py-16 lg:py-24 bg-white" aria-labelledby="projects-grid-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            id="projects-grid-heading"
            eyebrow="Conferences & Corporate"
            title="Meetings, Conferences & Landmark Events"
            text="Multi-room conferences, annual meetings and milestone celebrations, planned and run by a crew that has done it for over 30 years."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Small events */}
      <section className="py-16 lg:py-24 bg-[#F4F6FA]" aria-labelledby="small-events-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            id="small-events-heading"
            eyebrow="Small Events Welcome"
            title="No Event Too Small"
            text="Brunches, private parties, club dinners and a band on a restaurant patio. Small events get the same crew, the same professional gear and the same care as our biggest shows."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smallEvents.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl bg-white border border-slate-200/80 p-6 lg:p-7">
            <p className="font-['Barlow'] text-[#071E55] text-base lg:text-lg flex-1">
              <span className="font-semibold">Planning something smaller?</span> Tell us about it. Whatever the size, we&apos;ll
              put together the right setup.
            </p>
            <Link
              href="/request-quote?type=event-production"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#071E55] text-white h-12 px-6 font-['Barlow'] font-semibold hover:bg-[#0d2a6e] transition-colors flex-shrink-0"
            >
              Tell us about your event
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
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
            className="inline-flex items-center gap-2 rounded-lg bg-[#B2081B] text-white px-7 py-3.5 font-['Barlow'] font-bold uppercase tracking-wide hover:bg-[#8e0615] transition-colors group"
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
