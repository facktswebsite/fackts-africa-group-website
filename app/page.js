import Link from "next/link";
import CultureHero from "@/components/CultureHero";
import LiveMusicCreators from "@/components/LiveMusicCreators";
import OriginalsPlaylist from "@/components/OriginalsPlaylist";
import ProofOfWork from "@/components/ProofOfWork";
import InstitutionalMetrics from "@/components/InstitutionalMetrics";
import TrustSystem from "@/components/TrustSystem";
import PartnerRail from "@/components/PartnerRail";
import {
  experiences,
  management,
  originals,
  siteConfig,
  platformOutcomes,
} from "@/lib/content";

async function loadFeaturedHoopsPlayers() {
  try {
    const response = await fetch(`${siteConfig.hoopsPlatform}/api/players`, {
      next: { revalidate: 300 },
      headers: { Accept: "application/json" },
    });

    if (!response.ok) return [];

    const payload = await response.json();
    const rows = Array.isArray(payload?.players) ? payload.players : [];

    return rows
      .filter((player) => {
        const status = String(player?.profile_status || "").toLowerCase();
        return (
          player?.id &&
          player?.is_active !== false &&
          !["draft", "hidden"].includes(status)
        );
      })
      .map((player) => ({
        id: String(player.id),
        name:
          player.full_name ||
          player.name ||
          player.nickname ||
          "FACKTS Hoops player",
        position: player.position || player.role || "Player",
        team: player.current_team || "FACKTS Hoops",
        jerseyNumber: player.jersey_number
          ? String(player.jersey_number)
          : "",
        photoUrl: player.photo_url || "",
        photoPosition: player.photo_position || "center 30%",
        featured: Boolean(player.is_featured),
        verified:
          String(player.verification_status || "").toLowerCase() === "verified",
        href: `${siteConfig.hoopsPlayers}/${encodeURIComponent(
          String(player.id)
        )}`,
      }))
      .sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        if (Boolean(a.photoUrl) !== Boolean(b.photoUrl)) {
          return a.photoUrl ? -1 : 1;
        }
        return a.name.localeCompare(b.name);
      })
      .slice(0, 3);
  } catch {
    return [];
  }
}

function PlayerPhoto({ player }) {
  if (player.photoUrl) {
    return (
      <img
        src={player.photoUrl}
        alt={player.name}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: player.photoPosition }}
      />
    );
  }

  const initials = player.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return <span className="hoops-live-initials">{initials || "FH"}</span>;
}

function HoopsProfilePreview({ profiles }) {
  return (
    <div className="hoops-live-profiles">
      <div className="hoops-live-profiles-head">
        <div>
          <span>LIVE FROM FACKTS HOOPS</span>
          <strong>Actual players. Actual profiles.</strong>
        </div>
        <a href={siteConfig.hoopsPlayers}>View all players ↗</a>
      </div>

      {profiles.length ? (
        <div className="hoops-live-profile-grid">
          {profiles.map((player, index) => (
            <a
              className="hoops-live-profile-card"
              href={player.href}
              key={player.id}
            >
              <div className="hoops-live-profile-photo">
                <PlayerPhoto player={player} />
                <span className="hoops-live-profile-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {player.verified ? (
                  <span className="hoops-live-verified">VERIFIED</span>
                ) : null}
              </div>

              <div className="hoops-live-profile-info">
                <small>{player.team}</small>
                <strong>{player.name}</strong>
                <p>
                  {player.position}
                  {player.jerseyNumber ? ` · #${player.jerseyNumber}` : ""}
                </p>
                <b>View live profile ↗</b>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <a
          className="hoops-live-directory-fallback"
          href={siteConfig.hoopsPlayers}
        >
          <span>LIVE PLAYER DIRECTORY</span>
          <strong>Open the current FACKTS Hoops player records.</strong>
          <b>Browse players ↗</b>
        </a>
      )}
    </div>
  );
}

export default async function Home() {
  const featuredHoopsPlayers = await loadFeaturedHoopsPlayers();

  const featuredMusicOriginal =
    originals.music.find((item) => item.homeFeatured) ||
    originals.music.find((item) => item.id) ||
    originals.music[0];

  const featuredHoopsOriginal =
    originals.hoops.find((item) => item.homeFeatured) ||
    originals.hoops.find((item) => item.id) ||
    originals.hoops[0];

  return (
    <main className="home-v41">
      <CultureHero />

      <section className="home-understand-v41" id="platforms">
        <div className="shell home-understand-grid-v41">
          <div>
            <div className="eyebrow">What FACKTS actually is</div>
            <h2>A group that builds the infrastructure around culture.</h2>
          </div>

          <div className="home-understand-copy-v41">
            <p>
              FACKTS Africa Group is not simply a basketball page, music page or media
              company. FACKTS Africa Group builds dedicated platforms that help people and
              organisations become easier to see, organise, document and
              connect.
            </p>

            <div className="home-definition-grid-v41">
              <div>
                <span>01</span>
                <strong>FACKTS Hoops</strong>
                <p>Players, teams, games, records and basketball communities.</p>
              </div>
              <div>
                <span>02</span>
                <strong>FACKTS Music</strong>
                <p>
                  Artists, producers, projects, sessions, credits and discovery.
                </p>
              </div>
              <div>
                <span>03</span>
                <strong>FACKTS Properties</strong>
                <p>
                  Live formats and cultural experiences built on top of the
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-live-v41 home-live-hoops-v41">
        <div className="shell">
          <div className="home-live-head-v41">
            <div>
              <div className="eyebrow">Basketball platform</div>
              <h2>Basketball, structured.</h2>
            </div>
            <div>
              <p>
                FACKTS Hoops gives players and teams a living basketball
                identity: profiles, records, game context and a platform that
                can grow with the sport.
              </p>
              <a href={siteConfig.hoopsPlatform}>Enter FACKTS Hoops ↗</a>
            </div>
          </div>

          <HoopsProfilePreview profiles={featuredHoopsPlayers} />
        </div>
      </section>

      <section className="home-live-v41 home-live-music-v41">
        <div className="shell">
          <div className="home-live-head-v41">
            <div>
              <div className="eyebrow">Music platform</div>
              <h2>Creative work, organised.</h2>
            </div>
            <div>
              <p>
                FACKTS Music gives creators a public identity while keeping
                projects, collaborators, sessions and credits connected to the
                work itself.
              </p>
              <a href={siteConfig.musicPlatform}>Enter FACKTS Music ↗</a>
            </div>
          </div>

          <LiveMusicCreators platformUrl={siteConfig.musicPlatform} />
        </div>
      </section>

      <ProofOfWork />
      <InstitutionalMetrics />
      <TrustSystem />
      <PartnerRail />

      <section className="home-originals-v44">
        <div className="shell">
          <div className="home-originals-head-v44">
            <div>
              <div className="eyebrow">FACKTS Originals</div>
              <h2>See the culture in motion.</h2>
            </div>
            <div>
              <p>
                Original series prove what the platforms are connected to in the
                real world: basketball stories, music formats, people,
                development and recurring FACKTS programming.
              </p>
              <Link href="/originals">Explore all Originals ↗</Link>
            </div>
          </div>

          <div className="home-originals-grid-v44">
            <div>
              <div className="home-originals-label-v44">
                <strong>FACKTS MUSIC</strong>
                <span>On Set / conversations / creator-led formats</span>
              </div>
              <OriginalsPlaylist playlist={featuredMusicOriginal} compact />
            </div>

            <div>
              <div className="home-originals-label-v44">
                <strong>FACKTS HOOPS</strong>
                <span>Court Take-Overs / 1V1 / basketball stories</span>
              </div>
              <OriginalsPlaylist playlist={featuredHoopsOriginal} compact />
            </div>
          </div>
        </div>
      </section>

      <section className="home-outcomes-v41">
        <div className="shell">
          <div className="home-section-intro-v41">
            <div className="eyebrow">What the platforms make possible</div>
            <h2>Less fragmentation. More continuity.</h2>
          </div>

          <div className="home-outcomes-grid-v41">
            {platformOutcomes.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-properties-v41">
        <div className="shell">
          <div className="home-section-intro-v41">
            <div className="eyebrow">FACKTS properties</div>
            <h2>Experiences built on top of the platforms.</h2>
            <p>
              Court Takeovers, VERSUS and FACKTS 3×3 are formats through which
              the ecosystems become physical, social and partner-ready.
            </p>
          </div>

          <div className="home-property-list-v41">
            {experiences.map((item, index) => (
              <Link href={`/experiences/${item.slug}`} key={item.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.type}</small>
                </div>
                <em>{item.status}</em>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-people-v41">
        <div className="shell home-people-grid-v41">
          <div>
            <div className="eyebrow">People behind FACKTS</div>
            <h2>The operators behind the platforms.</h2>
            <p>
              The group is built by development, management, music
              administration and finance working across the same ecosystem.
            </p>
            <Link href="/people">Meet the team ↗</Link>
          </div>

          <div className="home-people-list-v41">
            {management.slice(0, 7).map((person) => (
              <div key={`${person.name}-${person.role}`}>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-partner-v41">
        <div className="shell home-partner-grid-v41">
          <div className="eyebrow">
            Brands / teams / studios / institutions
          </div>

          <div>
            <h2>Partnerships are built around the ecosystem, not just a post.</h2>
            <p>
              FACKTS creates partnership opportunities around structured
              communities, participation, live experiences, visibility and
              cultural relevance.
            </p>
            <Link href="/partners">
              Build with FACKTS <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-final-v41">
        <div className="shell home-final-grid-v41">
          <div>
            <div className="eyebrow">FACKTS Africa Group</div>
            <h2>Two platforms. One growing cultural system.</h2>
          </div>
          <div>
            <a href={siteConfig.hoopsPlatform}>FACKTS Hoops ↗</a>
            <a href={siteConfig.musicPlatform}>FACKTS Music ↗</a>
            <Link href="/originals">FACKTS Originals ↗</Link>
            <Link href="/work">Selected Work ↗</Link>
            <Link href="/about">Understand the group ↗</Link>
            <Link href="/partners">Partnerships ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
