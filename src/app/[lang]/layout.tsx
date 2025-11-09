import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { I18nProvider } from "@/lib/i18n-context";
import { isValidLanguage, languages } from "@/config/i18n";

interface LangLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

// generateStaticParams removed for Cloudflare Pages compatibility
// Cloudflare Pages will handle dynamic routes at runtime
// export const dynamicParams = false;
// export function generateStaticParams() {
//   return languages.map((lang) => ({ lang }));
// }

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return <I18nProvider lang={lang} dictionary={dictionary}>{children}</I18nProvider>;
}


