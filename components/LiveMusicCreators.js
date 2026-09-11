"use client";

import { useEffect, useMemo, useState } from "react";

function cleanBaseUrl(value) {
  return String(value || "https://music.facktsafrica.co.ke").replace(/\/$/, "");
}

function normalizeCreator(creator, platformUrl) {
  const profilePath = String(creator?.profileUrl || "");
  const profileUrl = profilePath.startsWith("http")
    ? profilePath
    : `${platformUrl}${profilePath.startsWith("/") ? "" : "/"}${profilePath}`;

  return {
    id: String(creator?.id || ""),
    name: String(creator?.name || "FACKTS Music Creator"),
    creatorTypes: Array.isArray(creator?.creatorTypes)
      ? creator.creatorTypes.filter(Boolean)
      : [],
    tagline: String(
      creator?.tagline ||
        "Creator building their public identity through FACKTS Music."
    ),
    location: String(creator?.location || ""),
    skills: Array.isArray(creator?.skills) ? creator.skills.filter(Boolean) : [],
    imageUrl: String(creator?.imageUrl || ""),
    topSongsCount: Number(creator?.topSongsCount || 0),
    achievementsCount: Number(creator?.achievementsCount || 0),
    profileUrl,
  };
}

function creatorScore(creator) {
  let score = 0;
  if (creator.imageUrl) score += 8;
  if (creator.name && creator.name !== "FACKTS Music Creator") score += 4;
  if (creator.creatorTypes.length) score += 3;
  if (creator.tagline) score += 2;
  if (creator.location) score += 1;
  if (creator.skills.length) score += 1;
  if (creator.topSongsCount) score += 3;
  if (creator.achievementsCount) score += 2;
  return score;
}

function initialsFor(name) {
  return String(name || "FM")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function LiveMusicCreators({ platformUrl }) {
  const baseUrl = useMemo(() => cleanBaseUrl(platformUrl), [platformUrl]);
  const [creators, setCreators] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setStatus("loading");
        const response = await fetch("/api/music-creators", {
          method: "GET",
          cache: "no-store",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(`Creator proxy returned ${response.status}`);

        const payload = await response.json();
        const rows = Array.isArray(payload?.creators) ? payload.creators : [];
        const selected = rows
          .map((creator) => normalizeCreator(creator, baseUrl))
          .filter((creator) => creator.id && creator.profileUrl)
          .filter((creator) => creator.name !== "FACKTS Music Creator")
          .sort((left, right) => creatorScore(right) - creatorScore(left))
          .slice(0, 3);

        setCreators(selected);
        setStatus(selected.length ? "ready" : "empty");
      } catch (error) {
        if (error?.name === "AbortError") return;
        console.error("Unable to load FACKTS Music creators", error);
        setCreators([]);
        setStatus("error");
      }
    }

    load();
    return () => controller.abort();
  }, [baseUrl]);

  return (
    <div className="music-live-creators">
      <div className="music-live-creators-head">
        <div>
          <span>LIVE FROM FACKTS MUSIC</span>
          <strong>Real creators. Public profiles.</strong>
        </div>
        <a href={`${baseUrl}/creators`}>View all creators ↗</a>
      </div>

      {status === "loading" ? (
        <div className="music-live-loading" aria-live="polite">
          <span>FACKTS MUSIC CREATOR NETWORK</span>
          <strong>Loading live creator profiles…</strong>
        </div>
      ) : creators.length ? (
        <div className="music-live-creator-grid">
          {creators.map((creator, index) => (
            <a
              className="music-live-creator-card"
              href={creator.profileUrl}
              key={creator.id}
            >
              <div className="music-live-creator-photo">
                {creator.imageUrl ? (
                  <img
                    src={creator.imageUrl}
                    alt={creator.name}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="music-live-initials">
                    {initialsFor(creator.name)}
                  </span>
                )}

                <span className="music-live-creator-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="music-live-profile-badge">PUBLIC PROFILE</span>
              </div>

              <div className="music-live-creator-info">
                <small>
                  {creator.creatorTypes.length
                    ? creator.creatorTypes.slice(0, 2).join(" · ")
                    : "FACKTS MUSIC CREATOR"}
                </small>
                <strong>{creator.name}</strong>
                <p>{creator.tagline}</p>

                <div className="music-live-creator-meta">
                  <span>
                    {creator.location ||
                      creator.skills.slice(0, 2).join(" · ") ||
                      "FACKTS Music"}
                  </span>
                  {creator.topSongsCount ? (
                    <b>
                      {creator.topSongsCount} selected track
                      {creator.topSongsCount === 1 ? "" : "s"}
                    </b>
                  ) : null}
                </div>

                <em>View creator profile ↗</em>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="music-live-directory-fallback">
          <span>FACKTS MUSIC CREATOR NETWORK</span>
          <strong>Creator profiles are temporarily unavailable here.</strong>
          <a href={`${baseUrl}/creators`}>Open FACKTS Music creators ↗</a>
        </div>
      )}
    </div>
  );
}
