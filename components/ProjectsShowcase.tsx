"use client";

import { Project } from "@/data/projects";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/components/Providers";

type ProjectsShowcaseProps = {
  projects: Project[];
};

export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const { dictionary } = useLanguage();

  return (
    <div className="site-shell">
      <AnimatedSection>
        <div className="grid min-h-[46vh] gap-10 border-b border-border/70 pb-14 pt-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:pb-20">
          <div>
            <p className="section-kicker">{dictionary.projectsPage.eyebrow}</p>
            <p className="type-ui mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/60">
              01 / 01
            </p>
          </div>

          <div>
            <h1 className="text-[clamp(4.3rem,11vw,10.5rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-foreground">
              {dictionary.projectsPage.title}
            </h1>
            <p className="mt-7 max-w-[38rem] text-[1.05rem] leading-8 text-muted sm:text-[1.16rem]">
              {dictionary.projectsPage.description}
            </p>
            <p className="type-ui mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/68">
              {dictionary.projectsPage.highlightDescription}
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="section-space">
        {projects.map((project) => (
          <AnimatedSection key={project.slug}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
