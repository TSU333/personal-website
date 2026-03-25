"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="site-shell">
      <div className="surface-panel overflow-hidden px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.15fr)_20rem] xl:items-end">
          <div className="space-y-8">
            <span className="eyebrow-label">
              {dictionary.hero.eyebrow}
            </span>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[clamp(4rem,10vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-foreground">
                {dictionary.hero.title}
              </h1>
              <p className="max-w-xl text-[1.6rem] leading-[1.35] tracking-[-0.02em] text-foreground/88 sm:text-[1.85rem]">
                {dictionary.hero.subtitle}
              </p>
              <p className="section-copy max-w-2xl">
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

            {dictionary.hero.status ? (
              <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                {dictionary.hero.status}
              </p>
            ) : null}
          </div>

          <div className="grid gap-4 xl:pl-4">
            {dictionary.hero.metrics.map((metric) => (
              <div
                key={metric.label}
                className="metric-panel"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted/80">
                  {metric.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-foreground/78 sm:text-[0.95rem]">
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
