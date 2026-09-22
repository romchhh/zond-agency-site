"use client";

import { useArticleGallery } from "@/components/ArticleGallery";
import LoopedVideo from "@/components/LoopedVideo";
import MediaImage from "@/components/MediaImage";
import type { CaseHeroMedia } from "@/lib/case-content";
import { isAnimatedCaseMedia } from "@/lib/case-content";

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
          <MediaImage
            src={hero.src}
            alt={caption}
            sizes="100vw"
            priority
            unoptimized={isAnimatedCaseMedia(hero.src)}
          />
        )}
      </button>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
