"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-10 lg:px-12">
      <div className="overflow-hidden rounded-[36px] border border-border/70 bg-card/78 px-6 py-8 shadow-panel backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-border/75 bg-background/55 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
            {dictionary.hero.eyebrow}
          </span>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.08em] text-foreground sm:text-7xl lg:text-[5.5rem]">
              {dictionary.hero.title}
            </h1>
            <p className="max-w-2xl text-xl font-medium tracking-[-0.03em] text-foreground/86 sm:text-2xl">
              {dictionary.hero.subtitle}
            </p>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {dictionary.hero.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="button-primary">
              {dictionary.hero.primaryCta}
              <ArrowRight size={16} />
            </Link>
            <Link href="/#contact" className="button-secondary">
              {dictionary.hero.secondaryCta}
              <Mail size={16} />
            </Link>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
            {dictionary.hero.status}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {dictionary.hero.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[24px] border border-border/70 bg-background/52 p-4 backdrop-blur"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted/80">
                  {metric.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/78">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
