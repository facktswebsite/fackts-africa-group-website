import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: { absolute: "Contact | FACKTS Africa Group" },
  description:
    "FACKTS Africa Group receives partnership briefs around brand activations, properties, basketball infrastructure, institutions, music, community programmes and other ecosystem opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="contact-page institutional-contact">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <div className="eyebrow">Partnership enquiries</div>

          <h1 className="section-title page-title" style={{ marginTop: 20 }}>
            THE OUTCOME STARTS THE BRIEF.
          </h1>

          <p
            className="body-xl text-muted"
            style={{ maxWidth: 650, marginTop: 28 }}
          >
            FACKTS Africa Group structures partnership conversations around the
            outcome, audience, timing and operating environment before selecting
            the relevant platform, property, programme or activation format.
          </p>

          <div className="contact-outcome-note">
            <strong>BUILD WITH FACKTS AFRICA GROUP</strong>
            <p>
              A useful brief identifies the organisation, intended audience,
              desired outcome, timing and context. The solution is then shaped
              around the requirement.
            </p>
          </div>

          <div className="contact-meta">
            <div>
              <span>Email</span>
              <span>{siteConfig.email}</span>
            </div>
            <div>
              <span>Phone</span>
              <span>{siteConfig.phone}</span>
            </div>
            <div>
              <span>Address</span>
              <span>
                {siteConfig.addressLine1}, {siteConfig.addressLine2}
              </span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
