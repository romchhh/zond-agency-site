"use client";

import { useEffect, useRef, useState } from "react";

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
  const frameRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const embedSrc = `https://www.youtube.com/embed/${videoId}?start=${start}`;

  return (
    <div ref={frameRef} className="hero-video-frame">
      {isVisible ? (
        <iframe
          src={embedSrc}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="hero-video-placeholder" aria-hidden="true" />
      )}
    </div>
  );
}
