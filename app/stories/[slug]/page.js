import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/lib/content";

export function generateStaticParams() { return stories.map(({ slug }) => ({ slug })); }

export default async function StoryDetail({ params }) {
  const { slug } = await params;
  const story = stories.find(item => item.slug === slug);
  if (!story) notFound();
  return <main>
    <section className="detail-hero"><Image src={story.image} alt={story.title} fill priority sizes="100vw" /><div className="shell detail-hero-copy"><div className="meta">{story.category} · {story.city}</div><h1 className="section-title detail-title" style={{marginTop:18}}>{story.title}</h1></div></section>
    <section className="detail-body"><div className="shell detail-body-grid"><div className="detail-side">FACKTS STORY<br/>{story.city}<br/>ARCHIVE ENTRY</div><div><p className="body-xl">{story.excerpt}</p><p className="detail-note">FACKTS stories connect the corporate archive to the places where the work actually lives: court footage, player profiles, interviews, sessions and live project platforms.</p><div className="detail-actions">{story.evidenceUrl && <a className="btn-line" href={story.evidenceUrl}>{story.evidenceLabel || "View evidence"} <span className="arrow">↗</span></a>}<Link className="quiet-link dark" href="/stories">Back to stories →</Link></div></div></div></section>
  </main>;
}
