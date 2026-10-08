"use client";

import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { createContext, useContext, type ReactNode } from "react";

type AppLocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
};

const AppLocaleContext = createContext<AppLocaleContextValue | null>(null);

export function useAppLocale() {
  const context = useContext(AppLocaleContext);
  if (!context) {
    throw new Error("useAppLocale must be used within AppLocaleProvider");
  }
  return context;
}

type AppLocaleProviderProps = {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
};

export default function AppLocaleProvider({
  locale,
  dictionary,
  children,
}: AppLocaleProviderProps) {
  return (
    <AppLocaleContext.Provider value={{ locale, dictionary }}>
      {children}
    </AppLocaleContext.Provider>
  );
}
