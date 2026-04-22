"use client";

import { useLanguage } from "@/components/Providers";

export function LanguageToggle() {
  const { locale, toggleLocale, dictionary } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={dictionary.misc.languageSwitch}
      className="type-ui inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.1em] text-foreground/78 transition hover:text-foreground"
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
