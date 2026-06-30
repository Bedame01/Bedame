"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

function NavCard({
  project,
  direction,
}: {
  project: Project;
  direction: "prev" | "next";
}) {
  const isPrev = direction === "prev";

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col gap-4 flex-1 min-w-0"
    >
      <motion.div
        whileHover={{ y: isPrev ? -4 : 4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[16/9] overflow-hidden rounded-xl bg-card"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundColor: project.color }}
        />
      </motion.div>

      <div className={`flex items-center gap-2 ${isPrev ? "" : "justify-end text-right"}`}>
        {isPrev && (
          <ArrowLeft
            size={16}
            className="text-muted shrink-0 transition-transform group-hover:-translate-x-1"
          />
        )}
        <div className="min-w-0">
          <p className="text-xs text-muted uppercase tracking-widest mb-1">
            {isPrev ? "Previous" : "Next"}
          </p>
          <p className="text-display text-xl md:text-2xl uppercase truncate transition-opacity group-hover:opacity-60">
            {project.title}
          </p>
        </div>
        {!isPrev && (
          <ArrowRight
            size={16}
            className="text-muted shrink-0 transition-transform group-hover:translate-x-1"
          />
        )}
      </div>
    </Link>
  );
}

export function ProjectNavigation({
  prev,
  next,
}: {
  prev: Project | null;
  next: Project | null;
}) {
  if (!prev && !next) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-16 md:pt-24 border-t border-border">
      {prev ? <NavCard project={prev} direction="prev" /> : <div />}
      {next ? <NavCard project={next} direction="next" /> : <div />}
    </div>
  );
}
