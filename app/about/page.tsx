import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "EL-MESBAH is a software and AI solutions company focused on building practical technology for businesses.",
  path: "/about",
});

const process = ["Understand", "Design", "Build", "Improve"];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="light wrap"
        style={{ paddingTop: 160, paddingBottom: 120 }}
      >
        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 120px)",
            maxWidth: "14ch",
            marginBottom: 60,
          }}
        >
          We build what businesses actually need.
        </h1>

        <div
          style={{
            display: "flex",
            gap: 60,
            flexWrap: "wrap",
            marginBottom: 120,
          }}
        >
          <p style={{ fontSize: 20, color: "var(--g2)", maxWidth: "46ch" }}>
            EL-MESBAH is a software and AI solutions company focused on
            building practical technology for businesses.
          </p>
          <p style={{ fontSize: 20, color: "var(--g2)", maxWidth: "46ch" }}>
            We combine software development, automation, and artificial
            intelligence to turn manual processes and business challenges
            into simple digital solutions.
          </p>
        </div>

        <h2
          style={{
            fontSize: 14,
            color: "var(--amber)",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          How we work
        </h2>

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            paddingTop: 34,
            borderTop: "1px solid #cfc7b6",
          }}
        >
          {process.map((step) => (
            <div
              key={step}
              style={{
                fontSize: "clamp(24px, 4vw, 56px)",
                fontWeight: 800,
                letterSpacing: "-.04em",
                lineHeight: 1,
              }}
            >
              {step}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 100 }}>
          <Link href="/contact" className="btn btn-main">
            Start a Project
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}