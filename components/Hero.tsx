"use client";

import Link from "next/link";
import { ArrowDownRight, Github } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

const githubUrl = "https://github.com/TSU333";

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="hero-section">
      <div className="site-shell hero-inner">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d7d2c6]/20 pb-4">
          <p className="type-ui text-[12px] uppercase tracking-[0.075em] text-[#d7d2c6]/62">
            {dictionary.hero.eyebrow}
          </p>
          <p className="type-ui flex items-center gap-2 text-[12px] text-[#d7d2c6]/62">
            <span className="h-1.5 w-1.5 bg-[#f2ff9e]" />
            {dictionary.hero.status}
          </p>
        </div>

        <h1
          lang="en"
          className="display-type hero-title mt-auto pt-16 text-[#d7d2c6]"
        >
          {dictionary.hero.title}
        </h1>

        <div className="mt-12 grid gap-10 border-t border-[#d7d2c6]/20 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="display-type hero-statement text-[#d7d2c6]">
              {dictionary.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {dictionary.hero.roles.map((role) => (
                <span
                  key={role}
                  className="type-ui text-[11px] uppercase tracking-[0.06em] text-[#d7d2c6]/48"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:pt-1">
            <p className="max-w-[32rem] text-[1rem] leading-[1.55] text-[#d7d2c6]/72 sm:text-[1.125rem]">
              {dictionary.hero.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects/thinkbreak" className="button-primary">
                {dictionary.hero.primaryCta}
                <ArrowDownRight size={16} />
              </Link>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="type-ui inline-flex h-11 items-center justify-center gap-2 rounded-[3px] border border-[#d7d2c6]/30 px-5 text-[14px] font-medium text-[#d7d2c6] hover:border-[#d7d2c6]/70"
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
