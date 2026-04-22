"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="site-shell pt-6 sm:pt-10">
      <div className="grid gap-16 xl:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] xl:items-end">
        <div className="space-y-10">
          <span className="eyebrow-label">
            {dictionary.hero.eyebrow}
          </span>

          <div className="space-y-6">
            <h1 className="hero-title max-w-4xl text-[clamp(4.4rem,11vw,8.8rem)] font-semibold text-foreground">
              {dictionary.hero.title}
            </h1>
            <p className="max-w-[12ch] text-[clamp(1.8rem,2.8vw,2.35rem)] leading-[1.18] tracking-[-0.045em] text-foreground/92">
              {dictionary.hero.subtitle}
            </p>
            <p className="body-large max-w-[34rem]">
              {dictionary.hero.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="button-primary">
              {dictionary.hero.primaryCta}
              <ArrowRight size={15} />
            </Link>
            <Link href="/#contact" className="button-secondary">
              {dictionary.hero.secondaryCta}
              <Mail size={15} />
            </Link>
          </div>

          {dictionary.hero.status ? (
            <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
              {dictionary.hero.status}
            </p>
          ) : null}
        </div>

        <div className="space-y-10 xl:pb-3">
          {dictionary.hero.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={index === 0 ? "section-rule" : "section-rule"}
            >
              <p className="type-ui text-[12px] font-semibold uppercase tracking-[0.14em] text-muted/82">
                {metric.label}
              </p>
              <p className="mt-4 max-w-[16rem] text-[1.35rem] leading-[1.32] tracking-[-0.03em] text-foreground/84 sm:text-[1.55rem]">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
