/**
 * EL-MESBAH — Navigation links.
 * Used by Nav and MobileMenu.
 */

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const navCta: NavLink = {
  href: "/contact",
  label: "Start a Project",
};