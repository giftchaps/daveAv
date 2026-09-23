'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { TopBar } from './TopBar';
import { NAV_ITEMS } from '@/lib/constants';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      <TopBar />
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-14' : 'h-16 lg:h-20'
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center" aria-label="A/V DAVEY Home">
              <div
                className="relative transition-all duration-300"
                style={scrolled ? { width: '140px', height: '58px' } : { width: '160px', height: '67px' }}
              >
                <Image src="/images/logo-avdavey.png" alt="A/V DAVEY" fill sizes="220px" className="object-contain object-left" />
            </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Escape') {
                        setOpenDropdown(null);
                        event.currentTarget.querySelector('button')?.focus();
                      }
                    }}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 font-['Barlow'] font-semibold text-sm text-[#071E55] hover:text-[#1265B7] transition-colors cursor-pointer ${
                        openDropdown === item.label ? 'text-[#1265B7]' : ''
                      }`}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-1 w-64 z-50">
                        <div className="bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden">
                          <div className="py-1">
                            <Link href={item.href} className="block px-5 py-3 font-semibold text-sm text-[#071E55] hover:bg-[#F4F6FA]" onClick={() => setOpenDropdown(null)}>
                              {item.label === 'Services' ? 'All Services' : 'About A/V DAVEY'}
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center justify-between px-5 py-3 font-['Barlow'] text-sm text-[#071E55] hover:bg-[#F4F6FA] hover:text-[#1265B7] transition-colors group"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {child.label}
                                <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#1265B7]" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 font-['Barlow'] font-semibold text-sm text-[#071E55] hover:text-[#1265B7] transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/request-quote"
                className="hidden sm:inline-flex items-center gap-2 bg-[#B2081B] text-white px-5 py-2.5 font-['Barlow'] font-bold text-sm uppercase tracking-wide hover:bg-[#8e0615] transition-colors group"
              >
                Request a Quote
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>

              <button
                className="lg:hidden min-h-11 min-w-11 p-2 text-[#071E55] hover:text-[#1265B7] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-0 z-40">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={closeMobile}
              aria-hidden="true"
            />
            {/* Panel */}
            <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white flex flex-col shadow-2xl">
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div className="relative flex items-center" style={{ width: '140px', height: '58px' }}>
                  <Image src="/images/logo-avdavey.png" alt="A/V DAVEY" fill sizes="140px" className="object-contain object-left" />
                </div>
                <button
                  onClick={closeMobile}
                  className="min-h-11 min-w-11 p-2 text-[#071E55]"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 overflow-y-auto py-4" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <button
                        className="flex items-center justify-between w-full px-6 py-3 font-['Barlow'] font-semibold text-base text-[#071E55] hover:bg-[#F4F6FA] transition-colors"
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                        }
                        aria-expanded={mobileExpanded === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            mobileExpanded === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="bg-[#F4F6FA] border-t border-gray-100">
                          <Link href={item.href} className="block pl-10 pr-6 py-3 font-semibold text-sm text-[#071E55]" onClick={closeMobile}>
                            {item.label === 'Services' ? 'All Services' : 'About A/V DAVEY'}
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-2 pl-10 pr-6 py-3 font-['Barlow'] text-sm text-slate-600 hover:text-[#1265B7] transition-colors"
                              onClick={closeMobile}
                            >
                              <span className="w-1 h-1 rounded-full bg-[#B2081B] flex-shrink-0" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-3 font-['Barlow'] font-semibold text-base text-[#071E55] hover:bg-[#F4F6FA] hover:text-[#1265B7] transition-colors"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-gray-100 space-y-3">
                <Link
                  href="/request-quote"
                  className="flex items-center justify-center gap-2 w-full bg-[#B2081B] text-white py-3 font-['Barlow'] font-bold uppercase tracking-wide hover:bg-[#8e0615] transition-colors"
                  onClick={closeMobile}
                >
                  Request a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

