"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const spanClasses = [
  "md:col-span-7 md:row-span-1",
  "md:col-span-5 md:row-span-1",
  "md:col-span-5 md:row-span-1",
  "md:col-span-7 md:row-span-1",
];

const aspectClasses = [
  "aspect-[4/3] md:aspect-[16/10]",
  "aspect-[4/3] md:aspect-[4/5]",
  "aspect-[4/3] md:aspect-[4/5]",
  "aspect-[4/3] md:aspect-[16/10]",
];

export function WorkGridCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const paddedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group col-span-1 ${spanClasses[index % spanClasses.length]}`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block h-full"
        aria-label={`View ${project.title} project`}
      >
        <div
          className={`relative overflow-hidden rounded-xl bg-card ${aspectClasses[index % aspectClasses.length]}`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top, ${project.color}ee 0%, ${project.color}66 40%, transparent 70%)`,
            }}
          />

          <div className="absolute inset-0 flex items-end justify-between p-5 md:p-7 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
                {project.services.join(" · ")}
              </p>
              <p className="text-white font-medium text-sm md:text-base">
                View project
              </p>
            </div>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm text-white">
              <ArrowUpRight size={18} />
            </span>
          </div>

          <span className="absolute top-4 left-4 md:top-5 md:left-5 text-xs font-medium tracking-widest text-white/80 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {paddedIndex}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4 pt-5 md:pt-6 px-1">
          <div>
            <h3 className="text-display text-2xl! md:text-3xl! uppercase leading-none mb-2 transition-opacity duration-300 group-hover:opacity-60">
              {project.title}
            </h3>
            <p className="text-muted text-sm! md:text-base! font-serif italic max-w-md">
              {project.excerpt}
            </p>
          </div>
          <span className="text-muted text-sm font-serif italic shrink-0 pt-1">
            ({project.year})
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
