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
      if (document.hidden || !video.paused) return;
      void video.play().catch(() => {});
    };

    tryPlay();

    const onReady = () => tryPlay();
    video.addEventListener("canplay", onReady);
    video.addEventListener("loadeddata", onReady);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          tryPlay();
        }
      },
      {
        threshold: 0.01,
        rootMargin: priority ? "50% 0px" : "0px",
      },
    );
    observer.observe(video);

    const onVisible = () => {
      if (!document.hidden) tryPlay();
    };

    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", onVisible);
    window.addEventListener("focus", onVisible);

    return () => {
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("loadeddata", onReady);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, [src, priority]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      autoPlay
      muted
      defaultMuted
      loop
      playsInline
      disablePictureInPicture
      preload={priority ? "auto" : "metadata"}
      poster={poster}
      aria-label={ariaLabel}
    />
  );
}
