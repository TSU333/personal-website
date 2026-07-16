"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

const githubUrl = "https://github.com/TSU333";

export function Hero() {
  const { dictionary } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection className="site-shell pt-3 sm:pt-8">
      <div className="hero-stage">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-bloom" aria-hidden="true" />

        <motion.div
          className="hero-orbit"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          <span className="hero-orbit-dot" />
        </motion.div>

        <div className="relative z-10 flex min-h-[calc(100svh-8.5rem)] flex-col justify-between p-6 sm:min-h-[650px] sm:p-10 lg:min-h-[720px] lg:p-14">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <p className="eyebrow-label text-white/54">
              {dictionary.hero.eyebrow}
            </p>
            <div className="type-ui flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
              <span className="signal-dot" />
              {dictionary.hero.status}
            </div>
          </div>

          <div className="grid gap-12 py-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(17rem,0.7fr)] lg:items-end lg:gap-16">
            <div>
              <h1 className="hero-title text-[clamp(5.8rem,19vw,15rem)] font-semibold text-white">
                {dictionary.hero.title}
              </h1>
              <p className="mt-5 max-w-[16ch] text-[clamp(2rem,4.4vw,4.6rem)] font-medium leading-[1.01] tracking-[-0.055em] text-white/94">
                {dictionary.hero.subtitle}
              </p>
            </div>

            <div className="lg:pb-3">
              <p className="max-w-[30rem] text-[1rem] leading-8 text-white/58 sm:text-[1.08rem]">
                {dictionary.hero.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link href="/projects/thinkbreak" className="button-light">
                  {dictionary.hero.primaryCta}
                  <ArrowDownRight size={16} />
                </Link>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost-light"
                >
                  <Github size={15} />
                  {dictionary.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-5 border-t border-white/12 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {dictionary.hero.roles.map((role) => (
                <span
                  key={role}
                  className="type-ui text-[10px] font-semibold uppercase tracking-[0.15em] text-white/46"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 sm:justify-end">
              <span className="type-ui text-[9px] uppercase tracking-[0.14em] text-white/32">
                {dictionary.hero.signalLabel}
              </span>
              <span className="type-ui inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/72">
                {dictionary.hero.signalValue}
                <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
