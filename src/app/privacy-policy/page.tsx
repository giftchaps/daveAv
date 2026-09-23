import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "A/V DAVEY Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl font-['Barlow'] text-slate-600 space-y-6 leading-relaxed">
            <p>This privacy policy will be updated. Please contact us at <a href="mailto:davey@avdavey.com" className="text-[#1265B7] underline">davey@avdavey.com</a> with any questions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
