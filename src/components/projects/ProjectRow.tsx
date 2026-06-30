"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block border-t border-border py-8 md:py-12"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-6 md:gap-12">
            <div
              className="w-16 h-16 md:w-24 md:h-24 rounded-lg shrink-0 transition-transform group-hover:scale-105"
              style={{ backgroundColor: project.color }}
            />
            <h3 className="heading-md group-hover:opacity-60 transition-opacity">
              {project.title}
            </h3>
          </div>
          <span className="text-muted text-sm md:text-base">( {project.year} )</span>
        </div>
      </Link>
    </motion.div>
  );
}
