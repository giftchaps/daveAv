import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

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
    image: "/images/team/davey-katz-preview-v2.jpg",
    specialties: ["AV System Design", "Project Management", "Client Relations", "Event Production"],
  },
  {
    name: "Felix Rosales",
    title: "AV Technician & Production Assistant",
    bio: "Felix brings technical expertise and a hands-on approach to every installation and event. He works alongside Davey on installations, service calls, and event production, ensuring systems are installed and supported to A/V DAVEY standards.",
    image: "/images/team/felix-rosales-preview-v2.jpg",
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
      />

      {/* Team */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="team-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="team-heading" className="sr-only">Team members</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-4xl">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                {/* Photo */}
                <div className="relative overflow-hidden bg-[#F4F6FA] mb-0" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={member.image}
                    alt="Generated AV equipment illustration, awaiting a team portrait"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <p className="bg-[#F4F6FA] px-4 py-2 text-sm text-slate-700">AV illustration. Team portrait coming soon.</p>
                {/* Info */}
                <div className="bg-white border border-[#DDE3EE] border-t-4 border-t-[#071E55] p-6">
                  <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-2xl leading-tight">
                    {member.name}
                  </h3>
                  <div className="font-['Barlow'] text-[#B2081B] text-sm font-semibold uppercase tracking-wider mb-4">
                    {member.title}
                  </div>
                  <p className="font-['Barlow'] text-slate-600 text-sm leading-relaxed mb-5">
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
          </div>
        </div>
      </section>

      {/* Network note */}
      <section className="py-12 lg:py-16 bg-[#F4F6FA] border-t border-[#DDE3EE]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
            <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
              Our Network
            </span>
          </div>
          <h2
            className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Extended by Experience
          </h2>
          <p className="font-['Barlow'] text-slate-600 leading-relaxed text-base lg:text-lg">
            A/V DAVEY maintains a trusted network of experienced freelance AV technicians and specialty vendors. When a project requires additional hands or specialized expertise, we bring in professionals we know and trust, always maintaining the same standards of quality and service our clients expect.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
