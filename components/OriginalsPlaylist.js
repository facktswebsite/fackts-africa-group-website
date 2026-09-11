"use client";

import { useEffect, useMemo, useState } from "react";

function makeSlug(value = "") {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function OriginalsPlaylist({ playlist, compact = false }) {
  const slug = useMemo(
    () => `${makeSlug(playlist.platform)}-${makeSlug(playlist.title)}`,
    [playlist.platform, playlist.title]
  );

  const modalHash = `#watch-${slug}`;
  const canPlay = Boolean(playlist.id);
  const [open, setOpen] = useState(false);

  const poster =
    playlist.poster ||
    (playlist.firstVideo
      ? `https://i.ytimg.com/vi/${playlist.firstVideo}/maxresdefault.jpg`
      : "/fackts/brand/hero-main.jpg");

  useEffect(() => {
    const syncFromHash = () => setOpen(window.location.hash === modalHash);
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [modalHash]);

  useEffect(() => {
    if (!open) return undefined;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeSeries();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function openSeries() {
    if (!canPlay) return;

    if (window.location.hash !== modalHash) {
      window.location.hash = modalHash.slice(1);
    } else {
      setOpen(true);
    }
  }

  function closeSeries() {
    if (window.location.hash === modalHash) {
      window.history.back();
    } else {
      setOpen(false);
    }
  }

  return (
    <>
      <article
        className={`original-card-v45 ${compact ? "is-compact" : ""} ${
          playlist.featured ? "is-featured" : ""
        }`}
      >
        <button
          className={`original-card-poster-v45 ${!canPlay ? "is-pending" : ""}`}
          type="button"
          onClick={openSeries}
          disabled={!canPlay}
          aria-label={
            canPlay
              ? `Watch ${playlist.title} inside FACKTS`
              : `${playlist.title} playlist connection pending`
          }
        >
          <img src={poster} alt="" loading="lazy" decoding="async" />
          <span className="original-card-shade-v45" />

          {playlist.posterTitle ? (
            <span className="original-card-brand-title-v463" aria-hidden="true">
              <small>{playlist.posterSubtitle}</small>
              <strong>{playlist.posterTitle}</strong>
            </span>
          ) : null}

          <span className="original-card-platform-v45">{playlist.platform}</span>

          <span
            className={`original-card-play-v45 ${!canPlay ? "is-pending" : ""}`}
            aria-hidden="true"
          >
            {canPlay ? "▶" : "•••"}
          </span>

          <span className="original-card-count-v45">{playlist.count}</span>
        </button>

        <div className="original-card-copy-v45">
          <div className="original-card-type-v45">{playlist.type}</div>
          <h3>{playlist.title}</h3>
          <p>{playlist.description}</p>

          <div className="original-card-actions-v45">
            {canPlay ? (
              <button type="button" onClick={openSeries}>
                Watch inside FACKTS <span>→</span>
              </button>
            ) : (
              <span className="originals-pending-label">
                PLAYER CONNECTION PENDING
              </span>
            )}
          </div>
        </div>
      </article>

      {open && canPlay ? (
        <div
          className="original-modal-v461"
          role="dialog"
          aria-modal="true"
          aria-label={`${playlist.title} player`}
        >
          <button
            className="original-modal-backdrop-v461"
            type="button"
            aria-label="Back to Originals"
            onClick={closeSeries}
          />

          <section className="original-modal-panel-v461">
            <button
              type="button"
              className="original-modal-floating-back-v461"
              onClick={closeSeries}
              aria-label="Back to Originals"
            >
              <span aria-hidden="true">←</span>
              <b>BACK</b>
            </button>

            <header className="original-modal-toolbar-v461">
              <button
                type="button"
                className="original-modal-back-v461"
                onClick={closeSeries}
                aria-label="Back to Originals"
              >
                <span aria-hidden="true">←</span>
                <b>BACK TO ORIGINALS</b>
              </button>

              <div className="original-modal-title-v461">
                <span>{playlist.platform}</span>
                <strong>{playlist.title}</strong>
              </div>

              <button
                type="button"
                className="original-modal-close-v461"
                onClick={closeSeries}
                aria-label="Close player"
                title="Close player"
              >
                ×
              </button>
            </header>

            <div className="original-modal-player-v461">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlist.id}&autoplay=1&rel=0&playsinline=1&modestbranding=1`}
                title={playlist.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                allowFullScreen
              />
            </div>

            <footer className="original-modal-caption-v461">
              <span>{playlist.type}</span>
              <p>{playlist.description}</p>
            </footer>
          </section>

          <style jsx>{`
            .original-modal-v461 {
              position: fixed;
              inset: 0;
              z-index: 9999;
              display: grid;
              place-items: center;
              padding: 18px;
              background: rgba(0, 0, 0, 0.82);
              backdrop-filter: blur(12px);
            }

            .original-modal-backdrop-v461 {
              position: absolute;
              inset: 0;
              border: 0;
              background: transparent;
              cursor: default;
            }

            .original-modal-panel-v461 {
              position: relative;
              z-index: 1;
              width: min(1280px, 100%);
              height: min(860px, calc(100dvh - 36px));
              display: grid;
              grid-template-rows: auto minmax(0, 1fr) auto;
              overflow: hidden;
              border: 1px solid rgba(255,255,255,.15);
              border-radius: 24px;
              background: #070707;
              box-shadow: 0 28px 100px rgba(0,0,0,.55);
            }

            .original-modal-toolbar-v461 {
              min-height: 78px;
              display: grid;
              grid-template-columns: auto minmax(0, 1fr) auto;
              align-items: center;
              gap: 20px;
              padding: 14px 16px;
              border-bottom: 1px solid rgba(255,255,255,.1);
              background: rgba(9,9,9,.97);
            }

            .original-modal-back-v461 {
              min-height: 48px;
              display: inline-flex;
              align-items: center;
              gap: 10px;
              padding: 0 18px;
              border: 1px solid rgba(255,255,255,.18);
              border-radius: 999px;
              background: #f4efe7;
              color: #090909;
              cursor: pointer;
              font: inherit;
              transition: transform .18s ease, background .18s ease;
            }

            .original-modal-back-v461:hover {
              transform: translateX(-2px);
              background: #d7ff3f;
            }

            .original-modal-back-v461 span {
              font-size: 20px;
              line-height: 1;
            }

            .original-modal-back-v461 b {
              font-size: 11px;
              letter-spacing: .12em;
              white-space: nowrap;
            }

            .original-modal-title-v461 {
              min-width: 0;
              display: grid;
              gap: 2px;
              text-align: center;
            }

            .original-modal-title-v461 span {
              color: #d7ff3f;
              font-size: 9px;
              font-weight: 900;
              letter-spacing: .14em;
              text-transform: uppercase;
            }

            .original-modal-title-v461 strong {
              overflow: hidden;
              color: #f5f0e8;
              font-size: 15px;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .original-modal-close-v461 {
              width: 48px;
              height: 48px;
              display: grid;
              place-items: center;
              border: 1px solid rgba(255,255,255,.18);
              border-radius: 50%;
              background: transparent;
              color: #f5f0e8;
              cursor: pointer;
              font-size: 28px;
              line-height: 1;
              transition: background .18s ease, color .18s ease;
            }

            .original-modal-close-v461:hover {
              background: #f4efe7;
              color: #090909;
            }

            .original-modal-player-v461 {
              min-height: 0;
              background: #000;
            }

            .original-modal-player-v461 iframe {
              display: block;
              width: 100%;
              height: 100%;
              min-height: 0;
              border: 0;
            }

            .original-modal-caption-v461 {
              display: grid;
              grid-template-columns: auto minmax(0, 1fr);
              align-items: start;
              gap: 24px;
              padding: 14px 20px 16px;
              border-top: 1px solid rgba(255,255,255,.1);
              background: #0b0b0b;
            }

            .original-modal-caption-v461 span {
              padding-top: 4px;
              color: #d7ff3f;
              font-size: 9px;
              font-weight: 900;
              letter-spacing: .12em;
              text-transform: uppercase;
              white-space: nowrap;
            }

            .original-modal-caption-v461 p {
              max-width: 780px;
              margin: 0;
              color: #aaa49b;
              font-size: 13px;
              line-height: 1.55;
            }

            :global(.original-card-brand-title-v463) {
              position: absolute;
              left: clamp(18px, 3vw, 34px);
              bottom: clamp(20px, 3vw, 34px);
              z-index: 3;
              max-width: min(76%, 620px);
              display: grid;
              gap: 7px;
              text-align: left;
              pointer-events: none;
            }

            :global(.original-card-brand-title-v463 small) {
              color: #d7ff3f;
              font-size: clamp(8px, .8vw, 11px);
              font-weight: 900;
              letter-spacing: .14em;
              text-transform: uppercase;
            }

            :global(.original-card-brand-title-v463 strong) {
              color: #f6f1e9;
              font-size: clamp(24px, 4vw, 56px);
              line-height: .9;
              letter-spacing: -.04em;
              text-transform: uppercase;
              text-shadow: 0 4px 26px rgba(0,0,0,.5);
            }

            :global(.original-card-poster-v45.is-pending) {
              cursor: default;
            }

            :global(.original-card-play-v45.is-pending) {
              font-size: 18px;
              letter-spacing: 3px;
              opacity: .72;
            }

            :global(.originals-pending-label) {
              color: #706c66;
              font-size: 9px;
              font-weight: 900;
              letter-spacing: .1em;
            }

            .original-modal-floating-back-v461 {
              position: absolute;
              left: 18px;
              top: 94px;
              z-index: 5;
              min-height: 42px;
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 0 14px;
              border: 1px solid rgba(0,0,0,.14);
              border-radius: 999px;
              background: rgba(244,239,231,.96);
              color: #090909;
              box-shadow: 0 10px 34px rgba(0,0,0,.28);
              cursor: pointer;
              font: inherit;
              backdrop-filter: blur(8px);
            }

            .original-modal-floating-back-v461 span {
              font-size: 18px;
              line-height: 1;
            }

            .original-modal-floating-back-v461 b {
              font-size: 10px;
              letter-spacing: .12em;
            }

            .original-modal-floating-back-v461:hover {
              background: #d7ff3f;
            }

            @media (max-width: 760px) {
              .original-modal-v461 {
                padding: 0;
              }

              .original-modal-panel-v461 {
                width: 100%;
                height: 100dvh;
                border: 0;
                border-radius: 0;
              }

              .original-modal-toolbar-v461 {
                grid-template-columns: auto 1fr auto;
                gap: 10px;
                min-height: 68px;
                padding: 10px;
              }

              .original-modal-back-v461 {
                width: 46px;
                height: 46px;
                min-height: 46px;
                justify-content: center;
                padding: 0;
              }

              .original-modal-back-v461 b {
                display: none;
              }

              .original-modal-floating-back-v461 {
                left: 12px;
                top: 78px;
                min-height: 38px;
                padding: 0 12px;
              }

              .original-modal-title-v461 {
                text-align: left;
              }

              .original-modal-caption-v461 {
                grid-template-columns: 1fr;
                gap: 6px;
                padding: 12px 14px;
              }

              .original-modal-caption-v461 p {
                font-size: 12px;
              }
            }
          `}</style>
        </div>
      ) : null}
    </>
  );
}
