
import Image from "next/image";
import Link from "next/link";
import { people, management } from "@/lib/content";

export const metadata = { title: "People" };

export default function PeoplePage() {
  return <main className="people-page">
    <section className="archive-hero compact-archive-hero">
      <div className="shell">
        <div className="eyebrow">People / FACKTS Africa Group</div>
        <h1 className="section-title" style={{marginTop:20}}>THE PEOPLE BEHIND FACKTS.</h1>
        <p className="body-xl">Start with the management, captains and operators behind the group. The wider culture archive will grow into confirmed player, artist, producer, creator and coach profiles as names and photographs are mapped.</p>
        <div className="management-directory">{management.map(person => <div className="management-directory-row" key={`${person.name}-${person.role}`}><strong>{person.name}</strong><span>{person.role}</span><small>{person.city}</small></div>)}</div>
      </div>
    </section>
    <section className="people-network">
      <div className="shell"><div className="eyebrow">Culture network / photography archive</div></div>
      <div className="people-wall">{people.map(person => <Link className="wall-person" href={`/people/${person.slug}`} key={person.slug}><Image src={person.image} alt={`${person.role} in the FACKTS ecosystem`} width={900} height={1200} /><div className="caption"><h3>{person.name}</h3><p>{person.role} · {person.city}</p></div></Link>)}</div>
    </section>
  </main>;
}
