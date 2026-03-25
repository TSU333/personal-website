"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";

import { Project } from "@/data/projects";
import { useLanguage } from "@/components/Providers";
import { pickLocalizedText } from "@/lib/i18n";
import { ProjectImagePlaceholder } from "@/components/ProjectImagePlaceholder";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, dictionary } = useLanguage();
  const reduceMotion = useReducedMotion();
  const title = pickLocalizedText(project.title, locale);
  const category = pickLocalizedText(project.category, locale);
  const description = pickLocalizedText(project.description, locale);
  const imageLabel = pickLocalizedText(project.imageLabel, locale);
  const buttonClass =
    "inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium transition";

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="surface-panel group overflow-hidden p-5 sm:p-6"
    >
      <ProjectImagePlaceholder
        title={title}
        category={category}
        label={imageLabel}
        tags={project.tags}
        gradient={project.gradient}
        glow={project.glow}
        compact
      />

      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted/85">
            {category}
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.025em] text-foreground">
            {title}
          </h3>
        </div>

        <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/70 bg-background/46 px-3 py-1.5 text-xs font-medium text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`${buttonClass} border border-border/75 bg-card/74 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-foreground/10 hover:bg-card`}
          >
            <Github size={14} />
            {dictionary.projectDetail.github}
          </a>
        ) : null}

        {project.store ? (
          <a
            href={project.store}
            target="_blank"
            rel="noreferrer"
            className={`${buttonClass} border border-border/75 bg-card/74 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-foreground/10 hover:bg-card`}
          >
            <Globe size={14} />
            {dictionary.projectDetail.store}
          </a>
        ) : project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={`${buttonClass} border border-border/75 bg-card/74 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-foreground/10 hover:bg-card`}
          >
            <Globe size={14} />
            {dictionary.projectDetail.demo}
          </a>
        ) : null}

        <Link
          href={`/projects/${project.slug}`}
          className={`${buttonClass} bg-accent text-white shadow-[0_16px_36px_-20px_rgb(var(--accent)/0.55)] hover:-translate-y-0.5 hover:bg-accent/92`}
        >
          <ArrowUpRight size={14} />
          {dictionary.projectDetail.details}
        </Link>
      </div>
    </motion.article>
  );
}
