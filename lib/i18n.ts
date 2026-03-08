import { en } from "@/locales/en";
import { zh } from "@/locales/zh";

export type Locale = "en" | "zh";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export const defaultLocale: Locale = "en";

type DeepWiden<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepWiden<U>[]
    : T extends object
      ? { [K in keyof T]: DeepWiden<T[K]> }
      : T;

export type Dictionary = DeepWiden<typeof en>;

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  zh,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "zh";
}

export function pickLocalizedText(value: LocalizedText, locale: Locale) {
  return value[locale];
}

export function pickLocalizedList(value: LocalizedList, locale: Locale) {
  return value[locale];
}
