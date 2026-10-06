import LoopedVideo from "@/components/LoopedVideo";
import MediaImage from "@/components/MediaImage";
import type { CaseItem } from "@/i18n/cases";
import type { Locale } from "@/i18n/config";
import { getCaseDetailPath } from "@/i18n/routing";
import { imageSizes } from "@/lib/media";
import Link from "next/link";

type CaseCardProps = {
  locale: Locale;
  caseItem: CaseItem;
  compact?: boolean;
  titleAs?: "h2" | "h3";
};

function isAnimated(src: string) {
  return src.endsWith(".gif") || src.endsWith(".webp");
}

function isVideo(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm");
}

export default function CaseCard({
  locale,
  caseItem,
  compact = false,
  titleAs = "h3",
}: CaseCardProps) {
  const href = getCaseDetailPath(locale, caseItem.slug);
  const coverSrc = caseItem.listCover ?? caseItem.cover;
  const TitleTag = titleAs;

  return (
    <Link href={href} className="project-card project-card-link">
      <div className="project-copy">
        <TitleTag>{caseItem.title}</TitleTag>
        {!compact && (caseItem.cardDescription || caseItem.description) ? (
          <p>{caseItem.cardDescription ?? caseItem.description}</p>
        ) : null}
      </div>
      {coverSrc ? (
        <div className="project-img">
          {isVideo(coverSrc) ? (
            <LoopedVideo
              className="project-img-video"
              src={coverSrc}
              ariaLabel={caseItem.title}
              poster={caseItem.cover}
            />
          ) : (
            <MediaImage
              src={coverSrc}
              alt={caseItem.title}
              sizes={imageSizes.project}
              unoptimized={isAnimated(coverSrc)}
            />
          )}
        </div>
      ) : null}
    </Link>
  );
}
