"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function buildEmbedUrl(item) {
  if (item.youtubeId) {
    return `https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`;
  }

  const user = item.youtubeUser || "facktshoops";
  const index = Number.isInteger(item.index) ? item.index : 0;
  return `https://www.youtube-nocookie.com/embed?listType=user_uploads&list=${encodeURIComponent(user)}&index=${index}&autoplay=1&rel=0`;
}

export default function FeaturedWatch({ items, youtubeChannelUrl }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event) {
      if (event.key === "Escape") setActive(null);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [active]);

  return <>
    <div className="watch-grid">
      {items.map((item, index) => {
        const isVideo = item.kind === "youtube";
        const Wrapper = isVideo ? "button" : "a";
        const wrapperProps = isVideo
          ? { type: "button", onClick: () => setActive(item), "aria-label": `Watch ${item.title} on FACKTS` }
          : { href: item.url, "aria-label": item.cta || item.title };

        return <Wrapper className={`watch-card ${index === 0 ? "watch-card-featured" : ""}`} key={item.title} {...wrapperProps}>
          <div className="watch-thumb">
            <Image
              src={item.image}
              alt=""
              fill
              quality={88}
              sizes={index === 0 ? "(max-width: 820px) 100vw, 58vw" : "(max-width: 820px) 100vw, 31vw"}
            />
            <div className="watch-thumb-overlay" />
            {isVideo && <span className="watch-play" aria-hidden="true"><i /></span>}
            <div className="watch-labels">
              <span>{item.category}</span>
              <span>{isVideo ? "WATCH ON FACKTS" : item.format}</span>
            </div>
          </div>
          <div className="watch-copy">
            <div>
              <div className="meta">{item.eyebrow}</div>
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
            <span className="watch-action">{isVideo ? "Play" : item.cta} <b>{isVideo ? "▶" : "↗"}</b></span>
          </div>
        </Wrapper>;
      })}
    </div>

    {active && <div className="watch-modal" role="dialog" aria-modal="true" aria-label={active.title} onMouseDown={(event) => {
      if (event.target === event.currentTarget) setActive(null);
    }}>
      <div className="watch-modal-panel">
        <div className="watch-modal-top">
          <div>
            <div className="meta">FACKTS / NOW PLAYING</div>
            <strong>{active.title}</strong>
          </div>
          <button type="button" onClick={() => setActive(null)} aria-label="Close video">×</button>
        </div>
        <div className="watch-player">
          <iframe
            src={buildEmbedUrl(active)}
            title={active.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <div className="watch-modal-foot">
          <p>{active.description}</p>
          <a href={youtubeChannelUrl}>View FACKTS Hoops on YouTube ↗</a>
        </div>
      </div>
    </div>}
  </>;
}
