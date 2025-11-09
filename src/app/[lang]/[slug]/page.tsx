import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button, Container, Card, Badge } from "@/components/ui";
import { services } from "@/data/services";
import type { Service } from "@/data/services";
import { ConversionFlow } from "@/components/sections/ConversionFlow";
import { notFound } from "next/navigation";

export const runtime = 'edge';

const SUPPORTED_LANGUAGES = ["es", "en"] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

interface ServicePageParams {
  lang: SupportedLanguage;
  slug: string;
}

interface ServicePageProps {
  params: Promise<ServicePageParams>;
}

type ServiceExtraContent = {
  keywords?: string[];
  differentiators?: Array<{ title: string; description: string }>;
  caseStudy?: {
    headline: string;
    summary: string;
    metrics: Array<{ label: string; value: string }>;
    body: string[];
  };
  structuredData?: (service: Service) => Record<string, unknown>;
};

const serviceExtras: Record<string, ServiceExtraContent> = {
  "antivirus-para-empresas-colombia": {
    keywords: [
      "antivirus para empresas Colombia",
      "antivirus corporativo Bogotá",
      "endpoint security Colombia",
      "antivirus empresarial multi-marca",
      "EDR para empresas Colombia",
      "protección endpoints corporativa",
      "licencias antivirus empresarial"
    ],
    differentiators: [
      {
        title: "Plataforma multi-marca para cada caso de uso",
        description:
          "Recomendamos la tecnología adecuada (Bitdefender, Kaspersky, ESET, Trend Micro) según tu entorno, tamaño y requisitos regulatorios. Evita el vendor lock-in y maximiza el ROI."
      },
      {
        title: "Despliegue sin interrupciones y adopción rápida",
        description:
          "Automatizamos instalación vía GPO/SCCM, integramos con tu directorio y migramos políticas existentes. Políticas listas desde el día uno sin afectar la operación."
      },
      {
        title: "Operación con monitoreo y tableros ejecutivos",
        description:
          "Activamos dashboards para TI y dirección con métricas claves (detecciones, riesgos, estado de parches) y alertas automáticas para respuesta oportuna."
      },
      {
        title: "Cobertura integral con EDR y DLP básico",
        description:
          "Más que antivirus: EDR integrado, control de dispositivos, firewall, IPS, sandbox y DLP básico para reducir riesgos de fuga de información."
      }
    ]
  },
  "antivirus-bitdefender-colombia": {
    keywords: [
      "Bitdefender GravityZone Colombia",
      "Distribuidor Bitdefender Bogotá",
      "Bitdefender GravityZone Elite price Colombia",
      "Implementación Bitdefender empresas Colombia",
      "Bitdefender MDR Colombia",
      "Bitdefender EDR Bogotá",
      "Licencias Bitdefender corporativas Colombia"
    ],
    differentiators: [
      {
        title: "Protección líder avalada por analistas internacionales",
        description: "Bitdefender GravityZone ha sido reconocido 10 años consecutivos por AV-Test y Forrester Wave como el antivirus empresarial con mayor tasa de detección (99.9%) y menor impacto en rendimiento, ideal para organizaciones colombianas que requieren continuidad operativa 24/7."
      },
      {
        title: "Arquitectura Zero Trust con EDR y Análisis de Riesgos",
        description: "Integra Endpoint Detection and Response, sandboxing avanzado y análisis continuo de vulnerabilidades para bloquear ransomware, exploits y ataques sin archivos antes de que comprometan tus servidores y estaciones de trabajo."
      },
      {
        title: "Implementación local certificada en menos de 72 horas",
        description: "Nuestro equipo en Bogotá despliega agentes automáticamente vía GPO/SCCM, migra políticas existentes y entrega capacitación operativa para administradores, garantizando adopción rápida sin detener operaciones."
      },
      {
        title: "Soporte premium con monitoreo y respuesta opcional",
        description: "Incluimos soporte 24/7 en español y planes opcionales de MDR gestionado que integran Bitdefender con tu SOC o mesa de servicio para una cobertura operativa completa."
      }
    ],
    caseStudy: {
      headline: "Caso de éxito: Fintech bogotana elimina incidentes de malware",
      summary: "Implementamos Bitdefender GravityZone Elite en una fintech regulada por la Superintendencia Financiera, protegiendo 420 endpoints distribuidos en Bogotá y Medellín.",
      metrics: [
        { label: "Endpoints protegidos", value: "420" },
        { label: "Reducción de incidentes", value: "-97%" },
        { label: "Tiempo de despliegue", value: "72 horas" }
      ],
      body: [
        "La organización enfrentaba incidentes recurrentes de ransomware y malware bancario dirigidos a sus equipos comerciales. Tras un diagnóstico inicial, migramos desde una solución legacy a Bitdefender GravityZone Elite con políticas segmentadas para áreas de riesgo.",
        "El despliegue se realizó en tres fases: piloto en 50 endpoints críticos, automatización vía GPO y activación de módulos de EDR y sandbox. Configuramos dashboards ejecutivos personalizados y alertas automáticas integradas con su plataforma de tickets.",
        "A los 45 días, el equipo de seguridad reportó la eliminación total de infecciones de malware, cero falsos positivos críticos y visibilidad completa del estado de seguridad. La fintech ahora cuenta con informes mensuales para auditores y respaldo de nuestro equipo 24/7."
      ]
    },
    structuredData: (service) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Implementación y licenciamiento Bitdefender GravityZone Elite",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "STAR Soluciones TI",
        url: "https://www.star-ti.com",
        areaServed: {
          "@type": "Country",
          name: "Colombia"
        }
      },
      brand: {
        "@type": "Brand",
        name: "Bitdefender"
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Colombia"
      },
      audience: {
        "@type": "BusinessAudience",
        name: "Empresas medianas y grandes"
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "COP",
        price: "1200000",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "COP",
          minPrice: "1200000",
          maxPrice: "8500000"
        },
        availability: "https://schema.org/InStock",
        url: "https://www.star-ti.com/antivirus-bitdefender-colombia"
      },
      category: "Antivirus empresarial",
      keywords: [
        "Bitdefender GravityZone",
        "Antivirus empresarial Colombia",
        "Distribuidor Bitdefender"
      ]
    })
  }
};

type ConversionFlowCopy = {
  eyebrow: string;
  badge: string;
  title: string | ((service: Service) => string);
  description: string | ((service: Service) => string);
  steps: Array<{ title: string; description: string; icon?: string }>;
  highlights: string[];
  theme?: "light" | "dark" | "gradient";
  secondaryCta?: { label: string; href: string; variant?: "outline" | "ghost" | "secondary" | "danger" | "primary" };
};

const categoryConversionFlow: Record<Service["category"], ConversionFlowCopy> = {
  antivirus: {
    eyebrow: "Implementación guiada",
    badge: "despliegue sin interrupciones",
    title: (service) => `Despliega ${service.name} con acompañamiento certificado`,
    description:
      "Garantizamos que la transición a Bitdefender, Kaspersky u otra suite antivirus sea transparente. Diagramamos la migración, automatizamos instalación y dejamos políticas operativas desde el día uno.",
    steps: [
      {
        title: "Assessment de endpoints",
        description: "Inventariamos estaciones de trabajo, servidores y dispositivos móviles, identificando software heredado y niveles de riesgo por área.",
        icon: "🧾"
      },
      {
        title: "Piloto controlado",
        description: "Implementamos la solución en un grupo crítico, afinamos políticas (EDR, control de dispositivos, sandbox) y definimos métricas de éxito.",
        icon: "🧪"
      },
      {
        title: "Despliegue masivo + monitoreo",
        description: "Automatizamos instalación vía GPO/SCCM, activamos dashboards y capacitamos a tu equipo para gestionar alertas y reportes ejecutivos.",
        icon: "🚀"
      }
    ],
    highlights: [
      "Instalación automatizada con mínima intervención del usuario",
      "Roadmap de políticas por área y nivel de riesgo",
      "Soporte 24/7 con escalamiento directo a fabricantes"
    ],
    theme: "gradient",
    secondaryCta: { label: "Solicitar demo técnica", href: "/contactenos" }
  },
  consultoria: {
    eyebrow: "Ruta de certificación",
    badge: "iso 27001 + cumplimiento",
    title: "Certifícate con una hoja de ruta clara y gobernada",
    description:
      "Convertimos la normativa en acciones concretas. Desde el diagnóstico GAP hasta la auditoría de certificación, te guiamos con entregables listos para auditores y directivos.",
    steps: [
      {
        title: "GAP análisis ejecutivo",
        description: "Analizamos políticas, procesos y controles para determinar grado de cumplimiento y priorizar riesgos críticos.",
        icon: "📋"
      },
      {
        title: "Implementación de controles",
        description: "Diseñamos e implementamos controles técnicos y administrativos alineados al Anexo A de ISO 27001:2022.",
        icon: "🛠️"
      },
      {
        title: "Auditoría y certificación",
        description: "Ejecutamos auditoría interna, corregimos hallazgos y acompañamos la auditoría externa hasta lograr la certificación.",
        icon: "🏁"
      }
    ],
    highlights: [
      "Documentación SGSI entregada lista para auditoría",
      "Formación y sensibilización a equipos clave",
      "Servicio de CISO virtual post-certificación"
    ],
    theme: "light",
    secondaryCta: { label: "Solicitar roadmap ISO 27001", href: "/contactenos" }
  },
  security: {
    eyebrow: "Operación continua",
    badge: "soc + respuesta",
    title: (service) => `Activa ${service.name} con visibilidad y reacción 24/7`,
    description:
      "Nuestros especialistas integran tu infraestructura con herramientas avanzadas de threat hunting, automatización y respuesta, generando métricas claras para dirección y compliance.",
    steps: [
      {
        title: "Evaluación avanzada",
        description: "Realizamos pentesting, revisamos logs y definimos hipótesis de ataque para mapear brechas reales.",
        icon: "🕵️"
      },
      {
        title: "Arquitectura por capas",
        description: "Configuramos EDR, SIEM, DLP u otras soluciones, conectadas a flujos de automatización y playbooks."
      },
      {
        title: "SOC co-gestionado",
        description: "Establecemos monitoreo continuo, threat intelligence y reportes ejecutivos con KPIs (MTTD/MTTR).",
        icon: "🛰️"
      }
    ],
    highlights: [
      "Playbooks de respuesta validados con tu equipo",
      "Integración con herramientas existentes (SIEM, ITSM)",
      "Mesa de servicio y CSIRT disponibles 24/7"
    ],
    theme: "gradient",
    secondaryCta: { label: "Programar workshop técnico", href: "/contactenos" }
  },
  software: {
    eyebrow: "Adopción controlada",
    badge: "licenciamiento + soporte",
    title: (service) => `Despliega ${service.name} con onboarding completo`,
    description:
      "Acompañamos la implementación de tu software empresarial asegurando integración con tu stack actual, políticas consistentes y adopción del usuario final.",
    steps: [
      {
        title: "Discovery técnico",
        description: "Inventariamos aplicaciones, directorios y flujos actuales para planificar integraciones y permisos.",
        icon: "🧩"
      },
      {
        title: "Configuración y piloto",
        description: "Parametrizamos la plataforma, migramos datos necesarios y ejecutamos pilotos con grupos representativos.",
        icon: "🧪"
      },
      {
        title: "Adopción y soporte",
        description: "Capacitamos administradores y usuarios finales, documentamos procedimientos y habilitamos soporte continuo.",
        icon: "🎓"
      }
    ],
    highlights: [
      "Soporte local con escalamiento al fabricante",
      "Planes de licenciamiento flexibles y financiados",
      "KPIs de adopción y uso desde la primera semana"
    ],
    theme: "light",
    secondaryCta: { label: "Solicitar demo guiada", href: "/contactenos" }
  },
  infraestructura: {
    eyebrow: "Proyecto llave en mano",
    badge: "diseño + certificación",
    title: (service) => `Ejecución de ${service.name} con control total de calidad`,
    description:
      "Desde el diseño hasta la entrega documentada, aseguramos que tu infraestructura soporte operaciones críticas con garantías extendidas y certificaciones internacionales.",
    steps: [
      {
        title: "Diseño integral",
        description: "Levantamos planos, definimos materiales y cronograma sin afectar tus operaciones actuales.",
        icon: "📐"
      },
      {
        title: "Instalación certificada",
        description: "Nuestro equipo técnico ejecuta por fases, cumpliendo estándares TIA/EIA e integrando con sistemas existentes.",
        icon: "🛠️"
      },
      {
        title: "Entrega y soporte",
        description: "Certificamos enlaces con Fluke, entregamos documentación as-built y ofrecemos mantenimiento preventivo.",
        icon: "📦"
      }
    ],
    highlights: [
      "Garantías de hasta 25 años con fabricantes",
      "Plan de mantenimiento y soporte post-entrega",
      "Coordinación con otras obras y proveedores"
    ],
    theme: "light",
    secondaryCta: { label: "Agendar visita técnica", href: "/contactenos" }
  }
};

// generateStaticParams removed for Cloudflare Pages compatibility with edge runtime
// Cloudflare Pages will handle dynamic routes at runtime
// export async function generateStaticParams() {
//   return SUPPORTED_LANGUAGES.flatMap((lang) =>
//     services.map((service) => ({
//       lang,
//       slug: service.slug
//     }))
//   );
// }

export async function generateMetadata(
  { params }: ServicePageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  // Extraer keywords principales de la descripción y características
  const extraKeywords = serviceExtras[service.slug]?.keywords ?? [];
  const keywords = [
    service.name,
    service.name + " Colombia",
    service.name + " Bogotá",
    service.name + " empresas",
    service.name + " empresarial",
    "distribuidor " + service.name,
    "licenciamiento " + service.name,
    "implementación " + service.name,
    "soporte " + service.name + " Colombia",
    service.category + " empresarial Colombia",
    ...service.features.slice(0, 8),
    ...extraKeywords
  ];

  const canonicalPath = lang === "es" ? service.slug : `${lang}/${service.slug}`;

  return {
    title: service.title,
    description: service.description,
    keywords: keywords,
    openGraph: {
      title: service.title,
      description: service.description,
      type: "article",
      locale: lang === "es" ? "es_CO" : "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description
    },
    alternates: {
      canonical: `https://www.star-ti.com/${canonicalPath}`
    }
  };
}

// Contenido extenso por categoría para SEO
type CategoryContent = {
  intro: string;
  why: string;
  implementation: string;
  useCases: string[];
  roadmap: string[];
  checklist: string[];
};

const categoryContent: Record<string, CategoryContent> = {
  antivirus: {
    intro: "En la era digital actual, las amenazas cibernéticas evolucionan constantemente. Un antivirus empresarial robusto no es solo una opción, es una necesidad crítica para proteger los activos digitales de tu organización. Nuestra solución antivirus empresarial ofrece protección multicapa contra malware, ransomware, phishing, spyware y todo tipo de amenazas avanzadas que ponen en riesgo la continuidad de tu negocio.",
    why: "Las estadísticas son alarmantes: el 60% de las pequeñas y medianas empresas que sufren un ataque cibernético cierran en los siguientes 6 meses. El costo promedio de una brecha de seguridad supera los $200,000 USD sin contar el daño reputacional. Invertir en protección antivirus profesional no es un gasto, es un seguro para la supervivencia de tu empresa. Nuestras soluciones han protegido exitosamente a más de 500 empresas colombianas, evitando millones en pérdidas potenciales.",
    implementation: "La implementación de nuestro servicio antivirus es rápida y sin interrupciones. Nuestro equipo de expertos certificados realiza un análisis inicial de tu infraestructura, diseña una estrategia de protección personalizada y despliega la solución en todos tus endpoints. El proceso incluye configuración de políticas centralizadas, capacitación de usuarios, y establecimiento de protocolos de respuesta a incidentes. Todo esto respaldado por soporte técnico 24/7.",
    useCases: [
      "Empresas con modelos de trabajo híbrido que desean proteger equipos tanto en oficina como en casa",
      "Organizaciones con datos sensibles (financiero, salud, legal) que requieren cumplimiento regulatorio",
      "Equipos de TI que necesitan gestión centralizada y reportes para auditorías",
      "Empresas con alta rotación de dispositivos y necesidad de aprovisionamiento rápido"
    ],
    roadmap: [
      "Diagnóstico inicial: inventario de endpoints, políticas existentes y riesgos actuales",
      "Diseño de arquitectura de protección multicapa y definición de políticas",
      "Despliegue automatizado en estaciones de trabajo, servidores y dispositivos móviles",
      "Entrenamiento de administradores y usuarios finales, activación de monitoreo 24/7",
      "Optimización continua: reportes mensuales y ajustes de políticas según incidentes"
    ],
    checklist: [
      "¿Cuentas con visibilidad de todos tus endpoints en tiempo real?",
      "¿Tienes políticas diferenciadas por área (finanzas, operaciones, directivos)?",
      "¿Monitoreas métricas de detección y tiempo de respuesta a incidentes?",
      "¿Tu antivirus se integra con SIEM, SOC o herramientas de ticketing existentes?"
    ]
  },
  consultoria: {
    intro: "La consultoría en seguridad de la información es fundamental para establecer un marco robusto de protección de datos y cumplimiento normativo. Nuestros consultores certificados en ISO 27001 tienen más de 15 años de experiencia ayudando a empresas colombianas a implementar Sistemas de Gestión de Seguridad de la Información (SGSI) efectivos y certificables.",
    why: "La certificación ISO 27001 no solo demuestra compromiso con la seguridad, sino que abre puertas a nuevos mercados, mejora la confianza de clientes y socios, y reduce significativamente los riesgos de incidentes de seguridad. Las empresas certificadas reportan una reducción del 80% en brechas de seguridad y un aumento del 35% en oportunidades comerciales. Además, el cumplimiento normativo evita multas millonarias por incumplimiento de leyes de protección de datos.",
    implementation: "Nuestro proceso de consultoría es estructurado y comprobado. Comenzamos con un diagnóstico GAP análisis para identificar brechas de seguridad actuales. Luego diseñamos e implementamos controles según ISO 27001:2022, desarrollamos políticas y procedimientos, capacitamos a tu equipo, y te preparamos para la auditoría de certificación. El proceso típico toma 6-12 meses dependiendo del tamaño de la organización, con hitos claros y entregables documentados.",
    useCases: [
      "Empresas que requieren certificación ISO 27001 para participar en licitaciones o alianzas",
      "Organizaciones con auditorías regulatorias (Superfinanciera, Supersalud, SIC)",
      "Compañías que desean estandarizar políticas y procesos de seguridad a nivel regional",
      "Startups y scale-ups que buscan fortalecer gobierno corporativo y atraer inversión"
    ],
    roadmap: [
      "Assessment inicial y definición de alcance del SGSI",
      "Gestión de riesgos, definición de controles y elaboración de políticas",
      "Implementación de controles técnicos y administrativos prioritarios",
      "Capacitación, auditoría interna y ajustes correctivos",
      "Acompañamiento en auditoría externa y plan de mejora continua"
    ],
    checklist: [
      "¿Tienes inventario y clasificación de activos de información?",
      "¿Existe un plan de continuidad de negocio probado y documentado?",
      "¿Tus proveedores estratégicos cumplen con estándares de seguridad?",
      "¿Cuentas con métricas y tableros para medir la madurez del SGSI?"
    ]
  },
  security: {
    intro: "La seguridad cibernética avanzada va más allá de la protección básica con antivirus. Incluye servicios especializados como ethical hacking, prevención de pérdida de datos (DLP), inteligencia de amenazas y monitoreo continuo. Estas soluciones son esenciales para organizaciones que manejan información sensible o están sujetas a regulaciones estrictas.",
    why: "Las amenazas sofisticadas requieren defensas sofisticadas. Los ataques dirigidos (APT), el ransomware avanzado y las técnicas de ingeniería social moderna no son detectados por soluciones básicas. Nuestros servicios de seguridad avanzada utilizan inteligencia artificial, análisis comportamental y threat intelligence para identificar y neutralizar amenazas antes de que causen daño. Empresas que implementan estas soluciones reducen el tiempo medio de detección (MTTD) de 287 días a menos de 24 horas.",
    implementation: "La implementación de servicios de seguridad avanzada comienza con una evaluación de riesgos integral. Realizamos pruebas de penetración para identificar vulnerabilidades, implementamos sistemas DLP para prevenir fugas de información, configuramos SIEM para monitoreo continuo, y establecemos un SOC (Centro de Operaciones de Seguridad) virtualizado. Nuestro equipo te acompaña en cada fase con metodologías probadas y mejores prácticas internacionales.",
    useCases: [
      "Empresas con datos críticos (financiero, salud, retail) que requieren monitoreo 24/7",
      "Organizaciones que han sufrido incidentes y buscan reducir su tiempo de detección",
      "Equipos de TI que necesitan visibilidad centralizada y automatización de respuesta",
      "Programas de cumplimiento (PCI-DSS, HIPAA, GDPR) que exigen controles avanzados"
    ],
    roadmap: [
      "Evaluación de riesgos y pruebas de penetración para identificar brechas",
      "Diseño de arquitectura de seguridad por capas (EDR, DLP, SIEM, MFA)",
      "Implementación de SOC y automatización de respuesta",
      "Integración con procesos de ITSM y capacitación de analistas",
      "Optimización continua mediante threat hunting y simulaciones de ataque"
    ],
    checklist: [
      "¿Tienes visibilidad centralizada de logs y eventos críticos?",
      "¿Cuentas con playbooks de respuesta documentados y probados?",
      "¿Realizas pruebas de penetración y ejercicios de Red Team regularmente?",
      "¿Dispones de métricas (MTTD/MTTR) para evaluar la efectividad de tu SOC?"
    ]
  },
  software: {
    intro: "Las soluciones de software empresarial especializadas optimizan la productividad y seguridad de tu organización. Desde gestión de dispositivos móviles (MDM) hasta herramientas de acceso remoto seguro, nuestro portafolio incluye las mejores tecnologías del mercado con soporte local y precios competitivos.",
    why: "La transformación digital requiere herramientas adecuadas. El trabajo remoto, la movilidad corporativa y la gestión de flotas de dispositivos son desafíos que requieren soluciones especializadas. Empresas que implementan MDM profesional reportan una reducción del 60% en costos de soporte técnico y un aumento del 40% en productividad de empleados móviles. El acceso remoto seguro permite continuidad de negocio sin comprometer la seguridad.",
    implementation: "Implementamos soluciones de software con un enfoque de integración total. Analizamos tu ecosistema tecnológico actual, diseñamos la arquitectura de integración, desplegamos las licencias, configuramos políticas corporativas y capacitamos a administradores y usuarios finales. Incluimos migración de datos, integración con Active Directory/Azure AD, y establecimiento de flujos de trabajo automatizados.",
    useCases: [
      "Empresas con fuerza laboral remota que necesitan acceso seguro y controlado",
      "Organizaciones que administran flotas de dispositivos móviles o IoT",
      "Equipos de soporte que requieren control remoto y automatización de tareas",
      "Operaciones que demandan cumplimiento de políticas BYOD y auditorías"
    ],
    roadmap: [
      "Assessment de aplicaciones y dispositivos críticos",
      "Definición de políticas de seguridad y gobernanza",
      "Integración con directorios y plataformas existentes",
      "Despliegue en fases con pilotos controlados",
      "Optimización, automatización y capacitación continua"
    ],
    checklist: [
      "¿Tus dispositivos móviles y endpoints están gestionados centralmente?",
      "¿Tienes políticas claras para BYOD, acceso remoto y aplicaciones SaaS?",
      "¿Cuentas con reportes en tiempo real sobre compliance y uso de licencias?",
      "¿Los accesos remotos están protegidos con MFA y registros de auditoría?"
    ]
  },
  infraestructura: {
    intro: "La infraestructura IT es la columna vertebral de cualquier organización moderna. Un cableado estructurado certificado, redes de datos de alto rendimiento y conectividad de fibra óptica son inversiones que determinan la eficiencia operacional durante décadas. Diseñamos e implementamos infraestructura IT de clase mundial con certificaciones que garantizan rendimiento y confiabilidad.",
    why: "Una infraestructura IT deficiente es la causa #1 de pérdidas de productividad en empresas. Conexiones lentas, cables mal organizados, fallas frecuentes y limitaciones de escalabilidad cuestan millones al año en tiempo perdido y oportunidades desperdiciadas. Nuestra experiencia en más de 200 proyectos de infraestructura nos permite diseñar soluciones que crecen con tu negocio, soportan tecnologías emergentes y garantizan 99.9% de disponibilidad.",
    implementation: "Nuestro proceso de implementación de infraestructura comienza con un levantamiento de sitio detallado. Diseñamos la topología de red óptima, seleccionamos materiales de la más alta calidad (Cat6A, Cat7, fibra óptica monomodo/multimodo), ejecutamos la instalación con técnicos certificados, certificamos cada enlace según estándares TIA/EIA, y entregamos documentación as-built completa. Todo proyecto incluye garantía extendida y soporte post-implementación.",
    useCases: [
      "Empresas que modernizan sedes para soportar WiFi 6E y cargas críticas",
      "Centros de datos y cuartos de comunicaciones que requieren reorganización",
      "Organizaciones con proyectos de expansión o mudanza de oficinas",
      "Industrias con ambientes exigentes que necesitan cableado blindado"
    ],
    roadmap: [
      "Levantamiento de información y diseño preliminar",
      "Planificación de materiales, cronograma y logística de instalación",
      "Ejecución por fases con supervisión certificada",
      "Certificación de enlaces y documentación as-built",
      "Entrega, capacitación y soporte post-proyecto"
    ],
    checklist: [
      "¿Tu cableado actual soporta las velocidades que demandan tus aplicaciones?",
      "¿Cuentas con documentación actualizada y etiquetado estandarizado?",
      "¿Dispones de redundancia y rutas alternativas para enlaces críticos?",
      "¿Tienes planificada la expansión de racks, energía y climatización?"
    ]
  }
};

// FAQs por categoría
const categoryFAQs: Record<string, Array<{q: string; a: string}>> = {
  antivirus: [
    {
      q: "¿Por qué necesito antivirus empresarial si ya tengo Windows Defender?",
      a: "Windows Defender es una solución básica diseñada para usuarios domésticos. El antivirus empresarial ofrece gestión centralizada, protección multicapa contra amenazas avanzadas (ransomware, zero-day exploits), políticas corporativas personalizables, reportes de cumplimiento, y soporte técnico especializado 24/7. Además, las soluciones empresariales tienen tasas de detección superiores al 99.9% vs ~95% de soluciones básicas."
    },
    {
      q: "¿El antivirus afectará el rendimiento de mis equipos?",
      a: "Las soluciones modernas de antivirus empresarial están optimizadas para tener un impacto mínimo (<5% de CPU). Utilizan tecnologías como machine learning, análisis en la nube y escaneo inteligente que reducen la carga local. En nuestras implementaciones, los usuarios reportan que no notan diferencia en el rendimiento diario."
    },
    {
      q: "¿Cuánto tiempo toma implementar el antivirus en toda mi empresa?",
      a: "Para empresas de hasta 100 endpoints, la implementación completa toma 1-3 días. Empresas más grandes (100-500 endpoints) requieren 1-2 semanas. El proceso incluye instalación automática mediante políticas de grupo, configuración centralizada, y capacitación de administradores. No requiere detener operaciones."
    },
    {
      q: "¿Qué incluye el soporte técnico?",
      a: "El soporte incluye asistencia 24/7 vía ticket, teléfono y chat, actualizaciones automáticas de definiciones de virus, parches de seguridad, asesoría en respuesta a incidentes, análisis forense en caso de infección, y reportes mensuales de estado de seguridad. También incluimos revisiones trimestrales de políticas y optimización de configuraciones."
    }
  ],
  consultoria: [
    {
      q: "¿Cuánto cuesta certificarse en ISO 27001?",
      a: "La inversión varía según el tamaño de la organización y alcance del SGSI. Para una PYME (20-50 empleados), el proceso completo (consultoría + certificación) oscila entre $15,000-$30,000 USD. Empresas más grandes pueden requerir $40,000-$80,000 USD. El ROI típico se alcanza en 12-18 meses mediante reducción de riesgos, acceso a nuevos mercados y optimización de procesos."
    },
    {
      q: "¿Cuánto tiempo toma implementar ISO 27001?",
      a: "El tiempo promedio es 6-12 meses para la implementación completa y certificación. PYMEs con procesos maduros pueden lograrlo en 6-8 meses. Organizaciones más grandes o con múltiples sedes requieren 12-18 meses. El proceso incluye: diagnóstico inicial (1-2 meses), implementación de controles (3-6 meses), auditoría interna (1 mes), correcciones (1-2 meses), y auditoría de certificación (1 mes)."
    },
    {
      q: "¿Necesito contratar personal adicional para mantener ISO 27001?",
      a: "No necesariamente. Para PYMEs, las responsabilidades del SGSI pueden ser asumidas por personal existente (típicamente 20-40% del tiempo de una persona). Organizaciones más grandes pueden requerir un Oficial de Seguridad dedicado. Nosotros ofrecemos servicios de CISO virtual y mantenimiento del SGSI como alternativa costo-efectiva a contratar personal full-time."
    },
    {
      q: "¿La certificación ISO 27001 me exime de auditorías de clientes?",
      a: "La certificación ISO 27001 reduce significativamente las auditorías de clientes. Muchas organizaciones aceptan la certificación como evidencia suficiente de controles de seguridad. Sin embargo, algunos clientes (especialmente sector financiero y gobierno) pueden requerir auditorías adicionales enfocadas en requisitos específicos. La certificación facilita enormemente estas auditorías al tener documentación estandarizada."
    }
  ],
  security: [
    {
      q: "¿Con qué frecuencia debo realizar pruebas de penetración?",
      a: "Recomendamos realizar pentesting al menos 2 veces al año, o después de cambios significativos en infraestructura (nuevos sistemas, migraciones cloud, fusiones/adquisiciones). Organizaciones en sectores regulados (financiero, salud, gobierno) deben realizar pruebas trimestrales. El ethical hacking continuo (Red Team exercises) es ideal para organizaciones maduras en seguridad."
    },
    {
      q: "¿Qué diferencia hay entre DLP y un antivirus?",
      a: "El antivirus protege contra amenazas externas (malware, virus). DLP (Data Loss Prevention) previene que información sensible salga de la organización, ya sea por error humano, empleados malintencionados, o malware. DLP monitorea emails, USBs, impresiones, uploads a cloud, etc. Son soluciones complementarias: el antivirus previene intrusiones, DLP previene fugas de datos."
    },
    {
      q: "¿Necesito un SOC (Security Operations Center)?",
      a: "Organizaciones con más de 100 empleados o que manejan información crítica se benefician enormemente de un SOC. Un SOC 24/7 monitorea amenazas en tiempo real, responde a incidentes inmediatamente, y proporciona inteligencia de amenazas. Para PYMEs, ofrecemos SOC-as-a-Service (SOCaaS) que proporciona capacidades de SOC empresarial a fracción del costo de construir uno interno (que requiere $500K+ USD/año)."
    }
  ],
  software: [
    {
      q: "¿Qué es MDM y por qué lo necesito?",
      a: "MDM (Mobile Device Management) permite gestionar, asegurar y monitorear dispositivos móviles corporativos (smartphones, tablets) desde una consola central. Es esencial porque: 1) Protege datos corporativos en dispositivos que pueden perderse/robarse, 2) Permite borrado remoto, 3) Aplica políticas de seguridad (contraseñas, encriptación), 4) Gestiona aplicaciones corporativas, 5) Proporciona visibilidad de flota móvil. Empresas con BYOD o más de 20 dispositivos móviles necesitan MDM."
    },
    {
      q: "¿Cuál es la diferencia entre TeamViewer y AnyDesk?",
      a: "Ambos son soluciones de acceso remoto profesionales. TeamViewer es líder de mercado con más funciones empresariales (gestión de dispositivos, sesiones desatendidas, integración con ticketing). AnyDesk destaca por mejor rendimiento en conexiones lentas y menor latencia, ideal para soporte técnico remoto. La elección depende del caso de uso: TeamViewer para gestión IT completa, AnyDesk para soporte técnico ágil."
    },
    {
      q: "¿Las licencias de software empresarial incluyen actualizaciones?",
      a: "Sí, todas nuestras licencias empresariales incluyen actualizaciones durante la vigencia de la suscripción o mantenimiento. Esto incluye: parches de seguridad, nuevas funcionalidades, mejoras de rendimiento, y nuevas versiones mayores. También incluye soporte técnico del fabricante. Las licencias perpetuas requieren mantenimiento anual (típicamente 20-25% del costo de licencia) para recibir actualizaciones."
    }
  ],
  infraestructura: [
    {
      q: "¿Cuál es la diferencia entre Cat5e, Cat6, Cat6A y Cat7?",
      a: "Cat5e soporta hasta 1 Gbps a 100m (obsoleto para nuevas instalaciones). Cat6 soporta 1 Gbps a 100m y 10 Gbps a 55m. Cat6A soporta 10 Gbps a 100m (recomendado para nuevas instalaciones). Cat7 soporta 10 Gbps a 100m con mejor blindaje (ideal para ambientes con interferencia). Para proyectos nuevos recomendamos mínimo Cat6A para garantizar capacidad futura sin re-cableado."
    },
    {
      q: "¿Necesito fibra óptica o cobre es suficiente?",
      a: "Depende de distancias y ancho de banda requerido. Cobre (Cat6A) es suficiente para distancias hasta 100m y velocidades hasta 10 Gbps. Fibra óptica es necesaria cuando: 1) Distancias > 100m, 2) Velocidades > 10 Gbps, 3) Enlaces entre edificios, 4) Ambientes con interferencia electromagnética alta. Para backbones y uplinks, fibra óptica es la mejor opción por escalabilidad."
    },
    {
      q: "¿Qué incluye la certificación de cableado?",
      a: "La certificación incluye pruebas con equipos certificados (Fluke, Ideal Networks) que verifican: mapa de cableado, longitud, atenuación, NEXT, FEXT, return loss, y otros parámetros según estándares TIA/EIA. Se entrega reporte detallado por cada puerto certificado con comparación vs. especificaciones del fabricante. La certificación garantiza rendimiento y es requerida para validar garantías de fabricantes de cable y equipos activos."
    },
    {
      q: "¿Cuánto tiempo dura el cableado estructurado?",
      a: "El cableado estructurado de calidad dura 15-20 años si se instala correctamente. La inversión en cableado Cat6A o superior garantiza que tu infraestructura soporte tecnologías futuras (WiFi 6E, 25GbE, etc.) sin necesidad de re-cableado. Por eso recomendamos invertir en cableado de mayor categoría: el costo incremental (10-20%) es mínimo vs. los beneficios a largo plazo."
    }
  ]
};

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  const content = categoryContent[service.category] || categoryContent.antivirus;
  const faqs = categoryFAQs[service.category] || categoryFAQs.antivirus;
  const categoryLabels: Record<string, string> = {
    antivirus: "Soluciones antivirus empresariales",
    consultoria: "Consultoría y cumplimiento",
    security: "Seguridad avanzada y SOC",
    software: "Software especializado",
    infraestructura: "Infraestructura y cableado"
  };
  const categoryLabel = categoryLabels[service.category] ?? "Solución especializada";

  const heroStats = [
    { value: `${service.features.length}+`, label: "Capacidades clave" },
    { value: "24/7", label: "Soporte y monitoreo" },
    { value: "99.9%", label: "Disponibilidad objetivo" }
  ];
  const useCases = content.useCases ?? [];
  const roadmapSteps = content.roadmap ?? [];
  const decisionChecklist = content.checklist ?? [];
  const extraContent = serviceExtras[service.slug];
  const isBitdefender = service.slug === "antivirus-bitdefender-colombia";
  const isInfrastructure = service.category === "infraestructura";
  const differentiators = extraContent?.differentiators ?? [];
  const caseStudy = extraContent?.caseStudy;
  const structuredData = extraContent?.structuredData?.(service);
  const formatSectionLabel = (num: number, title: string) => `Sección ${num.toString().padStart(2, "0")} · ${title}`;
  const sectionNumbers = {
    overview: 1,
    description: 2,
    value: 3,
    benefits: 4,
    cases: 5,
    roadmap: 6,
    extraOne: isBitdefender ? 7 : null,
    extraTwo: isBitdefender ? 8 : null,
    checklist: isBitdefender ? 9 : 7,
    faq: isBitdefender ? 10 : 8,
    related: isBitdefender ? 11 : 9,
    next: isBitdefender ? 12 : 10
  } as const;
  const conversionFlow = categoryConversionFlow[service.category];
  const conversionTitle = typeof conversionFlow.title === "function" ? conversionFlow.title(service) : conversionFlow.title;
  const conversionDescription = typeof conversionFlow.description === "function" ? conversionFlow.description(service) : conversionFlow.description;
  const heroSectionClasses = isInfrastructure
    ? "relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900"
    : "relative overflow-hidden bg-slate-950 text-white";
  const heroEyebrowClasses = isInfrastructure
    ? "inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2 text-xs uppercase tracking-[0.32em] text-slate-600 shadow-sm"
    : "inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.32em] text-white/80 backdrop-blur-sm";
  const heroParagraphClass = isInfrastructure
    ? "max-w-2xl text-lg text-slate-600 sm:text-xl"
    : "max-w-xl text-lg text-white/75 sm:text-xl";
  const heroMetricCardClass = isInfrastructure
    ? "border-slate-200 bg-white text-left text-slate-900 shadow-sm"
    : "border-white/10 bg-white/10 text-left text-white backdrop-blur-md";
  const heroMetricValueClass = isInfrastructure ? "text-3xl font-semibold text-slate-900" : "text-3xl font-semibold text-white";
  const heroMetricLabelClass = isInfrastructure ? "mt-1 text-sm text-slate-500" : "mt-1 text-sm text-white/60";
  const heroPanelWrapperClass = isInfrastructure
    ? "relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_35px_120px_-40px_rgba(15,23,42,0.35)]"
    : "relative overflow-hidden rounded-[2.75rem] border border-white/15 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 shadow-[0_35px_120px_-30px_rgba(14,165,233,0.45)]";
  const heroPanelOverlayGradient = isInfrastructure
    ? "absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_60%)] opacity-60"
    : "absolute inset-0 bg-[radial-gradient(circle_at_top,#1E3A8A_0%,transparent_60%)] opacity-60";
  const heroPanelStatusCardClass = isInfrastructure
    ? "absolute inset-x-8 bottom-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
    : "absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-slate-950/85 p-6 shadow-xl";
  const heroPanelStatusTextClass = isInfrastructure ? "flex items-center justify-between text-sm text-slate-600" : "flex items-center justify-between text-sm text-white/70";
  const heroSocCardClass = isInfrastructure
    ? "border-slate-200 bg-white text-slate-900 shadow-lg"
    : "border-white/10 bg-white/10 text-white backdrop-blur";
  const heroSocTextMuted = isInfrastructure ? "text-slate-500" : "text-white/50";
  const heroPanelEntries = isInfrastructure
    ? [
        { label: "Tramos Cat6A certificados", value: "80% instalados" },
        { label: "Fibra backbone", value: "Certificación Fluke en curso" },
        { label: "Documentación as-built", value: "Lista en 48 horas" }
      ]
    : heroStats;
  const checklistSectionClasses = isInfrastructure
    ? "py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900"
    : "py-20 bg-slate-950 text-white";
  const checklistPrimaryCardClass = isInfrastructure
    ? "border-slate-200 bg-white text-slate-900 shadow-sm"
    : "border-white/10 bg-white/10 text-white backdrop-blur";
  const checklistSecondaryCardClass = isInfrastructure
    ? "border-slate-200 bg-white text-slate-900 shadow-sm"
    : "border-white/10 bg-white/10 text-white backdrop-blur";
  const checklistBulletClass = isInfrastructure ? "mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" : "mt-1 h-2.5 w-2.5 rounded-full bg-blue-300";
  const checklistTextMutedClass = isInfrastructure ? "text-slate-600" : "text-white/80";
  const faqSectionClasses = isInfrastructure ? "py-20 bg-white text-slate-900" : "py-20 bg-slate-950 text-white";
  const faqItemClass = isInfrastructure
    ? "group rounded-2xl border border-slate-200 bg-white px-6 py-5 text-left shadow-sm"
    : "group rounded-2xl border border-white/15 bg-white/10 px-6 py-5 text-left backdrop-blur";
  const faqSummaryClass = isInfrastructure
    ? "flex cursor-pointer items-center justify-between text-base font-semibold text-slate-900"
    : "flex cursor-pointer items-center justify-between text-base font-semibold text-white";
  const faqAnswerClass = isInfrastructure ? "mt-4 text-sm leading-relaxed text-slate-600" : "mt-4 text-sm leading-relaxed text-white/75";
  const faqCaretClass = isInfrastructure ? "text-blue-600 transition-transform duration-300 group-open:rotate-180" : "text-blue-200 transition-transform duration-300 group-open:rotate-180";

  return (
    <>
      <Header />
      <main className="pt-16">
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}
        <section className="bg-slate-100 border-b border-slate-200">
          <Container className="py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-600">
              <Link href="/" className="text-blue-600 hover:text-blue-700 hover:underline">
                Inicio
              </Link>
              <span className="text-slate-400">›</span>
              <Link href="/#servicios" className="text-blue-600 hover:text-blue-700 hover:underline">
                Servicios
              </Link>
              <span className="text-slate-400">›</span>
              <span className="font-semibold text-slate-800">{service.name}</span>
            </nav>
          </Container>
        </section>

        <section className={heroSectionClasses}>
          <div className="absolute inset-0">
            {isInfrastructure ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
                <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]" />
                <div className="absolute -right-28 top-0 h-[26rem] w-[26rem] rounded-full bg-blue-200/40 blur-3xl" />
                <div className="absolute -left-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-slate-300/45 blur-3xl" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
                <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]" />
                <div className="absolute -right-28 top-0 h-[26rem] w-[26rem] rounded-full bg-blue-500/40 blur-3xl" />
                <div className="absolute -left-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/35 blur-3xl" />
              </>
            )}
          </div>
          <Container className="relative pt-24 pb-24">
            <div className={`mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] ${isInfrastructure ? "text-blue-600/70" : "text-blue-200"}`}>
              <span className="h-px flex-1 bg-blue-500/30" />
              <span className="sr-only">{formatSectionLabel(sectionNumbers.overview, "Visión general")}</span>
              <span className="h-px flex-1 bg-blue-500/30" />
            </div>
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                <div className={heroEyebrowClasses}>
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span>{categoryLabel}</span>
                </div>
                <div className="flex items-start gap-4">
                  {service.image ? (
                    <div className={`relative h-16 w-16 rounded-2xl border ${isInfrastructure ? "border-slate-200 bg-white" : "border-white/20 bg-white/10"}`}>
                      <Image src={service.image} alt={service.name} fill sizes="64px" className="object-contain p-2" priority />
                    </div>
                  ) : (
                    <div className="text-5xl">{service.icon}</div>
                  )}
                  <h1 className={`text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl ${isInfrastructure ? "text-slate-900" : "text-white"}`}>
                    {service.name}
                  </h1>
                </div>
                <p className={heroParagraphClass}>
                  {service.description}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Button href="/contactenos" size="lg" className="shadow-colored">
                    Hablar con un experto
                  </Button>
                  <Button
                    href="/contactenos"
                    variant="outline"
                    size="lg"
                    className={isInfrastructure ? "border-slate-300 text-slate-800 hover:border-slate-400" : "border-white/30 text-white hover:border-white"}
                  >
                    Solicitar propuesta
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <Card key={stat.label} className={heroMetricCardClass} padding="lg">
                      <p className={heroMetricValueClass}>{stat.value}</p>
                      <p className={heroMetricLabelClass}>{stat.label}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div className={`${heroPanelWrapperClass} p-8`}>
                <div className={heroPanelOverlayGradient} />
                <div className="relative space-y-6">
                  {service.heroImage && (
                    <div className={`relative h-44 w-full overflow-hidden rounded-2xl border ${isInfrastructure ? "border-slate-200 bg-slate-100" : "border-white/15 bg-white/10"}`}>
                      <Image src={service.heroImage} alt={service.name} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
                    </div>
                  )}
                  <div className="space-y-3">
                    <h3 className={`text-2xl font-semibold ${isInfrastructure ? "text-slate-900" : "text-white"}`}>¿Qué incluye la solución?</h3>
                    <p className={`text-sm ${isInfrastructure ? "text-slate-600" : "text-white/70"}`}>
                      Acceso a especialistas certificados, roadmap de implementación, documentación completa y soporte continuo.
                    </p>
                  </div>
                  <ul className={`space-y-3 text-sm ${isInfrastructure ? "text-slate-600" : "text-white/75"}`}>
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className={`mt-1 h-2.5 w-2.5 rounded-full ${isInfrastructure ? "bg-blue-500" : "bg-blue-300"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={heroPanelStatusCardClass}>
                    <div className={heroPanelStatusTextClass}>
                      <span>{isInfrastructure ? "Estado del proyecto" : "Estado de defensas"}</span>
                      <span className={`flex items-center gap-2 ${isInfrastructure ? "text-emerald-600" : "text-emerald-300"}`}>
                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                        {isInfrastructure ? "En ejecución" : "Operativo"}
                      </span>
                    </div>
                    <div className={`mt-4 grid gap-2 text-sm ${isInfrastructure ? "text-slate-600" : "text-white/75"}`}>
                      {heroPanelEntries.map((item) => (
                        <div key={`${item.label}-panel`} className={`flex items-center justify-between rounded-xl px-4 py-3 ${isInfrastructure ? "border border-slate-200 bg-slate-50" : "border border-white/10 bg-white/10"}`}>
                          <span>{item.label}</span>
                          <span className={isInfrastructure ? "text-slate-900 font-semibold" : "text-emerald-300"}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-white">
          <Container>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span className="sr-only">{formatSectionLabel(sectionNumbers.description, "Descripción")}</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                <p className="text-xl font-medium text-slate-900">{service.shortDescription}</p>
                <p>{content.intro}</p>
              </div>
              <Card className="border-blue-100 bg-blue-50" padding="lg">
                <h3 className="text-lg font-semibold text-blue-900">Casos de uso destacados</h3>
                <ul className="mt-4 space-y-3 text-sm text-blue-900/80">
                  {service.benefits.slice(0, 4).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
          <Container>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span className="sr-only">{formatSectionLabel(sectionNumbers.value, "Valor para tu empresa")}</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-blue-100 bg-white" padding="lg">
                <h3 className="text-2xl font-semibold text-slate-900">¿Por qué elegir esta solución?</h3>
                <p className="mt-4 text-slate-600">{content.why}</p>
              </Card>
              <Card className="border-blue-100 bg-white" padding="lg">
                <h3 className="text-2xl font-semibold text-slate-900">Cómo la implementamos</h3>
                <p className="mt-4 text-slate-600">{content.implementation}</p>
              </Card>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-white">
          <Container>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span className="sr-only">{formatSectionLabel(sectionNumbers.benefits, "Beneficios clave")}</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {service.benefits.map((benefit) => (
                <Card key={benefit} className="h-full border-slate-200 bg-white shadow-sm" padding="lg">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600">✓</span>
                    <p className="text-slate-700 text-base leading-relaxed">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
          <Container>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span className="sr-only">{formatSectionLabel(sectionNumbers.cases, "Casos de uso reales")}</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <p className="max-w-3xl text-base text-slate-600">
              Estas son las situaciones típicas en las que nuestros clientes obtienen resultados mensurables. Si tu organización se identifica con alguno de estos escenarios, podemos compartir casos de referencia y métricas concretas durante la primera sesión consultiva.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <Card key={item} className="h-full border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl" padding="lg">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-blue-500" />
                    <p className="text-slate-700 text-base leading-relaxed">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 bg-white">
          <Container>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span className="sr-only">{formatSectionLabel(sectionNumbers.roadmap, "Roadmap de implementación")}</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <Card className="border-slate-200 bg-white shadow-sm" padding="lg">
                <h3 className="text-2xl font-semibold text-slate-900">Fases del proyecto</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Trabajamos con una metodología iterativa que asegura quick wins desde el primer mes y visibilidad total para sponsors y comités de riesgo.
                </p>
                <div className="mt-6 space-y-5">
                  {roadmapSteps.map((step, index) => (
                    <div key={step} className="relative rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm">
                      <span className="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-md">
                        {index + 1}
                      </span>
                      <p className="pl-10 text-base text-slate-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="border-blue-100 bg-blue-50" padding="lg">
                <h3 className="text-lg font-semibold text-blue-900">Entregables y métricas</h3>
                <ul className="mt-4 space-y-3 text-sm text-blue-900/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Dashboard ejecutivo con KPIs de seguridad y cumplimiento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Documentación técnica y funcional lista para auditorías</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Plan de mejora continua con hitos trimestrales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>Soporte post-implementación con SLA diferenciados</span>
                  </li>
                </ul>
              </Card>
            </div>
          </Container>
        </section>

        {isBitdefender && differentiators.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
            <Container>
              <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200/90">
                <span className="h-px flex-1 bg-blue-300/30" />
                <span className="sr-only">{formatSectionLabel(sectionNumbers.extraOne!, "Diferenciadores clave Bitdefender")}</span>
                <span className="h-px flex-1 bg-blue-300/30" />
              </div>
              <p className="max-w-4xl text-base text-white/75">
                Bitdefender GravityZone concentra doce capas de protección que combinan inteligencia artificial, análisis de comportamiento y respuesta automática a incidentes. Estas son las razones por las que organizaciones financieras, salud, retail y gobierno en Colombia lo seleccionan como su plataforma estratégica de ciberseguridad.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {differentiators.map((item) => (
                  <Card
                    key={item.title}
                    className="h-full border-white/10 bg-white/10 text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/60 hover:bg-white/15"
                    padding="lg"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">{item.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        )}

        {isBitdefender && caseStudy && (
          <section className="py-20 bg-white">
            <Container>
              <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
                <span className="h-px flex-1 bg-blue-500/20" />
                <span className="sr-only">{formatSectionLabel(sectionNumbers.extraTwo!, "Caso de éxito en Colombia")}</span>
                <span className="h-px flex-1 bg-blue-500/20" />
              </div>
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-6">
                  <Badge variant="info" className="border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] uppercase tracking-[0.4em] text-blue-700">
                    {caseStudy.headline}
                  </Badge>
                  <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{caseStudy.summary}</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {caseStudy.metrics.map((metric) => (
                      <Card key={metric.label} className="border-blue-100 bg-blue-50" padding="lg">
                        <p className="text-2xl font-semibold text-blue-900">{metric.value}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-blue-700/80">{metric.label}</p>
                      </Card>
                    ))}
                  </div>
                  <div className="space-y-4 text-base leading-relaxed text-slate-600">
                    {caseStudy.body.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Button href="/contactenos" size="md" className="shadow-colored">
                      Solicita una demo personalizada
                    </Button>
                    <Button href="/contactenos#formulario" variant="outline" size="md" className="border-blue-200 text-blue-700 hover:border-blue-300">
                      Recibe el estudio completo
                    </Button>
                  </div>
                </div>
                <Card className="border-slate-200 bg-slate-50" padding="lg">
                  <h3 className="text-lg font-semibold text-slate-900">Hallazgos y aprendizajes</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                      Integración de Bitdefender con el SOC interno a través de API para correlacionar alertas en tiempo real.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                      Automatización de respuesta ante ransomware con rollback en segundos gracias a la tecnología Ransomware Remediation.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                      Cumplimiento reforzado para auditorías de la Superintendencia Financiera con reportes ejecutivos mensuales.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                      Capacitación a usuarios finales redujo intentos de phishing exitosos en un 82% durante el primer trimestre.
                    </li>
                  </ul>
                  <div className="mt-6 rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold text-slate-900">Industria:</span> Fintech regulada - servicios de banca digital en Colombia.
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold text-slate-900">Stack implementado:</span> Bitdefender GravityZone Elite + EDR + MDR, integración con SIEM y automatización ITSM.
                    </p>
                  </div>
                </Card>
              </div>
            </Container>
          </section>
        )}

        {conversionFlow && (
          <ConversionFlow
            theme={conversionFlow.theme ?? (service.category === "antivirus" ? "gradient" : "light")}
            eyebrow={conversionFlow.eyebrow}
            badge={conversionFlow.badge}
            title={conversionTitle}
            description={conversionDescription}
            steps={conversionFlow.steps}
            highlights={conversionFlow.highlights}
            primaryCta={{ label: "Solicitar diagnóstico gratuito", href: "/contactenos#formulario" }}
            secondaryCta={conversionFlow.secondaryCta}
          />
        )}

        <section className={checklistSectionClasses}>
          <Container>
            <div className={`mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] ${isInfrastructure ? "text-blue-600/70" : "text-blue-200/90"}`}>
              <span className="h-px flex-1 bg-blue-300/30" />
              <span className="sr-only">{formatSectionLabel(sectionNumbers.checklist, "Checklist para decidir")}</span>
              <span className="h-px flex-1 bg-blue-300/30" />
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <Card className={checklistPrimaryCardClass} padding="lg">
                <h3 className={`text-2xl font-semibold ${isInfrastructure ? "text-slate-900" : "text-white"}`}>Valida si estás listo para avanzar</h3>
                <p className={`mt-4 text-base leading-relaxed ${checklistTextMutedClass}`}>
                  Antes de aprobar el proyecto, revisa estos puntos clave con tu equipo directivo. Te ayudarán a priorizar inversión, definir sponsors y garantizar adopción desde el primer día.
                </p>
                <ul className={`mt-6 space-y-4 text-sm ${checklistTextMutedClass}`}>
                  {decisionChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className={checklistBulletClass} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className={checklistSecondaryCardClass} padding="lg">
                <h3 className={`text-lg font-semibold ${isInfrastructure ? "text-slate-900" : "text-white"}`}>Recomendaciones de nuestros consultores</h3>
                <div className={`mt-4 space-y-4 text-sm ${checklistTextMutedClass}`}>
                  <p>
                    - Documenta el ROI esperado en términos de reducción de incidentes, cumplimiento normativo y eficiencia operativa.
                  </p>
                  <p>
                    - Define responsables por área (TI, seguridad, compliance, finanzas) y establece un comité de seguimiento mensual.
                  </p>
                  <p>
                    - Integra la solución con herramientas existentes (SIEM, ITSM, directorios) para aprovechar inversiones previas.
                  </p>
                  <p>
                    - Planifica sesiones de comunicación interna para asegurar adopción y reducir resistencia al cambio.
                  </p>
                </div>
              </Card>
            </div>
          </Container>
        </section>

        <section className={faqSectionClasses}>
          <Container>
            <div className={`mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] ${isInfrastructure ? "text-blue-600/70" : "text-blue-200/90"}`}>
              <span className="h-px flex-1 bg-blue-300/30" />
              <span className="sr-only">{formatSectionLabel(sectionNumbers.faq, "Preguntas frecuentes")}</span>
              <span className="h-px flex-1 bg-blue-300/30" />
            </div>
            <h2 className={`text-3xl font-semibold md:text-4xl ${isInfrastructure ? "text-slate-900" : "text-white"}`}>
              Preguntas frecuentes sobre {service.name}
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className={faqItemClass}>
                  <summary className={faqSummaryClass}>
                    <span>{faq.q}</span>
                    <span className={faqCaretClass}>▼</span>
                  </summary>
                  <p className={faqAnswerClass}>{faq.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {relatedServices.length > 0 && (
          <section className="py-20 bg-white">
            <Container>
              <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
                <span className="h-px flex-1 bg-blue-500/20" />
                <span className="sr-only">{formatSectionLabel(sectionNumbers.related, "Servicios relacionados")}</span>
                <span className="h-px flex-1 bg-blue-500/20" />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedServices.map((related) => (
                  <Card key={related.id} className="h-full border-slate-200 bg-white shadow-sm" padding="lg">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{related.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{related.name}</h3>
                        <p className="mt-2 text-sm text-slate-600">{related.shortDescription}</p>
                      </div>
                    </div>
                    <Button href={`/${related.slug}`} size="sm" className="mt-6">
                      Ver detalle
                    </Button>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        )}

        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-950 to-slate-900" />
            <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]" />
            <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-blue-500/40 blur-3xl" />
            <div className="absolute -bottom-16 left-0 h-80 w-80 rounded-full bg-purple-500/40 blur-3xl" />
          </div>
          <Container className="relative">
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200/80">
              <span className="h-px flex-1 bg-blue-300/30" />
              <span className="sr-only">{formatSectionLabel(sectionNumbers.next, "Próximo paso")}</span>
              <span className="h-px flex-1 bg-blue-300/30" />
            </div>
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  Da el siguiente paso con {service.name}
                </h2>
                <p className="text-white/75 text-lg max-w-2xl">
                  Agenda una sesión consultiva para revisar el estado actual de tu seguridad, priorizar acciones y obtener una propuesta adaptada a tu operación.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button href="/contactenos" size="lg" className="shadow-colored">
                    Solicitar propuesta
                  </Button>
                  <Button href="/contactenos" variant="outline" size="lg" className="border-white/30 text-white hover:border-white">
                    Agendar demo
                  </Button>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  ✓ Confidencialidad garantizada · ✓ Respuesta en 24 horas · ✓ Equipo senior asignado
                </p>
              </div>
              <Card className="w-full max-w-md border-white/15 bg-white/10 text-white backdrop-blur" padding="lg">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Resumen ejecutivo</p>
                <h3 className="mt-3 text-2xl font-semibold">Qué obtendrás</h3>
                <div className="mt-6 space-y-4 text-sm text-white/75">
                  {[
                    "Diagnóstico inicial personalizado",
                    "Hoja de ruta priorizada con quick wins",
                    "Estimaciones de inversión y tiempos de despliegue"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                  <p><span className="font-semibold text-white">Duración:</span> 45 minutos</p>
                  <p><span className="font-semibold text-white">Modalidad:</span> Virtual o presencial</p>
                  <p><span className="font-semibold text-white">Equipo:</span> Consultor lead + especialista técnico</p>
                </div>
              </Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
