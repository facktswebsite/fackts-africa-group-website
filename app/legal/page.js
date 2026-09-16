import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: { absolute: "Legal & Consent Centre | FACKTS Africa Group" },
  description:
    "FACKTS Africa legal, privacy, data protection and media-consent framework for websites, platforms, events, recordings and participation in Kenya.",
  alternates: { canonical: "/legal" },
};

const standards = [
  ["01", "Notice before capture", "People should know when FACKTS intends to record photography, video or audio and the main ways the material may be used."],
  ["02", "Consent is specific", "Where consent is our lawful basis, we ask for it for stated purposes instead of treating registration as unlimited permission."],
  ["03", "Minors receive stronger protection", "Identifiable media or personal data involving a child requires parent or guardian consent and must be handled with the child's best interests in mind."],
  ["04", "Opt-out must be practical", "Where possible at events, we provide a workable way for people who do not wish to be recorded to identify themselves or use a designated area."],
  ["05", "Media consent is not music ownership", "Permission to use a person's image or voice does not automatically transfer copyright, master rights, publishing rights or performer rights."],
  ["06", "Partners remain independent", "A FACKTS partnership does not by itself mean common ownership, agency or unrestricted data-sharing between organisations."],
];

export default function LegalCentrePage() {
  return (
    <LegalLayout
      eyebrow="Legal / rights / consent"
      title="THE FACKTS CONSENT STANDARD."
      intro="Culture can move fast. Rights should not get lost in the movement. This centre explains the baseline rules FACKTS applies across websites, platforms, events, photography, video, audio, talent participation and partner activity."
      updated="16 September 2026"
    >
      <section className="legal-lead-block">
        <h2>Built for a platform that works with real people.</h2>
        <p>
          FACKTS works across basketball, music, creator projects, live events,
          profiles, statistics, archives, interviews and partnerships. That makes
          consent, privacy, intellectual property and clear participation rules an
          operating requirement, not fine print.
        </p>
      </section>

      <div className="legal-standard-grid">
        {standards.map(([n, title, copy]) => (
          <div key={n}>
            <span>{n}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </div>

      <section className="legal-link-cards">
        <Link href="/terms">
          <span>01</span><strong>Terms of Use & Participation</strong><p>Website, platform, event, competition, content and partner-use rules.</p><b>Open terms →</b>
        </Link>
        <Link href="/privacy">
          <span>02</span><strong>Privacy & Data Protection Notice</strong><p>What FACKTS collects, why, how long, sharing, children and data-subject rights.</p><b>Open privacy notice →</b>
        </Link>
        <Link href="/consent">
          <span>03</span><strong>Media, Photography & Recording Consent</strong><p>Recording notices, opt-outs, featured participants, minors, withdrawal and rights separation.</p><b>Open consent policy →</b>
        </Link>
      </section>

      <section className="legal-law-note">
        <span>KENYAN LEGAL FRAMEWORK</span>
        <h2>Designed with Kenyan rights and obligations in view.</h2>
        <p>
          The framework references the Constitution of Kenya, the Data Protection
          Act 2019 and its regulations, the Children Act 2022, the Copyright Act,
          the Consumer Protection Act, the Computer Misuse and Cybercrimes Act,
          and guidance issued by the Office of the Data Protection Commissioner.
          Mandatory law prevails where it provides stronger rights or obligations.
        </p>
      </section>
    </LegalLayout>
  );
}
