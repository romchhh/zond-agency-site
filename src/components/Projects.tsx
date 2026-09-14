import LoopedVideo from "@/components/LoopedVideo";
import MediaImage from "@/components/MediaImage";
import { projects } from "@/data/content";
import { imageSizes } from "@/lib/media";

function isVideoAsset(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm");
}

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
                {isVideoAsset(project.image) ? (
                  <LoopedVideo
                    className="project-media"
                    src={project.image}
                    ariaLabel={project.title}
                  />
                ) : (
                  <MediaImage
                    src={project.image}
                    alt={project.title}
                    sizes={imageSizes.project}
                  />
                )}
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
