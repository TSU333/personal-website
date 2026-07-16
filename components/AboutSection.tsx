"use client";

import { ArrowUpRight } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function AboutSection() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="site-shell section-space">
      <div className="grid gap-14 border-t border-border/70 pt-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="section-kicker">{dictionary.about.eyebrow}</p>
          <h2 className="section-title mt-6 max-w-[11ch]">
            {dictionary.about.title}
          </h2>
          <p className="section-copy mt-7 max-w-[34rem]">
            {dictionary.about.description}
          </p>
        </div>

        <div className="border-t border-border/70 lg:border-t-0">
          {dictionary.about.roles.map((role) => (
            <div key={role.index} className="discipline-row group">
              <span className="type-ui text-[10px] font-semibold tracking-[0.14em] text-muted/52">
                {role.index}
              </span>
              <div>
                <h3 className="text-[1.55rem] font-medium tracking-[-0.035em] text-foreground sm:text-[2rem]">
                  {role.title}
                </h3>
                <p className="mt-2 max-w-[31rem] text-[0.96rem] leading-7 text-muted sm:text-[1rem]">
                  {role.description}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="mt-1 text-muted/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
