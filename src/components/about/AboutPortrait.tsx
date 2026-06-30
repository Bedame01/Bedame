"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import portrait from "@/public/images/bedame.png";

export function AboutPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card"
    >
      <Image
        src={portrait}
        alt="Bedame at work"
        fill
        className="object-cover transition-transform duration-700 hover:scale-108"
        sizes="(max-width: 768px) 100vw, 45vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-6 left-6 right-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 backdrop-blur-sm px-4 py-2 text-xs font-medium uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Available for projects
        </span>
      </motion.div>
    </motion.div>
  );
}
