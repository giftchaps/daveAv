import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
