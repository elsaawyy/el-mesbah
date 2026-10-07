"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Class added when element enters viewport. Default: "in" */
  activeClass?: string;
};

/**
 * Wraps children and adds `activeClass` when they enter the viewport.
 * Pair with CSS transitions.
 */
export function Reveal({
  children,
  className,
  activeClass = "in",
}: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={cn(className, inView && activeClass)}>
      {children}
    </div>
  );
}