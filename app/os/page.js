import Link from "next/link";
import "./os.css";
export const metadata = {
  title: "FACKTS Africa OS | Android App V1",
  description: "Install FACKTS Africa OS on Android or access the back-office operating system securely in your browser.",
  alternates: { canonical: "/os" }
};
const apk = "https://backoffice.facktsafrica.co.ke/downloads/FACKTS%20Africa%20OS%20V1.apk";
const checksum = "https://backoffice.facktsafrica.co.ke/downloads/FACKTS%20Africa%20OS%20V1.sha256";
export default function OSPage() {
  return <main className="fackts-os-page">
    <div className="fackts-os-glow" aria-hidden="true" />
    <section className="shell fackts-os-hero">
      <div className="fackts-os-eyebrow"><span className="fackts-os-dot" /> FACKTS AFRICA GROUP / THE OPERATING SYSTEM</div>
      <h1>FACKTS AFRICA <span>OS.</span></h1>
      <p className="fackts-os-lead">Projects. People. Finance. Operations. One connected workspace to keep the work moving.</p>
      <div className="fackts-os-actions">
        <a className="fackts-os-download" href={apk}><span className="fackts-os-download-copy"><strong>Download for Android</strong><small>FACKTS Africa OS · V1</small></span><span className="fackts-os-download-arrow" aria-hidden="true">↓</span></a>
        <a className="fackts-os-browser" href="https://backoffice.facktsafrica.co.ke/">Open in browser <span aria-hidden="true">↗</span></a>
      </div>
      <p className="fackts-os-note">FACKTS Africa OS is an internal platform; an authorized account is required to sign in. Android may request permission to install apps downloaded outside Google Play and may scan the APK. Keep Play Protect enabled.</p>
      <a className="fackts-os-checksum" href={checksum}>Verify the Android file SHA-256 ↗</a>
    </section>
    <section className="shell fackts-os-details" aria-label="About FACKTS Africa OS">
      <div><small>01 / CONNECT</small><h2>One system, not ten scattered tools.</h2><p>Bring work across FACKTS Africa together without confusing the OS with any individual product.</p></div>
      <div><small>02 / CONTROL</small><h2>Access belongs to the right people.</h2><p>Team and project permissions remain controlled by the existing live operating system.</p></div>
      <div><small>03 / START</small><h2>Android first.</h2><p>V1 is the direct Android download. Google Play distribution is planned separately.</p></div>
    </section>
    <div className="shell fackts-os-back"><Link href="/">Back to FACKTS Africa Group ↗</Link></div>
  </main>;
}
