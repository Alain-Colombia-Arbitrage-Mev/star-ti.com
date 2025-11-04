import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { metadata as seoMetadata, siteConfig } from "@/config/seo";
import { defaultLanguage } from "@/config/i18n";
import esDictionary from "@/i18n/es";
import { I18nProvider } from "@/lib/i18n-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      addressCountry: "CO"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-1-XXX-XXXX",
      contactType: "customer service",
      areaServed: "CO",
      availableLanguage: ["es", "en"]
    },
    sameAs: [
      "https://www.linkedin.com/company/star-solutions-ti",
      "https://twitter.com/starsoluti" 
    ],
    founder: {
      "@type": "Person",
      name: "STAR Solutions T.I."
    },
    foundingDate: "2009",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 15
    },
    slogan: "Seguridad y Tecnología de Clase Mundial",
    areaServed: {
      "@type": "Country",
      name: "Colombia"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/logo.png`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: "+57-1-XXX-XXXX",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bogotá",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      postalCode: "110111",
      addressCountry: "CO"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.7110,
      longitude: -74.0721
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00"
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/star-solutions-ti",
      "https://twitter.com/starsolutions"
    ]
  };

  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href={siteConfig.url} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider lang={defaultLanguage} dictionary={esDictionary}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
