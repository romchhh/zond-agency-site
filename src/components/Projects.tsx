import ClientsBlock from "@/components/ClientsBlock";
import ProjectCard from "@/components/ProjectCard";
import VisionBlock from "@/components/VisionBlock";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getLocalePath } from "@/i18n/routing";
import Link from "next/link";

type ProjectsProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function Projects({ locale, dictionary, projects }: ProjectsProps) {
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

        <Link className="projects-all-btn" href={getLocalePath(locale, "/cases")}>
          <span>{copy.allProjects}</span>
          <span className="projects-all-btn-icon" aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
