import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Solutions } from "@/components/home/Solutions";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Why } from "@/components/home/Why";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <ServicesPreview />
        <Solutions />
        <FeaturedProjects />
        <Why />
        <CTA />
      </main>
    </>
  );
}