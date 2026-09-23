import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AV Installation & Integration",
  description:
    "Professional AV installation and system integration in Connecticut. Conference rooms, digital signage, sound systems, video conferencing and more from A/V DAVEY.",
};

const capabilities = [
  "Video Conferencing Systems",
  "Collaborative Display Solutions",
  "Touch Control Systems",
  "Professional Sound Systems",
  "Projection & Screens",
  "Digital Signage",
  "Sound Masking",
  "Monitoring & Control",
  "Commercial Integration",
  "Residential Integration",
  "System Training",
  "Documentation & Support",
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We listen. We visit your space, understand your workflow, and learn what you actually need, not just what you think you need.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We design a system tailored to your space and goals. No overengineering. No unnecessary complexity. A solution that fits.",
  },
  {
    step: "03",
    title: "Install",
    description:
      "Our experienced technicians install cleanly and professionally, minimizing disruption to your workplace or home.",
  },
  {
    step: "04",
    title: "Configure",
    description:
      "We configure, calibrate and test every component until the system performs exactly as designed.",
  },
  {
    step: "05",
    title: "Support",
    description:
      "We train your team, document the system, and stay available for questions, updates, and service.",
  },
];

const faqs = [
  {
    q: "What types of spaces do you work in?",
    a: "We work in conference rooms, boardrooms, training rooms, auditoriums, lobbies, retail spaces, restaurants, houses of worship, and residential homes throughout Connecticut and the greater Tri-State region.",
  },
  {
    q: "Do you service systems you didn't install?",
    a: "Yes. We service AV systems regardless of who originally installed them.",
  },
  {
    q: "How long does a typical installation take?",
    a: "Scope varies widely. A single conference room may take one to two days. A multi-room commercial installation may take one to two weeks. We provide a clear timeline before work begins.",
  },
  {
    q: "Do you provide training after installation?",
    a: "Always. We ensure your team is comfortable using the system and provide documentation for reference.",
  },
];

export default function InstallationPage() {
  return (
    <>
      <PageHero
        eyebrow="Installation & Integration"
        title="AV Systems That Work"
        titleRed="From Day One."
        subtitle="We design and install complete audio, video, control and collaboration systems for commercial and residential spaces throughout Connecticut and the greater Tri-State region."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Installation & Integration" }]}
      />

      {/* Overview */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
                <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                  What We Install
                </span>
              </div>
              <h2
                className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Professional AV for Every Space
              </h2>
              <p className="font-['Barlow'] text-slate-600 leading-relaxed mb-6 text-base lg:text-lg">
                A/V DAVEY has been designing and installing AV systems since 1989. We bring decades of real-world experience to every project, whether it&apos;s a single conference room or a complex multi-building installation.
              </p>
              <p className="font-['Barlow'] text-slate-600 leading-relaxed mb-8 text-base">
                We work with the industry&apos;s leading equipment manufacturers and maintain close relationships with building management, IT teams, and contractors to ensure seamless installations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2.5 font-['Barlow'] text-sm text-slate-700">
                    <CheckCircle2 size={15} className="text-[#1265B7] flex-shrink-0" aria-hidden="true" />
                    {cap}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/services/installation-preview-v2.jpg"
                alt="Professional AV installation in a conference room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 lg:py-20 bg-[#071E55]" aria-labelledby="process-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
              <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                How We Work
              </span>
              <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
            </div>
            <h2
              id="process-heading"
              className="font-['Barlow_Condensed'] font-extrabold uppercase text-white leading-[1.05]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Our Installation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step) => (
              <div key={step.step} className="relative">
                <div className="font-['Barlow_Condensed'] font-extrabold text-white/10 text-6xl leading-none mb-3">
                  {step.step}
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-white uppercase text-xl mb-2">
                  {step.title}
                </h3>
                <p className="font-['Barlow'] text-white/85 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-20 bg-[#F4F6FA]" aria-labelledby="faq-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
              <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                Common Questions
              </span>
            </div>
            <h2
              id="faq-heading"
              className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-10"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              Installation FAQ
            </h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-[#DDE3EE] p-6">
                  <h3 className="font-['Barlow'] font-bold text-[#071E55] mb-2">{faq.q}</h3>
                  <p className="font-['Barlow'] text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
