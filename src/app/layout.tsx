import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PromoBanner } from "@/components/layout/PromoBanner";
import { getActivePromotions } from "@/lib/promotions";
import { EMAIL, FACEBOOK_URL, PHONE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "A/V DAVEY",
  title: {
    default: "A/V DAVEY | Professional Audio Visual Solutions | Connecticut",
    template: "%s | A/V DAVEY",
  },
  description:
    "Connecticut's trusted AV partner since 1989. Professional AV installation, live event production, service & support, video production, and equipment sales. Bridgeport, CT.",
  keywords: [
    "AV installation",
    "audio visual Connecticut",
    "event production CT",
    "AV service support",
    "video production",
    "AV equipment",
    "Bridgeport CT",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "A/V DAVEY",
  },
  twitter: {
    card: "summary_large_image",
  },
  formatDetection: {
    telephone: false,
  },
};

// Structured data so search engines understand who A/V DAVEY is and where it works.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "A/V DAVEY",
  description:
    "Connecticut audio visual company since 1989: AV installation and integration, live event production and staging, service and support, video production and streaming, and equipment sales.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-avdavey.png`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  telephone: PHONE,
  email: EMAIL,
  foundingDate: "1989",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bridgeport",
    addressRegion: "CT",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Connecticut" },
    { "@type": "Place", name: "New York Tri-State Area" },
  ],
  sameAs: [FACEBOOK_URL],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const activePromotions = getActivePromotions();

  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&family=Barlow:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c") }}
        />
        <PromoBanner promotions={activePromotions} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
