import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { HEADER_IMAGES } from "@/lib/headerImages";
import { Wrench, HelpCircle, Calendar, Phone, Mail } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support Hub",
  description:
    "Get help from A/V DAVEY. Request service, ask a question, book an event, or contact us directly. Connecticut AV support.",
};

const actions = [
  {
    icon: Wrench,
    title: "Request Service",
    description: "Submit a service request for an existing AV system. We'll respond promptly.",
    href: "/request-quote?type=service-support",
    cta: "Request Service",
    color: "bg-[#071E55] text-white border-[#071E55]",
    iconColor: "text-white",
  },
  {
    icon: HelpCircle,
    title: "Ask a Question",
    description: "Have a question about AV? Not sure what you need? We're happy to help.",
    href: "/contact",
    cta: "Ask a Question",
    color: "bg-white text-[#071E55] border-slate-200/80",
    iconColor: "text-[#1265B7]",
  },
  {
    icon: Calendar,
    title: "Event / Rental Inquiry",
    description: "Planning an event? Tell us about your AV needs and we'll put together a proposal.",
    href: "/request-quote?type=event-production",
    cta: "Inquire Now",
    color: "bg-[#1265B7] text-white border-[#1265B7]",
    iconColor: "text-white",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Prefer to talk? Call us directly and speak with someone who knows AV.",
    href: PHONE_HREF,
    cta: PHONE,
    color: "bg-[#B2081B] text-white border-[#B2081B]",
    iconColor: "text-white",
    external: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message and we'll get back to you promptly.",
    href: EMAIL_HREF,
    cta: EMAIL,
    color: "bg-[#F4F6FA] text-[#071E55] border-slate-200/80",
    iconColor: "text-[#1265B7]",
    external: true,
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        image={{ src: HEADER_IMAGES["support"] }}
        eyebrow="Support"
        title="How Can We"
        titleRed="Help You?"
        subtitle="Whether you need service, have a question, or want to plan an event, A/V DAVEY is here. Choose the option that works best for you."
        breadcrumbs={[{ label: "Support" }]}
      />

      <section className="py-14 lg:py-20 bg-white" aria-labelledby="support-actions-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="support-actions-heading" className="sr-only">Support options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {actions.map((action) => {
              const Icon = action.icon;
              const content = (
                <>
                  <div className="mb-4">
                    <Icon size={40} className={action.iconColor} aria-hidden="true" />
                  </div>
                  <div className="font-['Barlow_Condensed'] font-bold uppercase text-xl mb-2">
                    {action.title}
                  </div>
                  <p
                    className="font-['Barlow'] text-sm leading-relaxed mb-6 opacity-75 flex-1"
                    dangerouslySetInnerHTML={{ __html: action.description.replace(/'/g, "'") }}
                  />
                  <div className="font-['Barlow'] font-bold text-sm uppercase tracking-wide underline underline-offset-2">
                    {action.cta}
                  </div>
                </>
              );

              const classes = `group flex flex-col p-7 rounded-2xl border ${action.color} shadow-[0_1px_2px_rgba(7,30,85,0.04),0_10px_30px_-18px_rgba(7,30,85,0.25)] hover:-translate-y-1 hover:shadow-[0_22px_44px_-20px_rgba(7,30,85,0.35)] transition-all duration-300 min-h-[220px]`;

              if (action.external) {
                return (
                  <a key={action.title} href={action.href} className={classes} aria-label={action.title}>
                    {content}
                  </a>
                );
              }
              return (
                <Link key={action.title} href={action.href} className={classes}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
