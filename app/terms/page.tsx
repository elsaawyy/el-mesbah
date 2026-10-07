import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for the EL-MESBAH website.",
  path: "/terms",
});

export default function TermsPage() {
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
            fontSize: "clamp(36px, 6vw, 80px)",
            marginBottom: 60,
          }}
        >
          Terms of Use
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            maxWidth: "64ch",
            color: "var(--g2)",
            fontSize: 17,
            lineHeight: 1.7,
          }}
        >
          <p>
            This is a placeholder terms page. It will be replaced with a full
            version before public launch.
          </p>
          <p>
            By using this website you agree to use it for lawful purposes
            only. Content on this site is provided as-is and may change
            without notice.
          </p>
          <p>
            Questions can be sent to{" "}
            <a
              href={`mailto:${site.email}`}
              style={{ color: "var(--amber)" }}
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}