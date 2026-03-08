"use client";

import { ArrowRight, Github, Mail } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

const email = "ShawnXiaTsu@outlook.com";
const githubUrl = "https://github.com/TSU333";

export function ContactSection() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection
      id="contact"
      className="mx-auto mt-20 flex w-full max-w-7xl scroll-mt-32 flex-col px-6 sm:px-10 lg:px-12"
    >
      <div className="overflow-hidden rounded-[36px] border border-border/70 bg-card/80 p-6 shadow-panel backdrop-blur-xl sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-5">
            <p className="section-kicker">{dictionary.contact.eyebrow}</p>
            <h2 className="section-title max-w-2xl">{dictionary.contact.title}</h2>
            <p className="section-copy max-w-xl">{dictionary.contact.description}</p>
            <p className="text-sm leading-7 text-muted sm:text-base">
              {dictionary.contact.invite}
            </p>
            <a
              href={`mailto:${email}`}
              className="button-primary"
            >
              {dictionary.contact.emailAction}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${email}`}
              className="rounded-[28px] border border-border/70 bg-background/55 p-5 shadow-soft transition hover:-translate-y-1 hover:border-foreground/10 hover:bg-background"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-border/70 bg-card/80 p-2">
                  <Mail size={16} className="text-foreground/80" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {dictionary.contact.emailLabel}
                </p>
              </div>
              <p className="mt-5 text-lg font-semibold tracking-[-0.03em] text-foreground">
                {email}
              </p>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-[28px] border border-border/70 bg-background/55 p-5 shadow-soft transition hover:-translate-y-1 hover:border-foreground/10 hover:bg-background"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-border/70 bg-card/80 p-2">
                  <Github size={16} className="text-foreground/80" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {dictionary.contact.githubLabel}
                </p>
              </div>
              <p className="mt-5 text-base leading-7 text-muted">
                {dictionary.contact.githubValue}
              </p>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
