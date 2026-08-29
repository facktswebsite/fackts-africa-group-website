import Link from "next/link";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return <footer className="footer platform-footer">
    <div className="shell">
      <div className="footer-top">
        <div>
          <div className="meta text-muted">FACKTS AFRICA GROUP</div>
          <div className="big">Platforms for basketball, music and the communities around them.</div>
        </div>
        <div className="footer-col"><h4>Platforms</h4><a href={siteConfig.hoopsPlatform}>FACKTS Hoops ↗</a><a href={siteConfig.musicPlatform}>FACKTS Music ↗</a><Link href="/experiences">FACKTS Properties</Link></div>
        <div className="footer-col"><h4>Group</h4><Link href="/people">People</Link><Link href="/about">About</Link><Link href="/stories">Stories</Link></div>
        <div className="footer-col"><h4>Work with us</h4><Link href="/partners">Partners</Link><Link href="/contact">Contact</Link><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} FACKTS Africa Group</span><span>{siteConfig.addressLine1} · {siteConfig.addressLine2} · {siteConfig.phone}</span></div>
    </div>
  </footer>;
}
