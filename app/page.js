import Image from "next/image";
import Link from "next/link";
import CultureHero from "@/components/CultureHero";
import { stories, experiences, cityVision, management, proofItems, siteConfig } from "@/lib/content";

export default function Home() {
  return <main className="home-flow">
    <CultureHero />

    <section id="worlds" className="portal hoops">
      <div className="portal-media"><Image src="/fackts/hoops/court-action.webp" alt="Basketball player attacking the rim" fill sizes="100vw" /></div>
      <div className="portal-score"><b>24</b><span>COURT / STORY / SIGNAL</span></div>
      <div className="shell portal-inner"><div className="portal-copy"><div className="world-word">HOOPS</div><h2>The court is more than a court.</h2><p>Players become visible. Teams become stronger programmes. Games become archives. Basketball becomes a world people can enter.</p><div className="portal-actions"><a className="btn-line" href={siteConfig.hoopsPlatform}>Enter FACKTS Hoops <span className="arrow">↗</span></a><Link className="quiet-link" href="/hoops">Explore the Hoops world →</Link></div></div></div>
    </section>

    <section className="portal music">
      <div className="portal-media"><Image src="/fackts/music/studio-session.webp" alt="Creators inside a recording studio" fill sizes="100vw" /></div>
      <div className="portal-score"><b>REC</b><span>BOOTH / SESSION / CREDIT</span></div>
      <div className="shell portal-inner"><div className="portal-copy"><div className="world-word">MUSIC</div><h2>Every sound has a story around it.</h2><p>Artists are one layer. Producers, rooms, sessions, crews, projects and the business behind the sound are part of the culture too.</p><div className="portal-wave" aria-hidden="true">{[18,34,25,42,14,38,28,48,20,33,15,44].map((h,i)=><span key={i} style={{"--h":`${h}px`,animationDelay:`${i*.08}s`}} />)}</div><div className="portal-actions"><a className="btn-line" href={siteConfig.musicPlatform}>Enter FACKTS Music <span className="arrow">↗</span></a><Link className="quiet-link" href="/music">Explore the Music world →</Link></div></div></div>
    </section>

    <section className="proof-home">
      <div className="shell proof-head"><div><div className="eyebrow">Proof / live ecosystems</div><h2 className="section-title" style={{marginTop:18}}>THE WORK IS ALREADY OUT THERE.</h2></div><p className="body-xl">FACKTS does not need to turn every claim into a paragraph. The platforms, videos, interviews, player profiles and project archives are the evidence.</p></div>
      <div className="shell proof-grid">{proofItems.map(item => <a className="proof-card" href={item.url} key={item.title}><div className="proof-image"><Image src={item.image} alt="" fill sizes="(max-width:760px) 100vw, 33vw" /></div><div className="proof-copy"><div className="meta">{item.eyebrow}</div><h3>{item.title}</h3><p>{item.copy}</p><span>{item.cta} ↗</span></div></a>)}</div>
    </section>

    <section className="collision">
      <div className="shell collision-inner">
        <div className="collision-copy"><div className="eyebrow">Where the worlds will collide · Coming soon</div><h2 className="section-title">BEATS <em>×</em> BUCKETS.</h2><p className="body-xl">VERSUS brings basketball, artists, hoods, dance, cyphers and crowd energy into one live culture property.</p><div style={{marginTop:30}}><Link className="btn-line" href="/experiences/versus-beats-buckets">Enter VERSUS <span className="arrow">→</span></Link></div></div>
        <div className="collision-visual" aria-label="Basketball and music collage"><div className="collision-photo a"><Image src="/fackts/hoops/court-contest.webp" alt="Basketball competition moment" fill sizes="(max-width:760px) 75vw, 38vw" /></div><div className="collision-photo b"><Image src="/fackts/music/artist-group.webp" alt="Music creators together" fill sizes="(max-width:760px) 65vw, 33vw" /></div><div className="collision-stamp">FACKTS<br/>CULTURE<br/>PROPERTY</div></div>
      </div>
      <div className="collision-ticker"><div>ARTIST VS ARTIST · HOOD VS HOOD · HOOPS · DANCE · CYPHER · CROWD · ARTIST VS ARTIST · HOOD VS HOOD · HOOPS · DANCE · CYPHER · CROWD · </div></div>
    </section>

    <section className="people-section management-home">
      <div className="shell management-grid">
        <div className="management-photo"><Image src="/fackts/people/studio-group.webp" alt="People inside the FACKTS creative ecosystem" fill sizes="(max-width:900px) 100vw, 48vw" /></div>
        <div className="management-copy">
          <div className="eyebrow">People behind FACKTS</div>
          <h2 className="section-title">THE GROUP BEHIND THE WORK.</h2>
          <p className="body-xl text-muted">Management, captains and operators keep the culture moving behind the camera, court, studio and partnerships.</p>
          <div className="management-list">{management.slice(0,5).map(person => <div className="management-row" key={`${person.name}-${person.role}`}><strong>{person.name}</strong><span>{person.role}</span></div>)}</div>
          <div style={{marginTop:26}}><Link href="/people" className="btn-line">Meet the FACKTS people <span className="arrow">→</span></Link></div>
        </div>
      </div>
    </section>

    <section className="stories-home">
      <div className="shell"><div className="eyebrow">Stories / archive</div><h2 className="section-title" style={{marginTop:20}}>FROM THE ARCHIVE.</h2><div className="story-grid">{stories.slice(0,4).map(story => <Link href={`/stories/${story.slug}`} className="story-card" key={story.slug}><Image src={story.image} alt={story.title} fill sizes="(max-width:760px) 100vw, 50vw" /><div className="story-card-content"><div className="meta">{story.category} · {story.city}</div><h3>{story.title}</h3></div></Link>)}</div><div style={{marginTop:30}}><Link href="/stories" className="btn-line">Open the archive <span className="arrow">→</span></Link></div></div>
    </section>

    <section className="experiences-home">
      <div className="shell"><div className="eyebrow">What&apos;s next</div><h2 className="section-title" style={{marginTop:20}}>UPCOMING FACKTS PROPERTIES.</h2><div className="experience-list">{experiences.map((item,index) => <Link href={`/experiences/${item.slug}`} className="experience-row" key={item.slug}><div className="date">{String(index+1).padStart(2,"0")} / {item.status}</div><h3>{item.title}</h3><div className="place">{item.city}<br/>{item.type}</div><div className="jump">↗</div></Link>)}</div></div>
    </section>

    <section className="brands-home">
      <div className="brands-bg"><Image src="/fackts/events/culture-crowd.webp" alt="FACKTS culture crowd" fill sizes="100vw" /></div>
      <div className="shell brands-inner"><div className="eyebrow">For brands & institutions</div><h2 className="section-title brands-title" style={{marginTop:22}}>DON&apos;T ADVERTISE AT CULTURE.<br/><em>ENTER IT.</em></h2><p className="body-xl" style={{maxWidth:760,marginTop:30}}>FACKTS builds cultural partnerships around participation, youth engagement, community access, talent visibility, content and brand relevance.</p><div className="brand-chips"><span>Live experiences</span><span>Athlete integration</span><span>Creator integration</span><span>Community activations</span><span>Branded content</span><span>Cultural partnerships</span><span>Production</span></div><div style={{marginTop:34}}><Link href="/partners" className="btn-line">Build with FACKTS <span className="arrow">→</span></Link></div></div>
    </section>

    <section className="cities">
      <div className="shell"><div className="cities-head"><div><div className="eyebrow">Africa / city network</div><h2 className="section-title" style={{marginTop:18}}>FROM NAIROBI<br/>TO THE CONTINENT.</h2></div><p className="body-xl">Nairobi is our current operating base. FACKTS is being built with formats designed to travel across African cities and into the diaspora.</p></div><div className="city-list">{cityVision.map(item => <div className="city-row" key={item.city}><strong>{item.city}</strong><span>{item.note}</span><span className="state">{item.state}</span></div>)}</div></div>
      <div className="city-marquee">BORN IN KENYA · BUILT FOR AFRICA · MADE FOR THE WORLD · BORN IN KENYA · BUILT FOR AFRICA · MADE FOR THE WORLD · </div>
    </section>

    <section className="final-cta"><div className="inner"><div className="meta">FACKTS AFRICA GROUP</div><h2 className="section-title final-title">THE NEXT CULTURAL MOMENT IS ALREADY FORMING.</h2><div className="final-links"><Link className="primary" href="/partners">Partner with us ↗</Link><a href={siteConfig.hoopsPlatform}>Enter Hoops ↗</a><a href={siteConfig.musicPlatform}>Enter Music ↗</a><Link href="/contact">Talk to FACKTS</Link></div></div></section>
  </main>;
}
