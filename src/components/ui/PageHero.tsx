import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleRed?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  variant?: 'default' | 'navy' | 'blue';
  /** Optional photo shown on the right on large screens. */
  image?: { src: string; alt: string; caption?: string; position?: string };
}

export function PageHero({
  eyebrow,
  title,
  titleRed,
  subtitle,
  breadcrumbs,
  variant = 'default',
  image,
}: PageHeroProps) {
  const bg = {
    default: 'bg-[#F4F6FA] border-b border-[#DDE3EE]',
    navy: 'bg-[#071E55]',
    blue: 'bg-[#1265B7]',
  }[variant];

  const textColor = variant === 'default' ? 'text-[#071E55]' : 'text-white';
  const subtitleColor = variant === 'default' ? 'text-slate-600' : 'text-white/85';
  const breadcrumbColor = variant === 'default' ? 'text-slate-500' : 'text-white/85';
  const breadcrumbHoverColor = variant === 'default' ? 'hover:text-[#1265B7]' : 'hover:text-white';

  return (
    <section className={`${bg} py-14 lg:py-20 overflow-hidden`} aria-label="Page header">
      <div
        className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 ${
          image ? 'lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-center' : ''
        }`}
      >
        <div className={image ? 'lg:col-span-7' : ''}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            className={`flex items-center gap-1.5 ${breadcrumbColor} text-xs font-['Barlow'] uppercase tracking-wide mb-6`}
            aria-label="Breadcrumb"
          >
            <Link href="/" className={`${breadcrumbHoverColor} transition-colors`}>
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight size={12} aria-hidden="true" />
                {crumb.href && i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className={`${breadcrumbHoverColor} transition-colors`}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={variant === 'default' ? 'text-[#071E55] font-semibold' : 'text-white font-semibold'}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
            <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Heading */}
        <h1
          className={`font-['Barlow_Condensed'] font-extrabold uppercase leading-[1.05] ${textColor} max-w-3xl`}
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
        >
          {title}
          {titleRed && (
            <>
              <br />
              <span className="text-[#B2081B]">{titleRed}</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={`mt-5 font-['Barlow'] leading-relaxed max-w-2xl ${subtitleColor}`}
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
          >
            {subtitle}
          </p>
        )}
        </div>

        {image && (
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* offset accent frame */}
            <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#B2081B]/25" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden bg-[#DDE3EE] shadow-[0_18px_40px_rgba(7,30,85,0.18)] border-b-4 border-[#B2081B]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: image.position ?? 'center' }}
                sizes="(max-width: 1024px) 0px, 40vw"
              />
              {image.caption && (
                <div className="absolute left-0 bottom-0 bg-[#071E55]/90 backdrop-blur-[2px] text-white px-4 py-2.5 font-['Barlow_Condensed'] font-semibold uppercase tracking-[0.1em] text-[13px]">
                  {image.caption}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
