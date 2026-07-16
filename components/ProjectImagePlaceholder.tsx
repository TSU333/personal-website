"use client";

import Image from "next/image";
import { Check, Radio, TimerReset } from "lucide-react";

import { useLanguage } from "@/components/Providers";

type ProjectImagePlaceholderProps = {
  title: string;
  category: string;
  label: string;
  tags: string[];
  compact?: boolean;
};

export function ProjectImagePlaceholder({
  title,
  category,
  label,
  tags,
  compact = false,
}: ProjectImagePlaceholderProps) {
  const { dictionary } = useLanguage();
  const copy = dictionary.thinkBreak;

  return (
    <div className={`product-stage ${compact ? "product-stage-compact" : ""}`}>
      <div className="product-grid" aria-hidden="true" />
      <div className="product-glow" aria-hidden="true" />

      <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src="/thinkbreak-mark.svg"
            alt=""
            width={34}
            height={34}
            className="rounded-[10px]"
          />
          <div className="min-w-0">
            <p className="type-ui truncate text-[13px] font-semibold tracking-[-0.01em] text-white">
              {title}
            </p>
            <p className="type-ui mt-0.5 truncate text-[10px] uppercase tracking-[0.14em] text-white/42">
              {label}
            </p>
          </div>
        </div>

        <div className="type-ui flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/58">
          <span className="signal-dot" />
          {copy.live}
        </div>
      </div>

      <div className="relative z-10 grid flex-1 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="extension-panel">
            <div className="flex items-center gap-2 border-b border-black/8 px-4 py-3 dark:border-white/8">
              <span className="h-2 w-2 rounded-full bg-black/16 dark:bg-white/18" />
              <span className="h-2 w-2 rounded-full bg-black/10 dark:bg-white/12" />
              <span className="ml-2 type-ui text-[9px] font-semibold uppercase tracking-[0.15em] text-black/38 dark:text-white/38">
                ThinkBreak / Settings
              </span>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42 dark:text-white/42">
                    {copy.monitor}
                  </p>
                  <p className="mt-2 text-[1.28rem] font-semibold tracking-[-0.035em] text-black dark:text-white">
                    {copy.generating}
                  </p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  <Radio size={15} />
                </span>
              </div>

              <div className="setting-row">
                <div>
                  <p className="setting-label">{copy.threshold}</p>
                  <p className="setting-value">{copy.seconds}</p>
                </div>
                <TimerReset size={16} className="text-black/38 dark:text-white/38" />
              </div>

              <div className="setting-row">
                <div>
                  <p className="setting-label">{copy.destination}</p>
                  <p className="setting-value">{copy.destinationValue}</p>
                </div>
                <Check size={16} className="text-black/38 dark:text-white/38" />
              </div>

              <div className="setting-row">
                <div>
                  <p className="setting-label">{copy.completion}</p>
                  <p className="setting-value">{copy.completionValue}</p>
                </div>
                <span className="relative h-6 w-11 rounded-full bg-black dark:bg-white">
                  <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white dark:bg-black" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 sm:p-7">
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.15em] text-white/42">
                Runtime / Manifest V3
              </p>
              <span className="type-ui text-[10px] uppercase tracking-[0.14em] text-white/42">
                0.1.3
              </span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {copy.flow.map((step, index) => (
                <div key={step} className="flow-step">
                  <span className="flow-index">0{index + 1}</span>
                  <span className="flow-label">{step}</span>
                </div>
              ))}
            </div>

            <div className="signal-route mt-10" aria-hidden="true">
              <span className="signal-route-node signal-route-node-start" />
              <span className="signal-route-pulse" />
              <span className="signal-route-node signal-route-node-end" />
            </div>
          </div>

          <div className="mt-10 space-y-5">
            <div>
              <p className="technical-label">{copy.platformLabel}</p>
              <p className="technical-value">{copy.platforms}</p>
            </div>
            {!compact ? (
              <div className="border-t border-white/10 pt-5">
                <p className="technical-label">{copy.systemLabel}</p>
                <p className="technical-value">{copy.systemValue}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4 sm:px-7">
        <p className="type-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-white/38">
          {category}
        </p>
        <p className="type-ui text-[9px] uppercase tracking-[0.13em] text-white/32">
          {tags.join(" / ")}
        </p>
      </div>
    </div>
  );
}
