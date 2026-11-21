import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { HEADER_IMAGES } from "@/lib/headerImages";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Cpu,
  Gauge,
  HelpCircle,
  Mail,
  Phone,
  Plug,
  RefreshCw,
  Search,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AV Service & Support",
  description:
    "Responsive AV service and support in Connecticut. Troubleshooting, repair, preventive maintenance and on-site assistance from A/V DAVEY.",
};

const CAPABILITIES: { label: string; icon: LucideIcon }[] = [
  { label: "System troubleshooting & diagnosis", icon: Search },
  { label: "Equipment repair & replacement", icon: Wrench },
  { label: "Preventive maintenance programs", icon: ShieldCheck },
  { label: "System optimization & calibration", icon: Gauge },
  { label: "Firmware & software updates", icon: RefreshCw },
  { label: "On-site technical assistance", icon: Plug },
  { label: "Third-party system support", icon: Cpu },
  { label: "Documentation & system review", icon: ClipboardCheck },
];

const ACTIONS: {
  label: string;
  text: string;
  detail?: string;
  ctaText: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  card: string;
  iconTile: string;
  title: string;
  body: string;
  cta: string;
}[] = [
  {
    label: "Request service",
    text: "Tell us what's going on and our team will respond promptly to schedule a fix.",
    ctaText: "Start a request",
    href: "/request-quote?type=service-support",
    icon: Wrench,
    card: "bg-[#071E55] text-white shadow-[0_24px_50px_-28px_rgba(7,30,85,0.7)] hover:shadow-[0_30px_60px_-26px_rgba(7,30,85,0.8)]",
    iconTile: "bg-[#B2081B] text-white",
    title: "text-white",
    body: "text-white/70",
    cta: "text-white",
  },
  {
    label: "Call A/V DAVEY",
    text: "Speak to someone who knows AV, directly.",
    detail: PHONE,
    ctaText: "Call now",
    href: PHONE_HREF,
    icon: Phone,
    external: true,
    card: "bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(7,30,85,0.04),0_12px_30px_-20px_rgba(7,30,85,0.25)] hover:border-[#1265B7]/40 hover:shadow-[0_22px_44px_-22px_rgba(7,30,85,0.35)]",
    iconTile: "bg-[#1265B7]/10 text-[#1265B7] group-hover:bg-[#1265B7] group-hover:text-white transition-colors",
    title: "text-[#071E55]",
    body: "text-slate-500",
    cta: "text-[#1265B7]",
  },
  {
    label: "Ask a question",
    text: "Not sure what you need? We're happy to talk it through, no obligation.",
    ctaText: "Send a question",
    href: "/contact",
    icon: HelpCircle,
    card: "bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(7,30,85,0.04),0_12px_30px_-20px_rgba(7,30,85,0.25)] hover:border-[#1265B7]/40 hover:shadow-[0_22px_44px_-22px_rgba(7,30,85,0.35)]",
    iconTile: "bg-[#B2081B]/10 text-[#B2081B] group-hover:bg-[#B2081B] group-hover:text-white transition-colors",
    title: "text-[#071E55]",
    body: "text-slate-500",
    cta: "text-[#B2081B]",
  },
];

export default function ServiceSupportPage() {
  return (
    <>
      <PageHero
        image={{ src: HEADER_IMAGES["service-support"] }}
        eyebrow="Service & Support"
        title="When Your AV Requires Help,"
        titleRed="Call People Who Know AV."
        subtitle="A/V DAVEY provides fast, knowledgeable service for AV systems of all types. Whether we installed it or not, we can help get it working."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Service & Support" }]}
      />

      {/* Action cards */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="service-actions-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
                <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                  Get Help Now
                </span>
              </div>
              <h2
                id="service-actions-heading"
                className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05]"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                How Can We Help You?
              </h2>
            </div>
            <p className="font-['Barlow'] text-slate-500 text-base lg:text-lg max-w-md lg:text-right">
              Pick the option that suits you. A real person who knows AV will get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {ACTIONS.map((action) => {
              const card = (
                <>
                  <span
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-7 transition-transform duration-300 group-hover:-translate-y-0.5 ${action.iconTile}`}
                    aria-hidden="true"
                  >
                    <action.icon size={26} strokeWidth={1.9} />
                  </span>
                  <h3 className={`font-['Barlow'] font-semibold text-xl lg:text-[22px] leading-tight mb-2 ${action.title}`}>
                    {action.label}
                  </h3>
                  <p className={`font-['Barlow'] text-[15px] lg:text-base leading-relaxed ${action.body}`}>{action.text}</p>
                  {action.detail && (
                    <p className="font-['Barlow'] font-semibold text-[#071E55] text-lg whitespace-nowrap mt-1">{action.detail}</p>
                  )}
                  <span className="block h-8" aria-hidden="true" />
                  <span
                    className={`mt-auto inline-flex items-center gap-2 font-['Barlow'] font-semibold text-[15px] ${action.cta}`}
                  >
                    {action.ctaText}
                    <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </>
              );
              const cls = `group relative flex flex-col overflow-hidden rounded-2xl p-7 lg:p-8 md:min-h-[280px] transition-all duration-300 hover:-translate-y-1 ${action.card}`;
              return action.external ? (
                <a key={action.label} href={action.href} className={cls}>
                  {card}
                </a>
              ) : (
                <Link key={action.label} href={action.href} className={cls}>
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-[#F4F6FA]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-[3px] bg-[#B2081B] flex-shrink-0" />
                <span className="font-['Barlow_Condensed'] font-bold text-sm tracking-[0.12em] uppercase text-[#B2081B]">
                  Service Capabilities
                </span>
              </div>
              <h2
                className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#071E55] leading-[1.05] mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                We Service What Others Can&apos;t
              </h2>
              <p className="font-['Barlow'] text-slate-600 leading-relaxed mb-9 text-base lg:text-lg max-w-2xl">
                A/V DAVEY technicians have the experience to troubleshoot and repair virtually any AV system. We support the equipment we sell and install, and we also service systems originally installed by others.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CAPABILITIES.map((cap) => (
                  <li
                    key={cap.label}
                    className="group flex items-center gap-4 rounded-xl bg-white border border-slate-200/80 px-4 py-3.5 shadow-[0_1px_2px_rgba(7,30,85,0.04)] hover:border-[#1265B7]/35 hover:shadow-[0_10px_24px_-16px_rgba(7,30,85,0.35)] transition-all duration-300"
                  >
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1265B7]/[0.08] text-[#1265B7] flex items-center justify-center group-hover:bg-[#1265B7] group-hover:text-white transition-colors"
                      aria-hidden="true"
                    >
                      <cap.icon size={19} strokeWidth={1.9} />
                    </span>
                    <span className="font-['Barlow'] font-medium text-[#071E55] text-[15px] lg:text-base leading-snug">{cap.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28 relative overflow-hidden rounded-2xl bg-[#071E55] text-white p-8 lg:p-10 shadow-[0_30px_60px_-30px_rgba(7,30,85,0.6)]">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#1265B7]/35 blur-3xl" aria-hidden="true" />
              <div className="absolute -left-16 -bottom-24 w-56 h-56 rounded-full bg-[#B2081B]/25 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 font-['Barlow'] text-[13px] font-medium text-white/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7CE0A8]" aria-hidden="true" />
                  Service team
                </span>
                <h2 className="font-['Barlow'] font-semibold text-2xl lg:text-[28px] leading-tight mt-5">
                  Something not working?
                </h2>
                <p className="font-['Barlow'] text-white/70 text-[15px] lg:text-base leading-relaxed mt-2 mb-8">
                  Tell us what&apos;s happening and we&apos;ll help you get it running again. We typically respond within one business day.
                </p>

                <div className="space-y-3">
                  <a
                    href={PHONE_HREF}
                    className="group flex items-center gap-4 rounded-xl bg-white/[0.06] ring-1 ring-white/10 p-4 hover:bg-white/[0.1] transition-colors"
                  >
                    <span className="w-11 h-11 rounded-lg bg-[#B2081B] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Phone size={19} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-['Barlow'] text-[13px] text-white/60">Call us</span>
                      <span className="block font-['Barlow'] font-semibold text-lg">{PHONE}</span>
                    </span>
                    <ArrowUpRight size={18} className="ml-auto text-white/50 group-hover:text-white transition-colors" aria-hidden="true" />
                  </a>
                  <a
                    href={EMAIL_HREF}
                    className="group flex items-center gap-4 rounded-xl bg-white/[0.06] ring-1 ring-white/10 p-4 hover:bg-white/[0.1] transition-colors"
                  >
                    <span className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Mail size={19} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-['Barlow'] text-[13px] text-white/60">Email us</span>
                      <span className="block font-['Barlow'] font-semibold text-lg break-all">{EMAIL}</span>
                    </span>
                    <ArrowUpRight size={18} className="ml-auto text-white/50 group-hover:text-white transition-colors flex-shrink-0" aria-hidden="true" />
                  </a>
                </div>

                <Link
                  href="/request-quote?type=service-support"
                  className="group mt-6 flex items-center justify-center gap-2 rounded-lg bg-white text-[#071E55] h-12 font-['Barlow'] font-semibold hover:bg-white/90 transition-colors"
                >
                  Request service online
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
