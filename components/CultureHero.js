
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const bars = Array.from({ length: 30 }, (_, i) => i);

export default function CultureHero() {
  const heroRef = useRef(null);

  function handleMove(event) {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--px", `${x * 8}px`);
    el.style.setProperty("--py", `${y * 6}px`);
  }

  return <section ref={heroRef} onMouseMove={handleMove} className="culture-hero executive-hero">
    <div className="hero-media" aria-hidden="true">
      <div className="hero-single-photo">
        <Image src="/fackts/brand/hero-main.jpg" alt="" fill priority quality={100} sizes="100vw" />
      </div>
      <div className="hero-vignette" />
      <div className="court-geometry" />
      <div className="music-wave">{bars.map(i => <span key={i} style={{ height: `${10 + ((i * 17) % 44)}px` }} />)}</div>
      <div className="hero-rec"><i /> HOOPS × MUSIC</div>
      <div className="hero-shotclock">24<small>FACKTS / CULTURE IN MOTION</small></div>
    </div>

    <div className="shell hero-content">
      <div className="hero-center">
        <div className="kicker meta"><span>FACKTS AFRICA GROUP</span><span>BORN IN KENYA · BUILT FOR AFRICA</span></div>
        <h1 className="mega">CULTURE DOESN&apos;T SIT STILL.</h1>
      </div>
      <div className="hero-bottom">
        <p>FACKTS Africa Group builds basketball, music and live culture platforms that make African talent, communities and experiences more visible, structured and valuable.</p>
        <Link href="#worlds" className="hero-enter">Explore FACKTS <b>↓</b></Link>
      </div>
    </div>
  </section>;
}
