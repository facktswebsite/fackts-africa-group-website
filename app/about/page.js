import Link from "next/link";
import { siteConfig, experiences } from "@/lib/content";

export const metadata = {
  title: {
    absolute: "About FACKTS Africa Group | Platforms for Basketball, Music & Culture",
  },
  description:
    "Understand FACKTS Africa Group, a Kenya-born company building platforms, experiences and partnerships around basketball, music, people and African youth culture.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="about-v41">
      <section className="about-hero-v41">
        <div className="shell">
          <div className="eyebrow">About FACKTS Africa Group</div>
          <h1>WE ARE BUILDING THE INFRASTRUCTURE AROUND CULTURE.</h1>
          <p>
            FACKTS Africa Group is a Kenya-born culture and platform company
            building practical systems around basketball, music, people,
            communities and live experiences.
          </p>
        </div>
      </section>

      <section className="about-direct-v41">
        <div className="shell about-direct-grid-v41">
          <div>
            <span>01</span>
            <h2>What FACKTS is.</h2>
          </div>

          <div>
            <p>
              FACKTS Africa Group sits above two operating platforms — FACKTS
              Hoops and FACKTS Music — and a growing set of FACKTS-owned
              experiences and cultural properties.
            </p>
            <p>
              The group exists because a lot of African cultural activity is
              real, energetic and valuable, but the systems around it are often
              fragmented. Player identities disappear between teams. Basketball
              records remain on paper. Creative projects live inside chats.
              Contributors are forgotten. Events end without a usable archive.
              Partners struggle to understand what they are actually buying into.
            </p>
            <p>FACKTS is building the layer that connects those pieces.</p>
          </div>
        </div>
      </section>

      <section className="about-architecture-v41">
        <div className="shell">
          <div className="eyebrow">How the group is structured</div>

          <div className="about-architecture-list-v41">
            <article>
              <span>01</span>
              <div>
                <h3>FACKTS Hoops</h3>
                <p>
                  The basketball platform: players, teams, games, records,
                  competitions and basketball communities. The aim is to give
                  the sport continuity and a stronger digital home.
                </p>
                <a href={siteConfig.hoopsPlatform}>Enter FACKTS Hoops ↗</a>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>FACKTS Music</h3>
                <p>
                  The creative operating platform: creators, projects, beats,
                  sessions, credits, contribution history and public creator
                  identities.
                </p>
                <a href={siteConfig.musicPlatform}>Enter FACKTS Music ↗</a>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>FACKTS Properties</h3>
                <p>
                  Live formats and cultural IP built on top of the platforms.
                  These include Court Takeovers and upcoming concepts such as
                  VERSUS and FACKTS 3×3.
                </p>
                <Link href="/experiences">Explore experiences ↗</Link>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>Originals & archive</h3>
                <p>
                  Recurring FACKTS programming turns games, histories,
                  conversations and creator stories into a record people can
                  return to.
                </p>
                <Link href="/originals">Explore Originals ↗</Link>
              </div>
            </article>

            <article>
              <span>05</span>
              <div>
                <h3>Selected work & evidence</h3>
                <p>
                  Case studies show what FACKTS has actually operated, delivered
                  and documented across basketball, music and culture.
                </p>
                <Link href="/work">View selected work ↗</Link>
              </div>
            </article>

            <article>
              <span>06</span>
              <div>
                <h3>Partnerships</h3>
                <p>
                  The commercial bridge around the ecosystem. FACKTS works with
                  teams, studios, brands and institutions where participation,
                  visibility, community and useful evidence create genuine value.
                </p>
                <Link href="/partners">Partner with FACKTS ↗</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-model-v41">
        <div className="shell about-direct-grid-v41">
          <div>
            <span>02</span>
            <h2>What the group actually does.</h2>
          </div>

          <div className="about-model-grid-v41">
            <div>
              <strong>Build platforms</strong>
              <p>
                Digital environments where players, teams, creators and
                projects can have identity, structure and continuity.
              </p>
            </div>
            <div>
              <strong>Build experiences</strong>
              <p>
                Physical formats that turn the platforms into real-world
                participation, community and cultural moments.
              </p>
            </div>
            <div>
              <strong>Document evidence</strong>
              <p>
                Photography, video, records, interviews and stories extend the
                life of the work. Media supports the system; it is not the whole
                business.
              </p>
            </div>
            <div>
              <strong>Connect partners</strong>
              <p>
                Partnerships are built around active communities, useful
                experiences and evidence rather than logo placement alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-people-served-v41">
        <div className="shell about-direct-grid-v41">
          <div>
            <span>03</span>
            <h2>Who FACKTS is built around.</h2>
          </div>

          <div className="about-served-list-v41">
            <div>
              <strong>Players & teams</strong>
              <p>
                Identity, records, competition context, visibility and stronger
                basketball systems.
              </p>
            </div>
            <div>
              <strong>Artists, producers & studios</strong>
              <p>
                Creator identity, project structure, credits, collaboration and
                discovery.
              </p>
            </div>
            <div>
              <strong>Fans & communities</strong>
              <p>
                Better ways to understand, follow and participate in the people
                and culture around them.
              </p>
            </div>
            <div>
              <strong>Brands & institutions</strong>
              <p>
                Credible entry points into active cultural communities through
                programmes, partnerships and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-not-v41">
        <div className="shell about-direct-grid-v41">
          <div>
            <span>04</span>
            <h2>What FACKTS is not.</h2>
          </div>

          <div>
            <p>
              FACKTS is not just a media house. It is not just an events
              company. It is not a basketball team, music label or agency
              pretending to be everything at once.
            </p>
            <p>
              The platforms are the foundation. Media proves and distributes
              what happens there. Experiences bring the ecosystem into physical
              spaces. Partnerships help the system grow.
            </p>
          </div>
        </div>
      </section>

      <section className="about-now-v41">
        <div className="shell about-direct-grid-v41">
          <div>
            <span>05</span>
            <h2>Where we are now.</h2>
          </div>

          <div>
            <p>
              Nairobi is the current operating base. FACKTS Hoops and FACKTS
              Music are the first major platform worlds. The group is developing
              repeatable experiences on top of them while continuing to improve
              the digital infrastructure behind both communities.
            </p>
            <p>
              The ambition is continental, but the approach is practical: prove
              the systems in Kenya, make them useful, make them repeatable, then
              build outward without pretending the network already exists
              everywhere.
            </p>

            <div className="about-status-list-v41">
              {experiences.map((item) => (
                <div key={item.slug}>
                  <strong>{item.title}</strong>
                  <span>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-principle-v41">
        <div className="shell">
          <div className="eyebrow">The simplest way to understand FACKTS</div>
          <h2>
            Culture already moves. FACKTS builds the platforms, records,
            experiences and partnerships that help it move further.
          </h2>
          <div>
            <a href={siteConfig.hoopsPlatform}>FACKTS Hoops ↗</a>
            <a href={siteConfig.musicPlatform}>FACKTS Music ↗</a>
            <Link href="/work">Selected Work ↗</Link>
            <Link href="/partners">Build with the group ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
