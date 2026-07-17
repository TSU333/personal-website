"use client";

import Image from "next/image";

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
      <div className="product-stage-header type-ui text-[11px] uppercase tracking-[0.07em] text-[#d7d2c6]/58">
        <span>{label}</span>
        <span>{category}</span>
      </div>

      <div className="product-stage-body">
        <div className="product-identity">
          <Image
            src="/thinkbreak-mark.svg"
            alt=""
            width={58}
            height={58}
            className="grayscale"
          />

          <div>
            <p className="type-ui mb-4 text-[11px] uppercase tracking-[0.07em] text-[#d7d2c6]/44">
              Chrome / Edge
            </p>
            <p lang="en" className="display-type product-wordmark">
              {title}
            </p>
          </div>
        </div>

        <div className="product-system">
          <p className="display-type product-statement">{copy.headline}</p>

          <div className="mt-14">
            {copy.flow.map((step, index) => (
              <div key={step} className="workflow-row">
                <span className="type-ui text-[11px] text-[#d7d2c6]/34">
                  0{index + 1}
                </span>
                <span className="text-[1rem] text-[#d7d2c6]/78">{step}</span>
              </div>
            ))}
          </div>

          {!compact ? (
            <div className="mt-12 border-t border-[#d7d2c6]/16 pt-5">
              <p className="type-ui text-[11px] uppercase tracking-[0.07em] text-[#d7d2c6]/38">
                {copy.platformLabel}
              </p>
              <p className="mt-2 text-[0.94rem] leading-[1.45] text-[#d7d2c6]/68">
                {copy.platforms}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="product-stage-footer type-ui text-[11px] uppercase tracking-[0.055em] text-[#d7d2c6]/44">
        <span>{copy.systemValue}</span>
        <span>{tags.join(" / ")}</span>
      </div>
    </div>
  );
}
