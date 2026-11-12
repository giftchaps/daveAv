import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using the A/V DAVEY website, including quotes, project information, links to other sites and how to contact us.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      breadcrumb="Terms of Service"
      updated="November 2026"
      intro={
        <p>
          These terms apply to your use of the A/V DAVEY, Inc. website. By using the site, you agree to them. Work we do
          for you is covered by the proposal or agreement we provide for that project, not by these website terms.
        </p>
      }
      sections={[
        {
          heading: "Information on this site",
          body: (
            <p>
              We work to keep the information on this website accurate and current, but service descriptions, project
              examples and equipment details are provided for general information and may change without notice.
            </p>
          ),
        },
        {
          heading: "Quotes and promotions",
          body: (
            <>
              <p>
                Submitting a quote request does not create a contract. Pricing, availability and scope are confirmed only
                in a written proposal from A/V DAVEY.
              </p>
              <p>
                Promotions shown on the site apply to new bookings, are subject to availability, cannot be combined unless
                stated, and may end at any time. Eligibility for organization-specific offers is confirmed when we
                prepare your proposal.
              </p>
            </>
          ),
        },
        {
          heading: "Using the site",
          body: (
            <p>
              Please don&apos;t misuse the website, including by sending spam or automated submissions through our forms,
              attempting to interfere with how the site works, or submitting false information.
            </p>
          ),
        },
        {
          heading: "Content and trademarks",
          body: (
            <p>
              The A/V DAVEY name, logo, A/V-ATORS emblem, photographs and written content on this site belong to A/V
              DAVEY or are used with permission. Client names and logos belong to their respective owners and are shown
              to identify organizations we have worked with. Please don&apos;t copy or reuse site content without
              permission.
            </p>
          ),
        },
        {
          heading: "Links to other sites",
          body: (
            <p>
              The site links to other websites, such as our Facebook page. We aren&apos;t responsible for the content or
              practices of those sites.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              The website is provided &ldquo;as is.&rdquo; To the extent permitted by law, A/V DAVEY is not liable for
              any damages arising from your use of the website itself.
            </p>
          ),
        },
        {
          heading: "Governing law and contact",
          body: (
            <p>
              These terms are governed by the laws of the State of Connecticut. We may update them from time to time.
              Questions? Email <a href={EMAIL_HREF}>{EMAIL}</a> or call <a href={PHONE_HREF}>{PHONE}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
