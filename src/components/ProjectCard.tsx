import MediaImage from "@/components/MediaImage";
import type { ProjectItem } from "@/i18n/dictionary";
import { imageSizes } from "@/lib/media";

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-img">
        <MediaImage
          src={project.image}
          alt={project.title}
          sizes={imageSizes.project}
          unoptimized={project.image.endsWith(".gif")}
        />
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
