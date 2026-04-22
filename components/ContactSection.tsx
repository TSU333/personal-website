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
      className="site-shell section-space scroll-mt-28"
    >
      <div className="section-rule">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div className="space-y-6">
            <p className="section-kicker">{dictionary.contact.eyebrow}</p>
            <h2 className="section-title max-w-[15ch] sm:max-w-[13ch] xl:max-w-[12ch]">
              {dictionary.contact.title}
            </h2>
            <p className="section-copy max-w-[36rem]">{dictionary.contact.description}</p>
            <p className="body-large max-w-[36rem]">
              {dictionary.contact.invite}
            </p>
            <a href={`mailto:${email}`} className="button-primary">
              {dictionary.contact.emailAction}
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="space-y-8 xl:pt-16">
            <a
              href={`mailto:${email}`}
              className="block border-t border-border/70 pt-5 transition hover:opacity-78"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="type-ui text-[12px] font-semibold uppercase tracking-[0.14em] text-muted/82">
                  {dictionary.contact.emailLabel}
                </p>
                <Mail size={15} className="text-foreground/70" />
              </div>
              <p className="mt-5 text-[1.4rem] leading-[1.28] tracking-[-0.03em] text-foreground sm:text-[1.7rem]">
                {email}
              </p>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="block border-t border-border/70 pt-5 transition hover:opacity-78"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="type-ui text-[12px] font-semibold uppercase tracking-[0.14em] text-muted/82">
                  {dictionary.contact.githubLabel}
                </p>
                <Github size={15} className="text-foreground/70" />
              </div>
              <p className="mt-5 text-[1.18rem] leading-[1.5] text-foreground/82 sm:text-[1.28rem]">
                {dictionary.contact.githubValue}
              </p>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
