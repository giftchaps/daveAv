import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How A/V DAVEY collects, uses and protects the information you share through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      breadcrumb="Privacy Policy"
      updated="November 2026"
      intro={
        <p>
          A/V DAVEY, Inc. (&ldquo;A/V DAVEY,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy
          explains what information we collect through this website, how we use it, and the choices you have. We keep it
          simple: we only collect what we need to respond to you and to provide our audio visual services.
        </p>
      }
      sections={[
        {
          heading: "Information you give us",
          body: (
            <>
              <p>When you use our contact or quote request forms, you send us:</p>
              <ul>
                <li>Your name, email address, and optionally your company and phone number</li>
                <li>Details about your project or question, such as project type, location, timeline and description</li>
              </ul>
              <p>You can also contact us directly by phone or email, in which case we receive whatever you choose to share.</p>
            </>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <>
              <ul>
                <li>To reply to your message, prepare quotes and proposals, and provide the services you ask for</li>
                <li>To send you a one-time confirmation email when you submit a form</li>
                <li>To keep a record of our conversation so we can follow up on your project</li>
              </ul>
              <p>
                We do not sell or rent your information, and we do not add you to a marketing mailing list from a form
                submission.
              </p>
            </>
          ),
        },
        {
          heading: "How your information is handled",
          body: (
            <p>
              Form submissions are delivered to our business email inbox through our email provider. The website is
              hosted by Vercel, which processes requests to run the site. These providers handle data on our behalf and
              only as needed to deliver their services. We keep project correspondence for as long as it is useful for
              serving you and for our business records.
            </p>
          ),
        },
        {
          heading: "Cookies and third-party content",
          body: (
            <>
              <p>
                This website does not use advertising or analytics cookies. It stores a small setting in your browser
                if you close the promotion banner, so it stays hidden for that visit.
              </p>
              <p>
                Some content is loaded from other services: web fonts from Google Fonts and recent posts and photos from
                our Facebook page. When your browser loads that content, those services receive standard technical
                information such as your IP address, under their own privacy policies.
              </p>
            </>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <p>
              You can ask us to see, correct or delete the information you sent us at any time. Email{" "}
              <a href={EMAIL_HREF}>{EMAIL}</a> or call <a href={PHONE_HREF}>{PHONE}</a> and we will take care of it.
            </p>
          ),
        },
        {
          heading: "Security",
          body: (
            <p>
              The site is served over an encrypted (HTTPS) connection, and we take reasonable steps to protect the
              information you share. No method of transmission over the internet is completely secure, so please
              don&apos;t send sensitive information such as payment details through the website forms.
            </p>
          ),
        },
        {
          heading: "Children",
          body: <p>This website is intended for businesses and adults. We do not knowingly collect information from children under 13.</p>,
        },
        {
          heading: "Changes and contact",
          body: (
            <p>
              We may update this policy from time to time; the date at the top shows the latest version. Questions? Contact
              A/V DAVEY in Bridgeport, Connecticut at <a href={EMAIL_HREF}>{EMAIL}</a> or <a href={PHONE_HREF}>{PHONE}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
