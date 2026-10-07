import Link from "next/link";
import { projects } from "@/lib/content/projects";
import { ProjectMockup } from "@/components/projects/ProjectMockup";

export function FeaturedProjects() {
  return (
    <section className="projects dark wrap" id="projects">
      <div className="pr-top">
        <h2>Selected work</h2>
        <p>Demo projects built by EL-MESBAH. Not client work.</p>
      </div>

      {projects.map((p) => (
        <article key={p.slug} className="case">
          <div className="shot">
            <div className="bar">
              <i /><i /><i />
            </div>
            <ProjectMockup type={p.mockupType} />
          </div>
          <div>
            <span className="tag">Demo project</span>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <p style={{ marginTop: 16 }}>
              <Link href={`/projects/${p.slug}`} className="btn btn-ghost">
                View details
              </Link>
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}