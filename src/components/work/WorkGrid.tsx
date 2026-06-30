import type { Project } from "@/data/projects";
import { WorkGridCard } from "./WorkGridCard";

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
      {projects.map((project, index) => (
        <WorkGridCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
