import MediaImage from "@/components/MediaImage";
import type { BlogPost } from "@/i18n/blog";
import type { Locale } from "@/i18n/config";
import { getBlogDetailPath } from "@/i18n/routing";
import { imageSizes } from "@/lib/media";
import Link from "next/link";

type BlogCardProps = {
  locale: Locale;
  post: BlogPost;
  titleAs?: "h2" | "h3";
};

export default function BlogCard({ locale, post, titleAs = "h3" }: BlogCardProps) {
  const href = getBlogDetailPath(locale, post.slug);
  const TitleTag = titleAs;

  return (
    <Link href={href} className="project-card project-card-link">
      <div className="project-copy">
        <TitleTag>{post.title}</TitleTag>
        {post.description ? <p>{post.description}</p> : null}
      </div>
      {post.cover ? (
        <div className="project-img">
          <MediaImage
            src={post.cover}
            alt={post.title}
            sizes={imageSizes.project}
            unoptimized={post.cover.endsWith(".svg")}
          />
        </div>
      ) : null}
    </Link>
  );
}
