import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How EL-MESBAH handles information collected on this site.",
  path: "/privacy",
});

export default function PrivacyPage() {
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
          Privacy Policy
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
            This is a placeholder policy. It will be replaced with a full
            privacy policy before the contact form goes live.
          </p>
          <p>
            When you contact EL-MESBAH through this site, we collect only the
            information you choose to provide (name, email, and message). We
            use it solely to respond to your enquiry and do not sell or share
            it with third parties.
          </p>
          <p>
            Questions about your data can be sent to{" "}
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