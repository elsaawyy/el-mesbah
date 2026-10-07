import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="dark wrap"
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <span style={{ color: "var(--amber)", fontSize: 14 }}>404</span>
        <h1 style={{ fontSize: "clamp(48px, 10vw, 140px)" }}>
          Page not found.
        </h1>
        <p style={{ color: "var(--g1)", fontSize: 18 }}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <div>
          <Link href="/" className="btn btn-main">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}