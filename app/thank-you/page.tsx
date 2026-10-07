import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Thank you",
  description: "We received your message and will reply shortly.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="dark wrap"
        style={{
          paddingTop: 200,
          paddingBottom: 160,
          minHeight: "70vh",
        }}
      >
        <span style={{ color: "var(--amber)", fontSize: 14 }}>Received</span>
        <h1
          style={{
            fontSize: "clamp(48px, 10vw, 140px)",
            margin: "20px 0 32px",
            maxWidth: "12ch",
          }}
        >
          Thank you.
        </h1>
        <p
          style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            color: "#d4cdbc",
            maxWidth: "46ch",
            marginBottom: 60,
          }}
        >
          We've got your message and will get back to you within one business
          day.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-main">
            Back to home
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            See our work
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}