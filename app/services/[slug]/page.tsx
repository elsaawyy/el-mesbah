import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { services, getService } from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <>
      <Nav />
      <main
        id="main"
        className="dark wrap"
        style={{ paddingTop: 160, paddingBottom: 120 }}
      >
        <Link
          href="/services"
          style={{ color: "var(--g1)", fontSize: 14 }}
        >
          ← All services
        </Link>

        <span
          style={{
            display: "block",
            color: "var(--amber)",
            fontSize: 14,
            marginTop: 60,
          }}
        >
          {service.index}
        </span>

        <h1
          style={{
            fontSize: "clamp(48px, 10vw, 140px)",
            margin: "16px 0 32px",
          }}
        >
          {service.title}
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2vw, 24px)",
            color: "#d4cdbc",
            maxWidth: "52ch",
            marginBottom: 80,
          }}
        >
          {service.detail}
        </p>

        <h2
          style={{
            fontSize: 14,
            color: "var(--amber)",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          What this includes
        </h2>

        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            listStyle: "none",
            borderTop: "1px solid var(--g2)",
            paddingTop: 32,
          }}
        >
          {service.bullets.map((b) => (
            <li
              key={b}
              style={{
                borderBottom: "1px solid var(--g2)",
                padding: "16px 0",
                fontSize: 18,
              }}
            >
              {b}
            </li>
          ))}
        </ul>

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