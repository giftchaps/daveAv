import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight, MonitorCog, Presentation, Wrench, Video, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "AV Services",
  description:
    "Full-service audio visual solutions from A/V DAVEY, installation, event production, service & support, video production, and equipment sales in Connecticut.",
};

const services = [
  {
    id: "installation",
    icon: MonitorCog,
    title: "Installation & Integration",
    description:
      "We design and install complete audio, video, control and collaboration systems for commercial and residential spaces. From simple meeting room setups to complex multi-room installations, we deliver systems that work reliably from day one.",
    capabilities: [
      "Video conferencing systems",
      "Collaborative display solutions",
      "Touch control systems",
      "Sound system design & installation",
      "Projection & screens",
      "Digital signage",
      "Sound masking",
      "Commercial & residential integration",
    ],
    href: "/services/installation",
    image: "/images/services/installation-preview-v2.jpg",
    imageAlt: "AV installation in a modern conference room",
    reverse: false,
  },
  {
    id: "event-production",
    icon: Presentation,
    title: "Event Production & Staging",
    description:
      "From intimate corporate meetings to large-scale galas and conferences, A/V DAVEY delivers complete event production services. We handle audio, lighting, video, projection, staging and on-site technical management so your event runs without a hitch.",
    capabilities: [
      "Professional audio systems",
      "Lighting design & production",
      "Video switching & projection",
      "LED displays & screens",
      "Staging & podiums",
      "Drapery & backdrop",
      "On-site technical staff",
      "Corporate & private events",
    ],
    href: "/services/event-production",
    image: "/images/services/event-production-preview-v2.jpg",
    imageAlt: "Live event production with professional lighting",
    reverse: true,
  },
  {
    id: "service-support",
    icon: Wrench,
    title: "Service & Support",
    description:
      "Your AV system shouldn't stop working the moment you need it most. A/V DAVEY provides responsive service, expert troubleshooting, and preventive maintenance for AV systems of all types, whether we installed it or not.",
    capabilities: [
      "System troubleshooting & repair",
      "Preventive maintenance",
      "System optimization",
      "Existing-system support",
      "On-site technical assistance",
      "Remote support",
      "Equipment replacement",
      "System documentation",
    ],
    href: "/services/service-support",
    image: "/images/services/service-support-preview-v2.jpg",
    imageAlt: "AV technician servicing a system",
    reverse: false,
  },
  {
    id: "video-production",
    icon: Video,
    title: "Video Production & Streaming",
    description:
      "A/V DAVEY brings professional-quality video production to corporate communications, events, interviews, and more. From single-camera shoots to multi-camera live productions and streaming, we deliver content that looks as good as your message deserves.",
    capabilities: [
      "Multi-camera video production",
      "Corporate video",
      "Executive interviews",
      "Event filming",
      "Live streaming",
      "Post-production & editing",
      "Broadcast-quality audio",
      "On-demand distribution",
    ],
    href: "/services/video-production",
    image: "/images/services/video-production-preview-v2.jpg",
    imageAlt: "Professional video production setup",
    reverse: true,
  },
  {
    id: "equipment-sales",
    icon: Package,
    title: "Equipment Sales",
    description:
      "A/V DAVEY works with the industry's leading manufacturers to source and supply professional-grade AV equipment. We match the right equipment to your specific application and ensure it integrates perfectly with your existing systems.",
    capabilities: [
      "Professional audio equipment",
      "Displays & monitors",
      "Projection systems",
      "Lighting equipment",
      "Control systems",
      "Screens & mounts",
      "Collaboration technology",
      "Sound masking systems",
    ],
    href: "/services/equipment-sales",
    image: "/images/services/equipment-sales-preview-v2.jpg",
    imageAlt: "Professional AV equipment",
    reverse: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Complete Audio Visual"
        titleRed="Services"
        subtitle="From design and installation through live events, ongoing service, and everything in between, A/V DAVEY delivers professional AV solutions that work reliably in the real world."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  service.reverse ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${service.reverse ? "lg:col-start-2" : ""}`}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={service.reverse ? "lg:col-start-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#071E55]">
                      <Icon size={20} className="text-white" aria-hidden="true" />
                    </div>
                    <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                      Our Services
                    </span>
                  </div>

                  <h2
                    className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-4"
                    style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                  >
                    {service.title}
                  </h2>

                  <p className="font-['Barlow'] text-slate-600 leading-relaxed mb-6 text-base lg:text-lg">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-2.5 font-['Barlow'] text-sm text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B2081B] flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 bg-[#071E55] text-white px-6 py-3 font-['Barlow'] font-bold uppercase tracking-wide hover:bg-[#1265B7] transition-colors group"
                  >
                    Learn More
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
