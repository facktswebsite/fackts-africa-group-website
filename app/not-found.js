import Link from "next/link";

export default function NotFound() {
  return <main className="not-found-page">
    <div className="shell not-found-inner">
      <div className="eyebrow">404 / Off route</div>
      <h1 className="section-title">THIS PART OF THE WORLD ISN&apos;T HERE.</h1>
      <p className="body-xl text-muted">The link may have moved, the story may still be forming, or the route may no longer exist.</p>
      <div className="not-found-actions"><Link className="btn-line" href="/">Back to FACKTS <span className="arrow">→</span></Link><Link className="quiet-link dark" href="/stories">Open the archive →</Link></div>
    </div>
  </main>;
}
