"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
};

export function StatCounter({ value, suffix = "", label, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1400;
    const startTime = performance.now() + delay * 1000;

    const tick = (now: number) => {
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group border border-border rounded-2xl p-8 md:p-10 bg-card hover:border-foreground/20 transition-colors duration-300"
    >
      <p className="text-display text-5xl! md:text-6xl! font-medium mb-3 tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-muted uppercase tracking-wide">{label}</p>
    </motion.div>
  );
}
