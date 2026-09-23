import React from 'react';
import { Handshake, ShieldCheck, Wrench, Clock } from 'lucide-react';

const principles = [
  {
    icon: Clock,
    title: 'Hands-On Experience',
    description:
      "With decades of real-world AV work across Connecticut and the greater Tri-State region, we have solved a wide range of AV challenges. That experience lives in every project we take on.",
  },
  {
    icon: Handshake,
    title: 'Personal Service',
    description:
      "When you work with A/V DAVEY, you get real people who answer the phone, know your project, and stay involved from first call to final check. No call centers. No hand-offs.",
  },
  {
    icon: Wrench,
    title: 'Practical Solutions',
    description:
      "We recommend what works, not what sells. Our solutions are chosen to match your space, your people, and your budget, built to function reliably in the real world.",
  },
  {
    icon: ShieldCheck,
    title: 'Support After Installation',
    description:
      "Our relationship doesn't end when the job is done. We provide ongoing service, preventive maintenance, and are always available when something needs attention.",
  },
];

export function WhyAvDavey() {
  return (
    <section className="py-14 lg:py-24 bg-white" aria-labelledby="why-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
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
              className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}
            >
              Experience You Can See.
              <br />
              <span className="text-[#B2081B]">Service You Can Feel.</span>
            </h2>
            <p
              className="font-['Barlow'] text-slate-600 leading-relaxed mb-8"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
            >
              Since 1989, A/V DAVEY has built its reputation on one simple principle: treat every client like family and every project like it&apos;s our own. We combine decades of hands-on AV expertise with the kind of personal service that most companies have forgotten how to give.
            </p>

            {/* Stat callout */}
            <div className="border-l-4 border-[#B2081B] pl-5 py-2">
              <div className="font-['Barlow_Condensed'] font-extrabold text-4xl text-[#071E55] uppercase">
                40+
              </div>
              <div className="font-['Barlow'] text-slate-500 text-sm uppercase tracking-wide mt-1">
                Years of combined AV experience
              </div>
            </div>
          </div>

          {/* Right: Principles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 bg-[#F4F6FA] border border-[#DDE3EE] hover:border-[#1265B7]/30 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#071E55] mb-4">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-bold text-[#071E55] uppercase text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Barlow'] text-slate-600 text-sm leading-relaxed">
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
