import Image from "next/image"
import Link from "next/link"
import "./projects.css"
// import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";

const Projects = () => {
  const firstColumnProjects = projects.slice(0, 2);
  const secondColumnProjects = projects.slice(2);

  return (
    <section className="projectSection">
        <div className="projectContainer">
            {firstColumnProjects.map((projectA) => (
                <Link
                    key={projectA.slug}
                    href={projectA.link}
                    className="bg-background hover:bg-background/80! projectLink border-t border-border"
                >
                    <div className="linkContent">
                        <div className="content1">
                            <div className="text1"><p className="text-sm md:text-base font-bold flex flex-row! text-nowrap">{`{ ${projectA.services.join(' , ')} }`}</p></div>
                            <div className="text2"><p className="text-sm md:text-lg font-semibold text-muted">{projectA.year}</p></div>
                        </div>
                        <div className="content2"><h2 className="text-3xl font-medium tracking-tight">{projectA.title}</h2></div>
                        <div className="content3"><p className="text-sm text-muted font-semibold">{projectA.excerpt}</p></div>
                    </div>

                    <div className="ssr-variant">
                        <div className="linkImgWrapper">
                            <div>
                                <Image 
                                    src={projectA.image}
                                    alt={projectA.slug}
                                    className="img"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        <div className="projectContainer2">
            <div className="wrapper">
                {secondColumnProjects.map((projectB) => (
                    <Link
                    href={projectB.link}
                    key={projectB.slug}
                    className="bg-background hover:bg-background/80! projectLink border-t border-border"
                >
                    <div className="linkContent">
                        <div className="content1">
                            <div className="text1"><p className="text-sm md:text-lg font-bold text-nowrap">{`{ ${projectB.services.join(' , ')} }`}</p></div>
                            <div className="text2"><p className="text-sm md:text-lg font-semibold text-muted">{projectB.year}</p></div>
                        </div>
                        <div className="content2"><h2 className="text-3xl font-medium tracking-tight">{projectB.title}</h2></div>
                        <div className="content3"><p className="text-sm text-muted font-semibold">{projectB.excerpt}</p></div>
                    </div>

                    <div className="ssr-variant">
                        <div className="linkImgWrapper">
                            <div>
                                <Image 
                                    src={projectB.image}
                                    alt={projectB.slug}
                                    className="img"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
            <div className="viewAllProject">
                <div>
                    <Link
                        href=''
                        className="viewAllLink size-full! border-t border-border bg-amber-200"
                    >
                        <div>
                            <div className="wrap1 bg-accent/20!">
                                <div className="wrap2">
                                    <div className="wrapA">
                                        <p className="text-foreground text-lg font-semibold">View all projects</p>
                                    </div>
                                    <div className="wrapB">
                                        <div>
                                        <svg viewBox="0 0 45 45" preserveAspectRatio="none" width="100%" height="100%" className="size-full"><use href="#svg-1960598328_1282"></use></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects