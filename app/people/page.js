import Image from "next/image";
import LiveMusicCreators from "@/components/LiveMusicCreators";
import { management, siteConfig } from "@/lib/content";

export const metadata = {
  title: {
    absolute: "FACKTS People | Team, Creators, Athletes & Operators in Kenya",
  },
  description:
    "Meet the people behind FACKTS Africa Group and the live creator and athlete profiles across FACKTS Hoops and FACKTS Music.",
  alternates: { canonical: "/people" },
  openGraph: {
    title: "FACKTS People | Team, Creators, Athletes & Operators in Kenya",
    description:
      "Meet the team behind FACKTS Africa Group and the people active across FACKTS Hoops and FACKTS Music.",
    url: `${siteConfig.website}/people`,
    siteName: "FACKTS Africa Group",
    images: [
      {
        url: "/fackts/hoops/player-portrait-2.webp",
        width: 1200,
        height: 630,
        alt: "People in the FACKTS Africa ecosystem",
      },
    ],
    type: "website",
  },
  robots: { index: true, follow: true },
};

async function loadHoopsProfiles() {
  try {
    const response = await fetch(`${siteConfig.hoopsPlatform}/api/players`, {
      next: { revalidate: 300 },
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return [];
    const payload = await response.json();
    const rows = Array.isArray(payload?.players) ? payload.players : [];
    return rows
      .filter((player) => player?.id && player?.is_active !== false)
      .map((player) => ({
        id: String(player.id),
        name: player.full_name || player.name || player.nickname || "FACKTS Hoops player",
        team: player.current_team || "FACKTS Hoops",
        position: player.position || player.role || "Player",
        photoUrl: player.photo_url || "",
        photoPosition: player.photo_position || "center 25%",
        featured: Boolean(player.is_featured),
        href: `${siteConfig.hoopsPlayers}/${encodeURIComponent(String(player.id))}`,
      }))
      .sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        if (Boolean(a.photoUrl) !== Boolean(b.photoUrl)) return a.photoUrl ? -1 : 1;
        return a.name.localeCompare(b.name);
      })
      .slice(0, 3);
  } catch {
    return [];
  }
}

function initials(name) {
  return String(name || "FH")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function HoopsCultureProfiles({ players }) {
  if (!players.length) {
    return (
      <a className="people-hoops-fallback-v43" href={siteConfig.hoopsPlayers}>
        <div className="people-hoops-fallback-image-v43">
          <Image
            src="/fackts/hoops/player-portrait-2.webp"
            alt="Basketball player from the FACKTS Hoops ecosystem"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
          />
        </div>
        <div>
          <span>FACKTS HOOPS</span>
          <strong>Meet the players inside the basketball platform.</strong>
          <b>Open player profiles ↗</b>
        </div>
      </a>
    );
  }

  return (
    <div className="people-hoops-live-v43">
      <div className="people-live-head-v43">
        <div>
          <span>LIVE FROM FACKTS HOOPS</span>
          <strong>Basketball profiles.</strong>
        </div>
        <a href={siteConfig.hoopsPlayers}>View all players ↗</a>
      </div>
      <div className="people-hoops-grid-v43">
        {players.map((player, index) => (
          <a className="people-hoops-card-v43" href={player.href} key={player.id}>
            <div className="people-hoops-photo-v43">
              {player.photoUrl ? (
                <img
                  src={player.photoUrl}
                  alt={player.name}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: player.photoPosition }}
                />
              ) : (
                <span>{initials(player.name)}</span>
              )}
              <small>{String(index + 1).padStart(2, "0")}</small>
            </div>
            <div className="people-hoops-copy-v43">
              <em>{player.team}</em>
              <strong>{player.name}</strong>
              <p>{player.position}</p>
              <b>View profile ↗</b>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default async function PeoplePage() {
  const hoopsPlayers = await loadHoopsProfiles();

  return (
    <main className="people-page people-page-v43">
      <section className="archive-hero compact-archive-hero people-hero-v43">
        <div className="shell">
          <div className="eyebrow">People / FACKTS Africa Group</div>
          <h1 className="section-title">THE PEOPLE BEHIND FACKTS.</h1>
          <p className="body-xl">
            A small operating team builds the group, the technology and the systems behind FACKTS Hoops, FACKTS Music and the wider FACKTS ecosystem.
          </p>

          <div className="management-directory management-directory-v43">
            {management.map((person, index) => (
              <div className="management-directory-row" key={`${person.name}-${person.role}`}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
                <em>{person.city}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="people-culture-v43">
        <div className="shell">
          <div className="people-culture-intro-v43">
            <div>
              <div className="eyebrow">Meet the culture</div>
              <h2>THE PEOPLE USING THE PLATFORMS.</h2>
            </div>
            <p>
              The management team builds the system. The culture lives through the players and music creators using it. Their profiles stay inside the platforms where their work and records can remain current.
            </p>
          </div>

          <div className="people-culture-block-v43">
            <HoopsCultureProfiles players={hoopsPlayers} />
          </div>

          <div className="people-culture-block-v43 people-culture-music-v43">
            <LiveMusicCreators platformUrl={siteConfig.musicPlatform} />
          </div>
        </div>
      </section>
    </main>
  );
}
