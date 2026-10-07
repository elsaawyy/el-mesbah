"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the page has scrolled past a threshold.
 * Used to switch the nav from transparent → solid background.
 */
export function useScrollAware(threshold: number = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}