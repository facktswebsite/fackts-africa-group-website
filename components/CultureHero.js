"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_VIDEO = process.env.NEXT_PUBLIC_FACKTS_HERO_VIDEO || "";

function videoKind(url) {
  if (!url) return { kind: "none", src: "" };

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be" || host.endsWith("youtube.com")) {
      let id = "";
      if (host === "youtu.be") id = parsed.pathname.split("/").filter(Boolean)[0] || "";
      if (!id && parsed.pathname.startsWith("/watch")) id = parsed.searchParams.get("v") || "";
      if (!id && parsed.pathname.startsWith("/shorts/")) id = parsed.pathname.split("/")[2] || "";
      if (!id && parsed.pathname.startsWith("/embed/")) id = parsed.pathname.split("/")[2] || "";

      if (id) {
        return {
          kind: "iframe",
          src: `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&modestbranding=1&rel=0&playsinline=1&disablekb=1`,
        };
      }
    }

    if (host === "vimeo.com" || host.endsWith("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean).find((part) => /^\d+$/.test(part));
      if (id) {
        return {
          kind: "iframe",
          src: `https://player.vimeo.com/video/${id}?background=1&autoplay=1&muted=1&loop=1&autopause=0`,
        };
      }
    }

    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) return { kind: "video", src: url };
  } catch {
    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) return { kind: "video", src: url };
  }

  return { kind: "none", src: "" };
}

export default function CultureHero() {
  const heroRef = useRef(null);
  const media = useMemo(() => videoKind(HERO_VIDEO), []);

  function handleMove(event) {
    const el = heroRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--mx", `${x}`);
    el.style.setProperty("--my", `${y}`);
  }

  return (
    <section ref={heroRef} onMouseMove={handleMove} className="group-hero-v42">
      <div className="group-hero-v42-media" aria-hidden="true">
        <Image
          src="/fackts/brand/group-hero-v41.webp"
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          className="group-hero-v42-poster"
        />

        {media.kind === "video" ? (
          <video className="group-hero-v42-video" autoPlay muted loop playsInline preload="metadata" poster="/fackts/brand/group-hero-v41.webp">
            <source src={media.src} />
          </video>
        ) : null}

        {media.kind === "iframe" ? (
          <iframe
            className="group-hero-v42-video group-hero-v42-iframe"
            src={media.src}
            title="FACKTS Africa Group hero film"
            allow="autoplay; encrypted-media; picture-in-picture"
            tabIndex={-1}
          />
        ) : null}

        <div className="group-hero-v42-shade" />
        <div className="group-hero-v42-light" />
        <div className="group-hero-v42-grain" />
        <div className="group-hero-v42-scan" />
      </div>

      <div className="group-hero-v42-shell shell">
        <div className="group-hero-v42-rail" aria-hidden="true">
          <span>01 / HOOPS</span>
          <span>02 / MUSIC</span>
          <span>03 / PROPERTIES</span>
        </div>

        <div className="group-hero-v42-copy">
          <div className="group-hero-v42-kicker">
            <span className="group-hero-v42-dot" />
            <span>FACKTS AFRICA GROUP</span>
            <i />
            <span>NAIROBI / KENYA</span>
          </div>

          <h1>
            CULTURE NEEDS MORE
            <span>THAN ATTENTION.</span>
          </h1>

          <p>
            It needs structure, visibility and systems that keep working after the moment passes. FACKTS builds those systems around African basketball, music and culture.
          </p>

          <div className="group-hero-v42-actions">
            <Link href="#platforms" className="group-hero-v42-primary">Understand FACKTS <b>↓</b></Link>
            <Link href="/partners" className="group-hero-v42-secondary">Partner with us <b>↗</b></Link>
          </div>
        </div>

        <div className="group-hero-v42-caption">
          <span>PLATFORMS</span>
          <span>PEOPLE</span>
          <span>LIVE CULTURE</span>
          <span>PARTNERSHIPS</span>
        </div>

        <div className="group-hero-v42-scroll" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>
      </div>
    </section>
  );
}
