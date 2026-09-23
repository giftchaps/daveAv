import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "A/V DAVEY Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        breadcrumbs={[{ label: "Terms of Service" }]}
      />
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl font-['Barlow'] text-slate-600 space-y-6 leading-relaxed">
            <p>Terms of service will be updated. Please contact us at <a href="mailto:davey@avdavey.com" className="text-[#1265B7] underline">davey@avdavey.com</a> with any questions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
