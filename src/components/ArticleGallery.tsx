"use client";

import MediaImage from "@/components/MediaImage";
import { lightboxCaseImageUrl } from "@/lib/case-image";
import {
  isImagePreloaded,
  preloadImage,
  preloadImageWindow,
} from "@/lib/image-preload";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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

function LightboxStage({
  images,
  activeIndex,
  onClose,
  onGoTo,
}: {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onGoTo: (index: number) => void;
}) {
  const lightboxUrls = useMemo(
    () => images.map((src) => lightboxCaseImageUrl(src)),
    [images],
  );

  const activeUrl = lightboxUrls[activeIndex] ?? "";
  const [shownUrl, setShownUrl] = useState(activeUrl);
  const [ready, setReady] = useState(() => isImagePreloaded(activeUrl));

  useEffect(() => {
    preloadImageWindow(lightboxUrls, activeIndex, 2);
  }, [lightboxUrls, activeIndex]);

  useEffect(() => {
    let cancelled = false;
    const nextUrl = lightboxUrls[activeIndex] ?? "";
    if (!nextUrl) return;

    if (nextUrl === shownUrl) {
      setReady(true);
      return;
    }

    // Keep previous frame fully visible until the next URL is cached.
    void preloadImage(nextUrl).then(() => {
      if (cancelled) return;
      setShownUrl(nextUrl);
      setReady(true);
      preloadImageWindow(lightboxUrls, activeIndex, 2);
    });

    return () => {
      cancelled = true;
    };
  }, [activeIndex, lightboxUrls, shownUrl]);

  useEffect(() => {
    lockBodyScroll(SCROLL_LOCK_CLASS);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onGoTo(activeIndex + 1);
      if (event.key === "ArrowLeft") onGoTo(activeIndex - 1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      unlockBodyScroll(SCROLL_LOCK_CLASS);
    };
  }, [activeIndex, onClose, onGoTo]);

  return (
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
        onClick={onClose}
      >
        <span aria-hidden="true">×</span>
      </button>

      <button
        type="button"
        className="media-lightbox-nav media-lightbox-prev"
        aria-label="Previous image"
        disabled={activeIndex <= 0}
        onClick={() => onGoTo(activeIndex - 1)}
      >
        <span aria-hidden="true">←</span>
      </button>

      <button
        type="button"
        className="media-lightbox-nav media-lightbox-next"
        aria-label="Next image"
        disabled={activeIndex >= images.length - 1}
        onClick={() => onGoTo(activeIndex + 1)}
      >
        <span aria-hidden="true">→</span>
      </button>

      <div className="media-lightbox-stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={shownUrl}
          src={shownUrl}
          alt=""
          className={`media-lightbox-image${ready ? " is-ready" : ""}`}
          decoding="async"
          fetchPriority="high"
          draggable={false}
        />
      </div>

      <p className="media-lightbox-counter">
        {activeIndex + 1} / {images.length}
      </p>
    </div>
  );
}

export function ArticleGalleryProvider({ images, children }: ArticleGalleryProviderProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const openAt = useCallback(
    (index: number) => {
      if (index < 0 || index >= images.length) return;
      // Warm current ± neighbors before paint so the first open feels instant.
      const urls = images.map((src) => lightboxCaseImageUrl(src));
      preloadImageWindow(urls, index, 2);
      setActiveIndex(index);
    },
    [images],
  );

  const close = useCallback(() => setActiveIndex(null), []);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= images.length) return;
      setActiveIndex(index);
    },
    [images.length],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const lightbox =
    mounted && activeIndex !== null ? (
      <LightboxStage
        images={images}
        activeIndex={activeIndex}
        onClose={close}
        onGoTo={goTo}
      />
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
            onMouseEnter={() => {
              void preloadImage(lightboxCaseImageUrl(src));
            }}
            onFocus={() => {
              void preloadImage(lightboxCaseImageUrl(src));
            }}
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
