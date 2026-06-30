"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide">
        <FadeIn>
          <SectionLabel>Testimonials</SectionLabel>
          <p className="text-sm text-muted mb-2">(04)</p>
          <h2 className="heading-lg mb-4">
            What our
          </h2>
          <h2 className="heading-lg text-muted mb-16 md:mb-20">Clients say</h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-display text-xl md:text-2xl font-medium mb-8 leading-snug">
                  {current.quote}
                </h3>
                <div>
                  <p className="font-medium">{current.author}</p>
                  <p className="text-muted text-sm">{current.company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-3">
              {testimonials.map((t, i) => (
                <button
                  key={t.author}
                  onClick={() => setActive(i)}
                  className={`text-left px-5 py-4 rounded-xl border transition-all ${
                    active === i
                      ? "border-foreground bg-card"
                      : "border-border hover:border-foreground/30"
                  }`}
                >
                  <p className="text-sm font-medium">{t.company}</p>
                  <p className="text-xs text-muted mt-1 line-clamp-1">{t.quote}</p>
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
