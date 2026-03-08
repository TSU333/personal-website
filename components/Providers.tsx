"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider } from "next-themes";

import {
  Dictionary,
  Locale,
  defaultLocale,
  getDictionary,
  isLocale,
} from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setCurrentLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("tsu-locale");

    if (storedLocale && isLocale(storedLocale)) {
      setCurrentLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("tsu-locale", locale);
  }, [locale]);

  const value: LanguageContextValue = {
    locale,
    dictionary: getDictionary(locale),
    setLocale: (nextLocale) => setCurrentLocale(nextLocale),
    toggleLocale: () =>
      setCurrentLocale((currentLocale) =>
        currentLocale === "en" ? "zh" : "en",
      ),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within Providers.");
  }

  return context;
}
