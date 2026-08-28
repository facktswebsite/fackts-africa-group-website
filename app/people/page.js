import Image from "next/image";
import { management, siteConfig } from "@/lib/content";

export const metadata = { title: "People" };

export default function PeoplePage() {
  return <main className="people-page">
    <section className="archive-hero compact-archive-hero">
      <div className="shell">
        <div className="eyebrow">People / FACKTS Africa Group</div>
        <h1 className="section-title" style={{marginTop:20}}>THE PEOPLE BEHIND FACKTS.</h1>
        <p className="body-xl">Management, captains and operators keep the group moving across courts, studios, production, events and partnerships.</p>
        <div className="management-directory">{management.map(person => <div className="management-directory-row" key={`${person.name}-${person.role}`}><strong>{person.name}</strong><span>{person.role}</span><small>{person.city}</small></div>)}</div>
      </div>
    </section>

    <section className="people-gateways">
      <div className="shell"><div className="eyebrow">The wider FACKTS people</div><h2 className="section-title" style={{marginTop:18}}>MEET THE CULTURE WHERE IT LIVES.</h2><p className="body-xl text-muted people-gateway-intro">We are not publishing anonymous placeholder identities on the corporate site. Athlete profiles live in FACKTS Hoops; artist, producer and music-project discovery lives in FACKTS Music.</p></div>
      <div className="shell people-gateway-grid">
        <a className="people-gateway-card" href={siteConfig.hoopsPlayers}><Image src="/fackts/hoops/player-portrait-2.webp" alt="Basketball player in the FACKTS ecosystem" fill sizes="(max-width:760px) 100vw, 50vw" /><div className="people-gateway-copy"><div className="meta">ATHLETES / TEAMS / COACHES</div><h3>FACKTS HOOPS</h3><span>Open player profiles ↗</span></div></a>
        <a className="people-gateway-card" href={siteConfig.musicProfileExample}><Image src="/fackts/music/artist-blue.webp" alt="Music creative in the FACKTS ecosystem" fill sizes="(max-width:760px) 100vw, 50vw" /><div className="people-gateway-copy"><div className="meta">ARTISTS / PRODUCERS / CREATORS</div><h3>FACKTS MUSIC</h3><span>Enter the music people ↗</span></div></a>
      </div>
    </section>
  </main>;
}
