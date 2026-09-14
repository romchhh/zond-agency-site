import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2 className="section-title">Бренди, які надихають</h2>
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </article>
          ))}
        </div>

        <a className="projects-all-btn" href="#">
          <span>Всі проєкти</span>
          <span className="projects-all-btn-icon" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
