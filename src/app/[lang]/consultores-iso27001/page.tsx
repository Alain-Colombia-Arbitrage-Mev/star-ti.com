import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingLeadMagnetBanner } from "@/components/FloatingLeadMagnetBanner";
import { Button, Container, Card, Badge, Input } from "@/components/ui";
import { isValidLanguage } from "@/config/i18n";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "Consultores ISO 27001 Certificados | Expertos en Ciberseguridad Empresarial",
  description:
    "Consultores ISO 27001 Lead Implementer con +15 años de experiencia. Implementamos SGSI, auditorías de ciberseguridad y cumplimiento normativo para empresas en Colombia. Certificación garantizada.",
  keywords: [
    "consultores ISO 27001 Colombia",
    "implementación ISO 27001 Bogotá",
    "auditoría ISO 27001",
    "SGSI empresarial",
    "consultoría ciberseguridad",
    "ISO 27001 Lead Implementer",
    "certificación ISO 27001",
    "expertos seguridad información",
    "cumplimiento normativo Colombia",
    "gap analysis ISO 27001"
  ],
  openGraph: {
    title: "Consultores ISO 27001 Certificados | Implementación y Auditoría SGSI",
    description:
      "Equipo de consultores certificados ISO 27001. Implementación, auditorías y certificación de Sistemas de Gestión de Seguridad de la Información.",
    type: "website"
  }
};

const HERO_BENEFITS = [
  { icon: "✓", text: "Consultores Lead Implementer certificados" },
  { icon: "✓", text: "Implementación en 3-6 meses" },
  { icon: "✓", text: "Tasa de certificación 98.5%" }
];

const CERTIFICATIONS = [
  { name: "ISO 27001 Lead Implementer", org: "PECB" },
  { name: "Certified Ethical Hacker (CEH)", org: "EC-Council" },
  { name: "CISSP", org: "ISC²" },
  { name: "ISO 27001 Lead Auditor", org: "IRCA" }
];

const INDUSTRIES = [
  { name: "Financiero", icon: "🏦", description: "Bancos, aseguradoras, fintech" },
  { name: "Salud", icon: "🏥", description: "Clínicas, EPS, laboratorios" },
  { name: "Gobierno", icon: "🏛️", description: "Entidades públicas y contratistas" },
  { name: "Tecnología", icon: "💻", description: "Software houses, SaaS, cloud" },
  { name: "Retail", icon: "🛍️", description: "E-commerce, cadenas, franquicias" },
  { name: "Manufactura", icon: "🏭", description: "Industria 4.0, logística" }
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Gap Analysis",
    description: "Evaluamos tu madurez actual vs. controles ISO 27001. Identificamos brechas críticas y definimos roadmap personalizado.",
    duration: "2-3 semanas",
    deliverables: ["Informe de brechas", "Matriz de riesgos", "Plan de implementación"]
  },
  {
    number: "02",
    title: "Diseño SGSI",
    description: "Diseñamos políticas, procedimientos y controles alineados con tu contexto organizacional y apetito de riesgo.",
    duration: "4-6 semanas",
    deliverables: ["Manual SGSI", "Políticas de seguridad", "Procedimientos documentados"]
  },
  {
    number: "03",
    title: "Implementación",
    description: "Desplegamos controles técnicos y organizacionales. Capacitamos a tu equipo y preparamos evidencias para auditoría.",
    duration: "8-12 semanas",
    deliverables: ["Controles implementados", "Registros de evidencia", "Personal capacitado"]
  },
  {
    number: "04",
    title: "Auditoría y Certificación",
    description: "Realizamos auditoría interna, gestionamos no conformidades y te acompañamos en la auditoría de certificación externa.",
    duration: "3-4 semanas",
    deliverables: ["Informe auditoría interna", "Plan de acciones correctivas", "Certificado ISO 27001"]
  }
];

const PROBLEM_SOLUTIONS = [
  {
    problem: "No cumplimos requisitos de clientes empresariales",
    solution: "Certificación ISO 27001 avalada internacionalmente",
    impact: "+40% cierre de contratos enterprise"
  },
  {
    problem: "Multas por incumplimiento normativo (Ley 1581, GDPR)",
    solution: "Framework de cumplimiento integrado con normativas",
    impact: "Riesgo legal mitigado al 100%"
  },
  {
    problem: "Incidentes de seguridad recurrentes",
    solution: "SGSI con controles preventivos y detectivos",
    impact: "-85% en incidentes de seguridad"
  },
  {
    problem: "Procesos de seguridad documentados manualmente",
    solution: "Sistema de gestión estructurado y automatizado",
    impact: "-60% tiempo en gestión de seguridad"
  }
];

const FAQS = [
  {
    question: "¿Cuánto tarda la certificación ISO 27001?",
    answer: "El proceso completo toma entre 3 a 6 meses dependiendo del tamaño de la organización, madurez actual y disponibilidad de recursos. Incluye gap analysis, implementación del SGSI, auditoría interna y certificación externa."
  },
  {
    question: "¿Qué costo tiene implementar ISO 27001?",
    answer: "La inversión varía según el alcance (número de procesos, ubicaciones, personal). Incluye consultoría, herramientas tecnológicas, capacitación y auditoría de certificación. Ofrecemos un diagnóstico gratuito para estimar presupuesto exacto."
  },
  {
    question: "¿Necesitamos contratar personal adicional?",
    answer: "No necesariamente. Designas un responsable del SGSI (puede ser tiempo parcial) y entrenamos a tu equipo actual. Nosotros gestionamos toda la documentación, implementación y coordinación con el organismo certificador."
  },
  {
    question: "¿La certificación es válida internacionalmente?",
    answer: "Sí, ISO 27001 es un estándar global reconocido en +170 países. Trabajamos con organismos acreditados por ONAC/UKAS para garantizar aceptación internacional del certificado."
  },
  {
    question: "¿Qué pasa después de certificarnos?",
    answer: "La certificación es válida por 3 años con auditorías de seguimiento anuales. Ofrecemos servicios de mantenimiento del SGSI, auditorías internas y acompañamiento continuo para mantener la certificación vigente."
  }
];

const STATS = [
  { value: "120+", label: "Empresas certificadas", description: "En 12 sectores industriales" },
  { value: "98.5%", label: "Tasa de éxito", description: "Certificación en primer intento" },
  { value: "4.8/5", label: "Satisfacción cliente", description: "Basado en 85+ reviews" },
  { value: "15+", label: "Años experiencia", description: "En consultoría de seguridad" }
];

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function ConsultoresISO27001Page({ params }: Props) {
  const { lang } = await params;
  
  // Validate language
  if (!isValidLanguage(lang)) {
    throw new Error(`Invalid language: ${lang}`);
  }

  return (
    <>
      <Header />
      <FloatingLeadMagnetBanner />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute -right-64 top-0 h-[40rem] w-[40rem] rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -left-64 bottom-0 h-[35rem] w-[35rem] rounded-full bg-indigo-500/25 blur-3xl" />
          </div>

          <Container className="relative py-20 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span>Lead Implementers ISO 27001 Certificados</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                    ¿Perdiste una licitación por NO tener{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      ISO 27001?
                    </span>
                  </h1>
                  <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
                    Implementamos tu <strong>Sistema de Gestión de Seguridad de la Información (SGSI)</strong> 
                    y te certificamos en <strong>90-120 días</strong> sin paralizar tu operación. 
                    Más de $2.400M en contratos ganados por clientes que protegieron sus activos de información. 
                    <strong className="text-white"> La próxima oportunidad no te esperará.</strong>
                  </p>
                </div>

                <div className="space-y-4">
                  {HERO_BENEFITS.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/90">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold">
                        {benefit.icon}
                      </span>
                      <span className="text-base sm:text-lg">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
                  <Button href="#lead-magnet" size="lg" className="shadow-2xl shadow-blue-500/50">
                    🔥 Quiero Certificarme Rápido
                  </Button>
                  <Button href="#proceso" variant="outline" size="lg" className="border-white/40 text-white hover:border-white hover:bg-white/10">
                    Ver casos de éxito
                  </Button>
                </div>
                
                <p className="pt-2 text-sm text-white/60">
                  ⚡ <strong className="text-white/80">Diagnóstico en 48h:</strong> Descubre cuánto te cuesta NO estar certificado
                </p>

                <p className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs uppercase tracking-[0.25em] text-white/50">
                  <span>✓ Sin compromiso</span>
                  <span>✓ Presupuesto claro</span>
                  <span>✓ Inicio en 2 semanas</span>
                </p>
              </div>

              {/* Hero Image/Stats Card */}
              <div className="relative hidden lg:block">
                <Card className="border-white/10 bg-white/5 text-white backdrop-blur-xl" padding="lg">
                  <div className="mb-6 flex items-center justify-between">
                    <Badge variant="success" className="bg-emerald-500/20 text-emerald-200">
                      Estado: Operativo
                    </Badge>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/50">En tiempo real</span>
                  </div>
                  
                  <h3 className="mb-6 text-2xl font-semibold">Panel de cumplimiento</h3>
                  
                  <div className="space-y-4">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-white/70">Controles implementados</span>
                        <span className="text-lg font-semibold text-emerald-300">93/93</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[100%] rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-white/70">Documentación completada</span>
                        <span className="text-lg font-semibold text-blue-300">87/87</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[100%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-white/70">Personal capacitado</span>
                        <span className="text-lg font-semibold text-purple-300">45/45</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[100%] rounded-full bg-gradient-to-r from-purple-500 to-pink-400" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                    <p className="text-sm text-emerald-200">
                      <span className="font-semibold">✓ Listo para certificación</span>
                    </p>
                    <p className="mt-1 text-xs text-emerald-200/70">Auditoría programada: 15 días</p>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="border-y border-slate-200 bg-white py-12">
          <Container>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-blue-600 sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{stat.label}</p>
                  <p className="mt-1 text-xs text-slate-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* LEAD MAGNET SECTION - DESTACADO Y MEJORADO */}
        <section id="lead-magnet" className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-blue-600 to-indigo-700 py-24 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl" />
          </div>

          <Container className="relative">
            {/* Urgencia Banner */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-300/50 bg-red-500/30 px-5 py-2 text-sm font-bold text-red-100 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-300" />
                </span>
                <span>⚠️ URGENTE: Solo 3 cupos disponibles este mes | 2 empresas agendaron hoy</span>
              </div>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
                {/* Left side - Enhanced Value Proposition */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge className="border-0 bg-gradient-to-r from-red-600 to-orange-600 px-4 py-1.5 text-sm font-bold text-white shadow-lg animate-pulse" variant="default">
                        🔥 EVALUACIÓN $850K - GRATIS (Solo este mes)
                      </Badge>
                      <Badge className="border-0 bg-orange-500/90 px-3 py-1 text-xs font-bold text-white" variant="default">
                        🔥 TRENDING
                      </Badge>
                    </div>
                    
                    <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                      Descubre EXACTAMENTE cuánto dinero estás dejando de ganar sin ISO 27001
                    </h2>
                    
                    <p className="text-xl text-white/95">
                      <strong>Evaluación estratégica de 90 minutos</strong> donde calculamos el costo de NO tener 
                      un SGSI certificado, evaluamos los riesgos de tus activos de información (físicos y digitales) 
                      y diseñamos tu hoja de ruta hacia la certificación. <strong className="text-emerald-200">Sin tecnicismos. Solo ROI real.</strong>
                    </p>
                  </div>

                  {/* What's Included */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold uppercase tracking-wider text-emerald-200">
                      💰 Lo que obtienes en 90 minutos (Valor: $850.000):
                    </h3>
                    <div className="space-y-3">
                      {[
                        { icon: "💸", title: "Costo de NO estar certificado", desc: "Cuánto pierdes sin SGSI: licitaciones perdidas, incumplimientos normativos, multas" },
                        { icon: "🎯", title: "Evaluación de Riesgos Críticos", desc: "Los riesgos que amenazan tus activos de información (y cómo mitigarlos en 30 días)" },
                        { icon: "⚡", title: "Plan de Implementación Express", desc: "SGSI completo y certificación en 90 días (metodología ágil, no tradicional)" },
                        { icon: "💰", title: "Inversión + ROI Transparente", desc: "Cuánto cuesta implementar controles, cuándo recuperas la inversión (números reales)" },
                        { icon: "🛡️", title: "Gap Analysis Profesional", desc: "Estado actual vs. requisitos ISO 27001:2022 (qué te falta para certificarte)" },
                        { icon: "📋", title: "Marco de Controles Personalizados", desc: "Qué controles necesitas según tu industria y cumplimiento normativo" },
                        { icon: "🚀", title: "Acciones Inmediatas de Seguridad", desc: "3 controles críticos para proteger activos HOY (antes de la certificación)" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10">
                          <span className="text-3xl">{item.icon}</span>
                          <div className="flex-1">
                            <p className="font-semibold text-white">{item.title}</p>
                            <p className="mt-0.5 text-sm text-white/70">{item.desc}</p>
                          </div>
                          <span className="text-2xl text-emerald-300">✓</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bonus Section */}
                  <div className="rounded-2xl border-2 border-yellow-300/40 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 backdrop-blur-sm">
                    <p className="mb-3 text-sm font-bold uppercase tracking-wider text-yellow-200">
                      ⚠️ PARA TI si te identificas con esto:
                    </p>
                    <div className="space-y-3 text-white/90">
                      <div className="flex items-start gap-3 rounded-lg border border-yellow-300/20 bg-white/5 p-3">
                        <span className="text-xl">❌</span>
                        <p className="text-sm">
                          <strong>Perdiste licitaciones de $500M+</strong> porque exigían &ldquo;SGSI certificado ISO 27001:2022 vigente&rdquo; 
                          y no tenías implementado el sistema
                        </p>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg border border-yellow-300/20 bg-white/5 p-3">
                        <span className="text-xl">❌</span>
                        <p className="text-sm">
                          <strong>Te exigen gestionar riesgos de información</strong> pero no sabes por dónde empezar: 
                          qué controles implementar, cuánto cuesta, cuánto toma
                        </p>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg border border-yellow-300/20 bg-white/5 p-3">
                        <span className="text-xl">❌</span>
                        <p className="text-sm">
                          <strong>Tus competidores tienen SGSI certificado</strong> y demuestran cumplimiento normativo 
                          en licitaciones donde tú no puedes competir
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Proof */}
                  <div className="flex items-center gap-6 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-gradient-to-br from-slate-300 to-slate-400" />
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-yellow-300">
                        ★★★★★
                      </div>
                      <p className="mt-1 text-sm text-white/80">
                        <strong className="text-white">+120 empresas</strong> certificadas exitosamente
                      </p>
                      <p className="mt-0.5 text-xs text-white/60">
                        Calificación promedio: 4.9/5 ⭐
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="italic text-white/90">
                      &ldquo;Habíamos perdido 2 licitaciones de $600M y $400M por NO tener SGSI certificado. 
                      <strong>El diagnóstico me mostró que sin gestión de riesgos formal perdíamos $80M/mes en oportunidades.</strong> 
                      Implementamos el SGSI y certificamos en 4 meses. Al sexto mes ganamos un contrato de $800M que exigía ISO 27001. 
                      La inversión se pagó 3 veces.&rdquo;
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500" />
                      <div className="text-sm">
                        <p className="font-semibold text-white">María Fernanda López</p>
                        <p className="text-white/60">Directora de TI - FinTech (85 empleados) - Bogotá</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Enhanced Form */}
                <div className="lg:sticky lg:top-24">
                  <Card className="border-2 border-white/30 bg-white shadow-2xl" padding="lg">
                    <div className="space-y-6">
                      {/* Form Header */}
                      <div className="text-center">
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-4xl shadow-xl">
                          📞
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          Agenda tu Evaluación Estratégica
                        </h3>
                        <p className="mt-2 text-sm font-medium text-slate-600">
                          ⚡ <strong>Solo 8 cupos este mes</strong> - Te llamamos en 24h para coordinar
                        </p>
                        
                        {/* Trust indicators */}
                        <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <span className="text-green-600">✓</span> Gratis
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-green-600">✓</span> Sin compromiso
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-green-600">✓</span> 30 seg
                          </span>
                        </div>
                      </div>

                      {/* Progress indicator */}
                      <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 text-center">
                        <p className="text-sm font-bold text-red-800">
                          ⚠️ CUPOS LIMITADOS: Solo 3 disponibles esta semana
                        </p>
                        <p className="mt-1 text-xs text-red-600">
                          (Última empresa agendó hace 3 horas - Medellín)
                        </p>
                      </div>

                      {/* Form */}
                      <form className="space-y-5">
                        <div>
                          <label htmlFor="lead-nombre" className="mb-2 block text-sm font-semibold text-slate-700">
                            Nombre del contacto
                          </label>
                          <Input
                            id="lead-nombre"
                            type="text"
                            placeholder="Ej: María López"
                            required
                            className="w-full border-2 border-slate-200 focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="lead-empresa" className="mb-2 block text-sm font-semibold text-slate-700">
                            Empresa
                          </label>
                          <Input
                            id="lead-empresa"
                            type="text"
                            placeholder="Ej: TechCorp SAS"
                            required
                            className="w-full border-2 border-slate-200 focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="lead-telefono" className="mb-2 block text-sm font-semibold text-slate-700">
                            WhatsApp o teléfono
                          </label>
                          <Input
                            id="lead-telefono"
                            type="tel"
                            placeholder="Ej: +57 300 123 4567"
                            required
                            className="w-full border-2 border-slate-200 focus:border-emerald-500"
                          />
                          <p className="mt-1.5 text-xs text-slate-500">
                            📱 Te contactamos por WhatsApp o llamada en 24h
                          </p>
                        </div>

                        {/* CTA Button */}
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-red-600 to-orange-600 py-4 text-lg font-bold shadow-2xl hover:from-red-700 hover:to-orange-700 animate-pulse"
                        >
                          <span className="flex items-center justify-center gap-2">
                            🔥 SÍ, QUIERO DEJAR DE PERDER DINERO
                          </span>
                        </Button>

                        {/* Below button */}
                        <p className="text-center text-xs text-slate-500">
                          🔒 Tus datos están seguros. Lee nuestra{" "}
                          <Link href={`/${lang}/politica-privacidad`} className="underline hover:text-slate-700">
                            política de privacidad
                          </Link>
                        </p>
                      </form>

                      {/* What happens next */}
                      <div className="space-y-3 border-t-2 border-slate-100 pt-5">
                        <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Cómo funciona:
                        </p>
                        <div className="space-y-2 text-sm text-slate-600">
                          <p className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">1.</span>
                            <strong>Llamada inicial (10 min):</strong> Evaluamos madurez actual de tu gestión de riesgos
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">2.</span>
                            <strong>Gap Analysis (90 min):</strong> Evaluamos activos de información y controles necesarios
                          </p>
                          <p className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">3.</span>
                            <strong>Plan SGSI + ROI:</strong> Hoja de ruta completa desde implementación hasta certificación
                          </p>
                        </div>
                      </div>

                      {/* Guarantee */}
                      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 text-center">
                        <p className="text-sm font-bold text-orange-900">
                          ⚡ <strong>GARANTÍA:</strong> Si decides NO implementar el SGSI, 
                          te regalamos el Gap Analysis completo con los 10 controles de seguridad prioritarios para tus activos. 
                          <span className="text-orange-700"> Obtienes valor de todos modos.</span>
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Extra trust */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-white/70">
                      🏆 +120 empresas certificadas | ⭐ 4.9/5 valoración | 🎯 Diagnóstico gratuito
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Problem-Solution Section */}
        <section className="bg-slate-50 py-20">
          <Container>
            <div className="mb-12 text-center">
              <Badge className="mb-4" variant="default">
                Problemas que resolvemos
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                De obstáculos a ventajas competitivas
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                ISO 27001 no es solo cumplimiento, es una herramienta estratégica para abrir mercados y proteger tu negocio.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {PROBLEM_SOLUTIONS.map((item, index) => (
                <Card key={index} className="border-slate-200 bg-white shadow-sm" hover padding="lg">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-2xl">
                      ❌
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium text-slate-700">{item.problem}</p>
                    </div>
                  </div>
                  
                  <div className="my-4 border-t border-slate-200" />
                  
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                      ✅
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-slate-900">{item.solution}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-blue-50 px-4 py-3">
                    <p className="text-sm font-semibold text-blue-700">
                      <span className="text-blue-600">Impacto:</span> {item.impact}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Industries Section */}
        <section className="bg-white py-20">
          <Container>
            <div className="mb-12 text-center">
              <Badge className="mb-4" variant="default">
                Experiencia multisectorial
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                Certificamos empresas en todos los sectores
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Conocemos los requisitos específicos de tu industria y adaptamos el SGSI a tu contexto regulatorio.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((industry, index) => (
                <Card key={index} className="border-slate-200 bg-white text-center shadow-sm" hover padding="lg">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-3xl shadow-lg">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{industry.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{industry.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section id="proceso" className="bg-gradient-to-b from-slate-50 to-white py-20">
          <Container>
            <div className="mb-12 text-center">
              <Badge className="mb-4" variant="default">
                Metodología probada
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                4 fases hacia tu certificación ISO 27001
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Proceso estructurado y transparente con entregables definidos en cada etapa.
              </p>
            </div>

            <div className="space-y-8">
              {PROCESS_STEPS.map((step, index) => (
                <Card key={index} className="border-slate-200 bg-white shadow-md" hover padding="lg">
                  <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto]">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-2xl font-bold text-white shadow-lg">
                        {step.number}
                      </div>
                      {index < PROCESS_STEPS.length - 1 && (
                        <div className="mt-4 hidden h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400 lg:block" />
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                        <p className="mt-2 text-base text-slate-600">{step.description}</p>
                      </div>

                      <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">Entregables</p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <Badge key={idx} variant="default" size="sm" className="bg-blue-100 text-blue-700">
                              {deliverable}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start lg:items-center">
                      <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-center">
                        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Duración</p>
                        <p className="mt-1 text-sm font-bold text-blue-700">{step.duration}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="mx-auto max-w-2xl border-blue-200 bg-blue-50" padding="lg">
                <p className="text-lg font-semibold text-blue-900">
                  ⏱️ Tiempo total: <span className="text-blue-600">3-6 meses</span> desde diagnóstico hasta certificación
                </p>
                <p className="mt-2 text-sm text-blue-700">
                  Timeline adaptable según disponibilidad de recursos y complejidad organizacional
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Certifications Section */}
        <section className="bg-slate-950 py-20 text-white">
          <Container>
            <div className="mb-12 text-center">
              <Badge className="mb-4 bg-white/10 text-white" variant="default">
                Equipo certificado
              </Badge>
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                Consultores con acreditaciones internacionales
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Nuestro equipo cuenta con las certificaciones más rigurosas en seguridad de la información y auditoría.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CERTIFICATIONS.map((cert, index) => (
                <Card key={index} className="border-white/10 bg-white/5 text-center text-white backdrop-blur" padding="lg">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <p className="mt-2 text-sm text-white/60">{cert.org}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20">
          <Container>
            <div className="mb-12 text-center">
              <Badge className="mb-4" variant="default">
                Preguntas frecuentes
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                Todo lo que necesitas saber sobre ISO 27001
              </h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              {FAQS.map((faq, index) => (
                <Card key={index} className="border-slate-200 bg-white shadow-sm" hover padding="lg">
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section with Form */}
        <section id="contacto" className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900 py-24 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute -right-48 top-0 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
          </div>

          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div className="space-y-6">
                <Badge className="bg-white/10 text-white" variant="default">
                  Comienza hoy
                </Badge>
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Solicita tu diagnóstico ISO 27001 gratuito
                </h2>
                <p className="text-lg text-white/80">
                  En 48 horas recibirás un reporte ejecutivo con:
                </p>
                <ul className="space-y-3">
                  {[
                    "Gap analysis preliminar de tu organización",
                    "Estimación de esfuerzo y timeline",
                    "Presupuesto detallado sin compromisos",
                    "Sesión consultiva de 45 minutos con nuestro equipo"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                        ✓
                      </span>
                      <span className="text-base text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Contacto directo</p>
                  <p className="mt-3 text-lg">
                    <a href="tel:+573001234567" className="hover:text-blue-300 transition-colors">
                      📞 +57 (300) 123-4567
                    </a>
                  </p>
                  <p className="mt-2 text-lg">
                    <a href="mailto:iso27001@star-ti.com" className="hover:text-blue-300 transition-colors">
                      ✉️ iso27001@star-ti.com
                    </a>
                  </p>
                </div>
              </div>

              <Card className="border-white/10 bg-white/5 backdrop-blur-xl" padding="lg">
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-white">
                        Nombre completo *
                      </label>
                      <Input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        required
                        className="w-full border-white/20 bg-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="cargo" className="mb-2 block text-sm font-medium text-white">
                        Cargo
                      </label>
                      <Input
                        id="cargo"
                        type="text"
                        placeholder="Ej: CTO, CISO"
                        className="w-full border-white/20 bg-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="empresa" className="mb-2 block text-sm font-medium text-white">
                      Empresa *
                    </label>
                    <Input
                      id="empresa"
                      type="text"
                      placeholder="Nombre de la empresa"
                      required
                      className="w-full border-white/20 bg-white/10 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                        Email corporativo *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@empresa.com"
                        required
                        className="w-full border-white/20 bg-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-white">
                        Teléfono *
                      </label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="+57 300 123 4567"
                        required
                        className="w-full border-white/20 bg-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="empleados" className="mb-2 block text-sm font-medium text-white">
                      Tamaño de la empresa
                    </label>
                    <select
                      id="empleados"
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur transition-colors focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="" className="bg-slate-900">Selecciona una opción</option>
                      <option value="1-50" className="bg-slate-900">1-50 empleados</option>
                      <option value="51-200" className="bg-slate-900">51-200 empleados</option>
                      <option value="201-500" className="bg-slate-900">201-500 empleados</option>
                      <option value="500+" className="bg-slate-900">500+ empleados</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-white">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      placeholder="¿Qué te motiva a certificarte en ISO 27001? ¿Tienes un plazo específico?"
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur transition-colors focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-2xl shadow-blue-500/50">
                    Solicitar diagnóstico gratuito →
                  </Button>

                  <p className="text-center text-xs text-white/50">
                    Al enviar aceptas nuestra{" "}
                    <Link href={`/${lang}/politica-privacidad`} className="underline hover:text-white/70">
                      política de privacidad
                    </Link>
                  </p>
                </form>
              </Card>
            </div>
          </Container>
        </section>

        {/* Trust Signals */}
        <section className="border-t border-slate-200 bg-white py-12">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-2xl">🔒</span>
                <span className="text-sm font-medium">Confidencialidad garantizada</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium">Respuesta en 24h</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-medium">98.5% tasa de éxito</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-medium">120+ empresas certificadas</span>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

