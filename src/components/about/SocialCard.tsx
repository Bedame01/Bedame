"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type SocialCardProps = {
  label: string;
  href: string;
  handle: string;
  index: number;
};

export function SocialCard({ label, href, handle, index }: SocialCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group flex items-center justify-between gap-4 border border-border rounded-2xl p-5 md:p-6 bg-card hover:border-foreground/25 hover:bg-background transition-all duration-300"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-sm font-bold uppercase transition-colors duration-300 group-hover:border-foreground/20 group-hover:bg-foreground group-hover:text-background">
          {label.slice(0, 2)}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-wide">{label}</p>
          <p className="text-muted text-sm truncate">{handle}</p>
        </div>
      </div>
      <ExternalLink
        className="h-4 w-4 shrink-0 text-muted opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        strokeWidth={1.5}
      />
    </motion.a>
  );
}
