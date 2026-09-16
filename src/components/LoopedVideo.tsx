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
    video.volume = 0;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");
    video.setAttribute("x5-video-player-type", "h5");
    video.setAttribute("x5-video-player-fullscreen", "false");
    video.removeAttribute("controls");

    const tryPlay = () => {
      if (document.hidden) return;
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise) void playPromise.catch(() => {});
    };

    const tryPause = () => {
      if (!video.paused) video.pause();
    };

    const onReady = () => tryPlay();
    const onPlaying = () => {
      video.removeAttribute("poster");
    };

    if (priority) {
      tryPlay();
      video.addEventListener("loadedmetadata", onReady);
      video.addEventListener("loadeddata", onReady);
      video.addEventListener("canplay", onReady);
      video.addEventListener("canplaythrough", onReady);
      video.addEventListener("playing", onPlaying);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          tryPlay();
        } else if (!priority) {
          tryPause();
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5],
        rootMargin: priority ? "80px 0px" : "0px",
      },
    );

    observer.observe(video);

    const onVisible = () => {
      if (document.hidden) {
        tryPause();
        return;
      }
      tryPlay();
    };

    const unlockPlayback = () => tryPlay();

    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", onVisible);
    window.addEventListener("focus", onVisible);
    document.addEventListener("touchstart", unlockPlayback, { passive: true });
    document.addEventListener("touchend", unlockPlayback, { passive: true });
    document.addEventListener("scroll", unlockPlayback, { passive: true });
    document.addEventListener("click", unlockPlayback);

    return () => {
      video.removeEventListener("loadedmetadata", onReady);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("canplaythrough", onReady);
      video.removeEventListener("playing", onPlaying);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", onVisible);
      window.removeEventListener("focus", onVisible);
      document.removeEventListener("touchstart", unlockPlayback);
      document.removeEventListener("touchend", unlockPlayback);
      document.removeEventListener("scroll", unlockPlayback);
      document.removeEventListener("click", unlockPlayback);
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
      disableRemotePlayback
      controls={false}
      controlsList="nodownload nofullscreen noremoteplayback"
      preload={priority ? "auto" : "metadata"}
      poster={poster}
      aria-label={ariaLabel}
    />
  );
}
