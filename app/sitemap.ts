import type { MetadataRoute } from "next";
import { site } from "@/lib/content/site";
import { services } from "@/lib/content/services";
import { projects } from "@/lib/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, priority: 1 },
    { url: `${site.url}/services`, lastModified: now, priority: 0.9 },
    { url: `${site.url}/projects`, lastModified: now, priority: 0.9 },
    { url: `${site.url}/about`, lastModified: now, priority: 0.8 },
    { url: `${site.url}/contact`, lastModified: now, priority: 0.9 },
    { url: `${site.url}/privacy`, lastModified: now, priority: 0.3 },
    { url: `${site.url}/terms`, lastModified: now, priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}