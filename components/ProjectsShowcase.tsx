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
    <div className="site-shell pb-24 pt-8 sm:pb-32 sm:pt-12">
      <AnimatedSection>
        <div className="grid min-h-[48vh] gap-10 border-b border-border/30 pb-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:pb-20">
          <div>
            <p className="section-kicker">{dictionary.projectsPage.eyebrow}</p>
            <p className="type-ui mt-6 text-[11px] uppercase tracking-[0.07em] text-muted/60">
              01 / 01
            </p>
          </div>

          <div>
            <h1 lang="en" className="display-type page-title">
              {dictionary.projectsPage.title}
            </h1>
            <p className="mt-7 max-w-[38rem] text-[1rem] leading-[1.55] text-muted sm:text-[1.125rem]">
              {dictionary.projectsPage.description}
            </p>
            <p className="type-ui mt-6 text-[11px] uppercase tracking-[0.07em] text-foreground/62">
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
