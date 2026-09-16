import { institutionalMetrics } from "@/lib/institutional";

export default function InstitutionalMetrics() {
  return (
    <section className="institutional-metrics" aria-label="FACKTS by the numbers">
      <div className="shell">
        <div className="institutional-metrics-label">FACKTS BY THE NUMBERS</div>

        <div className="institutional-metrics-grid">
          {institutionalMetrics.map((item) => (
            <div className="institutional-metric" key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <small>{item.note}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
