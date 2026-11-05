import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'Conference & Streaming',
    title: 'Nuvance Health Fourth Annual Global Health Conference',
    location: 'Ethan Allen Hotel, Danbury, CT',
    summary:
      '2.5 days of meetings streamed internationally, with dual projection, sound and every room audio recorded across two ballroom events and four breakouts.',
    image: '/images/projects/nuvance-global-health-hd.jpg',
    alt: 'A/V DAVEY control table with switching console overlooking the Nuvance Health conference ballroom',
    href: '/projects',
  },
  {
    id: 2,
    category: 'Architectural Lighting',
    title: 'Garde Arts Theater 100th Anniversary',
    location: 'New London, CT',
    summary:
      'Architectural uplighting and follow spots to capture the feel of the theater\'s 1926 opening night.',
    image: '/images/projects/garde-arts-theater-hd.jpg',
    alt: 'Garde Arts Theater facade lit with architectural uplighting at night',
    href: '/projects',
  },
  {
    id: 3,
    category: 'Live Event',
    title: 'The August at Steelpointe Ribbon Cutting',
    location: 'Bridgeport, CT',
    summary:
      'Sound, video cues and a press feed for the ribbon cutting that launched this new Bridgeport complex.',
    image: '/images/projects/the-august-console.jpg',
    alt: 'Video switcher, mixer and laptop running The August ribbon cutting in Bridgeport',
    href: '/projects',
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-10 lg:py-14 bg-[#071E55]" aria-labelledby="projects-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
              <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-white/85">
                AV Solutions in the Real World
              </span>
            </div>
            <h2
              id="projects-heading"
              className="font-['Barlow_Condensed'] font-extrabold uppercase text-white leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-['Barlow'] font-bold text-sm uppercase tracking-wide text-white/85 hover:text-white transition-colors group flex-shrink-0"
          >
            View All Projects
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group flex flex-col rounded-lg overflow-hidden bg-[#0d2a6e] border border-white/10 hover:border-[#1265B7]/60 hover:shadow-[0_8px_32px_rgba(7,30,85,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              aria-label={`View project: ${project.title}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#071E55]/30 group-hover:bg-[#071E55]/10 transition-colors" />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#B2081B] text-white text-xs font-['Barlow'] font-bold uppercase tracking-wide px-3 py-1">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-['Barlow'] font-semibold text-white text-xl leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="font-['Barlow'] text-white/85 text-sm uppercase tracking-wide mb-3">
                  {project.location}
                </p>
                <p className="font-['Barlow'] text-white/95 text-base leading-relaxed mb-4">
                  {project.summary}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#b9ddff] font-['Barlow'] font-bold text-sm uppercase tracking-wide group-hover:text-white transition-colors">
                  View Project <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
