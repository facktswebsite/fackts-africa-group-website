import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export const metadata = { title: "About" };

export default function AboutPage() {
  return <main>
    <section className="page-hero">
      <div className="page-hero-media"><Image src="/fackts/events/culture-crowd.webp" alt="FACKTS people together" fill priority sizes="100vw" /></div>
      <div className="shell page-hero-content"><div className="eyebrow">About FACKTS Africa Group</div><h1 className="mega tight">BORN IN KENYA.<br/>BUILT FOR AFRICA.<br/>MADE FOR THE WORLD.</h1></div>
    </section>

    <section className="about-origin">
      <div className="shell about-origin-grid">
        <h2 className="display">NOT A BASKETBALL COMPANY.<br/>NOT A MUSIC COMPANY.<br/>A CULTURE GROUP.</h2>
        <div className="origin-copy"><p>FACKTS Africa Group operates where basketball, music, creators, athletes, communities, storytelling, live experiences, brands, technology and talent development meet.</p><p style={{marginTop:24}}>Hoops and Music are the first major worlds. Stories, people, live experiences and partnerships connect them into one wider African culture ecosystem.</p></div>
      </div>
    </section>

    <section className="about-values">
      <div className="shell">
        <div className="eyebrow">What holds the group together</div>
        <div style={{marginTop:38}}>
          <div className="value-line"><b>01</b><h3>People are the interface.</h3><p>Athletes, artists, producers, creators, coaches and communities are not decoration around the brand. They are the culture the brand exists to serve and amplify.</p></div>
          <div className="value-line"><b>02</b><h3>Culture deserves infrastructure.</h3><p>Good stories need archives. Talent needs visibility. Teams and studios need stronger systems. Live moments need documentation that lasts after the crowd leaves.</p></div>
          <div className="value-line"><b>03</b><h3>Hoops and music belong together.</h3><p>They already meet in courts, studios, campuses, streets, fashion, language and live events. FACKTS gives that relationship a platform instead of forcing the worlds apart.</p></div>
          <div className="value-line"><b>04</b><h3>African culture can travel.</h3><p>Nairobi is our operating base. The ambition is to build culturally credible formats that can move across African cities and into the diaspora without losing where they came from.</p></div>
        </div>
        <div className="about-links"><a className="btn-line" href={siteConfig.hoopsPlatform}>Enter FACKTS Hoops <span className="arrow">↗</span></a><a className="btn-line" href={siteConfig.musicPlatform}>Enter FACKTS Music <span className="arrow">↗</span></a><Link className="btn-line" href="/partners">Build with the group <span className="arrow">→</span></Link></div>
      </div>
    </section>
  </main>;
}
