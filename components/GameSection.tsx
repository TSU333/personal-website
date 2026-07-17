"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function GameSection() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="game-band section-space py-20 sm:py-28 lg:py-36">
      <div className="site-shell">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="flex flex-col justify-between gap-8">
            <p className="type-ui text-[12px] uppercase tracking-[0.075em] text-[#030812]/55">
              {dictionary.game.eyebrow}
            </p>
            <p className="type-ui text-[12px] uppercase tracking-[0.075em] text-[#030812]/55">
              {dictionary.game.status}
            </p>
          </div>

          <div>
            <h2 className="display-type game-title text-[#030812]">
              {dictionary.game.title}
            </h2>
            <p className="mt-10 border-t border-[#030812]/25 pt-5 text-[1rem] text-[#030812]/62 sm:text-[1.125rem]">
              {dictionary.game.label}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
