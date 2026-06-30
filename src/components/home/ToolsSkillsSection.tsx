"use client";

import { toolCategories, coreSkills } from "@/data/skills";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { WorkProcess } from "@/components/WorkProcess";
import { motion } from "framer-motion";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-foreground"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function ToolsSkillsSection() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide">
        {/* Header */}
        <FadeIn>
          <SectionLabel>Expertise</SectionLabel>
          <p className="text-sm text-muted mb-2">(03)</p>
          <h2 className="title textDisplay mb-3 md:mb-5 uppercase">
            Tools
          </h2>
          <h2 className="title textDisplay text-muted mb-6 uppercase -mt-4 md:-mt-8">
            & Skills
          </h2>
          <p className="text-foreground font-medium max-w-xl md:max-w-4xl text-xl/7 md:text-3xl! lg:text-4xl/12! mb-12 lg:mb-20">
            The technologies and creative tools I use to bring ideas to life — from
            brand identity to fully functional websites.
          </p>
        </FadeIn>

        {/* Tool categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mb-16 lg:mb-24">
          {toolCategories.map((category, i) => (
            <FadeIn key={category.id} delay={i * 0.1}>
              <div className="group border border-border rounded-2xl p-8 md:p-10 h-full bg-card hover:border-foreground/20 transition-all duration-300">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-muted mb-3">
                    0{i + 1}
                  </p>
                  <h3 className="text-display text-3xl! md:text-4xl! uppercase font-medium leading-none">
                    {category.title}
                  </h3>
                  <h3 className="text-display text-3xl! md:text-4xl! uppercase font-medium text-muted leading-none">
                    {category.subtitle}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-8">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1.5 rounded-full border border-border text-muted bg-background/50 transition-colors group-hover:border-foreground/15"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Core skills */}
        <FadeIn>
          <div className="border border-border rounded-2xl p-8 md:p-12 lg:p-14 bg-card mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-4">
                  Proficiency
                </p>
                <h3 className="text-display text-3xl! md:text-4xl! uppercase font-medium">
                  Core
                </h3>
                <h3 className="text-display text-3xl! md:text-4xl! uppercase font-medium text-muted mb-6">
                  Skills
                </h3>
                <p className="text-muted leading-relaxed max-w-md">
                  Years of hands-on experience across design and development — focused
                  on delivering polished, high-impact results for every client.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {coreSkills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={i * 0.08}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Work process */}
        <div className="border-t border-border pt-16 lg:pt-24">
          <WorkProcess showHeader sectionIndex="(04)" />
        </div>
      </div>
    </section>
  );
}
