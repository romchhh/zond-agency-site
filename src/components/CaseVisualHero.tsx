"use client";

import { useArticleGallery } from "@/components/ArticleGallery";
import LoopedVideo from "@/components/LoopedVideo";
import type { CaseHeroMedia } from "@/lib/case-content";
import {
  caseImageDefaultSrc,
  caseImageSizes,
  caseImageSrcSet,
  isCaseGif,
} from "@/lib/case-image";

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
            src={isCaseGif(hero.src) ? hero.src : caseImageDefaultSrc(hero.src, 80)}
            srcSet={caseImageSrcSet(hero.src, 80)}
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
