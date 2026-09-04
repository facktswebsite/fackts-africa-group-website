import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: {
    absolute:
      "FACKTS Hoops | Basketball Data, Player Profiles & Events in Kenya",
  },

  description:
    "FACKTS Hoops is a basketball platform for Kenyan players, teams and competitions, combining game data, player profiles, event coverage and basketball experiences.",

  alternates: {
    canonical: "/hoops",
  },

  openGraph: {
    title:
      "FACKTS Hoops | Basketball Data, Player Profiles & Events in Kenya",
    description:
      "Explore FACKTS Hoops, a basketball platform connecting Kenyan players, teams, competitions, game data, player profiles, events and basketball culture.",
    url: `${siteConfig.website}/hoops`,
    siteName: "FACKTS Africa Group",
    images: [
      {
        url: "/fackts/hoops/court-action.webp",
        width: 1200,
        height: 630,
        alt: "FACKTS Hoops basketball in Kenya",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "FACKTS Hoops | Basketball Data, Player Profiles & Events in Kenya",
    description:
      "Basketball data, player profiles, team information, competition coverage and basketball experiences from FACKTS Hoops.",
    images: ["/fackts/hoops/court-action.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HoopsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-media">
          <Image
            src="/fackts/hoops/court-action.webp"
            alt="Basketball action featured by FACKTS Hoops"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="shell page-hero-content">
          <div className="eyebrow">FACKTS Hoops</div>

          <h1 className="section-title page-title">
            THE GAME BEYOND THE SCORE.
          </h1>

          <p className="body-xl page-desc">
            Players become stories. Teams become stronger programmes. Courts
            become stages. Games become records, data and culture people can
            return to.
          </p>

          <div className="portal-actions">
            <a className="btn-line" href={siteConfig.hoopsPlatform}>
              Open FACKTS Hoops <span className="arrow">↗</span>
            </a>

            <a className="quiet-link" href={siteConfig.hoopsYouTube}>
              Watch the video archive ↗
            </a>
          </div>
        </div>
      </section>

      <div className="score-ribbon">
        <div className="score-cell">
          <b>24</b>
          <span>Shot clock / motion</span>
        </div>

        <div className="score-cell">
          <b>01</b>
          <span>Player first</span>
        </div>

        <div className="score-cell">
          <b>05</b>
          <span>Team structure</span>
        </div>

        <div className="score-cell">
          <b>∞</b>
          <span>Story archive</span>
        </div>

        <div className="score-cell">
          <b>AF</b>
          <span>Continental horizon</span>
        </div>
      </div>

      <section className="hoops-manifesto">
        <div className="shell hoops-manifesto-grid">
          <div>
            <div className="eyebrow">The Hoops world</div>
          </div>

          <p className="body-xl">
            FACKTS Hoops connects player visibility, team identity, competition,
            game records, media and fan-facing culture. The corporate site tells
            the story; the Hoops platform is where the basketball system itself
            lives.
          </p>
        </div>
      </section>

      <div className="full-bleed-photo">
        <Image
          src="/fackts/hoops/court-contest.webp"
          alt="Basketball competition covered by FACKTS Hoops"
          fill
          sizes="100vw"
        />

        <div className="broadcast-tag">
          <span>FACKTS HOOPS</span>
          <span>COURT FEED</span>
          <span>LIVE CULTURE</span>
        </div>
      </div>

      <section className="hoops-proof">
        <div className="shell">
          <div className="eyebrow">Player profiles / game archive</div>

          <h2 className="section-title" style={{ marginTop: 18 }}>
            THE ATHLETE LIVES BEYOND A CARD.
          </h2>

          <p className="body-xl text-muted hoops-proof-intro">
            Real player profiles, team information and basketball records belong
            inside FACKTS Hoops, where they can stay current instead of becoming
            duplicated static content here.
          </p>

          <div className="hoops-proof-grid">
            <div className="hoops-proof-shot">
              <Image
                src="/fackts/hoops/player-portrait.webp"
                alt="Basketball player profile on FACKTS Hoops"
                fill
                sizes="(max-width:760px) 100vw, 33vw"
              />
            </div>

            <div className="hoops-proof-shot">
              <Image
                src="/fackts/hoops/player-portrait-2.webp"
                alt="Kenyan basketball player featured by FACKTS Hoops"
                fill
                sizes="(max-width:760px) 100vw, 33vw"
              />
            </div>

            <div className="hoops-proof-shot">
              <Image
                src="/fackts/hoops/player-portrait-3.webp"
                alt="Basketball athlete featured on the FACKTS Hoops platform"
                fill
                sizes="(max-width:760px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="portal-actions">
            <a className="btn-line" href={siteConfig.hoopsPlayers}>
              Explore player profiles <span className="arrow">↗</span>
            </a>

            <a className="btn-line" href={siteConfig.hoopsYouTube}>
              Watch games & interviews <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="hoops-system">
        <div className="shell">
          <div className="eyebrow">What the basketball world becomes</div>

          <h2 className="section-title" style={{ marginTop: 18 }}>
            PLAY. PROFILE. DOCUMENT. CONNECT.
          </h2>

          <div className="system-steps">
            <div className="system-step">
              <div className="n">01</div>
              <h3>Players & teams</h3>
              <p>
                Profiles, rosters, game records, statistics, coach-facing tools
                and a stronger digital identity around the programme.
              </p>
            </div>

            <div className="system-step">
              <div className="n">02</div>
              <h3>Competition & events</h3>
              <p>
                Court Takeovers, 3×3 and tournament infrastructure that can
                create fan energy, content and sponsor inventory.
              </p>
            </div>

            <div className="system-step">
              <div className="n">03</div>
              <h3>Story & archive</h3>
              <p>
                Highlights, interviews, photography and long-form documentation
                that help basketball own its own narrative.
              </p>
            </div>

            <div className="system-step">
              <div className="n">04</div>
              <h3>Partners & growth</h3>
              <p>
                Teams, schools, leagues, brands and institutions can build around
                participation, visibility and better basketball experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="inner">
          <div className="meta">FACKTS HOOPS</div>

          <h2 className="section-title final-title">
            THE COURT IS ONLY THE BEGINNING.
          </h2>

          <div className="final-links">
            <a className="primary" href={siteConfig.hoopsPlatform}>
              Enter FACKTS Hoops ↗
            </a>

            <a href={siteConfig.hoopsYouTube}>Watch the archive ↗</a>

            <Link href="/partners">Build a Hoops partnership</Link>
          </div>
        </div>
      </section>
    </main>
  );
}