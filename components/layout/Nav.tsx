"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/content/site";
import { navLinks, navCta } from "@/lib/content/nav";
import { useScrollAware } from "@/hooks/useScrollAware";
import { cn } from "@/lib/utils/cn";

export function Nav() {
  const scrolled = useScrollAware(40);
  const [open, setOpen] = useState(false);

  return (
    <nav className={cn("nav", scrolled && "nav-solid", open && "nav-open")}>
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <b>{site.name}</b>
        <small>{site.tagline}</small>
      </Link>

      <button
        className="menu"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <div id="nav-links" className={cn("links", open && "open")}>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link
          href={navCta.href}
          className="pill"
          onClick={() => setOpen(false)}
        >
          {navCta.label}
        </Link>
      </div>
    </nav>
  );
}