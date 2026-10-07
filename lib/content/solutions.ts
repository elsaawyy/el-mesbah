/**
 * EL-MESBAH — Problem → Solution pairs.
 * Drives the "Built around real problems" section.
 */

export type Solution = {
  problem: string;
  solution: string;
};

export const solutions: Solution[] = [
  { problem: "Manual work",            solution: "Automation" },
  { problem: "Scattered data",         solution: "Connected systems" },
  { problem: "Slow customer response", solution: "Intelligent support" },
  { problem: "Lost leads",             solution: "Automated follow-up" },
  { problem: "Spreadsheets",           solution: "Internal software" },
];