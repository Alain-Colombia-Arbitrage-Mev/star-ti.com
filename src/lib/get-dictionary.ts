import type { Language } from "@/config/i18n";
import type { Dictionary } from "@/i18n/es";

const dictionaries: Record<Language, () => Promise<Dictionary>> = {
  es: () => import("@/i18n/es").then((module) => module.default),
  en: () => import("@/i18n/en").then((module) => module.default)
};

export async function getDictionary(lang: Language): Promise<Dictionary> {
  return dictionaries[lang]();
}


