import { site } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <span>
        {site.name} — {site.nameArabic}
      </span>
      <span>{site.tagline}</span>
    </footer>
  );
}