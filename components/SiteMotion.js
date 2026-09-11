"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--page-progress", String(value));
    };

    const reveal = () => {
      const targets = Array.from(
        document.querySelectorAll(
          "main > section, .archive-item, .platform-outcome, .property-row, .platform-proof-card, .system-step, .value-line, .city-row, .people-home-row, .creator-card, .music-creator-card, .hoops-player-card"
        )
      );

      targets.forEach((node, index) => {
        if (node.dataset.facktsReveal) return;
        node.dataset.facktsReveal = "true";
        node.classList.add("fackts-reveal");
        node.style.setProperty("--reveal-delay", `${Math.min(index % 8, 6) * 42}ms`);
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        targets.forEach((node) => node.classList.add("is-visible"));
        return () => {};
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -7% 0px" }
      );

      targets.forEach((node) => observer.observe(node));
      return () => observer.disconnect();
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    const cleanupReveal = reveal();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cleanupReveal?.();
    };
  }, [pathname]);

  return (
    <>
      <div className="site-progress" aria-hidden="true"><span /></div>
      <div className="site-atmosphere" aria-hidden="true">
        <span className="site-orb site-orb-a" />
        <span className="site-orb site-orb-b" />
        <span className="site-grid" />
        <span className="site-noise" />
      </div>
    </>
  );
}
