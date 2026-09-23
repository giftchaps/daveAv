import React from 'react';
import Link from 'next/link';
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
}

export function PageHero({
  eyebrow,
  title,
  titleRed,
  subtitle,
  breadcrumbs,
  variant = 'default',
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
    <section className={`${bg} py-14 lg:py-20`} aria-label="Page header">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
    </section>
  );
}
