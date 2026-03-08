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
  const categoryCount = new Set(projects.map((project) => project.category.en)).size;
  const stats = [
    {
      label: dictionary.projectsPage.statLabels.total,
      value: String(projects.length),
    },
    {
      label: dictionary.projectsPage.statLabels.featured,
      value: String(projects.filter((project) => project.featured).length),
    },
    {
      label: dictionary.projectsPage.statLabels.categories,
      value: String(categoryCount),
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-10 lg:px-12">
      <AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div className="space-y-5">
            <p className="section-kicker">{dictionary.projectsPage.eyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl">
              {dictionary.projectsPage.title}
            </h1>
            <p className="section-copy max-w-2xl">
              {dictionary.projectsPage.description}
            </p>
          </div>

          <div className="rounded-[28px] border border-border/70 bg-card/76 p-6 shadow-soft backdrop-blur-xl">
            <p className="text-sm font-semibold tracking-[-0.02em] text-foreground">
              {dictionary.projectsPage.highlightTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {dictionary.projectsPage.highlightDescription}
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-8" delay={0.08}>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[24px] border border-border/70 bg-card/70 p-5 shadow-soft backdrop-blur"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted/80">
                {stat.label}
              </p>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-10" delay={0.12}>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
