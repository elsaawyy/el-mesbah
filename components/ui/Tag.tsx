import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type TagProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Small pill used to label demo projects, statuses, etc.
 */
export function Tag({ children, className }: TagProps) {
  return <span className={cn("tag", className)}>{children}</span>;
}