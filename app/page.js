import Image from "next/image";
import Link from "next/link";
import CultureHero from "@/components/CultureHero";
import { experiences, cityVision, management, siteConfig, homeMedia, platformCapabilities, platformOutcomes } from "@/lib/content";

function CapabilityList({ items }) {
  return <div className="platform-capabilities">
    {items.map((item, index) => <div className="platform-capability" key={item}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <strong>{item}</strong>
    </div>)}
  </div>;
}

export default function Home() {
  return <main className="home-flow platform-home">
    <CultureHero />

    <section className="platform-intro" id="worlds">
      <div className="shell platform-intro-grid">
        <div className="eyebrow">FACKTS Africa Group</div>
        <div>
          <h2>Two platforms. One group.</h2>
          <p>FACKTS builds dedicated platforms for basketball and music. Each world stays clear, professional and useful on its own. FACKTS properties connect them only when the idea genuinely calls for it.</p>
        </div>
      </div>
    </section>

    <section className="platform-lane platform-lane-hoops">
      <div className="shell platform-lane-grid">
        <div className="platform-lane-image">
          <Image src={homeMedia.hoops} alt="FACKTS Hoops basketball" fill quality={90} sizes="(max-width: 900px) calc(100vw - 26px), (max-width: 1500px) 52vw, 760px" />
          <span className="platform-image-label">FACKTS HOOPS</span>
        </div>
        <div className="platform-lane-copy">
          <div className="platform-number">01</div>
          <div className="eyebrow">Basketball platform</div>
          <h2>Basketball, structured.</h2>
          <p>FACKTS Hoops gives players, teams and basketball communities a stronger digital home around the game, not just another page of content.</p>
          <CapabilityList items={platformCapabilities.hoops} />
          <div className="platform-actions">
            <a className="btn-solid" href={siteConfig.hoopsPlatform}>Enter FACKTS Hoops <span>↗</span></a>
            <a className="text-link" href={siteConfig.hoopsPlayers}>Player profiles ↗</a>
          </div>
        </div>
      </div>
    </section>

    <section className="platform-lane platform-lane-music">
      <div className="shell platform-lane-grid platform-lane-grid-reverse">
        <div className="platform-lane-image">
          <Image src={homeMedia.music} alt="FACKTS Music studio environment" fill quality={90} sizes="(max-width: 900px) calc(100vw - 26px), (max-width: 1500px) 52vw, 760px" />
          <span className="platform-image-label">FACKTS MUSIC</span>
        </div>
        <div className="platform-lane-copy">
          <div className="platform-number">02</div>
          <div className="eyebrow">Music platform</div>
          <h2>Creative work, organised.</h2>
          <p>FACKTS Music gives artists, producers, studios and creative projects a clearer environment for identity, discovery, project activity and the people behind the sound.</p>
          <CapabilityList items={platformCapabilities.music} />
          <div className="platform-actions">
            <a className="btn-solid" href={siteConfig.musicPlatform}>Enter FACKTS Music <span>↗</span></a>
            <a className="text-link" href={siteConfig.musicProfileExample}>View a live profile ↗</a>
          </div>
        </div>
      </div>
    </section>

    <section className="platform-outcomes-section">
      <div className="shell">
        <div className="platform-section-head">
          <div className="eyebrow">What the platforms make possible</div>
          <h2>Useful infrastructure around talent and communities.</h2>
        </div>
        <div className="platform-outcomes-grid">
          {platformOutcomes.map((item, index) => <div className="platform-outcome" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="platform-proof-section">
      <div className="shell platform-section-head platform-proof-head">
        <div>
          <div className="eyebrow">Proof inside the platforms</div>
          <h2>The work already lives somewhere real.</h2>
        </div>
        <p>Profiles, games, creators and project activity should lead into the living FACKTS platforms, not be duplicated into a media-heavy corporate homepage.</p>
      </div>
      <div className="shell platform-proof-grid">
        <article className="platform-proof-card hoops-proof-card">
          <div className="platform-proof-image"><Image src={homeMedia.hoopsProof} alt="FACKTS Hoops basketball evidence" fill quality={90} sizes="(max-width: 760px) calc(100vw - 26px), 50vw" /></div>
          <div className="platform-proof-copy">
            <div className="eyebrow">FACKTS Hoops / live evidence</div>
            <h3>Players, games and basketball records.</h3>
            <p>Browse current player profiles on FACKTS Hoops, or watch documented basketball from the FACKTS Hoops archive.</p>
            <div className="proof-links"><a href={siteConfig.hoopsPlayers}>Player profiles ↗</a><a href={siteConfig.hoopsYouTube}>Basketball archive ↗</a></div>
          </div>
        </article>
        <article className="platform-proof-card music-proof-card">
          <div className="platform-proof-image"><Image src={homeMedia.musicProof} alt="FACKTS Music creator environment" fill quality={90} sizes="(max-width: 760px) calc(100vw - 26px), 50vw" /></div>
          <div className="platform-proof-copy">
            <div className="eyebrow">FACKTS Music / live evidence</div>
            <h3>Creators and project identities.</h3>
            <p>Move directly into a live creator profile and the wider FACKTS Music environment instead of reading placeholder profiles here.</p>
            <div className="proof-links"><a href={siteConfig.musicProfileExample}>Live creator profile ↗</a><a href={siteConfig.musicPlatform}>Enter FACKTS Music ↗</a></div>
          </div>
        </article>
      </div>
    </section>

    <section className="properties-section">
      <div className="shell properties-head">
        <div><div className="eyebrow">FACKTS properties</div><h2>Formats built on top of the platforms.</h2></div>
        <p>Court Takeovers, VERSUS, Credits Roll and FACKTS 3×3 are upcoming FACKTS properties. They are not the platforms themselves.</p>
      </div>
      <div className="shell properties-list">
        {experiences.map((item, index) => <Link href={`/experiences/${item.slug}`} className="property-row" key={item.slug}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div><strong>{item.title}</strong><small>{item.type}</small></div>
          <em>{item.status}</em>
          <b>↗</b>
        </Link>)}
      </div>
    </section>

    <section className="people-home-simple">
      <div className="shell people-home-grid">
        <div>
          <div className="eyebrow">People behind FACKTS</div>
          <h2>The team operating the group.</h2>
          <p>Management, captains and operators behind the platforms, partnerships and day-to-day execution.</p>
          <Link className="text-link light-text-link" href="/people">Meet the FACKTS people ↗</Link>
        </div>
        <div className="people-home-list">
          {management.slice(0, 6).map(person => <div className="people-home-row" key={`${person.name}-${person.role}`}><strong>{person.name}</strong><span>{person.role}</span></div>)}
        </div>
      </div>
    </section>

    <section className="partner-home-simple">
      <div className="shell partner-home-grid">
        <div className="eyebrow">For brands, teams, studios & institutions</div>
        <div>
          <h2>Partner with the platform, not just the moment.</h2>
          <p>FACKTS builds partnerships around participation, visibility, structured communities, experiences and long-term cultural relevance.</p>
          <Link href="/partners" className="btn-solid">Build with FACKTS <span>→</span></Link>
        </div>
      </div>
    </section>

    <section className="continent-home-simple">
      <div className="shell continent-home-grid">
        <div><div className="eyebrow">Current base / expansion horizon</div><h2>Born in Kenya. Built to travel.</h2></div>
        <div className="continent-cities">{cityVision.slice(0, 7).map(item => <div key={item.city}><strong>{item.city}</strong><span>{item.state}</span></div>)}</div>
      </div>
    </section>

    <section className="platform-final-cta">
      <div className="shell platform-final-grid">
        <div><div className="eyebrow">FACKTS Africa Group</div><h2>Choose the platform you need.</h2></div>
        <div className="platform-final-links"><a href={siteConfig.hoopsPlatform}>FACKTS Hoops ↗</a><a href={siteConfig.musicPlatform}>FACKTS Music ↗</a><Link href="/partners">Partner with us ↗</Link></div>
      </div>
    </section>
  </main>;
}
