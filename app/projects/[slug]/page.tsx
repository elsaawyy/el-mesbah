import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { projects, getProject } from "@/lib/content/projects";
import { ProjectMockup } from "@/components/projects/ProjectMockup";
import { buildMetadata } from "@/lib/seo/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <Nav />
      <main
        id="main"
        className="dark wrap"
        style={{ paddingTop: 160, paddingBottom: 120 }}
      >
        <Link
          href="/projects"
          style={{ color: "var(--g1)", fontSize: 14 }}
        >
          ← All projects
        </Link>

        <span className="tag" style={{ marginTop: 60, display: "inline-block" }}>
          Demo project
        </span>

        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 120px)",
            margin: "20px 0 24px",
          }}
        >
          {project.title}
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2vw, 24px)",
            color: "#d4cdbc",
            maxWidth: "52ch",
            marginBottom: 60,
          }}
        >
          {project.detail}
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 60 }}>
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                border: "1px solid var(--g2)",
                padding: "4px 12px",
                borderRadius: 99,
                color: "var(--g1)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="shot" style={{ maxWidth: 720 }}>
          <div className="bar">
            <i /> <i /> <i />
          </div>
          <ProjectMockup type={project.mockupType} />
        </div>

        <div style={{ marginTop: 80 }}>
          <Link href="/contact" className="btn btn-main">
            Start a Project
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}