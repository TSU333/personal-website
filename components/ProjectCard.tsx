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
    "inline-flex items-center gap-2 rounded-full border border-border/75 px-4 py-2 text-sm transition";

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-[30px] border border-border/70 bg-card/82 p-4 shadow-soft backdrop-blur-xl"
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

      <div className="mt-6 flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted/85">
            {category}
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
            {title}
          </h3>
        </div>
        {project.featured ? (
          <span className="rounded-full border border-border/70 bg-accent-soft/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
            {dictionary.misc.featured}
          </span>
        ) : null}
      </div>

      <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/70 bg-background/55 px-3 py-1.5 text-xs font-medium text-muted"
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
            className={`${buttonClass} bg-background/55 text-foreground hover:-translate-y-0.5 hover:border-foreground/10 hover:bg-background`}
          >
            <Github size={14} />
            {dictionary.projectDetail.github}
          </a>
        ) : (
          <span
            className={`${buttonClass} cursor-not-allowed bg-background/40 text-muted/70`}
            title={dictionary.misc.comingSoon}
          >
            <Github size={14} />
            {dictionary.projectDetail.github}
          </span>
        )}

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={`${buttonClass} bg-background/55 text-foreground hover:-translate-y-0.5 hover:border-foreground/10 hover:bg-background`}
          >
            <Globe size={14} />
            {dictionary.projectDetail.demo}
          </a>
        ) : (
          <span
            className={`${buttonClass} cursor-not-allowed bg-background/40 text-muted/70`}
            title={dictionary.misc.comingSoon}
          >
            <Globe size={14} />
            {dictionary.projectDetail.demo}
          </span>
        )}

        <Link
          href={`/projects/${project.slug}`}
          className={`${buttonClass} bg-foreground text-background hover:-translate-y-0.5 hover:bg-foreground/92`}
        >
          <ArrowUpRight size={14} />
          {dictionary.projectDetail.details}
        </Link>
      </div>
    </motion.article>
  );
}
