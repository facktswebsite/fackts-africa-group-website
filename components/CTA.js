
import Link from "next/link";
export default function CTA({title="Build something that moves culture.", button="Work with FACKTS"}){
  return <section className="section-tight">
    <div className="shell">
      <div className="cta-band">
        <h2>{title}</h2>
        <Link className="btn" style={{background:"#080a0d",color:"#fff",borderColor:"#080a0d"}} href="/contact">{button} <span className="arrow">→</span></Link>
      </div>
    </div>
  </section>
}
