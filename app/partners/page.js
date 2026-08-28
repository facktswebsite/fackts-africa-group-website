import Link from "next/link";

export const metadata = { title: "Partners" };

const lanes = [
  ["01", "TEAMS & ACADEMIES", "Stronger player visibility, better digital presence, documented games, media assets and a more credible programme around the team."],
  ["02", "STUDIOS & MUSIC BUSINESSES", "More creative activity around the space through artist discovery, sessions, interviews, project content and cultural visibility."],
  ["03", "EVENT OWNERS & VENUES", "A more complete event experience with audience energy, production, documentation, distribution and sponsor-ready media."],
  ["04", "BRANDS", "Culturally relevant access to basketball, music and youth communities through activations, content, talent integration and live experiences."],
  ["05", "INSTITUTIONS", "Youth participation, documented impact, cultural relevance and programmes that feel alive on campus or in the community."],
];

export default function PartnersPage() {
  return <main>
    <section className="partners-hero"><div className="shell"><div className="meta">PARTNERS / FACKTS AFRICA GROUP</div><h1 className="mega" style={{marginTop:20}}>DON&apos;T ADVERTISE<br/>AT CULTURE.<br/>ENTER IT.</h1></div></section>

    <section className="partners-intro"><div className="shell partners-grid"><div><div className="eyebrow">What a FACKTS partnership should create</div><h2 className="section-title" style={{marginTop:20}}>BUILD FOR AN OUTCOME.</h2><p className="body-xl text-muted" style={{marginTop:28}}>FACKTS builds cultural partnerships around participation, youth engagement, community access, talent visibility, content, brand relevance and experiences people can remember.</p></div><div className="partner-lanes">{lanes.map(([n,title,copy]) => <div className="partner-lane" key={n}><b>{n}</b><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>

    <section className="partner-path"><div className="shell"><div className="eyebrow">Partnership pathway</div><h2 className="section-title" style={{marginTop:18}}>BRIEF → AUDIENCE → EXPERIENCE → EVIDENCE.</h2><div className="steps"><div className="partner-step"><div className="n">01 / BRIEF</div><h3>What do you want to achieve?</h3></div><div className="partner-step"><div className="n">02 / AUDIENCE</div><h3>Who needs to participate?</h3></div><div className="partner-step"><div className="n">03 / EXPERIENCE</div><h3>Where should the brand enter?</h3></div><div className="partner-step"><div className="n">04 / EVIDENCE</div><h3>What should prove the partnership worked?</h3></div></div><div style={{marginTop:36}}><Link className="btn-line" href="/contact">Start a partnership conversation <span className="arrow">→</span></Link></div></div></section>
  </main>;
}
