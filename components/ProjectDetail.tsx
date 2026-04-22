"use client";

import Link from "next/link";
import { ArrowLeft, Github, Globe } from "lucide-react";

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

  return (
    <div className="site-shell">
      <AnimatedSection>
        <Link href="/projects" className="text-link">
          <ArrowLeft size={14} />
          {dictionary.projectDetail.backToProjects}
        </Link>

        <div className="mt-10 grid gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-end">
          <div className="space-y-8">
            <p className="section-kicker">{category}</p>
            <div className="space-y-6">
              <h1 className="max-w-[10ch] text-[clamp(3.4rem,7vw,6.6rem)] font-semibold text-foreground">
                {title}
              </h1>
              <p className="max-w-[34rem] text-[1.05rem] leading-8 text-muted sm:text-[1.15rem]">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
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
              ) : null}

              {project.demo ? (
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
            </div>

            <div className="section-rule max-w-[38rem]">
              <p className="detail-label">{dictionary.projectDetail.overview}</p>
              <p className="detail-copy mt-5">
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
      </AnimatedSection>

      <div className="section-space grid gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <AnimatedSection className="space-y-14">
          {hasProblem ? (
            <div className="section-rule">
              <p className="detail-label">
                {dictionary.projectDetail.problem}
              </p>
              <p className="detail-copy mt-5">
                {problem}
              </p>
            </div>
          ) : null}

          {hasSolution ? (
            <div className="section-rule">
              <p className="detail-label">
                {dictionary.projectDetail.solution}
              </p>
              <p className="detail-copy mt-5">
                {solution}
              </p>
            </div>
          ) : null}
        </AnimatedSection>

        <AnimatedSection className="space-y-14" delay={0.08}>
          <div className="section-rule">
            <p className="detail-label">
              {dictionary.projectDetail.features}
            </p>
            <ul className="detail-list">
              {features.map((feature) => (
                <li key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="section-rule">
            <p className="detail-label">
              {dictionary.projectDetail.stack}
            </p>
            <p className="detail-copy mt-5">
              {project.tags.join(" · ")}
            </p>

            <p className="detail-label mt-10">
              {dictionary.projectDetail.challenges}
            </p>
            <ul className="detail-list">
              {challenges.map((challenge) => (
                <li key={challenge}>
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
