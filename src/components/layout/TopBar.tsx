import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATION, SITE_TAGLINE } from '@/lib/constants';

export function TopBar() {
  return (
    <div className="bg-[#071E55] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 text-xs font-['Barlow'] font-medium">
          {/* Left: Location */}
          <div className="flex items-center gap-1.5 shrink-0">
            <MapPin size={12} className="text-[#B2081B]" aria-hidden="true" />
            <span className="hidden sm:inline">{LOCATION}</span>
          </div>

          {/* Center: Tagline */}
          <div className="flex-1 text-center tracking-wide hidden md:block text-white/80">
            {SITE_TAGLINE}
          </div>

          {/* Right: Phone + Email */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 hover:text-[#B2081B] transition-colors"
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone size={12} aria-hidden="true" />
              <span className="hidden sm:inline">{PHONE}</span>
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-1.5 hover:text-[#B2081B] transition-colors hidden lg:flex"
              aria-label={`Email us at ${EMAIL}`}
            >
              <Mail size={12} aria-hidden="true" />
              <span>{EMAIL}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
