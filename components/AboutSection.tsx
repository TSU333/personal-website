"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function AboutSection() {
  const { dictionary, locale } = useLanguage();

  return (
    <AnimatedSection className="site-shell section-space">
      <div className="section-rule">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-4">
            <p className="section-kicker">{dictionary.about.eyebrow}</p>
            <h2
              className={`section-title ${
                locale === "zh"
                  ? "max-w-none sm:whitespace-nowrap"
                  : "max-w-[14ch] sm:max-w-[12ch] lg:max-w-[11ch]"
              }`}
            >
              {dictionary.about.title}
            </h2>
          </div>
          <p className="body-large max-w-[38rem] lg:pt-2">
            {dictionary.about.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
