// import Projects from '@/components/projects/projects'
// import { projects } from "@/data/projects";
// import { ProjectRow } from "@/components/projects/ProjectRow";
import { siteConfig } from "@/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import ProjectCard from "@/components/projects/ProjectCard";
import { ServicesSection } from "@/components/home/ServicesSection";
// import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ToolsSkillsSection } from "@/components/home/ToolsSkillsSection"
import ContactSection from "@/components/home/ContactSection";
import HeroCarousel from "@/components/ui/carousel/Carousel";
import CustomButton from "@/components/kokonutui/CustomButton/CustomButton";
import ScrollUp from "@/components/menu-scroll-to-top"

const work = ["Web Development ✦", "Logo Design ✦", "Document Editing ✦", "E-commerce Website ✦", "Graphic Design ✦", "Printing Services ✦"];
// const work = ["Web Development 💻", "Logo Design ✒️", "Document Editing 📄", "E-commerce Website 💻🛒", "Graphic Design 🎨", "Printing Services 🖨️"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col lg:flex-row items-start justify-end" id="up">
        <FadeIn className="heroDisplay lg:flex-[0_0_auto] lg:h-screen lg:sticky lg:top-0 lg:w-[45%] z-1">
          <HeroCarousel />
        </FadeIn>

        <div className="container-wide section-padding ">
          <FadeIn >
            <h1 className="text-6xl! sm:text-7xl! md:text-9xl! textDisplay mb-10 md:mb-20 lg:mb-25!">Bedame <br /> -Visuals</h1>
          </FadeIn>

          <FadeIn>
            {/* <p className="text-sm text-muted mb-6">#{siteConfig.tagline}</p> */}
            <p className="text-lg md:text-xl text-muted font-medium font-serif italic mb-10 md:mb-13">({siteConfig.location})</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-2xl/8 md:text-3xl font-semibold max-w-2xl mb-12 md:mb-16">
              {siteConfig.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <SectionLabel>About Me</SectionLabel>
            <FadeIn><h1 className="heading-xl mb-2 text-6xl! sm:text-7xl! md:text-8xl! uppercase">Creative</h1></FadeIn>
            <FadeIn><h1 className="heading-xl mb-2 text-6xl! sm:text-7xl! md:text-8xl! uppercase">Brands,</h1></FadeIn>
            <FadeIn><h1 className="heading-xl mb-2 text-6xl! sm:text-7xl! md:text-8xl! uppercase">powerful</h1></FadeIn>
            <FadeIn><h1 className="heading-xl text-muted text-6xl! sm:text-7xl! md:text-8xl! uppercase">websites.</h1></FadeIn>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-muted max-w-2xl mt-12 md:mt-16 leading-relaxed text-lg md:text-xl">
              I design and develop modern websites that help businesses attract customers, build credibility, and grow online. Combining creativity with technical expertise, I create digital experiences that are fast, responsive, and built to make a lasting impression.
            </p>
            <CustomButton 
              text="Get in touch" 
              // hoverText="Book a Table" 
              href="/about" 
              variant="primary" 
              className="min-w-35! text-sm uppercase mt-8 py-3 px-1 rounded-lg text-center font-bold!"
            />
          </FadeIn>
        </div>
      </section>

      {/* Services marquee */}
      <section className="border-y border-border py-8 overflow-hidden marquee">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...work, ...work].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-display text-2xl! md:text-3xl font-medium mx-8 md:mx-12 text-muted uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-10">
        <div className="container-wide">
          <FadeIn className="section-padding">
            <SectionLabel>Selected Work</SectionLabel>
            <p className="text-sm text-muted mb-2">(01)</p>
            <h1 className="text-8xl! md:text-9xl! lg:text-[180px]! textDisplay mb-6 uppercase">Projects</h1>
            <p className="text-foreground font-medium max-w-xl md:max-w-4xl text-xl/7 md:text-3xl! lg:text-4xl/12!">
              Explore my recent projects showcasing creativity, innovation, and
              impactful design solutions.
            </p>
          </FadeIn>

          <div>
            {/* {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))} */}
            <ProjectCard />
            {/* <Projects /> */}
          </div>

          <div className="flex w-full items-center justify-center">
            <CustomButton 
              text="View all project" 
              // hoverText="Book a Table" 
              href="/work" 
              variant="ghost" 
              className="min-w-58! mx-auto! text-sm uppercase mt-10 py-6.5 px-2 rounded-lg text-center font-semibold!"
            />
          </div>
        </div>
      </section>

      <ServicesSection />
      <ToolsSkillsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <ScrollUp />
    </>
  );
}
