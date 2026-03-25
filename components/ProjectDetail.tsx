"use client";

import Link from "next/link";
import { ArrowLeft, Github, Globe, Sparkles } from "lucide-react";

import { Project } from "@/data/projects";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectImagePlaceholder } from "@/components/ProjectImagePlaceholder";
import { useLanguage } from "@/components/Providers";
import {
  pickLocalizedList,
  pickLocalizedText,
} from "@/lib/i18n";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { locale, dictionary } = useLanguage();
  const title = pickLocalizedText(project.title, locale);
  const category = pickLocalizedText(project.category, locale);
  const description = pickLocalizedText(project.description, locale);
  const overview = pickLocalizedText(project.overview, locale);
  const problem = pickLocalizedText(project.problem, locale);
  const solution = pickLocalizedText(project.solution, locale);
  const imageLabel = pickLocalizedText(project.imageLabel, locale);
  const features = pickLocalizedList(project.features, locale);
  const challenges = pickLocalizedList(project.challenges, locale);
  const hasProblem = problem.trim().length > 0;
  const hasSolution = solution.trim().length > 0;
  const buttonClass =
    "inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium transition";

  return (
    <div className="site-shell">
      <AnimatedSection>
        <Link href="/projects" className="button-secondary">
          <ArrowLeft size={16} />
          {dictionary.projectDetail.backToProjects}
        </Link>

        <div className="surface-panel mt-8 px-6 py-8 sm:p-10 lg:px-12 lg:py-12">
          <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
            <div className="space-y-6">
              <p className="section-kicker">{category}</p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl">
                {title}
              </h1>
              <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
                {description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonClass} border border-border/75 bg-card/74 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-foreground/10 hover:bg-card`}
                  >
                    <Github size={15} />
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
                    <Globe size={15} />
                    {dictionary.projectDetail.store}
                  </a>
                ) : null}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonClass} border border-border/75 bg-card/74 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-foreground/10 hover:bg-card`}
                  >
                    <Globe size={15} />
                    {dictionary.projectDetail.demo}
                  </a>
                ) : null}
              </div>

              <div className="subtle-panel p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted/80">
                  {dictionary.projectDetail.overview}
                </p>
                <p className="mt-4 text-base leading-8 text-foreground/80">
                  {overview}
                </p>
              </div>
            </div>

            <ProjectImagePlaceholder
              title={title}
              category={category}
              label={imageLabel}
              tags={project.tags}
              gradient={project.gradient}
              glow={project.glow}
            />
          </div>
        </div>
      </AnimatedSection>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <AnimatedSection className="space-y-6">
          {hasProblem ? (
            <div className="subtle-panel p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted/80">
                {dictionary.projectDetail.problem}
              </p>
              <p className="mt-4 text-base leading-8 text-foreground/80">
                {problem}
              </p>
            </div>
          ) : null}

          {hasSolution ? (
            <div className="subtle-panel p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted/80">
                {dictionary.projectDetail.solution}
              </p>
              <p className="mt-4 text-base leading-8 text-foreground/80">
                {solution}
              </p>
            </div>
          ) : null}
        </AnimatedSection>

        <AnimatedSection className="space-y-6" delay={0.08}>
          <div className="subtle-panel p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-border/70 bg-background/55 p-2">
                <Sparkles size={16} className="text-foreground/80" />
              </div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted/80">
                {dictionary.projectDetail.features}
              </p>
            </div>
            <ul className="mt-5 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-[22px] border border-border/70 bg-background/48 px-4 py-3 text-sm leading-7 text-foreground/80"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="subtle-panel p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted/80">
              {dictionary.projectDetail.stack}
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

            <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted/80">
              {dictionary.projectDetail.challenges}
            </p>
            <ul className="mt-5 space-y-3">
              {challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="rounded-[22px] border border-border/70 bg-background/48 px-4 py-3 text-sm leading-7 text-foreground/80"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
