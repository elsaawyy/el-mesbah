"use client";

import { useMediaQuery } from "./useMediaQuery";

/**
 * Returns true if the user prefers reduced motion.
 * Use to skip animations that could cause discomfort.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}