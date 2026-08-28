"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function CultureHero() {
  const heroRef = useRef(null);

  function handleMove(event) {
    const el = heroRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--px", `${x * 5}px`);
    el.style.setProperty("--py", `${y * 4}px`);
  }

  return <section ref={heroRef} onMouseMove={handleMove} className="culture-hero executive-hero premium-hero">
    <div className="hero-media" aria-hidden="true">
      <div className="hero-single-photo">
        <Image
          src="/fackts/hoops/court-contest.webp"
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
        />
      </div>
      <div className="hero-vignette" />
      <div className="hero-edge" />
    </div>

    <div className="shell hero-content">
      <div className="hero-center">
        <div className="kicker meta">
          <span>FACKTS AFRICA GROUP</span>
          <span>BORN IN KENYA · BUILT FOR AFRICA</span>
        </div>
        <h1 className="mega">CULTURE DOESN&apos;T SIT STILL.</h1>
        <p className="hero-deck">Basketball, music and live culture platforms built to make African talent, communities and experiences more visible, structured and valuable.</p>
      </div>

      <div className="hero-bottom">
        <div className="hero-signal meta"><span>HOOPS</span><span>MUSIC</span><span>PEOPLE</span><span>EXPERIENCES</span></div>
        <div className="hero-actions">
          <Link href="#worlds" className="hero-enter hero-enter-primary">Explore FACKTS <b>↓</b></Link>
          <Link href="/partners" className="hero-enter hero-enter-quiet">Partner with us ↗</Link>
        </div>
      </div>
    </div>
  </section>;
}
