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
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_24rem] xl:items-end">
          <div className="space-y-4">
            <p className="section-kicker">{dictionary.projectsPage.eyebrow}</p>
            <h1 className="max-w-4xl text-[3rem] font-semibold text-foreground sm:text-[5.6rem]">
              {dictionary.projectsPage.title}
            </h1>
            {dictionary.projectsPage.description ? (
              <p className="section-copy max-w-2xl">
                {dictionary.projectsPage.description}
              </p>
            ) : null}
          </div>

          <div className="section-rule xl:pb-1">
            <p className="type-ui text-[12px] font-semibold uppercase tracking-[0.14em] text-muted/82">
              {dictionary.projectsPage.highlightTitle}
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              {dictionary.projectsPage.highlightDescription}
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="section-space space-y-0">
        {projects.map((project, index) => (
          <AnimatedSection
            key={project.slug}
            delay={0.05 + index * 0.04}
          >
            <ProjectCard project={project} index={index} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
