"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

export function Footer() {
  const { lang } = useI18n();
  const currentYear = new Date().getFullYear();
  
  const createHref = (path: string) => {
    if (path === "/") return `/${lang}`;
    if (path.startsWith("/#")) return `/${lang}${path}`;
    return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/images/logos/logohorizontal.webp"
                alt="STAR Solutions T.I."
                width="160"
                height="39"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Soluciones integrales de seguridad informática y tecnología para empresas. Protegemos más de 500 empresas en Colombia.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={createHref("/#servicios")}
                  className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Servicios</span>
                </Link>
              </li>
              <li>
                <Link
                  href={createHref("/auditor-iso-27001-consultores-iso-bogota")}
                  className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Consultoría ISO 27001</span>
                </Link>
              </li>
              <li>
                <Link
                  href={createHref("/antivirus-para-empresas-colombia")}
                  className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Antivirus Empresarial</span>
                </Link>
              </li>
              <li>
                <Link
                  href={createHref("/cableado-estructurado-redes-de-datos-y-fibra-optica-bogota-colombia")}
                  className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Infraestructura TI</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Compañía</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={createHref("/nosotros")}
                  className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Nosotros</span>
                </Link>
              </li>
              <li>
                <Link
                  href={createHref("/contactenos")}
                  className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Contacto</span>
                </Link>
              </li>
              <li>
                <Link
                  href={createHref("/politica-privacidad")}
                  className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Privacidad</span>
                </Link>
              </li>
              <li>
                <Link
                  href={createHref("/terminos")}
                  className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Términos</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400">Bogotá, Colombia</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href="mailto:info@star-ti.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@star-ti.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a
                  href="tel:+57123456789"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +57 1 XXX XXXX
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} STAR Solutions T.I. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="flex items-center text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                En línea 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
