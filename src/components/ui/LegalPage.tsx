import React from 'react';
import { PageHero } from '@/components/ui/PageHero';

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

/** Shared layout for the Privacy Policy and Terms of Service pages. */
export function LegalPage({
  title,
  breadcrumb,
  updated,
  intro,
  sections,
}: {
  title: string;
  breadcrumb: string;
  updated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero title={title} breadcrumbs={[{ label: breadcrumb }]} />
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl font-['Barlow'] text-slate-600 leading-relaxed text-base lg:text-[17px]">
            <p className="text-sm uppercase tracking-wide text-slate-500 mb-6">Last updated: {updated}</p>
            <div className="space-y-4 mb-10">{intro}</div>
            <div className="space-y-10">
              {sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="font-['Barlow_Condensed'] font-bold uppercase text-[#071E55] text-2xl mb-3 pb-2 border-b border-[#DDE3EE]">
                    {s.heading}
                  </h2>
                  <div className="space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-[#1265B7] [&_a]:underline">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
