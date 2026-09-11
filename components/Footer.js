import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer turnaround-footer">
      <div className="turnaround-footer-marquee" aria-hidden="true">
        <div>
          <span>FACKTS AFRICA</span><i>●</i><span>HOOPS</span><i>●</i><span>MUSIC</span><i>●</i><span>LIVE CULTURE</span><i>●</i><span>NAIROBI</span><i>●</i><span>BUILT TO TRAVEL</span><i>●</i>
          <span>FACKTS AFRICA</span><i>●</i><span>HOOPS</span><i>●</i><span>MUSIC</span><i>●</i><span>LIVE CULTURE</span><i>●</i><span>NAIROBI</span><i>●</i><span>BUILT TO TRAVEL</span><i>●</i>
        </div>
      </div>

      <div className="shell turnaround-footer-shell">
        <div className="turnaround-footer-lead">
          <Link href="/" className="turnaround-footer-brand">
            <Image src="/fackts/brand/logo.png" width={62} height={62} alt="FACKTS Africa Group" />
            <span><strong>FACKTS AFRICA GROUP</strong><small>BORN IN KENYA. BUILT TO TRAVEL.</small></span>
          </Link>
          <h2>Culture moves.<br />We build what moves with it.</h2>
        </div>

        <div className="turnaround-footer-grid">
          <div className="footer-col"><h4>Platforms</h4><a href={siteConfig.hoopsPlatform}>FACKTS Hoops ↗</a><a href={siteConfig.musicPlatform}>FACKTS Music ↗</a><Link href="/experiences">FACKTS Properties</Link></div>
          <div className="footer-col"><h4>Explore</h4><Link href="/stories">Stories</Link><Link href="/people">People</Link><Link href="/about">About</Link></div>
          <div className="footer-col"><h4>Connect</h4><Link href="/partners">Partners</Link><Link href="/contact">Contact</Link><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
        </div>

        <div className="turnaround-footer-bottom">
          <span>© {new Date().getFullYear()} FACKTS Africa Group</span>
          <span>{siteConfig.addressLine1} · {siteConfig.addressLine2}</span>
          <span>{siteConfig.phone}</span>
        </div>
      </div>
    </footer>
  );
}
