import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATION } from '@/lib/constants';

export function FinalCTA() {
  return (
    <section
      className="relative py-10 lg:py-12 overflow-hidden bg-[#1265B7]"
      aria-labelledby="cta-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-[40px] border-white" />
        <div className="absolute -left-10 -bottom-10 w-72 h-72 rounded-full border-[30px] border-white" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-7 lg:gap-10">
          {/* Left: Heading + CTA */}
          <div className="text-center lg:text-left">
            <h2
              id="cta-heading"
              className="font-['Barlow_Condensed'] font-extrabold uppercase text-white leading-[1.05] mb-3"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)' }}
            >
              Ready to Elevate Your
              <br />
              <span className="text-white">Next Project?</span>
            </h2>
            <p className="font-['Barlow'] text-white text-base sm:text-lg mb-5 max-w-lg">
              Our team is here to help you design the perfect AV solution. No pressure. Just expertise.
            </p>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-[#B2081B] text-white px-6 py-3 font-['Barlow'] font-bold uppercase tracking-wide hover:bg-[#8e0615] transition-colors group text-base shadow-lg"
            >
              Request a Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right: Contact details */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 text-white">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-4 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/30 group-hover:border-white/60 transition-colors flex-shrink-0">
                <Phone size={18} aria-hidden="true" />
              </div>
              <div>
                <div className="font-['Barlow'] text-white/85 text-xs uppercase tracking-wide">Call Us</div>
                <div className="font-['Barlow'] font-semibold text-base">{PHONE}</div>
              </div>
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-4 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/30 group-hover:border-white/60 transition-colors flex-shrink-0">
                <Mail size={18} aria-hidden="true" />
              </div>
              <div>
                <div className="font-['Barlow'] text-white/85 text-xs uppercase tracking-wide">Email Us</div>
                <div className="font-['Barlow'] font-semibold text-base">{EMAIL}</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-white/30 flex-shrink-0">
                <MapPin size={18} aria-hidden="true" />
              </div>
              <div>
                <div className="font-['Barlow'] text-white/85 text-xs uppercase tracking-wide">Visit Us</div>
                <div className="font-['Barlow'] font-semibold text-base">{LOCATION}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
