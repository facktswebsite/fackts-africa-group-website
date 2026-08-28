
import Link from "next/link";

export const metadata = { title: "Partners" };

const lanes = [
  ["01", "TEAMS & ACADEMIES", "Players and coaches use the system. Teams benefit from structure, visibility, records, media and a stronger basketball programme."],
  ["02", "STUDIOS & MUSIC BUSINESSES", "Artists and producers participate. Studios benefit from traffic, sessions, content, discovery and commercial activity around their space."],
  ["03", "EVENT OWNERS & VENUES", "Fans and talent attend. Organizers benefit from credibility, experience design, archive, distribution and sponsor-ready media."],
  ["04", "BRANDS", "Communities participate. Brands benefit from cultural relevance, access, engagement, acquisition opportunities and reusable content."],
  ["05", "INSTITUTIONS", "Students and communities participate. Institutions benefit from youth relevance, documented impact and a stronger programme experience."],
];

export default function PartnersPage() {
  return <main><section className="partners-hero"><div className="shell"><div className="meta">PARTNERS / FACKTS AFRICA GROUP</div><h1 className="mega" style={{marginTop:20}}>DON&apos;T<br/>ADVERTISE<br/>AT CULTURE.<br/>ENTER IT.</h1></div></section><section className="partners-intro"><div className="shell partners-grid"><div><div className="eyebrow">Commercial intelligence</div><h2 className="section-title" style={{marginTop:20}}>BUY THE<br/>OUTCOME.</h2><p className="body-xl text-muted" style={{marginTop:28}}>The person enjoying FACKTS is not always the person who should pay. We design around participants, then identify who becomes better off and what outcome is worth a budget.</p></div><div className="partner-lanes">{lanes.map(([n,title,copy]) => <div className="partner-lane" key={n}><b>{n}</b><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section><section className="partner-path"><div className="shell"><div className="eyebrow">How a partnership should begin</div><h2 className="section-title" style={{marginTop:18}}>BRIEF → WORLD → EXPERIENCE → EVIDENCE.</h2><div className="steps"><div className="partner-step"><div className="n">01 / DIAGNOSE</div><h3>What do you need to change?</h3></div><div className="partner-step"><div className="n">02 / AUDIENCE</div><h3>Who needs to participate?</h3></div><div className="partner-step"><div className="n">03 / VEHICLE</div><h3>Hoops, music or a collision?</h3></div><div className="partner-step"><div className="n">04 / EVIDENCE</div><h3>What proves it worked?</h3></div></div><div style={{marginTop:36}}><Link className="btn-line" href="/contact">Start a partnership conversation <span className="arrow">→</span></Link></div></div></section></main>;
}
