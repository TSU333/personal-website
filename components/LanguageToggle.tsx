"use client";

import { useLanguage } from "@/components/Providers";

export function LanguageToggle() {
  const { locale, toggleLocale, dictionary } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={dictionary.misc.languageSwitch}
      className="inline-flex items-center gap-2 rounded-full border border-border/75 bg-card/70 px-3.5 py-2 text-[13px] font-semibold tracking-[0.22em] text-foreground/80 backdrop-blur transition hover:-translate-y-0.5 hover:border-foreground/10 hover:bg-card"
    >
      <span className={locale === "en" ? "text-foreground" : "text-muted"}>
        EN
      </span>
      <span className="text-muted/50">|</span>
      <span className={locale === "zh" ? "text-foreground" : "text-muted"}>
        中文
      </span>
    </button>
  );
}
