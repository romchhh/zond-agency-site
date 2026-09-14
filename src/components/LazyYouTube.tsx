"use client";

import { useState } from "react";

type LazyYouTubeProps = {
  videoId: string;
  title: string;
  start?: number;
};

export default function LazyYouTube({
  videoId,
  title,
  start = 0,
}: LazyYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedSrc = `https://www.youtube.com/embed/${videoId}?start=${start}&autoplay=1&playsinline=1&rel=0`;

  if (isPlaying) {
    return (
      <div className="hero-video-frame is-playing">
        <iframe
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="hero-video-frame">
      <button
        type="button"
        className="hero-video-trigger"
        onClick={() => setIsPlaying(true)}
        aria-label={`Відтворити: ${title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-video-thumb"
          src={thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span className="hero-video-play-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
