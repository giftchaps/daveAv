import React from 'react';
import { Handshake, ShieldCheck, Wrench, Clock } from 'lucide-react';

const principles = [
  {
    icon: Clock,
    title: 'Hands-On Experience',
    description:
      "Decades of AV work across Connecticut and the Tri-State region bring practical experience to every project.",
  },
  {
    icon: Handshake,
    title: 'Personal Service',
    description:
      "Real people who answer the phone, know your project, and stay involved from your first call to the final check.",
  },
  {
    icon: Wrench,
    title: 'Practical Solutions',
    description:
      "Reliable systems chosen to fit your space, your people, and your budget. Straightforward advice from an experienced team.",
  },
  {
    icon: ShieldCheck,
    title: 'Support After Installation',
    description:
      "Ongoing service and preventive maintenance keep your system working, with help when something needs attention.",
  },
];

export function WhyAvDavey() {
  return (
    <section className="py-10 lg:py-14 bg-white" aria-labelledby="why-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Heading */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
              <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                Why A/V DAVEY
              </span>
            </div>
            <h2
              id="why-heading"
              className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}
            >
              Experience You Can See.
              <br />
              <span className="text-[#B2081B]">Service You Can Feel.</span>
            </h2>
            <p
              className="font-['Barlow'] text-slate-600 leading-relaxed mb-5"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
            >
              Since 1989, A/V DAVEY has built its reputation on one simple principle: treat every client like family and every project like it&apos;s our own. We combine decades of hands-on AV expertise with the kind of personal service that most companies have forgotten how to give.
            </p>

            {/* Stat callout */}
            <div className="border-l-4 border-[#B2081B] pl-5 py-2">
              <div className="font-['Barlow_Condensed'] font-extrabold text-4xl text-[#071E55] uppercase">
                40+
              </div>
              <div className="font-['Barlow'] text-slate-600 text-sm uppercase tracking-wide mt-1">
                Years of combined AV experience
              </div>
            </div>
          </div>

          {/* Right: Principles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-5 rounded-lg bg-[#F4F6FA] border border-[#DDE3EE] hover:border-[#1265B7]/30 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#071E55] mb-4">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-['Barlow'] font-semibold text-[#071E55] text-lg leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Barlow'] text-slate-700 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
