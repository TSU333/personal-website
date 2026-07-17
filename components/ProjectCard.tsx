"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Store } from "lucide-react";

import { Project } from "@/data/projects";
import { useLanguage } from "@/components/Providers";
import { pickLocalizedText } from "@/lib/i18n";
import { ProjectImagePlaceholder } from "@/components/ProjectImagePlaceholder";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, dictionary } = useLanguage();
  const title = pickLocalizedText(project.title, locale);
  const category = pickLocalizedText(project.category, locale);
  const description = pickLocalizedText(project.description, locale);
  const imageLabel = pickLocalizedText(project.imageLabel, locale);

  return (
    <article className="border-t border-border/30 pt-7 sm:pt-9">
      <ProjectImagePlaceholder
        title={title}
        category={category}
        label={imageLabel}
        tags={project.tags}
      />

      <div className="mt-9 grid gap-9 border-b border-border/30 pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="section-kicker">01 / {category}</p>
          <h2
            lang="en"
            className="display-type mt-5 text-[clamp(3.25rem,7vw,7rem)] leading-[0.92] tracking-[-0.045em] text-foreground"
          >
            {title}
          </h2>
        </div>

        <div className="lg:pt-3">
          <p className="max-w-[38rem] text-[1rem] leading-[1.55] text-muted sm:text-[1.125rem]">
            {description}
          </p>
          <p className="type-ui mt-6 text-[11px] uppercase tracking-[0.06em] text-muted/70">
            {project.tags.join(" · ")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.store ? (
              <a
                href={project.store}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                <Store size={15} />
                {dictionary.projectDetail.store}
              </a>
            ) : null}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <Github size={15} />
                {dictionary.projectDetail.github}
              </a>
            ) : null}
            <Link href={`/projects/${project.slug}`} className="text-link px-2">
              {dictionary.projectDetail.details}
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
