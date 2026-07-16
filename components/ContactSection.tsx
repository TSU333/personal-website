"use client";

import { ArrowUpRight, Github, Mail } from "lucide-react";

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
      <div className="contact-stage">
        <div className="relative z-10 p-6 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow-label text-white/46">
                {dictionary.contact.eyebrow}
              </p>
              <div className="mt-6 flex items-center gap-2 text-white/48">
                <Mail size={15} />
                <span className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em]">
                  {dictionary.contact.invite}
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-[13ch] text-[clamp(2.7rem,6vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.06em] text-white">
                {dictionary.contact.title}
              </h2>
              <p className="mt-7 max-w-[38rem] text-[1rem] leading-8 text-white/52 sm:text-[1.08rem]">
                {dictionary.contact.description}
              </p>
            </div>
          </div>

          <a
            href={`mailto:${email}`}
            className="contact-email group mt-16 sm:mt-24"
          >
            <span>{email}</span>
            <ArrowUpRight className="contact-email-arrow" />
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/12 pt-5">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="type-ui inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/52 transition hover:text-white"
            >
              <Github size={14} />
              {dictionary.contact.githubValue}
            </a>
            <span className="type-ui text-[9px] uppercase tracking-[0.14em] text-white/28">
              {dictionary.contact.emailAction}
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
