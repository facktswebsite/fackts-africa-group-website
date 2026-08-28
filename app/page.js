import Image from "next/image";
import Link from "next/link";
import CultureHero from "@/components/CultureHero";
import FeaturedWatch from "@/components/FeaturedWatch";
import { stories, experiences, cityVision, management, featuredWatch, siteConfig } from "@/lib/content";

export default function Home() {
  return <main className="home-flow premium-home">
    <CultureHero />

    <section className="home-intro">
      <div className="shell home-intro-grid">
        <div className="eyebrow">One group. Connected culture.</div>
        <p>FACKTS brings the court, the booth, the people behind the work and the live experiences around them into one African culture ecosystem.</p>
      </div>
    </section>

    <section id="worlds" className="portal editorial-portal hoops">
      <div className="shell editorial-portal-grid">
        <div className="portal-media editorial-portal-media">
          <Image src="/fackts/hoops/court-action.webp" alt="Basketball player attacking the rim" fill quality={90} sizes="(max-width:900px) 100vw, 58vw" />
          <div className="media-corner-label meta">FACKTS HOOPS / COURT CULTURE</div>
        </div>
        <div className="portal-copy editorial-portal-copy">
          <div className="portal-index meta">01 / HOOPS</div>
          <div className="world-word">HOOPS</div>
          <h2>The court is more than a court.</h2>
          <p>Players become visible. Teams become stronger programmes. Games become archives. Basketball becomes a world people can enter.</p>
          <div className="portal-actions">
            <a className="btn-solid" href={siteConfig.hoopsPlatform}>Enter FACKTS Hoops <span>↗</span></a>
            <Link className="quiet-link" href="/hoops">Explore the Hoops world →</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="portal editorial-portal music">
      <div className="shell editorial-portal-grid editorial-portal-grid-reverse">
        <div className="portal-media editorial-portal-media">
          <Image src="/fackts/music/studio-session.webp" alt="Creators inside a recording studio" fill quality={90} sizes="(max-width:900px) 100vw, 58vw" />
          <div className="media-corner-label meta">FACKTS MUSIC / STUDIO CULTURE</div>
        </div>
        <div className="portal-copy editorial-portal-copy">
          <div className="portal-index meta">02 / MUSIC</div>
          <div className="world-word">MUSIC</div>
          <h2>Every sound has a story around it.</h2>
          <p>Artists are one layer. Producers, rooms, sessions, crews, projects and the business behind the sound are part of the culture too.</p>
          <div className="portal-actions">
            <a className="btn-solid" href={siteConfig.musicPlatform}>Enter FACKTS Music <span>↗</span></a>
            <Link className="quiet-link" href="/music">Explore the Music world →</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="featured-watch-section">
      <div className="shell featured-watch-head">
        <div>
          <div className="eyebrow">Featured watch / proof</div>
          <h2 className="section-title">WATCH THE CULTURE.<br/>DON&apos;T JUST READ ABOUT IT.</h2>
        </div>
        <p className="body-xl">FACKTS media now presents the archive as a native part of the website. YouTube remains the video infrastructure; the FACKTS experience stays in front.</p>
      </div>
      <div className="shell">
        <FeaturedWatch items={featuredWatch} youtubeChannelUrl={siteConfig.hoopsYouTube} />
      </div>
      <div className="shell evidence-gateways">
        <a href={siteConfig.hoopsPlayers} className="evidence-gateway">
          <span className="meta">LIVE BASKETBALL DATA</span>
          <strong>Browse real player profiles</strong>
          <i>FACKTS Hoops ↗</i>
        </a>
        <a href={siteConfig.musicProfileExample} className="evidence-gateway">
          <span className="meta">LIVE MUSIC PROFILE</span>
          <strong>Meet creators inside FACKTS Music</strong>
          <i>FACKTS Music ↗</i>
        </a>
      </div>
    </section>

    <section className="collision refined-collision">
      <div className="shell collision-inner">
        <div className="collision-copy">
          <div className="eyebrow">Where the worlds will collide · Coming soon</div>
          <h2 className="section-title">BEATS <em>×</em> BUCKETS.</h2>
          <p className="body-xl">VERSUS brings basketball, artists, hoods, dance, cyphers and crowd energy into one live culture property.</p>
          <div className="collision-actions"><Link className="btn-line dark-line" href="/experiences/versus-beats-buckets">Enter VERSUS <span className="arrow">→</span></Link></div>
        </div>
        <div className="collision-visual" aria-label="Basketball and music culture">
          <div className="collision-photo a"><Image src="/fackts/hoops/court-crew.webp" alt="Basketball culture moment" fill quality={88} sizes="(max-width:760px) 82vw, 36vw" /></div>
          <div className="collision-photo b"><Image src="/fackts/music/artist-duo.webp" alt="Music creators together" fill quality={88} sizes="(max-width:760px) 72vw, 30vw" /></div>
          <div className="collision-stamp">FACKTS / CULTURE PROPERTY</div>
        </div>
      </div>
    </section>

    <section className="people-section management-home premium-management">
      <div className="shell management-grid">
        <div className="management-photo"><Image src="/fackts/people/studio-group.webp" alt="People inside the FACKTS creative ecosystem" fill quality={88} sizes="(max-width:900px) 100vw, 48vw" /></div>
        <div className="management-copy">
          <div className="eyebrow">People behind FACKTS</div>
          <h2 className="section-title">THE GROUP BEHIND THE WORK.</h2>
          <p className="body-xl text-muted">Management, captains and operators keep the culture moving behind the camera, court, studio and partnerships.</p>
          <div className="management-list">{management.slice(0,5).map(person => <div className="management-row" key={`${person.name}-${person.role}`}><strong>{person.name}</strong><span>{person.role}</span></div>)}</div>
          <div className="section-action"><Link href="/people" className="btn-line">Meet the FACKTS people <span className="arrow">→</span></Link></div>
        </div>
      </div>
    </section>

    <section className="stories-home premium-stories">
      <div className="shell stories-heading-row">
        <div><div className="eyebrow">Stories / archive</div><h2 className="section-title">FROM THE ARCHIVE.</h2></div>
        <p>Editorial stories around courts, studios, creators and the work behind visible culture.</p>
      </div>
      <div className="shell story-grid">{stories.slice(0,3).map(story => <Link href={`/stories/${story.slug}`} className="story-card" key={story.slug}><Image src={story.image} alt={story.title} fill quality={86} sizes="(max-width:760px) 100vw, 42vw" /><div className="story-card-content"><div className="meta">{story.category} · {story.city}</div><h3>{story.title}</h3></div></Link>)}</div>
      <div className="shell section-action"><Link href="/stories" className="btn-line">Open the archive <span className="arrow">→</span></Link></div>
    </section>

    <section className="experiences-home premium-experiences">
      <div className="shell experiences-headline"><div><div className="eyebrow">What&apos;s next</div><h2 className="section-title">UPCOMING FACKTS PROPERTIES.</h2></div><p>Future formats are shown as future formats. The archive above carries the evidence of work already happening.</p></div>
      <div className="shell experience-list">{experiences.map((item,index) => <Link href={`/experiences/${item.slug}`} className="experience-row" key={item.slug}><div className="date">{String(index+1).padStart(2,"0")} / {item.status}</div><h3>{item.title}</h3><div className="place">{item.city}<br/>{item.type}</div><div className="jump">↗</div></Link>)}</div>
    </section>

    <section className="brands-home premium-brands">
      <div className="shell brands-panel">
        <div className="brands-bg"><Image src="/fackts/events/culture-crowd.webp" alt="FACKTS culture crowd" fill quality={88} sizes="100vw" /></div>
        <div className="brands-inner"><div className="eyebrow">For brands & institutions</div><h2 className="section-title brands-title">DON&apos;T ADVERTISE AT CULTURE.<br/><em>ENTER IT.</em></h2><p className="body-xl">FACKTS builds cultural partnerships around participation, youth engagement, community access, talent visibility, content and brand relevance.</p><div className="brand-chips"><span>Live experiences</span><span>Athlete integration</span><span>Creator integration</span><span>Community activations</span><span>Branded content</span><span>Cultural partnerships</span></div><div className="section-action"><Link href="/partners" className="btn-solid light">Build with FACKTS <span>→</span></Link></div></div>
      </div>
    </section>

    <section className="cities premium-cities">
      <div className="shell"><div className="cities-head"><div><div className="eyebrow">Africa / city network</div><h2 className="section-title">FROM NAIROBI<br/>TO THE CONTINENT.</h2></div><p className="body-xl">Nairobi is our current operating base. FACKTS is being built with formats designed to travel across African cities and into the diaspora.</p></div><div className="city-list">{cityVision.map(item => <div className="city-row" key={item.city}><strong>{item.city}</strong><span>{item.note}</span><span className="state">{item.state}</span></div>)}</div></div>
      <div className="city-marquee">BORN IN KENYA · BUILT FOR AFRICA · MADE FOR THE WORLD · BORN IN KENYA · BUILT FOR AFRICA · MADE FOR THE WORLD · </div>
    </section>

    <section className="final-cta premium-final-cta"><div className="inner"><div className="meta">FACKTS AFRICA GROUP</div><h2 className="section-title final-title">THE NEXT CULTURAL MOMENT IS ALREADY FORMING.</h2><div className="final-links"><Link className="primary" href="/partners">Partner with us ↗</Link><a href={siteConfig.hoopsPlatform}>Enter Hoops ↗</a><a href={siteConfig.musicPlatform}>Enter Music ↗</a><Link href="/contact">Talk to FACKTS</Link></div></div></section>
  </main>;
}
