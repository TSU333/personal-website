"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Store } from "lucide-react";

import { Project } from "@/data/projects";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectImagePlaceholder } from "@/components/ProjectImagePlaceholder";
import { useLanguage } from "@/components/Providers";
import { pickLocalizedList, pickLocalizedText } from "@/lib/i18n";

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

  return (
    <div className="site-shell">
      <AnimatedSection>
        <Link href="/projects" className="text-link">
          <ArrowLeft size={14} />
          {dictionary.projectDetail.backToProjects}
        </Link>

        <div className="mt-12 grid gap-12 border-b border-border/70 pb-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:pb-20">
          <div>
            <p className="section-kicker">01 / {category}</p>
            <p className="type-ui mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/56">
              TypeScript / Manifest V3
            </p>
          </div>

          <div>
            <h1 className="text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-foreground">
              {title}
            </h1>
            <p className="mt-8 max-w-[42rem] text-[1.05rem] leading-8 text-muted sm:text-[1.17rem]">
              {description}
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
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <ProjectImagePlaceholder
          title={title}
          category={category}
          label={imageLabel}
          tags={project.tags}
        />
      </AnimatedSection>

      <div className="section-space grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <AnimatedSection>
          <p className="section-kicker">01 / {dictionary.projectDetail.overview}</p>
        </AnimatedSection>
        <AnimatedSection delay={0.04}>
          <p className="detail-lead">{overview}</p>
        </AnimatedSection>
      </div>

      <div className="section-space grid gap-14 border-t border-border/70 pt-7 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection>
          <p className="detail-label">{dictionary.projectDetail.problem}</p>
          <p className="detail-copy mt-5">{problem}</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <p className="detail-label">{dictionary.projectDetail.solution}</p>
          <p className="detail-copy mt-5">{solution}</p>
        </AnimatedSection>
      </div>

      <div className="section-space grid gap-14 border-t border-border/70 pt-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <AnimatedSection>
          <p className="section-kicker">02 / {dictionary.projectDetail.features}</p>
          <p className="type-ui mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/58">
            {project.tags.join(" / ")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <ol className="space-y-0">
            {features.map((feature, index) => (
              <li key={feature} className="feature-row">
                <span className="type-ui text-[10px] font-semibold tracking-[0.14em] text-muted/48">
                  0{index + 1}
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ol>
        </AnimatedSection>
      </div>

      <div className="section-space grid gap-14 border-t border-border/70 pt-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <AnimatedSection>
          <p className="section-kicker">03 / {dictionary.projectDetail.challenges}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <ol className="space-y-0">
            {challenges.map((challenge, index) => (
              <li key={challenge} className="feature-row">
                <span className="type-ui text-[10px] font-semibold tracking-[0.14em] text-muted/48">
                  0{index + 1}
                </span>
                <span>{challenge}</span>
              </li>
            ))}
          </ol>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-link mt-10"
            >
              {dictionary.thinkBreak.github}
              <ArrowUpRight size={14} />
            </a>
          ) : null}
        </AnimatedSection>
      </div>
    </div>
  );
}
