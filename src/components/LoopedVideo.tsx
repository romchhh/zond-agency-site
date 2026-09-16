"use client";

import { useEffect, useRef } from "react";

type LoopedVideoProps = {
  src: string;
  className?: string;
  ariaLabel?: string;
  poster?: string;
  priority?: boolean;
};

export default function LoopedVideo({
  src,
  className,
  ariaLabel,
  poster,
  priority = false,
}: LoopedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      if (document.hidden) return;
      void video.play().catch(() => {});
    };

    const tryPause = () => {
      if (!video.paused) video.pause();
    };

    const onReady = () => tryPlay();

    if (priority) {
      tryPlay();
      video.addEventListener("loadeddata", onReady);
      video.addEventListener("canplay", onReady);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          tryPlay();
        } else if (!priority) {
          tryPause();
        }
      },
      {
        threshold: [0, 0.2, 0.5],
        rootMargin: priority ? "40px 0px" : "0px",
      },
    );

    observer.observe(video);

    const onVisible = () => {
      if (document.hidden) {
        tryPause();
        return;
      }
      const rect = video.getBoundingClientRect();
      const visible =
        rect.top < window.innerHeight && rect.bottom > 0 && rect.height > 0;
      if (visible) tryPlay();
    };

    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", onVisible);

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", onVisible);
    };
  }, [src, priority]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      muted
      autoPlay={priority}
      loop
      playsInline
      disablePictureInPicture
      preload={priority ? "auto" : "metadata"}
      poster={poster}
      aria-label={ariaLabel}
    />
  );
}
