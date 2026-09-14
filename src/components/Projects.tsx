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
          {projects.map((project) => {
            if (project.layout === "cta") {
              return (
                <a
                  className="project-card project-card--cta"
                  href={project.href ?? "#contact"}
                  key={project.title}
                >
                  <div className="project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-cta-panel">
                    <span className="project-cta-heart" aria-hidden="true">
                      ♥
                    </span>
                    <span>Натисніть щоб співпрацювати</span>
                  </div>
                </a>
              );
            }

            return (
              <article
                className={`project-card project-card--${project.layout}`}
                key={project.title}
              >
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
            );
          })}
        </div>

        <a className="projects-all-btn" href="#">
          <span>Всі проєкти</span>
          <span className="projects-all-btn-icon" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
