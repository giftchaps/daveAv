import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Site Map",
  description: "A/V DAVEY Site Map, navigate all pages of the website.",
};

const siteLinks = [
  { section: "Main", links: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Support", href: "/support" },
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/request-quote" },
  ]},
  { section: "Services", links: [
    { label: "All Services", href: "/services" },
    { label: "Installation & Integration", href: "/services/installation" },
    { label: "Event Production & Staging", href: "/services/event-production" },
    { label: "Service & Support", href: "/services/service-support" },
    { label: "Video Production & Streaming", href: "/services/video-production" },
    { label: "Equipment Sales", href: "/services/equipment-sales" },
  ]},
  { section: "Company", links: [
    { label: "About A/V DAVEY", href: "/about" },
    { label: "Our Team", href: "/team" },
  ]},
  { section: "Legal", links: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ]},
];

export default function SitemapPage() {
  return (
    <>
      <PageHero
        title="Site Map"
        breadcrumbs={[{ label: "Site Map" }]}
      />
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {siteLinks.map((group) => (
              <div key={group.section}>
                <h2 className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg mb-4 pb-2 border-b border-[#DDE3EE]">
                  {group.section}
                </h2>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="font-['Barlow'] text-sm text-slate-600 hover:text-[#1265B7] transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
