
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATION } from '@/lib/constants';

const footerNav = {
  Services: [
    { label: 'Installation & Integration', href: '/services/installation' },
    { label: 'Event Production & Staging', href: '/services/event-production' },
    { label: 'Service & Support', href: '/services/service-support' },
    { label: 'Video Production & Streaming', href: '/services/video-production' },
    { label: 'Equipment Sales', href: '/services/equipment-sales' },
  ],
  Company: [
    { label: 'About A/V DAVEY', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  Support: [
    { label: 'Support Hub', href: '/support' },
    { label: 'Request Service', href: '/support#service' },
    { label: 'Ask a Question', href: '/contact' },
    { label: 'Request a Quote', href: '/request-quote' },
  ],
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071E55] text-white" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-9 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="relative mb-3" style={{ width: '180px', height: '76px' }}>
              <Image src="/images/logo-avdavey.png" alt="A/V DAVEY" fill sizes="180px" className="object-contain object-left" />
            </div>
            <p className="font-['Barlow_Condensed'] font-bold text-lg uppercase leading-snug text-white mb-4">
              Quality Equipment.<br />
              Personal Service.<br />
              Guaranteed Results.
            </p>
            <div className="space-y-2 text-base text-white/95">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone size={15} className="text-[#b9ddff] flex-shrink-0" aria-hidden="true" />
                {PHONE}
              </a>
              <a
                href={EMAIL_HREF}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-[#b9ddff] flex-shrink-0" aria-hidden="true" />
                {EMAIL}
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={15} className="text-[#b9ddff] flex-shrink-0" aria-hidden="true" />
                {LOCATION}
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-['Barlow'] font-bold text-sm uppercase tracking-[0.08em] text-white mb-3">
                {heading}
              </h3>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center min-h-9 font-['Barlow'] text-base leading-snug text-white/95 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/85 font-['Barlow']">
              &copy; {year} A/V DAVEY, INC. All Rights Reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="text-sm text-white/85 hover:text-white/85 transition-colors font-['Barlow']">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-white/85 hover:text-white/85 transition-colors font-['Barlow']">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-white/85 hover:text-white/85 transition-colors font-['Barlow']">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

