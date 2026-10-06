import LoopedVideo from "@/components/LoopedVideo";
import MediaImage from "@/components/MediaImage";
import type { ProjectItem } from "@/i18n/dictionary";
import { imageSizes } from "@/lib/media";

type ProjectCardProps = {
  project: ProjectItem;
};

function isVideo(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm");
}

function isAnimated(src: string) {
  return src.endsWith(".gif") || src.endsWith(".webp");
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-img">
        {isVideo(project.image) ? (
          <LoopedVideo
            className="project-img-video"
            src={project.image}
            ariaLabel={project.title}
            poster={project.poster}
          />
        ) : (
          <MediaImage
            src={project.image}
            alt={project.title}
            sizes={imageSizes.project}
            unoptimized={isAnimated(project.image)}
          />
        )}
      </div>
    </>
  );

  if (project.href) {
    return (
      <a className="project-card project-card-link" href={project.href}>
        {content}
      </a>
    );
  }

  return <article className="project-card">{content}</article>;
}
