import ClientsBlock from "@/components/ClientsBlock";
import ProjectCard from "@/components/ProjectCard";
import VisionBlock from "@/components/VisionBlock";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";

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
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <VisionBlock dictionary={dictionary} />

        <ClientsBlock dictionary={dictionary} />

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
