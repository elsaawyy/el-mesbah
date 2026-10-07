import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Tell us what you're trying to build, improve, or automate. We'll get back to you.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="dark wrap"
        style={{ paddingTop: 160, paddingBottom: 120 }}
      >
        <h1
          style={{
            fontSize: "clamp(48px, 10vw, 140px)",
            marginBottom: 40,
            maxWidth: "12ch",
          }}
        >
          Let's talk about it.
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            color: "#d4cdbc",
            maxWidth: "46ch",
            marginBottom: 80,
          }}
        >
          Tell us what you're trying to build, improve, or automate. We'll
          reply within one business day.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 40,
            borderTop: "1px solid var(--g2)",
            paddingTop: 40,
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                fontSize: 12,
                color: "var(--amber)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Email
            </span>
            <a
              href={`mailto:${site.email}`}
              style={{ fontSize: 20, color: "var(--ivory)" }}
            >
              {site.email}
            </a>
          </div>

          <div>
            <span
              style={{
                display: "block",
                fontSize: 12,
                color: "var(--amber)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Start a Project
            </span>
            <a
              href={`mailto:${site.email}?subject=Project inquiry`}
              className="btn btn-main"
            >
              Send us an email
            </a>
          </div>
        </div>

        <p
          style={{
            marginTop: 80,
            color: "var(--g1)",
            fontSize: 14,
            maxWidth: "52ch",
          }}
        >
          The contact form with lead capture will be added in Phase 2/3
          (see docs/ARCHITECTURE.md). For now, email us directly.
        </p>
      </main>
      <Footer />
    </>
  );
}