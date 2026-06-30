import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WorkGrid } from "@/components/work/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore our portfolio of branding, web design, and digital projects.",
};

export default function WorkPage() {
  return (
    <section className="section-padding min-h-screen">
      <div className="container-wide">
        <FadeIn>
          <SectionLabel>Portfolio</SectionLabel>
          <p className="text-sm text-muted mb-2">({`${String(projects.length).padStart(2, "0")} Projects Completed 😊`})</p>
          <h1 className="title textDisplay mb-6 uppercase">Projects</h1>
          <p className="desc mb-16 md:mb-24">
            A curated selection of work — each project crafted with intention,
            built to leave a lasting impression.
          </p>
        </FadeIn>

        <WorkGrid projects={projects} />

        <FadeIn delay={0.2}>
          <div className="mt-20 md:mt-28 pt-12 border-t border-border flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-muted font-serif italic text-lg mb-2">(Interested?)</p>
              <h2 className="heading-lg uppercase">Let&apos;s create something together.</h2>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide link-hover border border-border rounded-lg px-6 py-4 transition-colors hover:bg-card"
            >
              Start a project →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
