import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SkipLink } from "@/components/ui/SkipLink";
import { site } from "@/lib/content/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  metadataBase: new URL(site.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}