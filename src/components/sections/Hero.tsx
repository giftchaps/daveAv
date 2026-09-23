import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[580px] lg:min-h-[700px] overflow-hidden bg-[#dceefa]" aria-label="A/V DAVEY introduction">
      <Image src="/images/hero-sky-preview-v2.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[35%_center] lg:object-center" />
      <div className="absolute inset-0 bg-white/15" aria-hidden="true" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 font-bold text-sm tracking-wider uppercase mb-5 text-[#071E55]"><span className="w-8 h-[3px] bg-[#B2081B] shrink-0" />Connecticut&apos;s Trusted AV Partner</p>
            <h1 className="font-['Barlow_Condensed'] font-extrabold uppercase leading-none mb-6" style={{ fontSize: 'clamp(2.7rem, 6vw, 5.2rem)' }}>
              <span className="text-[#071E55]">Audio Visual Solutions</span><br /><span className="text-[#B2081B]">That Just Work.</span>
            </h1>
            <p className="text-[#071E55] text-base lg:text-lg leading-relaxed max-w-lg mb-8">Professional AV installation, live event production and technical support. Quality equipment. Personal service. Guaranteed results.</p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/request-quote" className="inline-flex items-center gap-2 bg-[#B2081B] text-white px-6 py-3.5 font-bold uppercase hover:bg-[#8e0615]">Request a Quote <ArrowRight size={18} /></Link>
              <Link href="/projects" className="inline-flex items-center gap-2 bg-white/90 text-[#071E55] border border-[#071E55] px-6 py-3.5 font-bold uppercase hover:bg-white"><Play size={16} />Explore Our Work</Link>
            </div>
            <p className="flex items-start gap-2 text-[#071E55] text-sm"><MapPin size={17} className="shrink-0 mt-0.5" />Based in Bridgeport &middot; Serving Connecticut &amp; the Greater Tri-State Region</p>
          </div>
          <div className="hidden lg:flex lg:col-span-3 justify-center">
            <Image src="/images/avators-emblem.png" alt="A/V-ATORS. First to Show, Last to Go. Honor Those Who Serve." width={270} height={297} className="w-56 xl:w-64 h-auto" sizes="(max-width: 1024px) 208px, 270px" />
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-[#071E55]/95 text-white p-5 w-full max-w-[280px] shadow-xl border-l-4 border-[#B2081B]">
              <h2 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase">Davey Katz</h2>
              <p className="text-[#b9ddff] text-sm font-semibold uppercase mb-3">CEO / Head Cheerleader</p>
              <p className="text-white text-sm leading-relaxed">Davey founded A/V DAVEY in May 1989, bringing hands-on AV experience and personal service to every project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
