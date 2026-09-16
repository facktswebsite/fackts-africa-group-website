import Image from "next/image";
import Link from "next/link";
import { ecosystemPartners } from "@/lib/partners";

export default function PartnerRail() {
  return (
    <section className="partner-rail-home" aria-label="FACKTS Africa Group ecosystem partners">
      <div className="shell">
        <div className="partner-rail-head">
          <div>
            <div className="eyebrow">Ecosystem partners</div>
            <h2>Specialist partners strengthen the FACKTS ecosystem.</h2>
          </div>

          <Link href="/partners#ecosystem-partners">
            Explore the partner ecosystem ↗
          </Link>
        </div>

        <div className="partner-rail-logos">
          {ecosystemPartners.map((partner) => (
            <div
              className={`partner-rail-logo partner-rail-logo-${partner.slug}`}
              key={partner.slug}
            >
              <div className="partner-rail-logo-frame">
                <Image
                  className="partner-logo-image"
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={420}
                  height={220}
                  sizes="(max-width: 680px) 72vw, 18vw"
                />
              </div>
              <span>{partner.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
