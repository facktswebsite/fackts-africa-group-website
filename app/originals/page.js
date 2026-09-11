import OriginalsPlaylist from "@/components/OriginalsPlaylist";
import { originals, siteConfig } from "@/lib/content";

export const metadata = {
  title: { absolute: "FACKTS Originals | FACKTS Africa Group" },
  description:
    "FACKTS Originals is the programming archive for FACKTS Hoops and FACKTS Music: basketball series, music conversations, interviews, documentaries and recurring FACKTS formats.",
  alternates: { canonical: "/originals" },
  openGraph: {
    title: "FACKTS Originals | FACKTS Africa Group",
    description:
      "Original series and programming from FACKTS Hoops and FACKTS Music.",
    url: `${siteConfig.website}/originals`,
    siteName: "FACKTS Africa Group",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function PlatformSection({ id, eyebrow, title, copy, items, tone }) {
  return (
    <section className={`originals-catalog-v45 ${tone}`} id={id}>
      <div className="shell">
        <div className="originals-catalog-head-v45">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2>{title}</h2>
          </div>

          <div>
            <p>{copy}</p>
            <p
              style={{
                marginTop: 16,
                color: tone === "is-music" ? "#d9bdff" : "var(--fa-lime)",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              Select a series to watch without leaving FACKTS.
            </p>
          </div>
        </div>

        <div className="originals-card-grid-v45">
          {items.map((playlist) => (
            <OriginalsPlaylist
              key={`${playlist.platform}-${playlist.title}`}
              playlist={playlist}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OriginalsPage() {
  return (
    <main className="originals-v45">
      <section className="originals-hero-v45">
        <div className="shell originals-hero-grid-v45">
          <div>
            <div className="eyebrow">FACKTS Originals</div>
            <h1>
              THE CULTURE
              <br />
              HAS A RECORD.
            </h1>
          </div>

          <div className="originals-hero-copy-v45">
            <p>
              Originals is the programming layer of FACKTS Africa Group:
              recurring shows, interviews, competition films, music
              conversations, player stories and archives produced around FACKTS
              Hoops and FACKTS Music.
            </p>

            <div className="originals-hero-stats-v45">
              <span>
                <b>{originals.music.length}</b> MUSIC COLLECTIONS
              </span>
              <span>
                <b>{originals.hoops.length}</b> HOOPS COLLECTIONS
              </span>
              <span>
                <b>02</b> PLATFORM WORLDS
              </span>
            </div>

            <div className="originals-jump-v45">
              <a href="#music-originals">Music Originals ↓</a>
              <a href="#hoops-originals">Hoops Originals ↓</a>
            </div>
          </div>
        </div>
      </section>

      <PlatformSection
        id="music-originals"
        eyebrow="FACKTS Music Originals"
        title="MUSIC, PEOPLE AND THE CONVERSATION AROUND IT."
        copy="From On Set Na Millz and Hood Rep to artist discovery, freestyles, releases and music commentary, this is the growing visual record around the FACKTS Music world."
        items={originals.music}
        tone="is-music"
      />

      <PlatformSection
        id="hoops-originals"
        eyebrow="FACKTS Hoops Originals"
        title="THE GAME BEYOND THE SCOREBOARD."
        copy="Academies, career journeys, 1 on 1 competition, Cups, Court Take-Overs and the history and conversations around Kenyan basketball all live here."
        items={originals.hoops}
        tone="is-hoops"
      />

      <section className="originals-rule-v45">
        <div className="shell originals-rule-grid-v45">
          <div className="eyebrow">The distinction</div>
          <div>
            <h2>
              ORIGINALS DOCUMENT IT.
              <br />
              EXPERIENCES PUT YOU INSIDE IT.
            </h2>
            <p>
              Originals is FACKTS programming and archive. Experiences is where
              audiences, players, creators and partners participate in FACKTS
              properties in the real world.
            </p>
            <a href="/experiences">Explore FACKTS Experiences ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}
