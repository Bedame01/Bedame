"use client";

import { processSteps } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const stepIcons = [Search, PenTool, Code2, Rocket];

type WorkProcessProps = {
  showHeader?: boolean;
  sectionIndex?: string;
  showIndex?: boolean;
  className?: string;
};

export function WorkProcess({
  showHeader = true,
  sectionIndex = "(03)",
  showIndex = true,
  className = "",
}: WorkProcessProps) {
  return (
    <div className={className}>
      {showHeader && (
        <FadeIn>
          <SectionLabel>How I work</SectionLabel>
          {showIndex && <p className="text-sm text-muted mb-2">{sectionIndex}</p>}
          <h2 className="title textDisplay mb-3">
            Process
          </h2>
          <p className="desc mb-10 md:mb-16 lg:mb-25">
            A clear, collaborative workflow from first conversation to launch — built
            to keep you informed at every stage.
          </p>
        </FadeIn>
      )}

      {/* Desktop timeline */}
      <div className="hidden lg:block relative">
        <div
          className="absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-border"
          aria-hidden
        />
        <div className="grid grid-cols-4 gap-6">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="group relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-8 flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-2xl border border-border bg-card transition-colors group-hover:border-foreground/30 group-hover:bg-background">
                    <Icon
                      className="h-6 w-6 text-muted transition-colors group-hover:text-foreground"
                      strokeWidth={1.5}
                    />
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-display text-xl! font-medium mb-1 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted mb-3 italic">{step.subtitle}</p>
                  <p className="text-muted text-sm leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Mobile & tablet stacked cards */}
      <div className="lg:hidden space-y-4">
        {processSteps.map((step, i) => {
          const Icon = stepIcons[i];
          return (
            <FadeIn key={step.number} delay={i * 0.08}>
              <div className="group flex gap-5 border border-border rounded-2xl p-6 md:p-8 bg-card hover:border-foreground/20 transition-colors">
                <div className="relative shrink-0 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background">
                  <Icon className="h-5 w-5 text-muted" strokeWidth={1.5} />
                  <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-[9px] font-bold text-background">
                    {step.number}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-display text-xl! font-medium mb-1 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted mb-2 italic">{step.subtitle}</p>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
