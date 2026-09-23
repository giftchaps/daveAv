import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyAvDavey } from "@/components/sections/WhyAvDavey";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "A/V DAVEY | Professional Audio Visual Solutions | Connecticut",
  description:
    "Connecticut's trusted AV partner since 1989. Professional AV installation, live event production, service & support, video production, and equipment sales. Bridgeport, CT.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ClientStrip />
      <ServicesSection />
      <WhyAvDavey />
      <FeaturedProjects />
      <FinalCTA />
    </>
  );
}
