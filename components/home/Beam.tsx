"use client";

import { useEffect, useRef } from "react";

/**
 * The "lamp beam" — a cone of light following the pointer gently.
 * On reduced motion or touch devices, stays static.
 */
export function Beam() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const onMove = (e: PointerEvent) => {
      const p = e.clientX / window.innerWidth;
      const x = 40 + p * 45; // keep between 40% and 85%
      el.style.setProperty("--x", `${x}%`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div ref={ref} className="beam" aria-hidden="true"><i /></div>;
}