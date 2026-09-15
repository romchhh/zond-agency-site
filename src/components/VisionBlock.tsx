import LazyYouTube from "@/components/LazyYouTube";
import type { Dictionary } from "@/i18n/dictionary";

type VisionBlockProps = {
  dictionary: Dictionary;
};

export default function VisionBlock({ dictionary }: VisionBlockProps) {
  const { vision, a11y } = dictionary;

  return (
    <div className="projects-grid vision-grid" aria-label={a11y.vision}>
      <article className="project-card vision-card-video">
        <div className="project-img">
          <LazyYouTube
            videoId="zCCJfr5r4dQ"
            title={vision.videoTitle}
            start={4}
            playLabel={a11y.playVideo}
          />
        </div>
      </article>
      <article className="project-card vision-card-copy">
        <div className="project-img vision-copy-panel">
          <div className="project-copy">
            <h3>{vision.title}</h3>
            <p>{vision.description}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
