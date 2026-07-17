"use client";

import { useLanguage } from "@/components/Providers";

export function LanguageToggle() {
  const { locale, toggleLocale, dictionary } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={dictionary.misc.languageSwitch}
      className="nav-control type-ui inline-flex items-center gap-2 text-[12px] tracking-[-0.01em]"
    >
      <span className={locale === "en" ? "text-[#f2ff9e]" : ""}>
        EN
      </span>
      <span className="opacity-40">|</span>
      <span className={locale === "zh" ? "text-[#f2ff9e]" : ""}>
        中文
      </span>
    </button>
  );
}
