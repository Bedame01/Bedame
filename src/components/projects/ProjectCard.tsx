import Image from "next/image"
import Link from "next/link"
import "./ProjectCard.css"
// import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";
// import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <div className="projectContainer">
        {projects.map((project) => (
          <div className="projectCard" key={project.slug}>
          <Link
            href={project.link}
            // key={project.slug}
            className="projectLink"
          >
            <div className="wrapper">
              <div>
                <div className="imgWrapper">
                  <Image src={project.image} alt={project.slug} className="img" />
                </div>
              </div>
            </div>
            <div className="descWrapper md:py-8! lg:py-10!">
              <div className="text1">
                <h3 className="text-2xl font-bold! tracking-tight">{project.title}</h3>
              </div>
              <div className="text2">
                <p className="font-serif italic text-lg md:text-xl text-muted">{`{${project.year}}`}</p>
              </div>
            </div>
          </Link>
        </div>
        ))}
    </div>
  )
}

export default ProjectCard