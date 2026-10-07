"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds a reveal-in effect when the element enters the viewport.
 * Returns a ref to attach to the element, and a boolean `inView`.
 *
 * Usage:
 *   const { ref, inView } = useReveal();
 *   <div ref={ref} className={inView ? "in" : ""}>...</div>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for old browsers
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(entry.target);
        }
      }
    }, options);

    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}