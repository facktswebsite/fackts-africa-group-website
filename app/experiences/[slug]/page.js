import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences } from "@/lib/content";

export function generateStaticParams() { return experiences.map(({ slug }) => ({ slug })); }

export default async function ExperienceDetail({ params }) {
  const { slug } = await params;
  const item = experiences.find(entry => entry.slug === slug);
  if (!item) notFound();
  return <main>
    <section className="detail-hero"><Image src={item.image} alt={item.title} fill priority sizes="100vw" /><div className="shell detail-hero-copy"><div className="meta">{item.status} · {item.city} · {item.type}</div><h1 className="section-title detail-title" style={{marginTop:18}}>{item.title}</h1></div></section>
    <section className="detail-body"><div className="shell detail-body-grid"><div className="detail-side">FACKTS EXPERIENCE<br/>{item.city}<br/>{item.status}</div><div><p className="body-xl">{item.description}</p><p className="detail-note">As each format goes live, this page becomes its public home for dates, venue information, galleries, partner integrations, video and post-event evidence.</p><div className="detail-actions"><Link className="btn-line dark-line" href="/partners">Build around this experience <span className="arrow">→</span></Link><Link className="quiet-link dark" href="/experiences">Back to experiences →</Link></div></div></div></section>
  </main>;
}
