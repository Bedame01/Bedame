import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, getAdjacentProjects } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectNavigation } from "@/components/work/ProjectNavigation";
import CustomButton from "@/components/kokonutui/CustomButton/CustomButton";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.excerpt };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug) + 1;

  return (
    <article className="section-padding min-h-screen">
      <div className="container-wide">
        {/* Header */}
        <FadeIn>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted link-hover mb-12 md:mb-16 group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Work
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
            <div className="max-w-4xl">
              <SectionLabel>Case Study</SectionLabel>
              <p className="text-sm text-muted mb-3">
                ({String(projectIndex).padStart(2, "0")} / {String(projects.length).padStart(2, "0")})
              </p>
              <h1 className="title2 textDisplay mb-6">{project.title}</h1>
              <p className="desc">{project.excerpt}</p>
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-sm shrink-0">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="text-xs uppercase tracking-widest font-medium px-4 py-2 rounded-full border border-border bg-card"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Hero image */}
        <FadeIn delay={0.1}>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-16 md:mb-24">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 mix-blend-multiply opacity-20"
              style={{ backgroundColor: project.color }}
            />
          </div>
        </FadeIn>

        {/* Meta grid */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-16 md:mb-24 pb-16 md:pb-20 border-b border-border">
            {[
              { label: "Client", value: project.client },
              { label: "Year", value: project.year },
              { label: "Role", value: project.role },
              { label: "Duration", value: project.duration },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-sm text-muted mb-2 italic font-serif">({label})</p>
                <p className="font-medium text-base md:text-lg">{value}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Content + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-24">
          <FadeIn delay={0.2} className="lg:col-span-7">
            <h2 className="heading-lg uppercase mb-2">The</h2>
            <h2 className="heading-lg uppercase text-muted mb-10 md:mb-12">Challenge</h2>
            <div className="space-y-6 text-muted leading-relaxed text-base md:text-lg">
              {project.description.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-10">
              {/* Highlights */}
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <p className="text-sm text-muted mb-5 italic font-serif">(Key Results)</p>
                <ul className="space-y-4">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-sm md:text-base font-medium leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <p className="text-sm text-muted mb-4 italic font-serif">(Tools & Stack)</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium px-3 py-2 rounded-lg bg-background border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Secondary visual */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-24">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden relative"
              style={{ backgroundColor: project.color }}
            >
              <Image
                src={project.image}
                alt={`${project.title} detail`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-60 mix-blend-luminosity"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl border border-border bg-card flex flex-col justify-center p-8 md:p-12">
              <p className="text-muted font-serif italic text-lg mb-4">(Deliverables)</p>
              <ul className="space-y-3">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="text-display text-2xl md:text-3xl uppercase"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.35}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-12 md:py-16 px-8 md:px-12 rounded-2xl border border-border bg-card mb-16 md:mb-24">
            <div>
              <p className="text-muted font-serif italic mb-2">(Like what you see?)</p>
              <h3 className="heading-md uppercase">Ready to start your project?</h3>
            </div>
            <CustomButton
              text="Get in touch"
              href="/contact"
              variant="primary"
              className="min-w-40! text-sm uppercase py-4 px-6 rounded-lg text-center font-bold! shrink-0"
            />
          </div>
        </FadeIn>

        {/* Prev / Next */}
        <FadeIn delay={0.4}>
          <ProjectNavigation prev={prev} next={next} />
        </FadeIn>
      </div>
    </article>
  );
}
