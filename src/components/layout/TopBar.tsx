import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATION, SITE_TAGLINE } from '@/lib/constants';

export function TopBar() {
  return (
    <div className="bg-[#040f2e] text-white hidden sm:block border-b border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 font-['Barlow'] text-[13px]">
          {/* Left: location */}
          <div className="flex items-center gap-2 shrink-0 text-white/80">
            <MapPin size={13} className="text-[#E8394B]" aria-hidden="true" />
            <span className="font-semibold text-white">{LOCATION}</span>
            <span className="hidden xl:inline text-white/55">· Serving Connecticut &amp; the Tri-State</span>
          </div>

          {/* Center: tagline */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-3 px-4 min-w-0">
            <span className="block w-6 h-px bg-[#E8394B]" aria-hidden="true" />
            <span className="font-['Barlow_Condensed'] font-semibold uppercase tracking-[0.18em] text-[12px] text-white/70 truncate">
              {SITE_TAGLINE}
            </span>
            <span className="block w-6 h-px bg-[#E8394B]" aria-hidden="true" />
          </div>

          {/* Right: phone + email */}
          <div className="flex items-center shrink-0">
            <a
              href={PHONE_HREF}
              className="group flex items-center gap-2 font-semibold text-white hover:text-[#B9DDFF] transition-colors"
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone size={13} className="text-[#B9DDFF]" aria-hidden="true" />
              <span>{PHONE}</span>
            </a>
            <span className="hidden lg:block w-px h-4 bg-white/15 mx-4" aria-hidden="true" />
            <a
              href={EMAIL_HREF}
              className="hidden lg:flex items-center gap-2 text-white/75 hover:text-white transition-colors"
              aria-label={`Email us at ${EMAIL}`}
            >
              <Mail size={13} className="text-[#B9DDFF]" aria-hidden="true" />
              <span>{EMAIL}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
