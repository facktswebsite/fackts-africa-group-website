
import Image from "next/image";
import { notFound } from "next/navigation";
import { stories } from "@/lib/content";

export function generateStaticParams() { return stories.map(({ slug }) => ({ slug })); }

export default async function StoryDetail({ params }) {
  const { slug } = await params;
  const story = stories.find(item => item.slug === slug);
  if (!story) notFound();
  return <main><section className="detail-hero"><Image src={story.image} alt={story.title} fill priority sizes="100vw" /><div className="shell detail-hero-copy"><div className="meta">{story.category} · {story.city}</div><h1 className="mega tight" style={{marginTop:18}}>{story.title}</h1></div></section><section className="detail-body"><div className="shell detail-body-grid"><div className="detail-side">FACKTS STORY<br/>{story.city}<br/>ARCHIVE ENTRY</div><div><p className="body-xl">{story.excerpt}</p><p style={{fontSize:18,lineHeight:1.7,maxWidth:800}}>This route is intentionally structured as a scalable editorial detail page. As FACKTS publishes confirmed interviews, event notes, video embeds and credits, they can be added here without rebuilding the archive architecture.</p></div></div></section></main>;
}
