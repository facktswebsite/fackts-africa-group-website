import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences } from "@/lib/content";

export function generateStaticParams() {
  return experiences.map(({ slug }) => ({ slug }));
}

export default async function ExperienceDetail({ params }) {
  const { slug } = await params;
  const item = experiences.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <main className="experience-detail-v44">
      <section className="experience-detail-hero-v44">
        <div className="shell">
          <div className="eyebrow">FACKTS Experience</div>
          <div className="experience-detail-meta-v44">{item.type} · {item.city} · {item.status}</div>
          <h1>{item.title}</h1>
        </div>
      </section>

      <section className="experience-detail-body-v44">
        <div className="shell experience-detail-grid-v44">
          <aside>
            <span>STATUS</span><strong>{item.status}</strong>
            <span>BASE</span><strong>{item.city}</strong>
            <span>FORMAT</span><strong>{item.type}</strong>
          </aside>
          <div>
            <p className="experience-detail-lead-v44">{item.description}</p>
            <div className="experience-detail-definition-v44">
              <h2>WHAT BELONGS HERE</h2>
              <p>
                Dates, participation information, venue details, competition or programme structure,
                partner integrations and the practical information needed to take part in this experience.
              </p>
            </div>
            <div className="experience-detail-definition-v44">
              <h2>WHAT DOESN&apos;T</h2>
              <p>
                A long duplicate gallery or media archive. Once the cameras turn the experience into episodes,
                interviews or highlights, that material belongs under FACKTS Originals.
              </p>
            </div>
            <div className="experience-detail-actions-v44">
              <Link href="/partners">Build around this experience ↗</Link>
              <Link href="/originals">Explore FACKTS Originals ↗</Link>
              <Link href="/experiences">Back to Experiences →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
