"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Hoops", "/hoops"],
  ["Music", "/music"],
  ["Originals", "/originals"],
  ["Experiences", "/experiences"],
  ["People", "/people"],
  ["About", "/about"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className={`site-header turnaround-header ${solid ? "is-solid" : ""}`}>
        <div className="nav-shell turnaround-nav-shell">
          <Link className="brand-mark turnaround-brand" href="/" aria-label="FACKTS Africa Group home">
            <span className="brand-signal">
              <span className="brand-signal-ring" />
              <Image src="/fackts/brand/logo.png" width={48} height={48} alt="FACKTS Africa Group" priority />
            </span>
            <span className="brand-words">
              <strong>FACKTS AFRICA GROUP</strong>
              <span>NAIROBI, KENYA</span>
            </span>
          </Link>

          <nav className="desktop-nav turnaround-desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => (
              <Link className={active(href) ? "active" : ""} key={href} href={href}>
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <div className="turnaround-header-actions">
            <Link className="nav-cta turnaround-nav-cta" href="/partners">
              Partner <span>↗</span>
            </Link>
            <button
              className={`menu-toggle turnaround-menu-toggle ${open ? "is-open" : ""}`}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span /><span />
            </button>
          </div>
        </div>
        <div className="header-signal-line" aria-hidden="true"><span /></div>
      </header>

      <div className={`turnaround-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="turnaround-drawer-backdrop" />
        <div className="turnaround-drawer-inner">
          <div className="drawer-index">NAV / FACKTS AFRICA GROUP</div>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href], index) => (
              <Link key={href} href={href} className={active(href) ? "active" : ""}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <span>{label}</span>
                <b>↗</b>
              </Link>
            ))}
          </nav>
          <div className="turnaround-drawer-foot">
            <Link href="/partners">Build with FACKTS ↗</Link>
            <span>NAIROBI, KENYA</span>
          </div>
        </div>
      </div>
    </>
  );
}
