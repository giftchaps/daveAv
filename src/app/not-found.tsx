import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

const links = [
  { label: "Our Services", href: "/services" },
  { label: "Recent Projects", href: "/projects" },
  { label: "Request a Quote", href: "/request-quote" },
  { label: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Error 404"
        title="This Page Missed"
        titleRed="Its Cue."
        subtitle="The page you're looking for has moved or doesn't exist. Here are a few places to pick things back up."
      />
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-3 rounded-xl bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(7,30,85,0.04),0_10px_30px_-18px_rgba(7,30,85,0.18)] hover:border-[#1265B7]/40 p-5 transition-colors"
              >
                <span className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-lg">{link.label}</span>
                <ArrowRight size={16} className="text-[#B2081B] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-8 font-['Barlow'] text-slate-600">
            Rather talk to a person?{" "}
            <a href={PHONE_HREF} className="inline-flex items-center gap-1.5 font-semibold text-[#B2081B] hover:text-[#8e0615]">
              <Phone size={15} aria-hidden="true" /> {PHONE}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
