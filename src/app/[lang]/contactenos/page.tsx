"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button, Container, Card, Badge, Input, Textarea } from "@/components/ui";
import { ConversionFlow } from "@/components/sections/ConversionFlow";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    service: "",
    message: "",
    honeypot: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const quickStats = [
    { value: "24/7", label: "Soporte inmediato" },
    { value: "<2h", label: "Tiempo de respuesta" },
    { value: "15 sectores", label: "Experiencia regulada" }
  ];

  const contactChannels = [
    {
      title: "Teléfono",
      icon: "📞",
      highlight: "+57 1 XXX XXXX",
      description: "Lun a Vie 8:00 - 17:00",
      href: "tel:+57123456789",
      cardClass: "border-blue-200 bg-blue-50 hover:border-blue-300",
      buttonClass: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Correo electrónico",
      icon: "📧",
      highlight: "info@star-ti.com",
      description: "Respuesta promedio en 24 horas",
      href: "mailto:info@star-ti.com",
      cardClass: "border-emerald-200 bg-emerald-50 hover:border-emerald-300",
      buttonClass: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      title: "WhatsApp",
      icon: "💬",
      highlight: "+57 XXX XXX XXXX",
      description: "Atención inmediata y seguimiento",
      href: "https://wa.me/57123456789",
      cardClass: "border-teal-200 bg-teal-50 hover:border-teal-300",
      buttonClass: "bg-teal-600 hover:bg-teal-700"
    },
    {
      title: "Oficinas",
      icon: "📍",
      highlight: "Bogotá, Colombia",
      description: "Reuniones presenciales con cita previa",
      href: undefined,
      cardClass: "border-purple-200 bg-purple-50"
    }
  ];

  const faqItems = [
    {
      question: "¿Cuánto tiempo tardan en responder?",
      answer:
        "Respondemos todas las solicitudes en menos de 24 horas hábiles. Los clientes con contratos activos cuentan con línea directa 24/7 para emergencias."
    },
    {
      question: "¿La consulta inicial tiene costo?",
      answer:
        "No. Incluye evaluación de riesgos, recomendaciones tácticas y roadmap inicial con prioridades y quick wins."
    },
    {
      question: "¿Atienden empresas fuera de Bogotá?",
      answer:
        "Sí. Operamos a nivel nacional con equipos en sitio y soporte remoto. Para proyectos regionales contamos con aliados certificados."
    }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.honeypot) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: "",
        service: "",
        message: "",
        honeypot: ""
      });

      setTimeout(() => setSubmitted(false), 7000);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
            <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]" />
            <div className="absolute -right-28 top-0 h-[24rem] w-[24rem] rounded-full bg-blue-500/40 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-purple-500/35 blur-3xl" />
          </div>
          <Container className="relative pt-24 pb-24">
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
              <span className="h-px flex-1 bg-blue-500/30" />
              <span>Sección 01 · Contacto Estratégico</span>
              <span className="h-px flex-1 bg-blue-500/30" />
            </div>
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                <Badge
                  variant="info"
                  className="border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.4em] text-white"
                >
                  contacto directo
                </Badge>
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Conectemos tu operación con nuestros expertos SOC
                </h1>
                <p className="max-w-2xl text-lg text-white/75 sm:text-xl">
                  Agenda una sesión exploratoria o contáctanos por tu canal preferido. Nuestro equipo responde en menos de 24 horas y está disponible 24/7 para incidentes críticos.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Button href="tel:+57123456789" size="lg" className="shadow-colored">
                    Llamar a dirección comercial
                  </Button>
                  <Button
                    href="#formulario"
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:border-white"
                  >
                    Enviar requerimiento
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {quickStats.map((stat) => (
                    <Card
                      key={stat.label}
                      className="border-white/10 bg-white/10 text-left text-white backdrop-blur"
                      padding="lg"
                    >
                      <p className="text-3xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-sm text-white/60">{stat.label}</p>
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
                      src="/images/hero/contact-hero.svg"
                      alt="Centro de contacto STAR Solutions"
                      fill
                      priority
                      className="object-cover opacity-85 mix-blend-screen"
                    />
                    <Image
                      src="/globe.svg"
                      alt="Red global"
                      fill
                      priority
                      className="object-contain opacity-65 mix-blend-screen"
                    />
                  </div>
                  <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-slate-900/85 p-6 shadow-lg">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">Coordinación inmediata</p>
                    <div className="mt-4 space-y-3 text-sm text-white/75">
                      {[
                        "Incident response y forensic 24/7",
                        "Mesa de servicio con SLA documentado",
                        "Alianzas con fabricantes para escalamiento prioritario"
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

        <ConversionFlow
          theme="gradient"
          eyebrow="Proceso de acompañamiento"
          badge="respuesta en menos de 24 horas"
          title="Tu solicitud se convierte en un plan táctico en tres pasos"
          description="Simplificamos el camino para que recibas una propuesta accionable sin fricción. Nuestro equipo comercial y técnico trabaja coordinado para darte respuestas claras y priorizadas."
          steps={[
            {
              title: "Brief de necesidades",
              description:
                "Completa el formulario o agenda una llamada. Validamos alcance, urgencia e industria para asignar al equipo adecuado.",
              icon: "📝"
            },
            {
              title: "Workshop exprés",
              description:
                "En las siguientes 24 horas realizamos una sesión virtual para profundizar en riesgos, métricas y restricciones de tu organización.",
              icon: "🧪"
            },
            {
              title: "Entrega de plan",
              description:
                "Recibes un roadmap con quick wins, presupuesto estimado y recursos asignados. Incluye próximos pasos y cronograma sugerido.",
              icon: "📦"
            }
          ]}
          highlights={[
            "Equipo senior participa desde la primera reunión",
            "Documentación lista para comités y aprobaciones",
            "Seguimiento continuo vía correo y WhatsApp"
          ]}
          primaryCta={{ label: "Ir al formulario de contacto", href: "#formulario" }}
          secondaryCta={{ label: "Hablar ahora con un especialista", href: "tel:+57123456789" }}
        />

        <section className="py-16 bg-white">
          <Container>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">
              <span className="h-px flex-1 bg-blue-500/20" />
              <span>Sección 02 · Canales directos</span>
              <span className="h-px flex-1 bg-blue-500/20" />
            </div>
            <p className="text-lg text-slate-600 max-w-4xl">
              Escoge el canal que mejor se adapte a tu operación. Nuestro equipo comercial y técnico está disponible para acompañarte en evaluaciones, incidentes y procesos de licenciamiento.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
              {contactChannels.map((channel) => (
                <Card
                  key={channel.title}
                  className={`h-full ${
                    channel.cardClass ?? "border-slate-200 bg-white"
                  } transition-all duration-300 hover:-translate-y-1`}
                  padding="lg"
                >
                  <div className="text-4xl mb-3">{channel.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{channel.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-700">{channel.highlight}</p>
                  <p className="mt-2 text-sm text-slate-600">{channel.description}</p>
                  {channel.href && (
                    <Button
                      href={channel.href}
                      size="sm"
                      className={`mt-5 w-full ${
                        channel.buttonClass ?? "bg-slate-900 hover:bg-slate-800"
                      }`}
                    >
                      Contactar
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="formulario" className="bg-slate-950 py-24 text-white">
          <Container>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200/90">
              <span className="h-px flex-1 bg-blue-300/30" />
              <span>Sección 03 · Solicita una sesión</span>
              <span className="h-px flex-1 bg-blue-300/30" />
            </div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <Card className="border-white/10 bg-white/10 text-white backdrop-blur" padding="lg">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold">Cuéntanos tu necesidad</h2>
                  <p className="mt-2 text-sm text-white/70">
                    Completa el formulario y un especialista se pondrá en contacto en menos de 24 horas hábiles.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200">
                    <p className="font-semibold">¡Mensaje enviado correctamente!</p>
                    <p className="mt-1 text-sm">Te responderemos en las próximas 24 horas.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Input
                      label="Nombre completo"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                    <Input
                      label="Correo electrónico"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Input
                      label="Teléfono"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                    <Input
                      label="Empresa"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="employees" className="block text-sm font-semibold text-white mb-2">
                        Número de empleados <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecciona un rango</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">Más de 500</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                        Servicio de interés <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="antivirus">Antivirus Empresarial</option>
                        <option value="iso27001">Consultoría ISO 27001</option>
                        <option value="ethical-hacking">Ethical Hacking</option>
                        <option value="dlp">Data Loss Prevention (DLP)</option>
                        <option value="mdm">Mobile Device Management (MDM)</option>
                        <option value="cableado">Cableado Estructurado</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <Textarea
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Describe brevemente tu necesidad, desafíos actuales o preguntas..."
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full shadow-colored"
                  >
                    {loading ? "Enviando..." : "Enviar solicitud"}
                  </Button>

                  <p className="text-xs text-white/50 text-center">
                    Al enviar este formulario, aceptas nuestra{" "}
                    <Link href="/politica-privacidad" className="underline hover:text-white">
                      política de privacidad
                    </Link>
                    .
                  </p>
                </form>
              </Card>

              <div className="space-y-6">
                <Card className="border-white/10 bg-white/5 text-white" padding="lg">
                  <h3 className="text-lg font-semibold">¿Qué sigue después?</h3>
                  <div className="mt-4 space-y-4 text-sm text-white/75">
                    {[
                      "Validamos tu solicitud y asignamos un especialista",
                      "Agendamos una llamada exploratoria de 30 minutos",
                      "Entregamos propuesta técnica y comercial personalizada"
                    ].map((item, index) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-xs font-semibold text-blue-300">
                          {index + 1}
                        </span>
                        <span className="mt-0.5">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="border-white/10 bg-white/5 text-white" padding="lg">
                  <h3 className="text-lg font-semibold">Preguntas frecuentes</h3>
                  <div className="mt-4 space-y-4">
                    {faqItems.map((faq) => (
                      <div key={faq.question}>
                        <p className="text-sm font-semibold text-white">{faq.question}</p>
                        <p className="mt-1 text-sm text-white/70">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
