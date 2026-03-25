"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function AboutSection() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="site-shell mt-28">
      <div className="subtle-panel px-6 py-8 sm:p-10 lg:px-12 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-4">
            <p className="section-kicker">{dictionary.about.eyebrow}</p>
            <h2 className="section-title max-w-xl">{dictionary.about.title}</h2>
          </div>
          <p className="section-copy max-w-2xl">
            {dictionary.about.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
