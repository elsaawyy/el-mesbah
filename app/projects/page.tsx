import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/content/projects";
import { ProjectMockup } from "@/components/projects/ProjectMockup";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Demo projects built by EL-MESBAH showing automation, AI, and business software.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="dark wrap"
        style={{ paddingTop: 160, paddingBottom: 120 }}
      >
        <h1 style={{ fontSize: "clamp(48px, 10vw, 140px)", marginBottom: 24 }}>
          Selected work.
        </h1>
        <p style={{ color: "var(--g1)", fontSize: 18, marginBottom: 80 }}>
          Demo projects built by EL-MESBAH. Not client work.
        </p>

        {projects.map((p) => (
          <article
            key={p.slug}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "center",
              marginBottom: 100,
              borderTop: "1px solid var(--g2)",
              paddingTop: 60,
            }}
          >
            <div className="shot">
              <div className="bar">
                <i /> <i /> <i />
              </div>
              <ProjectMockup type={p.mockupType} />
            </div>
            <div>
              <span className="tag">Demo project</span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 56px)",
                  margin: "16px 0",
                }}
              >
                {p.title}
              </h2>
              <p style={{ color: "#bdb6a8", fontSize: 18, marginBottom: 24 }}>
                {p.summary}
              </p>
              <Link
                href={`/projects/${p.slug}`}
                className="btn btn-ghost"
              >
                View case →
              </Link>
            </div>
          </article>
        ))}
      </main>
      <Footer />
    </>
  );
}