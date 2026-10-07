"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      id="main"
      className="dark wrap"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 24,
      }}
    >
      <span style={{ color: "var(--amber)", fontSize: 14 }}>Error</span>
      <h1 style={{ fontSize: "clamp(40px, 8vw, 100px)", maxWidth: "12ch" }}>
        Something went wrong.
      </h1>
      <p style={{ color: "var(--g1)", fontSize: 18, maxWidth: "46ch" }}>
        An unexpected error occurred. Try again, or go back to the home page.
      </p>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <button onClick={reset} className="btn btn-main">
          Try again
        </button>
        <Link href="/" className="btn btn-ghost">
          Back to home
        </Link>
      </div>
    </main>
  );
}