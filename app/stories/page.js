
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/content";

export const metadata = { title: "Stories" };

export default function StoriesPage() {
  return <main><section className="archive-hero"><div className="shell"><div className="eyebrow">Stories / FACKTS archive</div><h1 className="mega tight" style={{marginTop:20}}>CULTURE<br/>LEAVES EVIDENCE.</h1><p className="body-xl">Court stories, studio stories, people, process and the moments around the headline. This archive grows as FACKTS does.</p></div></section><section className="shell archive-grid">{stories.map(story => <Link href={`/stories/${story.slug}`} className="archive-item" key={story.slug}><Image src={story.image} alt={story.title} fill sizes="(max-width:760px) 100vw, 55vw" /><div className="archive-item-copy"><div className="meta">{story.category} · {story.city}</div><h2>{story.title}</h2></div></Link>)}</section></main>;
}
