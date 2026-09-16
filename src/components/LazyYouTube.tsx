"use client";

import { useCallback, useMemo, useState } from "react";

type LazyYouTubeProps = {
  videoId: string;
  title: string;
  start?: number;
  className?: string;
  playLabel?: string;
  poster?: string;
};

function getYouTubeThumbnails(videoId: string) {
  return [
    `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`,
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  ];
}

export default function LazyYouTube({
  videoId,
  title,
  start = 0,
  className,
  playLabel,
  poster,
}: LazyYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnails = useMemo(
    () => (poster ? [poster, ...getYouTubeThumbnails(videoId)] : getYouTubeThumbnails(videoId)),
    [poster, videoId],
  );
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const thumbnail = thumbnails[thumbnailIndex];
  const embedSrc = `https://www.youtube.com/embed/${videoId}?start=${start}&autoplay=1&playsinline=1&rel=0`;

  const handleThumbnailError = useCallback(() => {
    setThumbnailIndex((index) => (index < thumbnails.length - 1 ? index + 1 : index));
  }, [thumbnails.length]);

  const frameClass = ["hero-video-frame", className, isPlaying ? "is-playing" : ""]
    .filter(Boolean)
    .join(" ");

  if (isPlaying) {
    return (
      <div className={frameClass}>
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
    <div className={frameClass}>
      <button
        type="button"
        className="hero-video-trigger"
        onClick={() => setIsPlaying(true)}
        aria-label={playLabel ?? title}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-video-thumb"
          src={thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          onError={handleThumbnailError}
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
