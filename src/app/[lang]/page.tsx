import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Button, Container, Card, Badge } from "@/components/ui";
import { ConversionFlow } from "@/components/sections/ConversionFlow";
import { LogoCarousel } from "@/components/LogoCarousel";
import { services, categories } from "@/data/services";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "STAR Solutions T.I. | Ciberseguridad y Consultoría ISO 27001 en Bogotá",
  description:
    "Empresa líder en ciberseguridad empresarial, consultoría ISO 27001, infraestructura IT y software especializado en Colombia. +15 años protegiendo 500+ empresas con soluciones Bitdefender, Kaspersky, MDM y más. Soporte 24/7.",
  keywords: [
    "ciberseguridad empresarial Bogotá",
    "consultoría ISO 27001 Colombia",
    "antivirus corporativo Colombia",
    "Bitdefender distribuidor Colombia",
    "Kaspersky empresas Bogotá",
    "cableado estructurado certificado",
    "infraestructura IT empresarial",
    "MDM gestión dispositivos móviles",
    "ethical hacking Colombia",
    "DLP prevención pérdida datos",
    "soluciones tecnológicas empresas",
    "seguridad informática Bogotá"
  ],
  openGraph: {
    title: "STAR Solutions T.I. - Ciberseguridad de Clase Mundial",
    description:
      "15 años protegiendo empresas con soluciones de ciberseguridad, consultoría ISO 27001 y tecnología empresarial",
    type: "website"
  }
};

const HERO_METRICS = [
  { value: "500+", label: "Empresas protegidas" },
  { value: "99.9%", label: "SLA de disponibilidad" },
  { value: "24/7", label: "SOC y soporte experto" }
];

const HERO_SECURITY_WIDGET = [
  { name: "Bitdefender MDR", status: "Sin incidentes críticos" },
  { name: "Hornetsecurity", status: "Correo filtrado 99.7%" },
  { name: "Kaspersky Optimum", status: "EDR activo en 420 endpoints" }
];

const PARTNER_LOGOS = [
  { name: "Bitdefender", src: "/images/logos/bitdefender.svg" },
  { name: "Kaspersky", src: "/images/logos/kaspersky.svg" },
  { name: "TeamViewer", src: "/images/logos/teamviewer.svg" },
  { name: "SOTI", src: "/images/logos/soti.svg" },
  { name: "Hornetsecurity", src: "/images/logos/hornetsecurity.svg" },
  { name: "AnyDesk", src: "/images/logos/anydesk.svg" },
  { name: "GitHub", src: "/images/logos/github.svg" }
];

const CAROUSEL_LOGOS = [...PARTNER_LOGOS];

export default function LangHomePage() {
  const featuredServices = services.slice(0, 6);
  const antivirusServices = services.filter((s) => s.category === "antivirus").slice(0, 3);
  const securityServices = services.filter((s) => s.category === "security").slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950" />
            <div className="absolute inset-0 opacity-15 bg-[url('/grid.svg')]" />
            <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-blue-500/40 blur-3xl" />
            <div className="absolute -left-36 bottom-0 h-[30rem] w-[30rem] rounded-full bg-indigo-600/35 blur-3xl" />
          </div>

          <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-center">
              <div className="space-y-8 lg:space-y-10 lg:max-w-2xl">
                <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 sm:px-5 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.32em] text-white/80 backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="whitespace-nowrap">+15 años asegurando activos digitales</span>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    Ciberseguridad estratégica para organizaciones que no pueden fallar
                  </h1>
                  <p className="max-w-xl text-base text-white/75 sm:text-lg md:text-xl">
                    Diseñamos defensas digitales con consultoría ISO 27001, monitoreo 24/7 y plataformas líderes como Bitdefender, Kaspersky y Hornetsecurity para blindar tu operación de punta a punta.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Button href="/contactenos" size="lg" className="shadow-colored">
                    Agenda una sesión estratégica
                  </Button>
                  <Button href="#servicios" variant="outline" size="lg" className="border-white/40 text-white hover:border-white">
                    Explorar soluciones
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {HERO_METRICS.map((item) => (
                    <Card key={item.label} className="border-white/10 bg-white/10 text-left text-white backdrop-blur-md" padding="lg">
                      <p className="text-3xl font-semibold text-white">{item.value}</p>
                      <p className="mt-1 text-sm text-white/60">{item.label}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:flex lg:flex-col gap-6">
                <div className="relative overflow-hidden rounded-[2.75rem] border border-white/15 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 shadow-[0_35px_120px_-30px_rgba(14,165,233,0.45)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1E3A8A_0%,transparent_60%)] opacity-60" />
                  <div className="relative aspect-[4/5]">
                    <div className="absolute inset-6 rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-sm" />
                    <Image src="/images/hero/cyber-defense.svg" alt="Arquitectura de ciberseguridad con monitoreo en tiempo real" fill priority className="object-cover" />
                  </div>
                  <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-slate-950/85 p-6 shadow-xl">
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>Panel de defensas</span>
                      <span className="flex items-center gap-2 text-emerald-300">
                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                        Operativo
                      </span>
                    </div>
                    <div className="mt-4 grid gap-2 text-sm text-white/75">
                      {HERO_SECURITY_WIDGET.map((tool) => (
                        <div key={tool.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3">
                          <span className="text-xs sm:text-sm">{tool.name}</span>
                          <span className="text-emerald-300 text-xs sm:text-sm">{tool.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Card className="border-white/10 bg-white/10 text-white backdrop-blur" padding="lg">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/60">SOC 24/7</p>
                      <h3 className="mt-2 text-xl sm:text-2xl font-semibold">Tiempo medio de respuesta &lt; 2h</h3>
                    </div>
                    <Badge variant="success" size="sm" className="bg-emerald-500/20 text-emerald-200 self-start sm:self-auto">
                      SLA Garantizado
                    </Badge>
                  </div>
                  <div className="mt-4 grid gap-3 text-sm text-white/70 grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 sm:px-4 py-3">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50">Visibilidad</p>
                      <p className="mt-1 text-sm sm:text-base font-semibold text-white">Cobertura 360°</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 sm:px-4 py-3">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50">Automatización</p>
                      <p className="mt-1 text-sm sm:text-base font-semibold text-white">Playbooks activos</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="relative bg-white">
          <Container className="py-16">
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span>Sección 02 · Indicadores Clave</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  value: "+52",
                  title: "Consultores certificados",
                  description: "Equipo con acreditaciones ISO 27001 Lead Implementer, CEH y CISSP"
                },
                {
                  value: "500+",
                  title: "Empresas protegidas",
                  description: "Organizaciones de todos los sectores confían en nuestras soluciones"
                },
                {
                  value: "99.9%",
                  title: "SLA de disponibilidad",
                  description: "Garantía de uptime respaldada por monitoreo continuo"
                },
                {
                  value: "24/7",
                  title: "Soporte especializado",
                  description: "Mesa de servicio y SOC disponibles todo el tiempo"
                }
              ].map((stat) => (
                <Card key={stat.title} className="border-slate-200 bg-white shadow-sm" padding="lg">
                  <p className="text-3xl font-semibold text-blue-600">{stat.value}</p>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">{stat.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{stat.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span>Sección 03 · Partners Tecnológicos</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <h2 className="text-center text-3xl font-semibold text-slate-900 md:text-4xl">
              Respaldados por líderes globales en tecnología
            </h2>
            <div className="mt-12">
              <LogoCarousel logos={CAROUSEL_LOGOS} />
            </div>
          </Container>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20 bg-white">
          <Container>
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span>Sección 04 · Nuestras Soluciones</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <div className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Soluciones integrales de ciberseguridad y tecnología empresarial
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Desde protección endpoint hasta certificación ISO 27001, cubrimos todas las capas de tu estrategia de seguridad.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button href="#servicios" variant="outline" size="lg">
                Ver todos los servicios
              </Button>
            </div>
          </Container>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <Container>
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span>Sección 05 · Categorías de Servicio</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Explora nuestras soluciones por categoría
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Servicios especializados para cada necesidad de seguridad y tecnología empresarial.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const categoryServices = services.filter(s => s.category === category.id);
                return (
                  <Card key={category.id} className="border-slate-200 bg-white shadow-sm" padding="lg">
                    <div className={`inline-flex rounded-lg bg-gradient-to-r ${category.color} p-3 text-white`}>
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-slate-900">{category.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {categoryServices.length} soluciones disponibles
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {categoryServices.slice(0, 3).map((service) => (
                        <Badge key={service.id} variant="default" size="sm">
                          {service.name}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Featured Antivirus Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span>Sección 06 · Soluciones Antivirus</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <div className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Protección endpoint de clase mundial
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Bitdefender, Kaspersky y más: implementamos las soluciones antivirus empresariales con mayor tasa de detección del mercado.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {antivirusServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </Container>
        </section>

        {/* Security Services Section */}
        <section className="py-20 bg-slate-50">
          <Container>
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span>Sección 07 · Seguridad Avanzada</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <div className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Servicios de ciberseguridad especializada
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Ethical hacking, DLP, SOC y más: protege tu información crítica con servicios avanzados de seguridad.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {securityServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </Container>
        </section>

        {/* Conversion Flow */}
        <ConversionFlow
          theme="gradient"
          eyebrow="Proceso de implementación"
          badge="sin interrupciones"
          title="De la evaluación a la protección total en semanas, no meses"
          description="Nuestro proceso estructurado garantiza que tu organización esté protegida rápidamente sin afectar operaciones."
          steps={[
            {
              title: "Assessment inicial",
              description: "Evaluamos tu infraestructura, identificamos riesgos y priorizamos acciones según impacto y urgencia.",
              icon: "🔍"
            },
            {
              title: "Diseño e implementación",
              description: "Configuramos soluciones, integramos con tu stack actual y desplegamos en fases controladas.",
              icon: "🛠️"
            },
            {
              title: "Monitoreo continuo",
              description: "Activamos SOC 24/7, entregamos dashboards ejecutivos y ajustamos políticas según amenazas emergentes.",
              icon: "🛰️"
            }
          ]}
          highlights={[
            "Roadmap personalizado con quick wins en las primeras semanas",
            "Integración con herramientas existentes (SIEM, ITSM, directorios)",
            "Capacitación y documentación completa para tu equipo"
          ]}
          primaryCta={{ label: "Solicitar diagnóstico gratuito", href: "/contactenos" }}
          secondaryCta={{ label: "Agendar demo", href: "/contactenos" }}
        />

        {/* Final CTA Section */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-950 to-slate-900" />
            <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]" />
            <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-blue-500/40 blur-3xl" />
            <div className="absolute -bottom-16 left-0 h-80 w-80 rounded-full bg-purple-500/40 blur-3xl" />
          </div>
          <Container className="relative">
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200/80">
              <span className="h-px flex-1 bg-blue-300/30" />
              <span>Sección 08 · Comienza Ahora</span>
              <span className="h-px flex-1 bg-blue-300/30" />
            </div>
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  ¿Listo para fortalecer tus defensas digitales?
                </h2>
                <p className="text-white/75 text-lg max-w-2xl">
                  Agenda una sesión consultiva de 45 minutos para revisar tu postura de seguridad actual y recibir recomendaciones priorizadas.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button href="/contactenos" size="lg" className="shadow-colored">
                    Agendar sesión estratégica
                  </Button>
                  <Button href="/nosotros" variant="outline" size="lg" className="border-white/30 text-white hover:border-white">
                    Conocer al equipo
                  </Button>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  ✓ Sin compromiso · ✓ Respuesta en 24h · ✓ Confidencialidad garantizada
                </p>
              </div>
              <Card className="w-full max-w-md border-white/15 bg-white/10 text-white backdrop-blur" padding="lg">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Qué incluye</p>
                <h3 className="mt-3 text-2xl font-semibold">Sesión consultiva</h3>
                <div className="mt-6 space-y-4 text-sm text-white/75">
                  {[
                    "Análisis de riesgos y brechas actuales",
                    "Roadmap priorizado con estimaciones",
                    "Comparativa de soluciones aplicables"
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
                  <p><span className="font-semibold text-white">Equipo:</span> Consultor senior + especialista técnico</p>
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
