import MediaImage from "@/components/MediaImage";
import VisionBlock from "@/components/VisionBlock";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { imageSizes } from "@/lib/media";

type ProjectsProps = {
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function Projects({ dictionary, projects }: ProjectsProps) {
  const { projects: copy } = dictionary;

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2 className="section-title">{copy.title}</h2>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
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
            </article>
          ))}
        </div>

        <VisionBlock dictionary={dictionary} />

        <a className="projects-all-btn" href="#">
          <span>{copy.allProjects}</span>
          <span className="projects-all-btn-icon" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
