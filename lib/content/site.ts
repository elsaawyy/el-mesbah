/**
 * EL-MESBAH — Site-wide configuration.
 * Edit these values to update site info everywhere.
 */

export const site = {
  name: "EL-MESBAH",
  nameArabic: "مصباح",
  tagline: "Software • AI • Automation",
  description:
    "We build software, AI, and automation solutions that help businesses simplify their operations and grow.",

  // --- Contact (EDIT THESE LATER) ---
  email: "hello@el-mesbah.com",
  phone: "",
  whatsapp: "",
  location: "",

  // --- Domain (EDIT WHEN YOU BUY ONE) ---
  url: "http://localhost:3000",

  // --- Social (optional) ---
  social: {
    linkedin: "",
    github: "",
    x: "",
  },
} as const;

export type Site = typeof site;