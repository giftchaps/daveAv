import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '@/lib/constants';

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

const slug = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
            <div className="lg:col-span-8 font-['Barlow'] text-slate-600 leading-relaxed text-base lg:text-[17px]">
              <p className="text-sm uppercase tracking-wide text-slate-500 mb-6">Last updated: {updated}</p>
              <div className="space-y-4 mb-10">{intro}</div>
              <div className="space-y-10">
                {sections.map((s) => (
                  <section key={s.heading} id={slug(s.heading)} className="scroll-mt-28">
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

            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <nav aria-label="On this page" className="bg-[#F4F6FA] border border-[#DDE3EE] border-t-4 border-t-[#071E55] p-6">
                  <div className="font-['Barlow_Condensed'] font-bold uppercase tracking-[0.12em] text-sm text-[#B2081B] mb-4">
                    On this page
                  </div>
                  <ol className="space-y-2.5 font-['Barlow'] text-[15px]">
                    {sections.map((s, i) => (
                      <li key={s.heading} className="flex gap-3">
                        <span className="font-['Barlow_Condensed'] font-bold text-[#071E55]/40 w-5 flex-shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <a href={`#${slug(s.heading)}`} className="text-[#071E55] hover:text-[#B2081B] transition-colors">
                          {s.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <div className="bg-[#071E55] text-white p-6">
                  <div className="font-['Barlow_Condensed'] font-bold uppercase text-xl mb-2">Questions?</div>
                  <p className="font-['Barlow'] text-white/75 text-[15px] leading-relaxed mb-4">
                    Reach Davey directly and we&apos;ll be glad to help.
                  </p>
                  <a href={PHONE_HREF} className="flex items-center gap-2.5 font-['Barlow'] font-semibold hover:text-[#E8394B] transition-colors mb-2">
                    <Phone size={16} aria-hidden="true" /> {PHONE}
                  </a>
                  <a href={EMAIL_HREF} className="flex items-center gap-2.5 font-['Barlow'] font-semibold hover:text-[#E8394B] transition-colors">
                    <Mail size={16} aria-hidden="true" /> {EMAIL}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
