"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function GameSection() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="site-shell section-space">
      <div className="border-t border-border/70 pt-7">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
          <div>
            <p className="section-kicker">{dictionary.game.eyebrow}</p>
          </div>

          <h2 className="section-title max-w-[15ch]">
            {dictionary.game.title}
          </h2>
        </div>

        <div className="mt-12 grid border-y border-border/70 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="py-7 lg:py-9">
            <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
              {dictionary.game.status}
            </p>
          </div>

          <div className="border-t border-border/70 py-7 lg:border-l lg:border-t-0 lg:px-10 lg:py-9">
            <p className="text-[clamp(1.5rem,3vw,3rem)] font-medium leading-[1.08] tracking-[-0.045em] text-foreground/86">
              {dictionary.game.label}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
