"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/i18n/es";
import type { Language } from "@/config/i18n";

interface I18nContextValue {
  lang: Language;
  dictionary: Dictionary;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({
  lang,
  dictionary,
  children
}: I18nContextValue & { children: React.ReactNode }) {
  return (
    <I18nContext.Provider value={{ lang, dictionary }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}


