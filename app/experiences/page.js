import Link from "next/link";
import { experiences, siteConfig } from "@/lib/content";

export const metadata = {
  title: { absolute: "FACKTS Experiences | Live FACKTS Properties in Kenya" },
  description:
    "FACKTS Experiences are the live properties people can attend, compete in, participate in, sponsor or activate around, including Court Takeovers, VERSUS and FACKTS 3×3.",
  alternates: { canonical: "/experiences" },
  openGraph: {
    title: "FACKTS Experiences | Live FACKTS Properties in Kenya",
    description: "Live FACKTS properties across basketball, music, community and brand activation.",
    url: `${siteConfig.website}/experiences`,
    siteName: "FACKTS Africa Group",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ExperiencesPage() {
  return (
    <main className="experiences-v44">
      <section className="experience-hero-v44">
        <div className="shell experience-hero-grid-v44">
          <div>
            <div className="eyebrow">FACKTS Experiences</div>
            <h1>SHOW UP.<br />PLAY.<br />PARTICIPATE.</h1>
          </div>
          <div>
            <p>
              Experiences are the physical FACKTS properties. They are not another content archive.
              These are the formats people can attend, compete in, perform at, sponsor or build around.
            </p>
            <Link href="/originals">Looking for the videos? Open FACKTS Originals ↗</Link>
          </div>
        </div>
      </section>

      <section className="experience-list-v44">
        <div className="shell">
          {experiences.map((item, index) => (
            <Link href={`/experiences/${item.slug}`} className="experience-row-v44" key={item.slug}>
              <span className="experience-index-v44">{String(index + 1).padStart(2, "0")}</span>
              <div className="experience-main-v44">
                <div className="experience-meta-v44">{item.type} · {item.city}</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="experience-status-v44">{item.status}</div>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="experience-rule-v44">
        <div className="shell experience-rule-grid-v44">
          <div className="eyebrow">The distinction</div>
          <div>
            <h2>EXPERIENCE FIRST. DOCUMENTATION SECOND.</h2>
            <p>
              When an experience is filmed, the resulting episodes, highlights and interviews belong in Originals.
              This keeps the live property clear while still preserving its story and evidence.
            </p>
            <Link href="/partners">Build an experience with FACKTS ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
