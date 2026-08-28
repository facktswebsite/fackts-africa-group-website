
import Image from "next/image";
import Link from "next/link";
import { experiences, cityVision } from "@/lib/content";

export const metadata = { title: "Experiences" };

export default function ExperiencesPage() {
  return <main><section className="archive-hero"><div className="shell"><div className="eyebrow">Experiences / live culture</div><h1 className="mega tight" style={{marginTop:20}}>CULTURE NEEDS<br/>A ROOM, A COURT,<br/>A CROWD.</h1><p className="body-xl">FACKTS experiences turn basketball and music into repeatable live formats, partner environments and cultural IP.</p></div></section><section className="shell archive-grid">{experiences.map(item => <Link href={`/experiences/${item.slug}`} className="archive-item" key={item.slug}><Image src={item.image} alt={item.title} fill sizes="(max-width:760px) 100vw, 55vw" /><div className="archive-item-copy"><div className="meta">{item.status} · {item.city}</div><h2>{item.title}</h2></div></Link>)}</section><section className="cities" style={{paddingTop:90}}><div className="shell"><div className="eyebrow">Where we are building next</div><h2 className="section-title" style={{marginTop:18}}>THE FORMAT SHOULD<br/>BE ABLE TO TRAVEL.</h2><div className="city-list">{cityVision.map(item => <div className="city-row" key={item.city}><strong>{item.city}</strong><span>{item.note}</span><span className="state">{item.state}</span></div>)}</div></div></section></main>;
}
