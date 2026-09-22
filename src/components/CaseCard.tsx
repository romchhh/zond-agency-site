import MediaImage from "@/components/MediaImage";
import type { CaseItem } from "@/i18n/cases";
import type { Locale } from "@/i18n/config";
import { getCaseDetailPath } from "@/i18n/routing";
import { imageSizes } from "@/lib/media";
import Link from "next/link";

type CaseCardProps = {
  locale: Locale;
  caseItem: CaseItem;
};

function isAnimated(src: string) {
  return src.endsWith(".gif") || src.endsWith(".webp");
}

export default function CaseCard({ locale, caseItem }: CaseCardProps) {
  const href = getCaseDetailPath(locale, caseItem.slug);

  return (
    <Link href={href} className="project-card project-card-link">
      <div className="project-copy">
        <h3>{caseItem.title}</h3>
        {caseItem.description ? <p>{caseItem.description}</p> : null}
      </div>
      {caseItem.cover ? (
        <div className="project-img">
          <MediaImage
            src={caseItem.cover}
            alt={caseItem.title}
            sizes={imageSizes.project}
            unoptimized={isAnimated(caseItem.cover)}
          />
        </div>
      ) : null}
    </Link>
  );
}
