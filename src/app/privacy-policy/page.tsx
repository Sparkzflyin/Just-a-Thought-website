import type { Metadata } from "next";
import FadeIn from "@/components/framermotion/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Just a Thought's privacy policy — how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* Page Header */}
      <FadeIn>
        <section className="bg-gray-100 py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
              Effective Date: January 1, 2026
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Content Section */}
      <FadeIn>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <h2>1. Introduction and Scope</h2>
              <p>
                Just A Thought, LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) is the &ldquo;Business&rdquo; or
                &ldquo;Controller&rdquo; responsible for your data. This policy
                describes our practices for The Core Optimization Plan and The
                Rewire Lab. We utilize a &ldquo;subtractive methodology&rdquo;
                to remove organizational drag and friction. This policy serves
                as a legally binding contract regarding your data.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We collect &ldquo;Personal Information&rdquo; that identifies or
                relates to you.
              </p>

              <h2>3. How We Use Your Information</h2>
              <p>
                We process your data for the following reasonable and relevant
                purposes:
              </p>
              <ul>
                <li>
                  <strong>Consulting Services:</strong> To conduct audits,
                  identify &ldquo;Zombie Work,&rdquo; and deliver the
                  &ldquo;Undo. Unthink. Unlearn.&rdquo; framework.
                </li>
                <li>
                  <strong>Cohort Management:</strong> To deliver Accelerator
                  Programs and manage peer-to-peer accountability.
                </li>
                <li>
                  <strong>Strategic Communication:</strong> To send our blog and
                  educational content to subscribers using provided email
                  addresses.
                </li>
                <li>
                  <strong>Sales Engagement:</strong> To reach out regarding
                  future services and maintain the &ldquo;Alumni to
                  Enterprise&rdquo; loop.
                </li>
                <li>
                  <strong>Security:</strong> To detect and prevent fraudulent or
                  malicious activity.
                </li>
              </ul>

              <h2>4. Disclosure of Your Information</h2>
              <p>We may share categories of information with:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> CRM, email marketing, and
                  cohort platform providers (e.g., HubSpot, Brevo)
                </li>
                <li>
                  <strong>Advertising Partners:</strong> To provide targeted ads
                  for &ldquo;Visionary CEOs&rdquo; and &ldquo;Frustrated
                  High-Performers&rdquo;
                </li>
                <li>
                  <strong>Legal Successors:</strong> Entities involved in a
                  merger or sale of Just A Thought, LLC.
                </li>
              </ul>

              <h2>5. Your Privacy Rights</h2>
              <p>
                Depending on your residency (including California and Delaware),
                you have the following rights:
              </p>
              <ul>
                <li>
                  <strong>Right to Access:</strong> Request the specific pieces
                  of data we have collected.
                </li>
                <li>
                  <strong>Right to Correct:</strong> Request that we fix
                  inaccurate personal or professional data.
                </li>
                <li>
                  <strong>Right to Delete:</strong> Request deletion of your
                  data, subject to our retention needs for sales/legal
                  obligations.
                </li>
                <li>
                  <strong>Right to Opt-Out:</strong> Opt-out of the
                  &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of data for
                  targeted advertising.
                </li>
              </ul>
              <p>
                <strong>How to Exercise Rights:</strong> Contact us at
                info@thoughtschangelives.com. Delaware Appeals: If we deny a
                request, you may appeal by emailing us.
              </p>

              <h2>6. &ldquo;Do Not Track&rdquo; and Global Privacy Control</h2>
              <p>
                <strong>Do Not Track (DNT):</strong> We currently do not take
                action in response to proprietary DNT browser signals due to
                lack of standardization.
              </p>
              <p>
                <strong>Global Privacy Control (GPC):</strong> We do recognize
                and honor GPC signals as a valid request to opt-out of the sale
                and sharing of your personal information.
              </p>

              <h2>7. Children&apos;s Privacy</h2>
              <p>
                Our services are for adults; we do not knowingly collect data
                from children under 13. Per DOPPA, we do not market prohibited
                products (e.g., alcohol, tobacco, body piercing) to users under
                18.
              </p>

              <h2>8. Data Retention</h2>
              <p>
                We retain your Personal Data for as long as necessary to fulfill
                the purposes in this policy. Specifically:
              </p>
              <ul>
                <li>
                  <strong>Contact Information:</strong> We retain names and
                  email addresses indefinitely for continuous sales engagement
                  and blog subscriptions until you opt-out or request deletion.
                </li>
                <li>
                  <strong>Service Data:</strong> We retain audit and program
                  data for the duration of our engagement, including the 60-Day
                  Sprint and accountability rhythms.
                </li>
              </ul>

              <h2>9. Contact Us</h2>
              <address>
                Just A Thought, LLC
                <br />
                Middletown, DE
                <br />
                Email:{" "}
                <a href="mailto:info@thoughtschangelives.com">
                  info@thoughtschangelives.com
                </a>
                <br />
                Phone: 910-920-0731
              </address>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default PrivacyPolicyPage;
