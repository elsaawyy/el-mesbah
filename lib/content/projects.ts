/**
 * EL-MESBAH — Demo projects data.
 * These are DEMO projects built by EL-MESBAH — not client work.
 * Keep the "demo" status visible so it never looks like client work.
 */

export type ProjectStatus = "demo" | "client";
export type MockupType = "pipeline" | "chat" | "dashboard";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  status: ProjectStatus;
  tags: string[];
  mockupType: MockupType;
};

export const projects: Project[] = [
  {
    slug: "real-estate-lead-automation",
    title: "Real Estate Lead Automation",
    summary:
      "Automated lead collection, classification, and follow-up workflow.",
    detail:
      "A workflow that captures incoming enquiries, classifies them by intent, queues a follow-up message, and assigns them to an agent — removing manual lead handling.",
    status: "demo",
    tags: ["automation", "crm", "lead-flow"],
    mockupType: "pipeline",
  },
  {
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    summary:
      "An AI assistant that answers questions using company documents and knowledge.",
    detail:
      "A RAG-based assistant that reads internal documents and answers questions with citations back to the source — so staff and customers get reliable answers fast.",
    status: "demo",
    tags: ["ai", "rag", "assistant"],
    mockupType: "chat",
  },
  {
    slug: "business-dashboard",
    title: "Business Dashboard",
    summary:
      "A simple data dashboard for monitoring business information and KPIs.",
    detail:
      "A lightweight dashboard that consolidates business data into one view — turning scattered spreadsheets into a single live picture of the operation.",
    status: "demo",
    tags: ["dashboard", "data", "internal-tool"],
    mockupType: "dashboard",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}