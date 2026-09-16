import Image from "next/image";
import Link from "next/link";
import { ecosystemPartners } from "@/lib/partners";
import { engagementModels, partnershipSteps } from "@/lib/institutional";

export const metadata = {
  title: { absolute: "Partners | FACKTS Africa Group" },
  description:
    "Meet the independent partners strengthening the FACKTS Africa Group ecosystem across gear, governance, music infrastructure, rehabilitation and insurance, and explore the group's partnership models.",
  alternates: { canonical: "/partners" },
};

function PartnerLink({ partner }) {
  if (!partner.website) {
    return <span className="partner-no-link">ACTIVE PARTNER</span>;
  }

  return (
    <a href={partner.website} target="_blank" rel="noreferrer">
      Visit partner ↗
    </a>
  );
}

export default function PartnersPage() {
  return (
    <main className="partners-institutional">
      <section className="partners-hero">
        <div className="shell">
          <div className="meta">PARTNERS / FACKTS AFRICA GROUP</div>
          <h1 className="mega" style={{ marginTop: 20 }}>
            DON&apos;T ADVERTISE
            <br />
            AT CULTURE.
            <br />
            ENTER IT.
          </h1>
        </div>
      </section>

      <section className="partners-intro">
        <div className="shell partners-grid">
          <div>
            <div className="eyebrow">How FACKTS Africa Group builds partnerships</div>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              BUILD FOR AN OUTCOME.
            </h2>
            <p className="body-xl text-muted" style={{ marginTop: 28 }}>
              FACKTS Africa Group builds partnerships around participation,
              useful infrastructure, community access, talent visibility,
              cultural relevance and evidence that continues to exist after an
              activation, programme or property has ended.
            </p>
          </div>

          <div className="partner-principle">
            <span>THE OPERATING PRINCIPLE</span>
            <strong>BRIEF → AUDIENCE → EXPERIENCE → EVIDENCE.</strong>
            <p>
              Each partnership begins with a defined organisational outcome.
              FACKTS Africa Group then identifies the audience, platform,
              property, programme and evidence structure required to support it.
            </p>
            <Link href="/work">See proof of work ↗</Link>
          </div>
        </div>
      </section>

      <section className="partner-ecosystem" id="ecosystem-partners">
        <div className="shell">
          <div className="institutional-section-head partner-ecosystem-head">
            <div>
              <div className="eyebrow">The operating circle</div>
              <h2>Specialist partners strengthen specific parts of the ecosystem.</h2>
            </div>

            <div>
              <p>
                FACKTS Africa Group works with independent organisations whose
                specialist capabilities strengthen how the ecosystem moves,
                operates, protects people, supports creators and develops
                institutional maturity.
              </p>
              <small>
                A displayed partnership does not imply common ownership,
                merger or authority to act for another organisation unless
                separately agreed in writing.
              </small>
            </div>
          </div>

          <div className="partner-orbit" aria-hidden="true">
            <div className="partner-orbit-core">
              <span>FACKTS</span>
              <strong>AFRICA GROUP</strong>
              <small>PLATFORMS / EXPERIENCES / CULTURE</small>
            </div>

            {ecosystemPartners.map((partner, index) => (
              <div
                className={`partner-orbit-node partner-orbit-node-${index + 1} partner-orbit-node-${partner.slug}`}
                key={partner.slug}
              >
                <div className="partner-orbit-logo-frame">
                  <Image
                    className="partner-logo-image"
                    src={partner.logo}
                    alt=""
                    width={360}
                    height={180}
                  />
                </div>
                <span>{partner.role}</span>
              </div>
            ))}
          </div>

          <div className="partner-detail-grid">
            {ecosystemPartners.map((partner, index) => (
              <article className="partner-detail-card" key={partner.slug}>
                <div className="partner-detail-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className={`partner-logo-stage partner-logo-stage-${partner.slug}`}>
                  <Image
                    className="partner-logo-image"
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={640}
                    height={420}
                    sizes="(max-width: 760px) 86vw, 34vw"
                  />
                </div>

                <div className="partner-detail-copy">
                  <div className="meta">{partner.signal}</div>
                  <h3>{partner.name}</h3>
                  <strong>{partner.role}</strong>
                  <p>{partner.about}</p>

                  <div className="partner-contribution">
                    <span>How this partnership strengthens FACKTS Africa Group</span>
                    <p>{partner.contribution}</p>
                  </div>

                  <div className="partner-world-tags">
                    {partner.worlds.map((world) => (
                      <span key={`${partner.slug}-${world}`}>{world}</span>
                    ))}
                  </div>

                  <PartnerLink partner={partner} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partnership-models">
        <div className="shell">
          <div className="institutional-section-head">
            <div>
              <div className="eyebrow">Ways organisations work with FACKTS</div>
              <h2>Engagement models are matched to the required outcome.</h2>
            </div>

            <div>
              <p>
                FACKTS Africa Group structures each engagement around the
                relevant community, platform, property, timing, operating scope
                and evidence requirements rather than forcing every
                organisation into the same package.
              </p>
            </div>
          </div>

          <div className="partnership-model-grid">
            {engagementModels.map((model) => (
              <article key={model.number}>
                <div className="partnership-model-number">{model.number}</div>
                <h3>{model.title}</h3>
                <p>{model.audience}</p>

                {model.examples ? (
                  <div className="partnership-examples">
                    <span>Relevant properties</span>
                    <p>{model.examples}</p>
                  </div>
                ) : null}

                <ul>
                  {model.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-process">
        <div className="shell">
          <div className="institutional-section-head">
            <div>
              <div className="eyebrow">How FACKTS Africa Group structures a partnership</div>
              <h2>From brief to evidence.</h2>
            </div>

            <div>
              <p>
                FACKTS Africa Group uses a clear operating path that keeps an
                idea connected to design, delivery, documentation and the
                decision that follows the project.
              </p>
            </div>
          </div>

          <div className="partner-process-grid">
            {partnershipSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-start">
        <div className="shell partner-start-grid">
          <div>
            <div className="eyebrow">Partnership enquiries</div>
            <h2>FACKTS Africa Group starts with the outcome.</h2>
          </div>

          <div>
            <p>
              Partnership briefs are assessed against the intended audience,
              outcome, timing and operating environment. The appropriate
              FACKTS platform, property or programme is then shaped around
              that requirement.
            </p>

            <div className="partner-start-actions">
              <Link className="partner-start-primary" href="/contact">
                PARTNERSHIP ENQUIRIES <span>↗</span>
              </Link>
              <Link href="/work">View selected work →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
