
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return <footer className="footer">
    <div className="shell">
      <div className="footer-top">
        <div>
          <div className="meta text-muted">FACKTS AFRICA GROUP</div>
          <div className="big">Born in Kenya. Built for Africa. Made for the world.</div>
        </div>
        <div className="footer-col"><h4>Worlds</h4><Link href="/hoops">Hoops</Link><Link href="/music">Music</Link><Link href="/people">People</Link></div>
        <div className="footer-col"><h4>Discover</h4><Link href="/stories">Stories</Link><Link href="/experiences">Experiences</Link><Link href="/about">About</Link></div>
        <div className="footer-col"><h4>Build with us</h4><Link href="/partners">Partners</Link><Link href="/contact">Contact</Link><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} FACKTS Africa Group</span><span>{siteConfig.addressLine1} · {siteConfig.addressLine2} · {siteConfig.phone}</span></div>
    </div>
  </footer>;
}
