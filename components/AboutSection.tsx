"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function AboutSection() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="mx-auto mt-20 flex w-full max-w-7xl flex-col px-6 sm:px-10 lg:px-12">
      <div className="max-w-4xl space-y-5">
        <p className="section-kicker">{dictionary.about.eyebrow}</p>
        <h2 className="section-title">{dictionary.about.title}</h2>
        <p className="section-copy max-w-3xl">{dictionary.about.description}</p>
      </div>
    </AnimatedSection>
  );
}
