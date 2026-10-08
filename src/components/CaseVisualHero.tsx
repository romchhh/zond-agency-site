"use client";

import { useArticleGallery } from "@/components/ArticleGallery";
import LoopedVideo from "@/components/LoopedVideo";
import type { CaseHeroMedia } from "@/lib/case-content";
import {
  caseImageDefaultSrc,
  caseImageSizes,
  caseImageSrcSet,
  isCasePassthroughMedia,
  lightboxCaseImageUrl,
} from "@/lib/case-image";
import { preloadImage } from "@/lib/image-preload";

type CaseVisualHeroProps = {
  hero: CaseHeroMedia;
  title: string;
  caption: string;
};

export default function CaseVisualHero({ hero, title, caption }: CaseVisualHeroProps) {
  const gallery = useArticleGallery();

  return (
    <figure className="media wide">
      <button
        type="button"
        className="image-button"
        aria-label={`Збільшити: ${caption}`}
        onClick={() => gallery.openAt(0)}
        onMouseEnter={() => {
          if (hero.kind !== "vid" && !isCasePassthroughMedia(hero.src)) {
            void preloadImage(lightboxCaseImageUrl(hero.src));
          }
        }}
      >
        {hero.kind === "vid" ? (
          <LoopedVideo
            className="case-visual-hero-video"
            src={hero.src}
            ariaLabel={title}
            priority
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={
              isCasePassthroughMedia(hero.src)
                ? hero.src
                : caseImageDefaultSrc(hero.src)
            }
            srcSet={caseImageSrcSet(hero.src)}
            sizes={caseImageSizes(true)}
            alt={caption}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            draggable={false}
          />
        )}
      </button>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
