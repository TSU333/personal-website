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
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { locale, dictionary } = useLanguage();
  const reduceMotion = useReducedMotion();
  const title = pickLocalizedText(project.title, locale);
  const category = pickLocalizedText(project.category, locale);
  const description = pickLocalizedText(project.description, locale);
  const imageLabel = pickLocalizedText(project.imageLabel, locale);
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-border/70 pt-8 sm:pt-10"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-start lg:gap-14">
        <div className={isReversed ? "lg:order-2" : undefined}>
          <ProjectImagePlaceholder
            title={title}
            category={category}
            label={imageLabel}
            tags={project.tags}
            gradient={project.gradient}
            glow={project.glow}
            compact
          />
        </div>

        <div className={`space-y-5 ${isReversed ? "lg:order-1" : undefined}`}>
          <p className="section-kicker">{category}</p>
          <div className="space-y-4">
            <h3 className="max-w-[11ch] text-[2.35rem] font-semibold text-foreground sm:text-[3.5rem]">
              {title}
            </h3>
            <p className="max-w-[32rem] text-[1.02rem] leading-8 text-muted sm:text-[1.08rem]">
              {description}
            </p>
          </div>

          <p className="type-ui text-[12px] uppercase tracking-[0.14em] text-muted/78">
            {project.tags.join(" · ")}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-link"
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
                className="text-link"
              >
                <Globe size={14} />
                {dictionary.projectDetail.store}
              </a>
            ) : project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                <Globe size={14} />
                {dictionary.projectDetail.demo}
              </a>
            ) : null}

            <Link
              href={`/projects/${project.slug}`}
              className="button-primary"
            >
              {dictionary.projectDetail.details}
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
