import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

export function CTA() {
  return (
    <section className="cta dark wrap" id="contact">
      <h2>Have something worth building?</h2>
      <div className="in2">
        <p>Tell us what you're trying to build, improve, or automate.</p>
        <Link href="/contact" className="btn btn-main">
          Start a Project
        </Link>
      </div>
      <Footer />
    </section>
  );
}