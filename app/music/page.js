import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: { absolute: "FACKTS Music | Artists, Producers & Music Projects in Kenya" },
  description: "FACKTS Music is a creative operating platform connecting artists, producers, engineers, projects, sessions, credits and public creator identities.",
  alternates: { canonical: "/music" },
};

const pillars = [
  ["01", "Creator profiles", "Public creator identities for artists, producers, engineers, songwriters and the wider creative room."],
  ["02", "Projects & sessions", "A shared place for the people, beats, tracks, studio sessions, actions and decisions around a music project."],
  ["03", "Credits & contribution", "A clearer record of who actually contributed to the work, instead of losing creative history inside chats and memory."],
  ["04", "Discovery & opportunity", "A foundation for people, studios, partners and audiences to discover creators through real work and public identity."],
];

export default function MusicPage() {
  return <main className="vertical-page-v41 music-page-v41">
    <section className="vertical-hero-v41">
      <div className="vertical-hero-copy-v41">
        <div className="eyebrow">FACKTS Music / creative platform</div>
        <h1>THE SONG IS THE OUTPUT. THE SYSTEM AROUND IT MATTERS TOO.</h1>
        <p>FACKTS Music is the creative operating platform inside FACKTS Africa Group — connecting creators, projects, beats, sessions, credits and public identities around real music work.</p>
        <div className="vertical-hero-actions-v41"><a href={siteConfig.musicPlatform}>Enter FACKTS Music ↗</a><a href={`${siteConfig.musicPlatform}/creators`}>Explore creators ↗</a></div>
      </div>
      <div className="vertical-hero-photo-v41">
        <Image src="/fackts/music/music-hero-v41.webp" alt="Creators working inside a FACKTS Music studio environment" fill priority quality={92} sizes="(max-width: 980px) 100vw, 50vw" />
        <span>FACKTS MUSIC / KENYA</span>
      </div>
    </section>

    <section className="vertical-definition-v41"><div className="shell vertical-two-col-v41"><div><div className="eyebrow">What it is</div><h2>A working system for the people behind the sound.</h2></div><div><p>FACKTS Music is not another streaming service and it is not simply a content page. It is built for the work that happens before, during and around a release: creator identity, projects, beat development, studio sessions, collaboration, credits and public discovery.</p><p>The public-facing profiles show who creators are. The workspace helps organise what they are building.</p></div></div></section>

    <section className="vertical-pillars-v41"><div className="shell"><div className="eyebrow">Inside FACKTS Music</div><div className="vertical-pillar-list-v41">{pillars.map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="vertical-audience-v41"><div className="shell"><div className="vertical-two-col-v41"><div><div className="eyebrow">Who it helps</div><h2>The whole creative room can have context.</h2></div><div className="vertical-audience-grid-v41"><div><strong>Artists</strong><p>Identity, projects, feedback and a visible record of work.</p></div><div><strong>Producers & engineers</strong><p>Clearer contribution, sessions, beats, credits and professional visibility.</p></div><div><strong>Studios & project leads</strong><p>A better way to coordinate people, work and progress.</p></div><div><strong>Partners & audiences</strong><p>A more credible route into creator discovery and real project activity.</p></div></div></div></div></section>

    <section className="vertical-why-v41"><div className="shell vertical-two-col-v41"><div><div className="eyebrow">Why FACKTS built it</div><h2>Creative work is collaborative. The systems around it are often fragmented.</h2></div><div><p>Music projects commonly live across WhatsApp chats, folders, studio conversations, personal notes and social media. That makes it difficult to preserve decisions, recognise contribution and turn activity into a professional record.</p><p>FACKTS Music brings that movement into one environment while keeping the human side of music visible. Media, interviews and documentaries can then tell the story of work that already has structure behind it.</p></div></div></section>

    <section className="vertical-final-v41"><div className="shell"><div><div className="eyebrow">FACKTS Music</div><h2>Build the music. Keep the people, work and credits connected.</h2></div><div><a href={siteConfig.musicPlatform}>Open FACKTS Music ↗</a><a href={`${siteConfig.musicPlatform}/creators`}>Creator directory ↗</a><Link href="/partners">Build a music partnership ↗</Link></div></div></section>
  </main>;
}
