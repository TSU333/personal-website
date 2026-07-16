"use client";

import { Crosshair, Gamepad2 } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function GameSection() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="site-shell section-space">
      <div className="border-t border-border/70 pt-7">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="section-kicker">{dictionary.game.eyebrow}</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="signal-dot" />
              <span className="type-ui text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                {dictionary.game.status}
              </span>
            </div>
          </div>

          <div>
            <h2 className="section-title max-w-[13ch]">
              {dictionary.game.title}
            </h2>
            <p className="section-copy mt-7 max-w-[39rem]">
              {dictionary.game.description}
            </p>
          </div>
        </div>

        <div className="game-stage mt-12 lg:mt-16">
          <div className="game-grid" aria-hidden="true" />
          <div className="game-scan" aria-hidden="true" />

          <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <Gamepad2 size={16} className="text-white/64" />
              <span className="type-ui text-[10px] font-semibold uppercase tracking-[0.15em] text-white/58">
                DEV_BUILD / PRIVATE
              </span>
            </div>
            <span className="type-ui text-[10px] uppercase tracking-[0.14em] text-white/38">
              TSU_GAME_01
            </span>
          </div>

          <div className="relative z-10 grid min-h-[470px] lg:grid-cols-[1fr_18rem]">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
              <div className="game-radar" aria-hidden="true">
                <span className="game-radar-ring game-radar-ring-one" />
                <span className="game-radar-ring game-radar-ring-two" />
                <span className="game-radar-axis game-radar-axis-x" />
                <span className="game-radar-axis game-radar-axis-y" />
                <span className="game-radar-pulse" />
                <span className="game-radar-core">
                  <Crosshair size={22} />
                </span>
              </div>

              <span className="game-coordinate left-5 top-5">X 048.12</span>
              <span className="game-coordinate bottom-5 right-5">Y 112.07</span>
              <span className="game-coordinate bottom-5 left-5">60 FPS / DEV</span>
            </div>

            <div className="flex flex-col justify-between p-5 sm:p-7">
              <div className="space-y-7">
                <div>
                  <p className="technical-label">{dictionary.game.buildLabel}</p>
                  <p className="mt-2 text-[1.45rem] font-medium tracking-[-0.035em] text-white">
                    {dictionary.game.buildValue}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="technical-label">{dictionary.game.progressLabel}</p>
                  <p className="mt-2 text-[1.45rem] font-medium tracking-[-0.035em] text-white">
                    {dictionary.game.progressValue}
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-3">
                {dictionary.game.disciplines.map((discipline, index) => (
                  <div
                    key={discipline}
                    className="flex items-center justify-between border-t border-white/10 pt-3"
                  >
                    <span className="type-ui text-[10px] font-semibold uppercase tracking-[0.13em] text-white/54">
                      {discipline}
                    </span>
                    <span className="type-ui text-[9px] uppercase tracking-[0.13em] text-white/28">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
