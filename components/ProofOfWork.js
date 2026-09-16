import Link from "next/link";
import { selectedWork } from "@/lib/institutional";

export default function ProofOfWork() {
  return (
    <section className="institutional-proof">
      <div className="shell">
        <div className="institutional-section-head">
          <div>
            <div className="eyebrow">Proof of work</div>
            <h2>Built in the real world, not just on paper.</h2>
          </div>
          <div>
            <p>
              FACKTS is already operating across courts, events, studios,
              digital platforms and cultural documentation. These cases show
              what the group has actually put into motion.
            </p>
            <Link href="/work">View selected work ↗</Link>
          </div>
        </div>

        <div className="proof-card-grid">
          {selectedWork.map((item, index) => (
            <article className="proof-card" key={item.slug}>
              <div className="proof-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{item.category}</small>
              </div>

              <h3>{item.title}</h3>
              <p>{item.summary}</p>

              <div className="proof-evidence-mini">
                {item.evidence.slice(0, 3).map((metric) => (
                  <div key={`${item.slug}-${metric.label}`}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              <Link href={`/work/${item.slug}`}>
                View case <b>→</b>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
