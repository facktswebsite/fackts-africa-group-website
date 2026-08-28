
import Image from "next/image";
import Link from "next/link";
import { people, siteConfig } from "@/lib/content";

export const metadata = { title: "FACKTS Hoops" };

export default function HoopsPage() {
  const hoopers = people.filter(p => p.role === "HOOPER");
  return <main>
    <section className="page-hero"><div className="page-hero-media"><Image src="/fackts/hoops/court-action.webp" alt="Basketball player at the rim" fill priority sizes="100vw" /></div><div className="shell page-hero-content"><div className="eyebrow">FACKTS Hoops</div><h1 className="section-title page-title">THE GAME BEYOND THE SCORE.</h1><p className="body-xl page-desc">Players become stories. Teams become systems. Courts become stages. Games become data. Basketball becomes a cultural property.</p><div style={{marginTop:28}}><a className="btn-line" href={siteConfig.hoopsPlatform} target="_blank" rel="noreferrer">Open the Hoops platform <span className="arrow">↗</span></a></div></div></section>

    <div className="score-ribbon"><div className="score-cell"><b>24</b><span>Shot clock / motion</span></div><div className="score-cell"><b>01</b><span>Player first</span></div><div className="score-cell"><b>05</b><span>Team structure</span></div><div className="score-cell"><b>∞</b><span>Story archive</span></div><div className="score-cell"><b>AF</b><span>Continental horizon</span></div></div>

    <section className="hoops-manifesto"><div className="shell hoops-manifesto-grid"><div><div className="eyebrow">The Hoops thesis</div></div><p className="body-xl">A team does not buy an app. It buys a better-run, more visible basketball programme. A tournament owner does not buy cameras. It buys credibility, experience, archive and a reason for people to come back. A brand does not buy basketball. It buys culturally relevant access to the community around it.</p></div></section>

    <div className="full-bleed-photo"><Image src="/fackts/hoops/court-contest.webp" alt="Basketball contest at the rim" fill sizes="100vw" /><div className="broadcast-tag"><span>FACKTS HOOPS</span><span>COURT FEED</span><span>LIVE CULTURE</span></div></div>

    <section className="player-strip"><div className="shell"><div className="eyebrow">Players are not thumbnails</div><h2 className="section-title" style={{marginTop:18}}>MAKE THE ATHLETE<br/>THE INTERFACE.</h2></div><div className="player-strip-track no-scrollbar">{hoopers.map((person,index)=><Link href={`/people/${person.slug}`} className="player-card" key={person.slug}><div className="pic"><Image src={person.image} alt="Basketball player" fill sizes="(max-width:760px) 70vw, 25vw" /></div><div className="player-meta"><span>{person.name}</span><span>0{index+1} / {person.city}</span></div></Link>)}</div></section>

    <section className="hoops-system"><div className="shell"><div className="eyebrow">What the basketball world becomes</div><h2 className="section-title" style={{marginTop:18}}>PLAY. PROFILE.<br/>DOCUMENT. CONNECT.</h2><div className="system-steps"><div className="system-step"><div className="n">01</div><h3>Players & teams</h3><p>Profiles, rosters, game records, statistics, coach-facing tools and a stronger digital identity around the programme.</p></div><div className="system-step"><div className="n">02</div><h3>Competition & events</h3><p>Court Takeovers, 3×3, tournament infrastructure and live formats that create fan energy and sponsor inventory.</p></div><div className="system-step"><div className="n">03</div><h3>Story & archive</h3><p>Highlights, interviews, photography, documentaries and a body of evidence that Kenyan and African basketball can own its own narrative.</p></div><div className="system-step"><div className="n">04</div><h3>Partners & growth</h3><p>Brands, schools, leagues, academies and institutions can enter through outcomes — not by buying random media deliverables.</p></div></div></div></section>

    <section className="final-cta"><div className="inner"><div className="meta">FACKTS HOOPS</div><h2 className="section-title final-title">THE COURT IS ONLY THE BEGINNING.</h2><div className="final-links"><Link className="primary" href="/partners">Build a Hoops partnership ↗</Link><Link href="/stories/street-hoops-sessions">Read Court Takeover</Link></div></div></section>
  </main>;
}
