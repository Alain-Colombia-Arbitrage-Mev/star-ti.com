export const siteConfig = {
  name: "STAR Solutions T.I.",
  description: "Empresa líder en ciberseguridad, consultoría ISO 27001 y soluciones tecnológicas empresariales en Bogotá, Colombia. +15 años protegiendo empresas con antivirus corporativo, infraestructura IT y software especializado.",
  url: "https://www.star-ti.com",
  ogImage: "https://www.star-ti.com/og-image.jpg",
  locale: "es_CO",
  keywords: [
    // Servicios principales
    "ciberseguridad empresarial Bogotá",
    "consultoría ISO 27001 Colombia",
    "auditoría seguridad informática",
    "antivirus empresarial Colombia",
    "Bitdefender Colombia distribuidor",
    "Kaspersky empresas Bogotá",
    // Infraestructura
    "cableado estructurado certificado Bogotá",
    "fibra óptica empresas Colombia",
    "redes de datos Cat6 Cat7",
    "infraestructura IT empresarial",
    // Software y soluciones
    "TeamViewer licenciamiento Colombia",
    "MDM SOTI Colombia",
    "gestión dispositivos móviles",
    "AnyDesk empresas",
    "acceso remoto seguro",
    // Seguridad avanzada
    "ethical hacking Colombia",
    "pruebas penetración Bogotá",
    "DLP prevención pérdida datos",
    "inteligencia amenazas cibernéticas",
    "Hornetsecurity email security",
    // Ubicación y sector
    "empresa tecnología Bogotá",
    "soluciones IT Colombia",
    "seguridad informática empresas",
    "consultoría tecnológica Bogotá",
    "proveedor seguridad IT"
  ]
};

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "STAR Solutions T.I. | Soluciones de Seguridad Informática",
    template: "%s | STAR Solutions T.I."
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "STAR Solutions T.I." }],
  creator: "STAR Solutions T.I.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "STAR Solutions T.I. | Soluciones de Seguridad Informática",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR Solutions T.I.",
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1
    }
  }
};
