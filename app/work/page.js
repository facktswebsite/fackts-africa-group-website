import Image from "next/image";
import Link from "next/link";
import { selectedWork } from "@/lib/institutional";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: {
    absolute: "Selected Work | FACKTS Africa Group",
  },
  description:
    "Selected FACKTS Africa work across basketball properties, event documentation, music project systems and cultural archives.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Work | FACKTS Africa Group",
    description:
      "Real FACKTS projects, systems, properties and evidence of execution across basketball, music and culture.",
    url: `${siteConfig.website}/work`,
    siteName: "FACKTS Africa Group",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WorkPage() {
  return (
    <main className="work-page">
      <section className="work-hero">
        <div className="shell work-hero-grid">
          <div>
            <div className="eyebrow">Selected work / evidence</div>
            <h1>WHAT FACKTS HAS ACTUALLY PUT INTO MOTION.</h1>
          </div>
          <div>
            <p>
              Originals documents culture. Experiences creates live formats.
              Selected Work shows the organisational layer underneath them:
              projects, systems, operations and evidence.
            </p>
            <Link href="/partners">Build something with FACKTS ↗</Link>
          </div>
        </div>
      </section>

      <section className="work-list">
        <div className="shell">
          {selectedWork.map((item, index) => (
            <article className="work-row" key={item.slug}>
              <div className="work-row-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="work-row-media">
                <Image
                  src={item.image}
                  alt={`${item.title} — FACKTS selected work`}
                  fill
                  sizes="(max-width: 860px) 100vw, 38vw"
                />
              </div>

              <div className="work-row-copy">
                <div className="meta">{item.category}</div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>

                <div className="work-row-evidence">
                  {item.evidence.slice(0, 3).map((metric) => (
                    <div key={`${item.slug}-${metric.label}`}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/work/${item.slug}`}>
                  Open case study <b>→</b>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
