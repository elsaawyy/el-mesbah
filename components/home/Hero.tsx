import Link from "next/link";
import { Beam } from "./Beam";

export function Hero() {
  return (
    <header className="hero dark wrap" id="top">
      <Beam />
      <h1>
        <span>
          <em>Build smarter.</em>
        </span>
        <span>
          <em>Automate better.</em>
        </span>
      </h1>
      <div className="hero-foot">
        <p>
          We build software, AI, and automation solutions that help businesses
          simplify their operations and grow.
        </p>
        <div className="btns">
          <Link href="/contact" className="btn btn-main">
            Start a Project
          </Link>
          <Link href="/services" className="btn btn-ghost">
            Explore Services
          </Link>
        </div>
      </div>
    </header>
  );
}