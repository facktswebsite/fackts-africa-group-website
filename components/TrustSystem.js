import Link from "next/link";
import { trustPillars } from "@/lib/institutional";

export default function TrustSystem() {
  return (
    <section className="institutional-trust">
      <div className="shell">
        <div className="institutional-section-head institutional-trust-head">
          <div>
            <div className="eyebrow">Why trust FACKTS</div>
            <h2>Trust the systems, people, records and execution.</h2>
          </div>
          <div>
            <p>
              Credibility should be visible in how the work is organised, what
              gets documented and who is accountable for operating it.
            </p>
            <Link href="/people">Meet the operators ↗</Link>
          </div>
        </div>

        <div className="trust-grid">
          {trustPillars.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
