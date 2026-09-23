import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-[#dceefa] sm:min-h-[650px] lg:min-h-[700px]" aria-label="A/V DAVEY introduction">
      <Image src="/images/hero-sky-preview-v2.jpg" alt="Soft blue sky background" fill priority sizes="100vw" className="object-cover object-[35%_center] lg:object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/35 to-white/10" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-4">
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
          <div className="order-3 flex justify-center lg:order-2 lg:col-span-3">
            <div className="relative w-full max-w-[290px] rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-lg backdrop-blur-sm sm:p-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
              <Image src="/images/davey-line-art.png" alt="One-line cartoon portrait of Davey Katz" width={600} height={420} className="h-auto w-full mix-blend-multiply" sizes="(max-width: 1024px) 290px, 300px" />
              <p className="mt-2 text-center font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.14em] text-[#102f68]">The wise AV operator</p>
            </div>
          </div>
          <div className="order-2 flex justify-center lg:order-3 lg:col-span-4 lg:justify-end">
            <div className="w-full max-w-[360px] border-l-4 border-[#c3172b] bg-[#102f68]/95 p-5 text-white shadow-xl sm:p-6">
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase sm:text-3xl">Davey Katz</h2>
              <p className="mb-3 text-sm font-semibold uppercase text-[#b9ddff]">CEO / Head Cheerleader</p>
              <p className="text-sm leading-relaxed text-white/90">Since 1989, Davey has brought hands-on AV experience, calm leadership, and personal service to every project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
