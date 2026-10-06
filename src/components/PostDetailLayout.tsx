import PageBreadcrumbs, { type PageCrumb } from "@/components/PageBreadcrumbs";
import LoopedVideo from "@/components/LoopedVideo";
import MediaImage from "@/components/MediaImage";
import type { ReactNode } from "react";

export type PostHeroMedia = {
  kind: "img" | "vid";
  src: string;
};

export type PostBreadcrumb = PageCrumb;

type PostDetailLayoutProps = {
  breadcrumbs: PostBreadcrumb[];
  title: string;
  description?: string;
  hero?: PostHeroMedia | null;
  heroAlt: string;
  heroUnoptimized?: boolean;
  children: ReactNode;
  footer?: ReactNode;
};

export default function PostDetailLayout({
  breadcrumbs,
  title,
  description,
  hero,
  heroAlt,
  heroUnoptimized = false,
  children,
  footer,
}: PostDetailLayoutProps) {
  return (
    <div className="sp-stage">
      {hero ? (
        <section className="sp-hero post-hero">
          <div className="wrap wrap--flush">
            <figure className="post-hero-media">
              {hero.kind === "vid" ? (
                <LoopedVideo
                  className="post-hero-media-el"
                  src={hero.src}
                  ariaLabel={heroAlt}
                  priority
                />
              ) : (
                <MediaImage
                  src={hero.src}
                  alt={heroAlt}
                  sizes="100vw"
                  priority
                  unoptimized={heroUnoptimized}
                />
              )}
            </figure>
          </div>
        </section>
      ) : null}

      <div className="sp-after">
        <header className="post-intro">
          <div className="wrap">
            <PageBreadcrumbs items={breadcrumbs} />
            <h1 className="sp-h1">
              {title}
              <span className="sp-h1-accent">.</span>
            </h1>
            {description ? (
              <p className="sp-lead post-intro-lead">{description}</p>
            ) : null}
          </div>
        </header>

        {children}

        {footer}
      </div>
    </div>
  );
}
