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
  /** Optional background photo. It fills the header and fades into navy behind the text. */
  image?: { src: string; position?: string };
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

  // A photo header is always dark, whatever the variant.
  const light = variant === 'default' && !image;
  const textColor = light ? 'text-[#071E55]' : 'text-white';
  const subtitleColor = light ? 'text-slate-600' : 'text-white/85';
  const breadcrumbColor = light ? 'text-slate-500' : 'text-white/75';
  const breadcrumbHoverColor = light ? 'hover:text-[#1265B7]' : 'hover:text-white';
  const redColor = light ? 'text-[#B2081B]' : 'text-[#FF4D5E]';

  return (
    <section
      className={`${image ? 'bg-[#071E55]' : bg} relative overflow-hidden ${image ? 'py-16 lg:py-28' : 'py-14 lg:py-20'}`}
      aria-label="Page header"
    >
      {image && (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            priority
            className="object-cover"
            style={{ objectPosition: image.position ?? 'center' }}
            sizes="100vw"
            quality={75}
          />
          {/* Navy fade: solid behind the text, opening up to the photo on the right */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                'linear-gradient(90deg, #071E55 0%, rgba(7,30,85,0.96) 32%, rgba(7,30,85,0.7) 55%, rgba(7,30,85,0.15) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 md:hidden bg-[#071E55]/85" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#B2081B]" aria-hidden="true" />
        </>
      )}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={image ? 'max-w-3xl' : ''}>
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
                  <span className={light ? 'text-[#071E55] font-semibold' : 'text-white font-semibold'}>
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
            <span className={`font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase ${redColor}`}>
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
              <span className={redColor}>{titleRed}</span>
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

      </div>
    </section>
  );
}
