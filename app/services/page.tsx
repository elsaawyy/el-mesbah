import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { services } from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Web development, business automation, AI solutions, and custom software — built around your business.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="dark wrap"
        style={{ paddingTop: 160, paddingBottom: 120 }}
      >
        <h1 style={{ fontSize: "clamp(48px, 10vw, 140px)", marginBottom: 40 }}>
          What we build.
        </h1>
        <p style={{ color: "var(--g1)", fontSize: 20, marginBottom: 80 }}>
          Four services. One goal: solve real business problems with software.
        </p>

        <ul style={{ borderTop: "1px solid var(--g2)" }}>
          {services.map((s) => (
            <li
              key={s.slug}
              style={{
                borderBottom: "1px solid var(--g2)",
                padding: "40px 0",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: 40,
                alignItems: "start",
              }}
            >
              <span style={{ color: "var(--amber)", fontSize: 14 }}>
                {s.index}
              </span>
              <div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 56px)",
                    marginBottom: 16,
                  }}
                >
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </h2>
                <p
                  style={{
                    color: "var(--g1)",
                    fontSize: 18,
                    marginBottom: 20,
                  }}
                >
                  {s.summary}
                </p>
                <Link href={`/services/${s.slug}`} className="btn btn-ghost">
                  Learn more →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}