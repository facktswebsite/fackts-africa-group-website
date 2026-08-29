"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeMedia } from "@/lib/content";

export default function CultureHero() {
  const heroRef = useRef(null);

  function handleMove(event) {
    const el = heroRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--px", `${x * 3}px`);
    el.style.setProperty("--py", `${y * 2}px`);
  }

  return <section ref={heroRef} onMouseMove={handleMove} className="culture-hero platform-hero">
    <div className="hero-media" aria-hidden="true">
      <div className="hero-single-photo">
        <Image src={homeMedia.hero} alt="" fill priority quality={90} sizes="100vw" />
      </div>
      <div className="hero-vignette" />
    </div>

    <div className="shell hero-content">
      <div className="hero-center">
        <div className="kicker meta"><span>FACKTS AFRICA GROUP</span><span>KENYA → AFRICA</span></div>
        <h1 className="mega">CULTURE DOESN&apos;T SIT STILL.</h1>
        <p className="hero-deck">FACKTS builds platforms for African basketball and music, giving players, teams, artists, studios, events and partners better ways to be seen, organised and connected.</p>
      </div>
      <div className="hero-bottom">
        <div className="hero-signal meta"><span>HOOPS PLATFORM</span><span>MUSIC PLATFORM</span><span>FACKTS PROPERTIES</span></div>
        <div className="hero-actions"><Link href="#worlds" className="hero-enter hero-enter-primary">Explore the platforms <b>↓</b></Link><Link href="/partners" className="hero-enter hero-enter-quiet">Partner with us ↗</Link></div>
      </div>
    </div>
  </section>;
}
