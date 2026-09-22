"use client";

import MediaImage from "@/components/MediaImage";
import Image from "next/image";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

const SCROLL_LOCK_CLASS = "lightbox-open";

type ArticleGalleryContextValue = {
  openAt: (index: number) => void;
};

const ArticleGalleryContext = createContext<ArticleGalleryContextValue | null>(null);

export function useArticleGallery() {
  const context = useContext(ArticleGalleryContext);
  if (!context) {
    throw new Error("useArticleGallery must be used within ArticleGalleryProvider");
  }
  return context;
}

const GALLERY_IMAGE_SIZES =
  "(max-width: 380px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 50vw, 25vw";

function isUnoptimizedMedia(src: string): boolean {
  return src.endsWith(".gif");
}

type ArticleGalleryProviderProps = {
  images: string[];
  children: ReactNode;
};

export function ArticleGalleryProvider({ images, children }: ArticleGalleryProviderProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const openAt = useCallback((index: number) => {
    if (index < 0 || index >= images.length) return;
    setActiveIndex(index);
  }, [images.length]);

  const close = useCallback(() => setActiveIndex(null), []);

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= images.length) return;
    setActiveIndex(index);
  }, [images.length]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    lockBodyScroll(SCROLL_LOCK_CLASS);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") goTo(activeIndex + 1);
      if (event.key === "ArrowLeft") goTo(activeIndex - 1);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      unlockBodyScroll(SCROLL_LOCK_CLASS);
    };
  }, [activeIndex, close, goTo]);

  const activeSrc = activeIndex !== null ? images[activeIndex] : null;

  const lightbox =
    mounted && activeIndex !== null && activeSrc ? (
      <div
        className="media-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Gallery"
      >
        <button
          type="button"
          className="media-lightbox-close"
          aria-label="Close"
          onClick={close}
        >
          <span aria-hidden="true">×</span>
        </button>

        <button
          type="button"
          className="media-lightbox-nav media-lightbox-prev"
          aria-label="Previous image"
          disabled={activeIndex <= 0}
          onClick={() => goTo(activeIndex - 1)}
        >
          <span aria-hidden="true">←</span>
        </button>

        <button
          type="button"
          className="media-lightbox-nav media-lightbox-next"
          aria-label="Next image"
          disabled={activeIndex >= images.length - 1}
          onClick={() => goTo(activeIndex + 1)}
        >
          <span aria-hidden="true">→</span>
        </button>

        <div className="media-lightbox-stage">
          {isUnoptimizedMedia(activeSrc) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={activeSrc} alt="" className="media-lightbox-image" />
          ) : (
            <Image
              src={activeSrc}
              alt=""
              width={1600}
              height={1200}
              sizes="100vw"
              quality={85}
              className="media-lightbox-image"
              priority
            />
          )}
        </div>

        <p className="media-lightbox-counter">
          {activeIndex + 1} / {images.length}
        </p>
      </div>
    ) : null;

  return (
    <ArticleGalleryContext.Provider value={{ openAt }}>
      {children}
      {lightbox ? createPortal(lightbox, document.body) : null}
    </ArticleGalleryContext.Provider>
  );
}

type ArticleGalleryGridProps = {
  images: string[];
  startIndex: number;
};

export function ArticleGalleryGrid({ images, startIndex }: ArticleGalleryGridProps) {
  const context = useContext(ArticleGalleryContext);

  if (!images.length) return null;

  return (
    <div className="sp-gallery case-gallery" data-cols={Math.min(images.length, 4)}>
      {images.map((src, index) => (
        <figure key={`${src}-${startIndex + index}`} className="case-media">
          <button
            type="button"
            className="case-media-open"
            onClick={() => context?.openAt(startIndex + index)}
            aria-label="Open image"
          >
            <div className="sp-gallery-img">
              <MediaImage
                src={src}
                alt=""
                sizes={GALLERY_IMAGE_SIZES}
                unoptimized={isUnoptimizedMedia(src)}
              />
            </div>
          </button>
        </figure>
      ))}
    </div>
  );
}
