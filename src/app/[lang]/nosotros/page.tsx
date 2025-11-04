import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button, Container, Card, Badge } from "@/components/ui";
import { ConversionFlow } from "@/components/sections/ConversionFlow";

export const metadata: Metadata = {
  title: "Nosotros - Empresa Líder en Ciberseguridad | STAR Solutions T.I.",
  description: "Conoce STAR Solutions T.I., empresa con +15 años de experiencia en ciberseguridad, consultoría ISO 27001 y soluciones tecnológicas empresariales en Bogotá, Colombia. Equipo certificado y comprometido con la excelencia.",
  keywords: [
    "empresa ciberseguridad Bogotá",
    "consultores ISO 27001 Colombia",
    "equipo seguridad informática",
    "historia STAR Solutions",
    "valores empresariales",
    "certificaciones ciberseguridad"
  ],
  openGraph: {
    title: "Sobre STAR Solutions T.I. - Expertos en Ciberseguridad",
    description: "15 años protegiendo empresas colombianas con soluciones de ciberseguridad de clase mundial",
    type: "website"
  }
};

export default function AboutPage() {
  const metrics = [
    { value: "15+", label: "Años protegiendo organizaciones" },
    { value: "500+", label: "Empresas acompañadas" },
    { value: "99.9%", label: "SLA de disponibilidad" }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Fundación",
      description: "Inicio de operaciones en Bogotá con un equipo fundador de 3 especialistas en ciberseguridad."
    },
    {
      year: "2012",
      title: "Certificación ISO",
      description: "Primeros consultores certificados como Lead Implementer ISO 27001 en Colombia."
    },
    {
      year: "2016",
      title: "Expansión",
      description: "Superamos los 100 clientes corporativos incorporando servicios SOC y respuesta a incidentes."
    },
    {
      year: "2020",
      title: "Transformación Digital",
      description: "Lanzamos soluciones cloud zero trust y automatización para trabajo híbrido."
    },
    {
      year: "2024",
      title: "Liderazgo Regional",
      description: "Más de 500 organizaciones protegidas y presencia en 12 sectores regulados."
    }
  ];

  const principles = [
    {
      title: "Misión",
      description:
        "Proteger los activos digitales de nuestros clientes con soluciones integrales, ágiles y alineadas a las mejores prácticas internacionales.",
      icon: "🎯"
    },
    {
      title: "Visión",
      description:
        "Ser el aliado estratégico de ciberseguridad más confiable en Latinoamérica, combinando innovación y excelencia operativa.",
      icon: "🚀"
    },
    {
      title: "Valores",
      description:
        "Integridad, excelencia, innovación y compromiso guían cada proyecto y relación con nuestros clientes.",
      icon: "⭐",
      bullets: [
        "Integridad y transparencia en cada entrega",
        "Excelencia técnica y humana",
        "Innovación permanente frente a nuevas amenazas",
        "Un compromiso inquebrantable con el éxito del cliente"
      ]
    }
  ];

  const cultureHighlights = [
    "Metodología ISO 27001 + ISO 22301 en todos los proyectos",
    "Equipos multidisciplinarios con especialistas SOC, forense y compliance",
    "Laboratorio de innovación y simulación de amenazas para clientes",
    "Programas de mentoring y desarrollo continuo para nuestro talento"
  ];

  const differentiators = [
    {
      title: "Equipo Senior",
      description: "Consultores con certificaciones CISSP, CISM, CEH, ISO 27001 Lead Implementer y experiencia real en campo.",
      icon: "👥"
    },
    {
      title: "Respuesta Rápida",
      description: "Centros de operaciones y protocolos de respuesta que garantizan intervención en menos de 2 horas.",
      icon: "⚡"
    },
    {
      title: "Mejora Continua",
      description: "Roadmaps trimestrales, simulacros de crisis y evaluación constante de controles.",
      icon: "🔄"
    },
    {
      title: "ROI Medible",
      description: "Resultados que reducen incidentes en un 95% y costos operativos hasta en un 30%.",
      icon: "💼"
    },
    {
      title: "Enfoque Personalizado",
      description: "Soluciones adaptadas a la realidad regulatoria y operativa de cada sector.",
      icon: "📊"
    },
    {
      title: "Presencia Local",
      description: "Cobertura nacional con equipos locales y soporte remoto 24/7.",
      icon: "🌎"
    }
  ];

  const testimonials = [
    {
      quote:
        "Excelente acompañamiento y resultados medibles desde el primer trimestre. Redujimos incidentes en más del 90%.",
      role: "Gerente de TI · Sector Financiero"
    },
    {
      quote:
        "Su equipo nos guió hasta la certificación ISO 27001 sin desviarnos del roadmap. Siempre disponibles y proactivos.",
      role: "Directora de Riesgos · Salud"
    },
    {
      quote:
        "Implementaron SOC, DLP y respuesta a incidentes de forma ágil. Hoy tenemos visibilidad total y procesos maduros.",
      role: "CIO · Retail"
    }
  ];

  const partnerLogos = [
    { name: "Bitdefender", src: "/images/logos/bitdefender.svg" },
    { name: "Kaspersky", src: "/images/logos/kaspersky.svg" },
    { name: "TeamViewer", src: "/images/logos/teamviewer.svg" },
    { name: "SOTI", src: "/images/logos/soti.svg" },
    { name: "Hornetsecurity", src: "/images/logos/hornetsecurity.svg" }
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
            <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]" />
            <div className="absolute -right-32 top-0 h-[26rem] w-[26rem] rounded-full bg-blue-500/40 blur-3xl" />
            <div className="absolute -left-28 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/35 blur-3xl" />
          </div>
          <Container className="relative pt-28 pb-28">
            <div className="mb-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
              <span className="h-px flex-1 bg-blue-500/30" />
              <span>Sección 01 · ADN Corporativo</span>
              <span className="h-px flex-1 bg-blue-500/30" />
            </div>
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                <Badge variant="info" className="border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.4em] text-white">
                  sobre nosotros
                </Badge>
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  Protegiendo el futuro digital de Colombia
                </h1>
                <p className="max-w-2xl text-lg text-white/75 sm:text-xl">
                  Somos un equipo de especialistas en ciberseguridad, gobernanza y continuidad que acompaña a las organizaciones en su transformación digital con estrategias de alto impacto y resultados medibles.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Button href="/contactenos" size="lg" className="shadow-colored">
                    Hablar con un consultor senior
                  </Button>
                  <Button href="#historia" variant="outline" size="lg" className="border-white/30 text-white hover:border-white">
                    Conocer nuestra historia
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <Card
                      key={metric.label}
                      className="border-white/10 bg-white/10 text-left text-white backdrop-blur"
                      padding="lg"
                    >
                      <p className="text-3xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-sm text-white/60">{metric.label}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:flex lg:flex-col">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_60%)]" />
                  <div className="relative aspect-[4/5]">
                    <div className="absolute inset-6 rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-sm" />
                    <Image
                      src="/images/hero/abstract-1.svg"
                      alt="Equipo STAR Solutions"
                      fill
                      priority
                      className="object-cover opacity-80 mix-blend-screen"
                    />
                    <Image
                      src="/globe.svg"
                      alt="Mapa global de amenazas"
                      fill
                      priority
                      className="object-contain opacity-70 mix-blend-screen"
                    />
                  </div>
                  <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-slate-900/85 p-6 shadow-lg">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">Capacidades clave</p>
                    <div className="mt-4 space-y-3 text-sm text-white/75">
                      {[
                        "SOC certificado y war rooms activos",
                        "Metodologías ISO 27001 + 22301",
                        "Cobertura nacional y soporte remoto"
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="historia" className="py-20 bg-white">
          <Container>
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span>Sección 02 · Nuestra Historia</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                  <strong>STAR Solutions T.I.</strong> nació en 2009 con una visión clara: acercar a las empresas colombianas a tecnología de ciberseguridad de clase mundial acompañada de consultoría especializada.
                </p>
                <p>
                  Nuestros fundadores, con más de dos décadas de experiencia combinada, identificaron la necesidad de integrar protección tecnológica, procesos y gobernanza para construir organizaciones resilientes.
                </p>
                <p>
                  Hoy evolucionamos junto a clientes de todos los tamaños, liderando proyectos que abarcan desde la estrategia y el cumplimiento normativo hasta operaciones SOC y respuesta a incidentes.
                </p>
                <p>
                  Nuestra historia se sostiene sobre tres pilares: <strong>excelencia técnica</strong>, <strong>compromiso con el cliente</strong> y <strong>innovación continua</strong> frente a amenazas emergentes.
                </p>
              </div>
              <Card className="border-blue-100 bg-blue-50" padding="lg">
                <h3 className="text-xl font-semibold text-blue-900">Hitos importantes</h3>
                <div className="mt-6 space-y-5">
                  {milestones.map((milestone) => (
                    <div key={milestone.year} className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white">
                        {milestone.year}
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900">{milestone.title}</p>
                        <p className="mt-1 text-sm text-blue-700">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
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
