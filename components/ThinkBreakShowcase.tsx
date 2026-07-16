"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Store } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectImagePlaceholder } from "@/components/ProjectImagePlaceholder";
import { useLanguage } from "@/components/Providers";
import { thinkBreakProject } from "@/data/projects";
import { pickLocalizedText } from "@/lib/i18n";

export function ThinkBreakShowcase() {
  const { locale, dictionary } = useLanguage();
  const project = thinkBreakProject;
  const title = pickLocalizedText(project.title, locale);
  const category = pickLocalizedText(project.category, locale);
  const imageLabel = pickLocalizedText(project.imageLabel, locale);

  return (
    <AnimatedSection
      id="thinkbreak"
      className="site-shell section-space scroll-mt-28"
    >
      <div className="border-t border-border/70 pt-7">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="section-kicker">{dictionary.thinkBreak.eyebrow}</p>
            <h2 className="section-title mt-6">
              {dictionary.thinkBreak.title}
            </h2>
          </div>
          <div>
            <p className="max-w-[18ch] text-[clamp(1.8rem,3.5vw,3.7rem)] font-medium leading-[1.06] tracking-[-0.05em] text-foreground">
              {dictionary.thinkBreak.headline}
            </p>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <ProjectImagePlaceholder
            title={title}
            category={category}
            label={imageLabel}
            tags={project.tags}
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <p className="section-copy max-w-[38rem]">
            {dictionary.thinkBreak.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <a
              href={project.store}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              <Store size={15} />
              {dictionary.thinkBreak.store}
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              <Github size={15} />
              {dictionary.thinkBreak.github}
            </a>
            <Link href="/projects/thinkbreak" className="text-link px-2">
              {dictionary.thinkBreak.details}
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
