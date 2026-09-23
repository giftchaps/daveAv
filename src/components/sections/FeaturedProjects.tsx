import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'Commercial Integration',
    title: 'Corporate Conference Center AV',
    location: 'New Haven, CT',
    summary:
      'Complete audio, video and control system integration for a multi-room conference center including video conferencing, digital signage and touch control.',
    image: '/images/projects/project-1-preview-v2.jpg',
    href: '/projects',
  },
  {
    id: 2,
    category: 'Live Event',
    title: 'Annual Corporate Gala',
    location: 'Bridgeport, CT',
    summary:
      'Full-service event production including sound, lighting, projection, staging and on-site technical management for a 500-guest corporate event.',
    image: '/images/projects/project-2-preview-v2.jpg',
    href: '/projects',
  },
  {
    id: 3,
    category: 'Video Production',
    title: 'Executive Interview Series',
    location: 'Stamford, CT',
    summary:
      'Multi-camera studio-quality video production and streaming for a quarterly executive communications series, delivered live and on-demand.',
    image: '/images/projects/project-3-preview-v2.jpg',
    href: '/projects',
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-14 lg:py-24 bg-[#071E55]" aria-labelledby="projects-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
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

        <p className="text-white text-sm mb-5">Illustrative project examples with generated placeholder imagery. Actual project photography and details are coming soon.</p>
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group block bg-[#0d2a6e] border border-white/10 hover:border-[#1265B7]/50 transition-all duration-300"
              aria-label={`View project: ${project.title}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={project.image}
                  alt={project.title}
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
              <div className="p-6">
                <h3 className="font-['Barlow_Condensed'] font-bold text-white uppercase text-xl leading-tight mb-1">
                  {project.title}
                </h3>
                <p className="font-['Barlow'] text-white/85 text-xs uppercase tracking-wide mb-3">
                  {project.location}
                </p>
                <p className="font-['Barlow'] text-white/85 text-sm leading-relaxed mb-4">
                  {project.summary}
                </p>
                <div className="flex items-center gap-2 text-[#b9ddff] font-['Barlow'] font-bold text-xs uppercase tracking-wide group-hover:text-white transition-colors">
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
