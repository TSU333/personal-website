"use client";

import Link from "next/link";
import { ArrowDownRight, Github } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

const githubUrl = "https://github.com/TSU333";

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="site-shell pt-7 sm:pt-12">
      <div className="border-b border-border/70 pb-10 sm:pb-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="section-kicker">{dictionary.hero.eyebrow}</p>
          <p className="type-ui flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            <span className="h-1.5 w-1.5 bg-accent" />
            {dictionary.hero.status}
          </p>
        </div>

        <h1 className="mt-14 text-[clamp(7rem,25vw,23rem)] font-semibold leading-[0.76] tracking-[-0.085em] text-foreground sm:mt-20">
          {dictionary.hero.title}
        </h1>

        <div className="mt-16 grid gap-10 border-t border-border/70 pt-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="max-w-[17ch] text-[clamp(2rem,4.3vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.055em] text-foreground">
              {dictionary.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              {dictionary.hero.roles.map((role) => (
                <span
                  key={role}
                  className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:pt-1">
            <p className="max-w-[32rem] text-[1rem] leading-8 text-muted sm:text-[1.08rem]">
              {dictionary.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects/thinkbreak" className="button-primary">
                {dictionary.hero.primaryCta}
                <ArrowDownRight size={16} />
              </Link>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <Github size={15} />
                {dictionary.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
