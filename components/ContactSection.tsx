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
      className="contact-band scroll-mt-28 py-20 sm:py-28 lg:py-36"
    >
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <p className="type-ui text-[12px] uppercase tracking-[0.075em] text-[#d7d2c6]/48">
            {dictionary.contact.eyebrow}
          </p>

          <div>
            <h2 className="display-type max-w-[12ch] text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-[-0.045em] text-[#d7d2c6]">
              {dictionary.contact.title}
            </h2>
            <p className="mt-7 max-w-[38rem] text-[1rem] leading-[1.55] text-[#d7d2c6]/62 sm:text-[1.125rem]">
              {dictionary.contact.description}
            </p>
          </div>
        </div>

        <a href={`mailto:${email}`} className="contact-email group mt-16 sm:mt-24">
          <span>{email}</span>
          <ArrowUpRight className="contact-email-arrow" />
        </a>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-b border-[#d7d2c6]/20 pb-7">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="type-ui inline-flex items-center gap-2 text-[13px] text-[#d7d2c6]/62 transition hover:text-[#f2ff9e]"
          >
            <Github size={14} />
            {dictionary.contact.githubValue}
          </a>
          <span className="type-ui text-[12px] text-[#d7d2c6]/42">
            {dictionary.contact.invite}
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
