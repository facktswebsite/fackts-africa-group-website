import Link from "next/link";
import { siteConfig } from "@/lib/content";

const legalLinks = [
  ["/legal", "Legal centre"],
  ["/terms", "Terms of use & participation"],
  ["/privacy", "Privacy & data protection"],
  ["/consent", "Media & recording consent"],
];

export default function LegalLayout({ eyebrow, title, intro, updated, children }) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="shell legal-hero-grid">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h1>{title}</h1>
          </div>
          <div>
            <p>{intro}</p>
            <span>Last updated: {updated}</span>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="shell legal-body-grid">
          <aside className="legal-nav">
            <span>FACKTS LEGAL</span>
            <nav>
              {legalLinks.map(([href, label]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
            </nav>
            <div className="legal-contact-card">
              <strong>Questions / rights requests</strong>
              <p>{siteConfig.email}</p>
              <a href={`mailto:${siteConfig.email}?subject=FACKTS%20Privacy%20or%20Consent%20Request`}>
                Email FACKTS ↗
              </a>
            </div>
          </aside>

          <article className="legal-copy">{children}</article>
        </div>
      </section>
    </main>
  );
}
