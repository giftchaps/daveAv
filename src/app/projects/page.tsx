import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "AV projects from A/V DAVEY, commercial integration, live event production, video production and residential systems throughout Connecticut.",
};

const projects = [
  {
    id: 1,
    category: "Commercial Integration",
    title: "Corporate Conference Center AV",
    location: "New Haven, CT",
    summary:
      "Complete audio, video and control system integration for a multi-room conference center including video conferencing, digital signage and touch control solutions.",
    image: "/images/projects/project-1-preview-v2.jpg",
  },
  {
    id: 2,
    category: "Live Event",
    title: "Annual Corporate Gala",
    location: "Bridgeport, CT",
    summary:
      "Full-service event production including professional sound, lighting, projection, staging and on-site technical management for a 500-guest corporate gala.",
    image: "/images/projects/project-2-preview-v2.jpg",
  },
  {
    id: 3,
    category: "Video Production",
    title: "Executive Interview Series",
    location: "Stamford, CT",
    summary:
      "Multi-camera studio-quality video production and live streaming for a quarterly executive communications series, delivered live and on-demand.",
    image: "/images/projects/project-3-preview-v2.jpg",
  },
  {
    id: 4,
    category: "Commercial Integration",
    title: "University Lecture Hall Upgrade",
    location: "New Haven, CT",
    summary:
      "Complete AV system upgrade for a 200-seat lecture hall including new projection, sound reinforcement, lecture capture and control systems.",
    image: "/images/projects/project-4-preview-v2.jpg",
  },
  {
    id: 5,
    category: "Live Event",
    title: "Non-Profit Awards Ceremony",
    location: "Bridgeport, CT",
    summary:
      "Audio, lighting and video production for an annual awards dinner, including live streaming for remote attendees.",
    image: "/images/projects/project-5-preview-v2.jpg",
  },
  {
    id: 6,
    category: "Residential",
    title: "Custom Home Theater & Whole-Home AV",
    location: "Fairfield, CT",
    summary:
      "Complete whole-home AV integration including dedicated home theater, distributed audio, centralized control and outdoor AV systems.",
    image: "/images/projects/project-6-preview-v2.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real Projects."
        titleRed="Real AV Solutions."
        subtitle="From commercial conference rooms and large-scale events to video production and residential systems, A/V DAVEY delivers results that work in the real world."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="py-14 lg:py-20 bg-white" aria-labelledby="projects-grid-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-700 text-sm mb-6">Illustrative project examples with generated placeholder imagery. Actual project photography and details are coming soon.</p>
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
                    alt={project.title}
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
