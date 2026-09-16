import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { selectedWork } from "@/lib/institutional";
import { siteConfig } from "@/lib/content";

export function generateStaticParams() {
  return selectedWork.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = selectedWork.find((entry) => entry.slug === slug);

  if (!item) return {};

  return {
    title: { absolute: `${item.title} | Selected Work | FACKTS Africa Group` },
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: {
      title: `${item.title} | FACKTS Africa Group`,
      description: item.summary,
      url: `${siteConfig.website}/work/${item.slug}`,
      siteName: "FACKTS Africa Group",
      images: [{ url: item.image, alt: item.title }],
      type: "article",
    },
    robots: { index: true, follow: true },
  };
}

function RelatedLink({ item }) {
  const external = item.relatedHref.startsWith("http");

  if (external) {
    return (
      <a className="btn-line" href={item.relatedHref}>
        {item.relatedLabel} <span className="arrow">↗</span>
      </a>
    );
  }

  return (
    <Link className="btn-line" href={item.relatedHref}>
      {item.relatedLabel} <span className="arrow">→</span>
    </Link>
  );
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const item = selectedWork.find((entry) => entry.slug === slug);

  if (!item) notFound();

  return (
    <main className="work-detail-page">
      <section className="work-detail-hero">
        <div className="shell work-detail-hero-grid">
          <div>
            <div className="eyebrow">Selected work / {item.category}</div>
            <h1>{item.title}</h1>
            <p>{item.summary}</p>
          </div>

          <div className="work-detail-image">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 44vw"
            />
          </div>
        </div>
      </section>

      <section className="work-detail-body">
        <div className="shell">
          <div className="case-section case-context">
            <div className="case-label">Context</div>
            <p>{item.context}</p>
          </div>

          <div className="case-two-col">
            <div className="case-section">
              <div className="case-label">What FACKTS operated</div>
              <ul>
                {item.operated.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="case-section">
              <div className="case-label">What was delivered</div>
              <ul>
                {item.delivered.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="case-evidence">
            <div className="case-label">Evidence / numbers</div>
            <div className="case-evidence-grid">
              {item.evidence.map((metric) => (
                <div key={`${item.slug}-${metric.label}`}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="case-section case-outcome">
            <div className="case-label">What it proved</div>
            <p>{item.outcome}</p>
          </div>

          <div className="case-actions">
            <RelatedLink item={item} />
            <Link className="quiet-link" href="/work">
              Back to selected work →
            </Link>
            <Link className="quiet-link" href="/partners">
              Discuss a partnership →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
