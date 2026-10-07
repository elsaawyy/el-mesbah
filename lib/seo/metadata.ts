import type { Metadata } from "next";
import { site } from "@/lib/content/site";

/**
 * Build page metadata with sensible defaults.
 * Every page should call this.
 */
export function buildMetadata(opts: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = opts.path ? `${site.url}${opts.path}` : site.url;
  const description = opts.description ?? site.description;
  const fullTitle = `${opts.title} — ${site.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}