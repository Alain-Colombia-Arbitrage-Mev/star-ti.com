// Idiomas soportados
export const languages = ["es", "en"] as const;
export type Language = (typeof languages)[number];

// Países soportados
export const countries = ["co", "ve", "us"] as const;
export type Country = (typeof countries)[number];

// Configuración por defecto
export const defaultLanguage: Language = "es";
export const defaultCountry: Country = "co";

// Nombres de idiomas
export const languageNames: Record<Language, string> = {
  es: "Español",
  en: "English"
};

// Nombres y configuración de países
export const countryConfig = {
  co: {
    name: "Colombia",
    currency: "COP",
    locale: "es-CO",
    phone: "+57",
    flag: "🇨🇴",
    defaultLanguage: "es" as Language
  },
  ve: {
    name: "Venezuela",
    currency: "USD",
    locale: "es-VE",
    phone: "+58",
    flag: "🇻🇪",
    defaultLanguage: "es" as Language
  },
  us: {
    name: "United States",
    currency: "USD",
    locale: "en-US",
    phone: "+1",
    flag: "🇺🇸",
    defaultLanguage: "en" as Language
  }
} as const;

// Combinaciones válidas de país-idioma
export const validLocales = [
  { country: "co" as Country, lang: "es" as Language },
  { country: "co" as Country, lang: "en" as Language },
  { country: "ve" as Country, lang: "es" as Language },
  { country: "ve" as Country, lang: "en" as Language },
  { country: "us" as Country, lang: "en" as Language },
  { country: "us" as Country, lang: "es" as Language }
] as const;

export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

export function isValidCountry(country: string): country is Country {
  return countries.includes(country as Country);
}

export function isValidLocale(country: string, lang: string): boolean {
  return validLocales.some(
    (locale) => locale.country === country && locale.lang === lang
  );
}

export function getCountryConfig(country: Country) {
  return countryConfig[country];
}

export function getDefaultLanguageForCountry(country: Country): Language {
  return countryConfig[country].defaultLanguage;
}

