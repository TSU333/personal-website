"use client";

import { ArrowUpRight, Github } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

const email = "ShawnXiaTsu@outlook.com";
const githubUrl = "https://github.com/TSU333";

export function ContactSection() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection
      id="contact"
      className="site-shell section-space scroll-mt-28"
    >
      <div className="border-t border-border/70 pt-7">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <p className="section-kicker">{dictionary.contact.eyebrow}</p>

          <div>
            <h2 className="section-title max-w-[12ch]">
              {dictionary.contact.title}
            </h2>
            <p className="section-copy mt-7 max-w-[38rem]">
              {dictionary.contact.description}
            </p>
          </div>
        </div>

        <a href={`mailto:${email}`} className="contact-email group mt-16 sm:mt-24">
          <span>{email}</span>
          <ArrowUpRight className="contact-email-arrow" />
        </a>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="type-ui inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition hover:text-foreground"
          >
            <Github size={14} />
            {dictionary.contact.githubValue}
          </a>
          <span className="type-ui text-[9px] uppercase tracking-[0.14em] text-muted/60">
            {dictionary.contact.invite}
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
