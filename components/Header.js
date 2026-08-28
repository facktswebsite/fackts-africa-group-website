
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Hoops", "/hoops"],
  ["Music", "/music"],
  ["Stories", "/stories"],
  ["Experiences", "/experiences"],
  ["People", "/people"],
  ["About", "/about"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return <>
    <header className={`site-header ${solid ? "is-solid" : ""}`}>
      <div className="shell nav-shell">
        <Link className="brand-mark" href="/" aria-label="FACKTS Africa Group home">
          <Image src="/fackts/brand/logo.png" width={52} height={52} alt="FACKTS Africa Group" priority />
          <span className="brand-words">
            <strong>FACKTS AFRICA GROUP</strong>
            <span>AFRICA GROUP · KENYA</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link className={pathname === href || pathname.startsWith(`${href}/`) ? "active" : ""} key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <Link className="nav-cta" href="/partners">Partner with us <span>↗</span></Link>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? "×" : "☰"}</button>
      </div>
    </header>

    <div className={`mobile-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
      <nav aria-label="Mobile navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <Link href="/partners">Partners ↗</Link>
      </nav>
      <div />
      <div className="drawer-foot">FACKTS AFRICA GROUP · HOOPS × MUSIC × PEOPLE × EXPERIENCES</div>
    </div>
  </>;
}
