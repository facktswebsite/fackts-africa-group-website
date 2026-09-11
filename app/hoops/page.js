import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: { absolute: "FACKTS Hoops | Basketball Data, Player Profiles & Events in Kenya" },
  description: "FACKTS Hoops is a basketball platform for Kenyan players, teams and competitions, combining player identity, game records, data and basketball experiences.",
  alternates: { canonical: "/hoops" },
};

const pillars = [
  ["01", "Player identity", "Live player profiles that can carry team context, position, records and a stronger digital identity around the athlete."],
  ["02", "Teams & competition", "Team pages, rosters, games, competitions and seasons organised so basketball does not disappear into scattered posts."],
  ["03", "Games, stats & records", "A growing record of what happened on court, giving players, teams and fans something more useful than memory alone."],
  ["04", "Experiences & community", "Court Takeovers, FACKTS Kings, 3×3 concepts and other formats that bring the platform into real basketball environments."],
];

export default function HoopsPage() {
  return <main className="vertical-page-v41 hoops-page-v41">
    <section className="vertical-hero-v41">
      <div className="vertical-hero-copy-v41">
        <div className="eyebrow">FACKTS Hoops / basketball platform</div>
        <h1>BASKETBALL NEEDS A RECORD, NOT JUST A RESULT.</h1>
        <p>FACKTS Hoops is the basketball operating platform inside FACKTS Africa Group — built around players, teams, games, competitions, records and the communities around the sport.</p>
        <div className="vertical-hero-actions-v41"><a href={siteConfig.hoopsPlatform}>Enter FACKTS Hoops ↗</a><a href={siteConfig.hoopsPlayers}>Browse player profiles ↗</a></div>
      </div>
      <div className="vertical-hero-photo-v41">
        <Image src="/fackts/hoops/hoops-hero-v41.webp" alt="Basketball action inside the FACKTS Hoops world" fill priority quality={92} sizes="(max-width: 980px) 100vw, 50vw" />
        <span>FACKTS HOOPS / KENYA</span>
      </div>
    </section>

    <section className="vertical-definition-v41">
      <div className="shell vertical-two-col-v41"><div><div className="eyebrow">What it is</div><h2>The digital home around the game.</h2></div><div><p>FACKTS Hoops is not simply event coverage or a basketball media page. The platform is designed to hold the basketball identity around players and teams: who they are, where they play, what games happened and what the record says over time.</p><p>Media supports that system by documenting games and people. It is evidence and distribution, not the entire product.</p></div></div>
    </section>

    <section className="vertical-pillars-v41">
      <div className="shell"><div className="eyebrow">Inside FACKTS Hoops</div><div className="vertical-pillar-list-v41">{pillars.map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
    </section>

    <section className="vertical-audience-v41">
      <div className="shell"><div className="vertical-two-col-v41"><div><div className="eyebrow">Who it helps</div><h2>One platform, different reasons to care.</h2></div><div className="vertical-audience-grid-v41"><div><strong>Players</strong><p>A clearer identity and record beyond one game.</p></div><div><strong>Teams</strong><p>Structured rosters, games, competition context and visibility.</p></div><div><strong>Fans</strong><p>A better way to understand players, teams and the story of the game.</p></div><div><strong>Partners</strong><p>More credible environments for activation, reporting and long-term participation.</p></div></div></div></div>
    </section>

    <section className="vertical-why-v41"><div className="shell vertical-two-col-v41"><div><div className="eyebrow">Why FACKTS built it</div><h2>Kenyan basketball produces moments. Too many of them disappear.</h2></div><div><p>Players move teams. Competitions end. Stats stay on paper. Photos sit in phones. Fans remember fragments. FACKTS Hoops is an attempt to give the game continuity — a place where identities, records and basketball activity can remain useful after the final whistle.</p><p>That foundation can then support better team management, player development, storytelling, partnerships and future basketball products.</p></div></div></section>

    <section className="vertical-final-v41"><div className="shell"><div><div className="eyebrow">FACKTS Hoops</div><h2>The court is where the action happens. The platform is where the record lives.</h2></div><div><a href={siteConfig.hoopsPlatform}>Open FACKTS Hoops ↗</a><a href={siteConfig.hoopsPlayers}>Player directory ↗</a><Link href="/partners">Build a basketball partnership ↗</Link></div></div></section>
  </main>;
}
