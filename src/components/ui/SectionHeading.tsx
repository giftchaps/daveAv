import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleRed?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleRed,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const eyebrowAlign = align === 'center' ? 'justify-center' : 'justify-start';

  return (
    <div className={`${textAlign} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-3 ${eyebrowAlign}`}>
          <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
          <span
            className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]"
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-['Barlow_Condensed'] font-extrabold uppercase leading-[1.05] ${
          light ? 'text-white' : 'text-[#071E55]'
        }`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}
      >
        {title}
        {titleRed && (
          <>
            <br />
            <span className="text-[#B2081B]">{titleRed}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 font-['Barlow'] leading-relaxed max-w-2xl ${
            light ? 'text-blue-100' : 'text-slate-600'
          } ${align === 'center' ? 'mx-auto' : ''}`}
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
