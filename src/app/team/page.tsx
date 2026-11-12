import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { HEADER_IMAGES } from "@/lib/headerImages";
import Link from "next/link";
import { Users, Phone, ArrowRight } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the A/V DAVEY team, experienced AV professionals dedicated to delivering quality installations, events, and service in Connecticut.",
};

const team = [
  {
    name: "Davey Katz",
    title: "CEO / Head Cheerleader",
    bio: "Davey founded A/V DAVEY in May 1989 after years of hands-on AV work in New York and Connecticut. He brings decades of real-world AV experience to every project and remains personally involved in client relationships and project oversight.",
    image: "/images/team/davey-katz.jpg",
    alt: "Davey Katz in his A/V DAVEY uniform",
    specialties: ["AV System Design", "Project Management", "Client Relations", "Event Production"],
  },
  {
    name: "Felix Rosales",
    title: "AV Technician & Production Assistant",
    bio: "Felix brings technical expertise and a hands-on approach to every installation and event. He works alongside Davey on installations, service calls, and event production, ensuring systems are installed and supported to A/V DAVEY standards.",
    image: "/images/team/felix-rosales.jpg",
    alt: "Felix Rosales running camera and audio at a corporate meeting",
    specialties: ["AV Installation", "Event Production", "System Service", "Technical Support"],
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The People Behind"
        titleRed="Every Project."
        subtitle="A/V DAVEY is built on experience and personal commitment. We're a tight-knit team that stays personally involved in every project, from the first call to the final check."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Our Team" }]}
        image={{ src: HEADER_IMAGES["team"] }}
      />

      {/* Team */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="team-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="team-heading" className="sr-only">Team members</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                {/* Photo */}
                <div className="relative overflow-hidden bg-[#F4F6FA] aspect-[16/9] sm:aspect-[4/3]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 bg-white border border-[#DDE3EE] border-t-4 border-t-[#071E55] p-6 lg:p-7">
                  <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-2xl lg:text-3xl leading-tight">
                    {member.name}
                  </h3>
                  <div className="font-['Barlow'] text-[#B2081B] text-sm font-semibold uppercase tracking-wider mb-4">
                    {member.title}
                  </div>
                  <p className="font-['Barlow'] text-slate-600 text-base leading-relaxed mb-5">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="font-['Barlow'] text-xs font-semibold uppercase tracking-wide bg-[#F4F6FA] text-[#071E55] px-3 py-1 border border-[#DDE3EE]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Network */}
            <div className="md:col-span-2 xl:col-span-1 relative overflow-hidden bg-[#071E55] text-white p-8 lg:p-10 flex flex-col">
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(135deg, #fff 0 2px, transparent 2px 16px)" }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col flex-1">
                <div className="w-14 h-14 bg-[#B2081B] flex items-center justify-center mb-6">
                  <Users size={26} aria-hidden="true" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="block w-8 h-[3px] bg-[#E8394B] flex-shrink-0" />
                  <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#E8394B]">
                    Our Network
                  </span>
                </div>
                <h2
                  className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[1.05] mb-4"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                >
                  Extended by Experience
                </h2>
                <p className="font-['Barlow'] text-white/80 leading-relaxed text-base lg:text-lg mb-8">
                  A/V DAVEY maintains a trusted network of experienced freelance AV technicians and specialty vendors. When a project requires additional hands or specialized expertise, we bring in professionals we know and trust, always maintaining the same standards of quality and service our clients expect.
                </p>
                <div className="mt-auto flex flex-col sm:flex-row xl:flex-col gap-3">
                  <Link
                    href="/request-quote"
                    className="inline-flex items-center justify-center gap-2 bg-[#B2081B] hover:bg-[#8f0616] transition-colors font-['Barlow_Condensed'] font-bold uppercase tracking-wider text-base px-6 py-3"
                  >
                    Plan a Project <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white hover:bg-white/10 transition-colors font-['Barlow_Condensed'] font-bold uppercase tracking-wider text-base px-6 py-3"
                  >
                    <Phone size={16} aria-hidden="true" /> {PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
