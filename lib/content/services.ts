/**
 * EL-MESBAH — Services data.
 * Drives the ServicesPreview section and /services pages.
 */

export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  detail: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    index: "01",
    title: "Web Development",
    summary:
      "Modern websites and web applications designed around your business needs.",
    detail:
      "Business websites, landing pages, web applications, customer portals, and internal web tools — built to load fast, rank well, and convert.",
    bullets: [
      "Business websites",
      "Landing pages",
      "Web applications",
      "Customer portals",
      "Internal web tools",
    ],
  },
  {
    slug: "business-automation",
    index: "02",
    title: "Business Automation",
    summary:
      "Automate repetitive workflows and connect the tools your business already uses.",
    detail:
      "Lead automation, notifications, email workflows, CRM sync, document workflows, and business process automation that removes manual work.",
    bullets: [
      "Lead automation",
      "Notifications",
      "Email workflows",
      "CRM workflows",
      "Data synchronization",
      "Document workflows",
      "Business process automation",
    ],
  },
  {
    slug: "ai-solutions",
    index: "03",
    title: "AI Solutions",
    summary:
      "Practical AI solutions including assistants, chatbots, RAG systems, and intelligent workflows.",
    detail:
      "AI assistants, chatbots, RAG systems, document Q&A, AI-powered workflows, and intelligent automation — solving real problems, not chasing hype.",
    bullets: [
      "AI assistants",
      "AI chatbots",
      "RAG systems",
      "Document Q&A",
      "AI-powered workflows",
      "Intelligent automation",
    ],
  },
  {
    slug: "custom-software",
    index: "04",
    title: "Custom Software",
    summary:
      "Software built specifically around your processes, requirements, and goals.",
    detail:
      "Internal business systems, dashboards, management tools, business applications, custom integrations, and software tailored to how you actually work.",
    bullets: [
      "Internal business systems",
      "Dashboards",
      "Management tools",
      "Business applications",
      "Custom integrations",
      "Tailored software",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
