
import Image from "next/image";
import { notFound } from "next/navigation";
import { experiences } from "@/lib/content";

export function generateStaticParams() { return experiences.map(({ slug }) => ({ slug })); }

export default async function ExperienceDetail({ params }) {
  const { slug } = await params;
  const item = experiences.find(entry => entry.slug === slug);
  if (!item) notFound();
  return <main><section className="detail-hero"><Image src={item.image} alt={item.title} fill priority sizes="100vw" /><div className="shell detail-hero-copy"><div className="meta">{item.status} · {item.city} · {item.type}</div><h1 className="mega tight" style={{marginTop:18}}>{item.title}</h1></div></section><section className="detail-body"><div className="shell detail-body-grid"><div className="detail-side">FACKTS EXPERIENCE<br/>{item.city}<br/>{item.status}</div><div><p className="body-xl">{item.description}</p><p style={{fontSize:18,lineHeight:1.7,maxWidth:800}}>This experience page is ready to carry galleries, partner integrations, city editions, event dates, videos and post-event evidence as each format develops.</p></div></div></section></main>;
}
