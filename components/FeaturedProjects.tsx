"use client";

import Link from "next/link";

import { Project } from "@/data/projects";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/components/Providers";

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="mx-auto mt-20 flex w-full max-w-7xl flex-col px-6 sm:px-10 lg:px-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <p className="section-kicker">{dictionary.featured.eyebrow}</p>
          <h2 className="section-title max-w-3xl">{dictionary.featured.title}</h2>
          <p className="section-copy max-w-2xl">
            {dictionary.featured.description}
          </p>
        </div>

        <Link href="/projects" className="button-secondary hidden sm:inline-flex">
          {dictionary.featured.viewAll}
        </Link>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link href="/projects" className="button-secondary w-full">
          {dictionary.featured.viewAll}
        </Link>
      </div>
    </AnimatedSection>
  );
}
