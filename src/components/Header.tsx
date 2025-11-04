"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n-context";
import { languages, languageNames, type Language } from "@/config/i18n";

const LOGO = {
  src: "/images/logos/logohorizontal.webp",
  alt: "STAR Solutions T.I.",
  width: 140,
  height: 34
};

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { lang, dictionary } = useI18n();

  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen || languageOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen, languageOpen]);

  const t = dictionary.common;

  const createHref = (path: string) => {
    if (path === "/") return `/${lang}`;
    if (path.startsWith("/#")) return `/${lang}${path}`;
    if (path.startsWith("#")) return `/${lang}/#${path.slice(1)}`;
    return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
  };

  const handleLanguageChange = (target: Language) => {
    if (target === lang) {
      setLanguageOpen(false);
      return;
    }

    const normalized = pathname.replace(/^\/(es|en)(?=\/|$)/, "");
    const basePath = normalized === "" ? "" : normalized;
    const query = searchParams.toString();
    const nextPath = `/${target}${basePath}` || `/${target}`;
    router.push(`${nextPath}${query ? `?${query}` : ""}`);
    setLanguageOpen(false);
  };

  const navItems = [
    { key: "home", label: t.nav.home, href: "/" },
    { key: "services", label: t.nav.services, href: "/#servicios" },
    { key: "about", label: t.nav.about, href: "/nosotros" }
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link 
            href={createHref("/")} 
            className="flex items-center transition-opacity hover:opacity-75" 
            aria-label="STAR Solutions"
          >
            <img
              src={LOGO.src}
              width={LOGO.width}
              height={LOGO.height}
              alt={LOGO.alt}
              className="h-5 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={createHref(item.href)}
                className="relative px-4 py-2.5 text-[15px] font-medium text-slate-700 transition-colors hover:text-slate-900 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-blue-600 after:transition-all hover:after:w-4/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Language Selector - Desktop */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                aria-label="Cambiar idioma"
                aria-expanded={languageOpen}
              >
                <span className="text-lg">{lang === "es" ? "🇪🇸" : "🇺🇸"}</span>
                <span className="uppercase text-xs tracking-wide">{lang}</span>
                <svg
                  className={`h-3.5 w-3.5 transition-transform ${languageOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {languageOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLanguageOpen(false)}
                  />
                  <div className="absolute right-0 top-full z-20 mt-2 w-40 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                    {languages.map((targetLang) => (
                      <button
                        key={targetLang}
                        onClick={() => handleLanguageChange(targetLang)}
                        className={`flex w-full items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${
                          targetLang === lang
                            ? "bg-blue-50 font-semibold text-blue-600"
                            : "font-medium text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className="text-lg">{targetLang === "es" ? "🇪🇸" : "🇺🇸"}</span>
                        <span>{languageNames[targetLang]}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Contact CTA - Desktop */}
            <Link
              href={createHref("/contactenos")}
              className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md lg:block"
            >
              {t.nav.contact}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 lg:hidden"
              aria-label="Menú"
              aria-expanded={menuOpen}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-screen border-t border-slate-100 py-4" : "max-h-0"
          }`}
        >
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={createHref(item.href)}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="border-t border-slate-100 pt-3 mt-3">
              <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Idioma
              </p>
              <div className="space-y-1">
                {languages.map((targetLang) => (
                  <button
                    key={targetLang}
                    onClick={() => handleLanguageChange(targetLang)}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left text-base transition-colors ${
                      targetLang === lang
                        ? "bg-blue-50 font-semibold text-blue-600"
                        : "font-medium text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-xl">{targetLang === "es" ? "🇪🇸" : "🇺🇸"}</span>
                    <span>{languageNames[targetLang]}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Contact CTA */}
            <Link
              href={createHref("/contactenos")}
              onClick={() => setMenuOpen(false)}
              className="mt-4 block rounded-lg bg-blue-600 px-4 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
