"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/Providers";

export function WebDesignSection() {
  const { dictionary } = useLanguage();

  return (
    <AnimatedSection className="site-shell section-space">
      <div className="border-t border-border/30 pt-6">
        <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
          <div>
            <p className="section-kicker">{dictionary.webDesign.eyebrow}</p>
            <p className="type-ui mt-5 text-[12px] uppercase tracking-[0.065em] text-muted/70">
              01 / Maison Tsu
            </p>
          </div>

          <div>
            <h2 className="display-type section-title max-w-[12ch]">
              {dictionary.webDesign.title}
            </h2>
            <p className="section-copy mt-7">
              {dictionary.webDesign.description}
            </p>
          </div>
        </div>

        <Link
          href="/web-design/maison-tsu"
          className="group relative mt-10 block aspect-[16/9] overflow-hidden bg-[#14120f] sm:mt-14"
        >
          <Image
            src="/maison-tsu/exterior.png"
            alt="Maison Tsu restaurant website preview"
            fill
            sizes="(max-width: 1560px) 100vw, 1480px"
            className="object-cover transition duration-500 ease-out group-hover:scale-[1.015]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-black/5" />
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 text-[#efe7d8] sm:p-8">
            <span>
              <span className="type-ui block text-[11px] uppercase tracking-[0.08em] text-[#efe7d8]/62">
                {dictionary.webDesign.sample}
              </span>
              <span className="display-type mt-2 block text-[clamp(2rem,4vw,4.5rem)] leading-none tracking-[-0.04em]">
                Maison Tsu
              </span>
            </span>
            <span className="type-ui inline-flex items-center gap-2 text-[13px] sm:text-[14px]">
              {dictionary.webDesign.cta}
              <ArrowUpRight size={17} />
            </span>
          </span>
        </Link>
      </div>
    </AnimatedSection>
  );
}
