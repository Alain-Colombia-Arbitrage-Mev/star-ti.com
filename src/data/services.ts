export interface Service {
  id: string;
  name: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  image?: string;
  heroImage?: string;
  category: "antivirus" | "consultoria" | "infraestructura" | "software" | "security";
}

export const services: Service[] = [
  {
    id: "bitdefender-colombia",
    name: "Antivirus Bitdefender",
    slug: "antivirus-bitdefender-colombia",
    title: "Bitdefender GravityZone - Antivirus Empresarial Líder en Colombia | Protección Total Endpoints",
    description: "Distribuidor autorizado Bitdefender Colombia. Solución antivirus empresarial #1 en protección contra ransomware, malware y amenazas zero-day. GravityZone Elite con EDR integrado, machine learning y Hyper Detect. Protección multicapa para endpoints Windows, Mac, Linux. Gestión centralizada desde la nube. Certificado por AV-Test y Forrester Wave como líder en seguridad endpoints. Implementación en 24 horas con soporte técnico 24/7. Licenciamiento flexible para PYMEs y grandes empresas en Bogotá y Colombia.",
    shortDescription: "Antivirus empresarial #1 con tecnología EDR y machine learning",
    icon: "🛡️",
    image: "/images/logos/bitdefender.svg",
    heroImage: "/images/hero/services/bitdefender.svg",
    category: "antivirus",
    features: [
      "Bitdefender GravityZone Business Security Premium y Elite",
      "Protección endpoints en tiempo real con machine learning avanzado",
      "EDR (Endpoint Detection and Response) integrado de última generación",
      "Hyper Detect: detección de exploits, ransomware y ataques sin archivos",
      "Defensa multicapa contra ransomware con recuperación automática",
      "Antimalware, antispyware, antiphishing y control de aplicaciones",
      "Firewall avanzado y protección de red con análisis de tráfico",
      "Gestión centralizada desde la nube o on-premise",
      "Consola única para administrar Windows, Mac, Linux y servidores",
      "Análisis de vulnerabilidades y patch management integrado",
      "Protección de dispositivos móviles Android e iOS",
      "Sandbox para análisis seguro de archivos sospechosos",
      "Control de dispositivos USB y medios extraíbles",
      "Actualizaciones automáticas sin impacto en rendimiento (<3% CPU)",
      "Reportes detallados de cumplimiento y auditoría forense"
    ],
    benefits: [
      "Tasa de detección 99.9% contra malware y ransomware (certificado AV-Test)",
      "Reducción de incidentes de seguridad en 95% en el primer año",
      "Menor impacto en rendimiento del mercado (certificado AV-Comparatives)",
      "Gestión centralizada ahorra 60% del tiempo de administración IT",
      "ROI promedio de 340% en 3 años según Forrester TEI",
      "Implementación rápida: 1-3 días para hasta 500 endpoints",
      "Soporte técnico 24/7 en español incluido en todas las licencias",
      "Licenciamiento flexible: perpetuo o suscripción anual/mensual",
      "Cumplimiento normativo: ISO 27001, PCI-DSS, GDPR, Ley 1581",
      "Protege trabajo remoto y endpoints fuera de la red corporativa"
    ]
  },
  {
    id: "kaspersky-bogota",
    name: "Antivirus Kaspersky",
    slug: "antivirus-kaspersky-bogota-colombia",
    title: "Kaspersky Endpoint Security - Antivirus Empresarial Premium Bogotá Colombia | Protección Avanzada",
    description: "Distribuidor oficial Kaspersky Colombia. Antivirus empresarial con inteligencia artificial y protección multinivel contra APT, ransomware y amenazas dirigidas. Kaspersky Endpoint Security for Business con EDR, Sandbox y control de aplicaciones. Tecnología Kaspersky Security Network con threat intelligence global en tiempo real. Protección galardonada: 100 premios AV-Test. Gestión centralizada desde Kaspersky Security Center. Licenciamiento para PYMEs y grandes corporaciones en Bogotá, Medellín, Cali y toda Colombia. Implementación certificada con soporte 24/7 en español.",
    shortDescription: "Antivirus empresarial con IA y threat intelligence global",
    icon: "🔐",
    image: "/images/logos/kaspersky.svg",
    heroImage: "/images/hero/services/kaspersky.svg",
    category: "antivirus",
    features: [
      "Kaspersky Endpoint Security for Business Select y Advanced",
      "Inteligencia artificial para detección de amenazas zero-day",
      "Análisis heurístico avanzado y machine learning multicapa",
      "Kaspersky Security Network: threat intelligence de 400M usuarios",
      "Protección contra APT (Advanced Persistent Threats)",
      "EDR (Endpoint Detection and Response) para respuesta a incidentes",
      "Sandbox integrado para análisis seguro de archivos desconocidos",
      "Control granular de aplicaciones y whitelisting/blacklisting",
      "Protección web y antiphishing con filtrado de contenido",
      "Aislamiento de amenazas con cuarentena automática",
      "Firewall corporativo con políticas centralizadas",
      "Kaspersky Security Center para gestión unificada",
      "Protección de servidores Windows, Linux y virtualizados",
      "Encriptación de datos y gestión de dispositivos móviles",
      "Reportes ejecutivos y de cumplimiento automatizados"
    ],
    benefits: [
      "Líder en protección: 100+ premios AV-Test en última década",
      "Detección del 100% de malware en pruebas independientes",
      "Protección multinivel con 8 capas de seguridad",
      "Reducción de falsos positivos en 90% vs competencia",
      "Gestión centralizada simplifica administración de seguridad",
      "Threat intelligence actualizado cada 2 segundos globalmente",
      "Compatible con infraestructura híbrida (on-premise + cloud)",
      "Cumplimiento normativo: GDPR, ISO 27001, PCI-DSS, SOC 2",
      "Soporte técnico certificado 24/7/365 en español",
      "Mejor costo-beneficio para empresas de 25-5000 endpoints"
    ]
  },
  {
    id: "antivirus-empresas",
    name: "Antivirus para Empresas",
    slug: "antivirus-para-empresas-colombia",
    title: "Antivirus para Empresas Colombia | Protección Endpoint Corporativa",
    description: "Protección antivirus empresarial de última generación para su empresa en Colombia. Implementamos soluciones de marcas líderes como Bitdefender, Kaspersky, ESET y Trend Micro con gestión centralizada. Proteja todos sus endpoints, servidores y estaciones de trabajo contra ransomware, malware y amenazas avanzadas. Consola unificada, despliegue automático y soporte 24/7 en español.",
    shortDescription: "Protección antivirus empresarial con gestión centralizada",
    icon: "🏢",
    heroImage: "/images/hero/services/bitdefender.svg",
    category: "antivirus",
    features: [
      "Soluciones multi-marca: Bitdefender, Kaspersky, ESET, Trend Micro",
      "Gestión centralizada desde consola única en la nube",
      "Protección para Windows, Linux, servidores y dispositivos móviles",
      "Detección y respuesta avanzada (EDR) integrada",
      "Despliegue automático sin interrumpir operaciones",
      "Protección multicapa contra ransomware y amenazas zero-day",
      "Control de aplicaciones y dispositivos USB",
      "Reportes ejecutivos de cumplimiento automatizados",
      "Protección para teletrabajo y equipos remotos",
      "Soporte técnico 24/7 en español incluido"
    ],
    benefits: [
      "Reducción de costos de TI hasta 40% vs gestión manual",
      "Protección continua 24/7 contra amenazas avanzadas",
      "Escalable desde 10 hasta más de 50,000 dispositivos",
      "Visibilidad completa del estado de seguridad empresarial",
      "Cumplimiento normativo: ISO 27001, PCI-DSS, Ley 1581",
      "Implementación rápida sin interrumpir operaciones",
      "Soporte especializado incluido en español"
    ]
  },
  {
    id: "iso-27001-auditor",
    name: "Auditor ISO 27001",
    slug: "auditor-iso-27001-consultores-iso-bogota",
    title: "Consultoría ISO 27001:2022 Bogotá Colombia | Auditores Certificados SGSI | Implementación y Certificación",
    description: "Consultores y auditores ISO 27001:2022 certificados en Colombia. Implementación completa de Sistemas de Gestión de Seguridad de la Información (SGSI) con garantía de certificación. Auditores lead ISO 27001 con +15 años de experiencia. Metodología probada en +100 empresas certificadas exitosamente. Servicios: GAP analysis, diseño de SGSI, implementación de 93 controles Anexo A, auditorías internas, preparación auditoría de certificación. Especializados en sectores financiero, salud, TI, telecomunicaciones, gobierno. Cumplimiento Ley 1581, GDPR, PCI-DSS. Consultoría en Bogotá, Medellín, Cali, Barranquilla y toda Colombia.",
    shortDescription: "Consultores ISO 27001:2022 certificados - Implementación SGSI con garantía",
    icon: "📋",
    heroImage: "/images/hero/services/iso27001.svg",
    category: "consultoria",
    features: [
      "Consultores Lead Auditor ISO 27001:2022 certificados internacionalmente",
      "GAP Analysis completo basado en ISO 27001:2022 y Anexo A",
      "Diseño e implementación de SGSI (Sistema de Gestión Seguridad Información)",
      "Implementación de 93 controles del Anexo A ISO 27001:2022",
      "Análisis de riesgos según ISO 27005 y metodologías OCTAVE, MAGERIT",
      "Desarrollo de políticas, procedimientos y documentación SGSI completa",
      "Implementación de controles técnicos y organizacionales",
      "Auditorías internas por auditores certificados",
      "Preparación completa para auditoría de certificación externa",
      "Acompañamiento durante auditoría de certificación (Stage 1 y 2)",
      "Capacitación de personal y sensibilización en seguridad información",
      "Soporte en cumplimiento de Ley 1581 (Habeas Data Colombia)",
      "Integración con ISO 9001, ISO 20000, ISO 22301 si aplica",
      "CISO virtual para mantenimiento continuo del SGSI",
      "Auditorías de seguimiento y recertificación trianual"
    ],
    benefits: [
      "Garantía de certificación ISO 27001 en primera auditoría",
      "Reducción de riesgos de seguridad en 80% documentado",
      "Cumplimiento normativo: Ley 1581, SIC, Superintendencias",
      "Acceso a licitaciones públicas y privadas que exigen ISO 27001",
      "Ventaja competitiva: +35% incremento oportunidades comerciales",
      "Certificación reconocida mundialmente por IAF/ONAC",
      "Mejora de procesos y cultura de seguridad organizacional",
      "Reducción de primas de seguros cibernéticos hasta 40%",
      "Confianza de clientes, socios y stakeholders",
      "ROI promedio 280% en reducción de incidentes y eficiencia operativa"
    ]
  },
  {
    id: "cableado-estructurado",
    name: "Cableado Estructurado",
    slug: "cableado-estructurado-redes-de-datos-y-fibra-optica-bogota-colombia",
    title: "Cableado Estructurado Certificado Bogotá Colombia | Fibra Óptica | Redes de Datos Cat6A Cat7",
    description: "Instalación profesional de cableado estructurado certificado en Bogotá y Colombia. Especialistas en redes de datos Cat6A, Cat7, fibra óptica monomodo/multimodo. Diseño e implementación de infraestructura de red para empresas. Certificación Fluke Networks con garantía extendida 25 años. Cumplimiento estándares TIA/EIA 568, ISO/IEC 11801. Cableado horizontal y vertical (backbone). Cuartos de telecomunicaciones, racks, patch panels. Instalación de fibra óptica para enlaces inter-edificios, campus universitarios, zonas industriales. Velocidades hasta 100 Gbps. Documentación as-built completa. Proyectos llave en mano para oficinas, data centers, hospitales, colegios, industria. Técnicos certificados BICSI. Bogotá, Cundinamarca, Antioquia, Valle.",
    shortDescription: "Cableado de red Cat6A/Cat7 y fibra óptica certificado 25 años",
    icon: "🌐",
    heroImage: "/images/hero/services/cableado.svg",
    category: "infraestructura",
    features: [
      "Cableado estructurado Cat6A (10 Gbps) y Cat7 (10 Gbps blindado)",
      "Fibra óptica monomodo (hasta 100km) y multimodo OM3/OM4",
      "Certificación con equipos Fluke Networks DTX/DSX CableAnalyzer",
      "Diseño de infraestructura según TIA-568-C y ISO/IEC 11801",
      "Cableado horizontal (workstations) y vertical (backbone)",
      "Instalación de racks, gabinetes, patch panels, organizadores",
      "Canalización: escalerillas, ductos, bandejas portacables",
      "Etiquetado normalizado y documentación as-built completa",
      "Cuartos de telecomunicaciones (MDF/IDF) según TIA-942",
      "Fibra óptica para enlaces inter-edificios y campus",
      "Puesta a tierra y sistema de protección eléctrica",
      "Mantenimiento preventivo y correctivo de infraestructura",
      "Pruebas de rendimiento y certificación de cada enlace",
      "Migración de cableado antiguo sin downtime",
      "Garantía extendida de fabricante 25 años en materiales"
    ],
    benefits: [
      "Velocidades hasta 10 Gbps (Cat6A/Cat7) y 100 Gbps (fibra)",
      "Latencia mínima <1ms para aplicaciones críticas",
      "Confiabilidad 99.99% con certificación de calidad",
      "Escalabilidad para tecnologías futuras (WiFi 7, 25GbE, IoT)",
      "Infraestructura perdurable 15-25 años sin recableado",
      "Cumple normativas internacionales TIA/EIA e ISO",
      "Reducción de costos operativos por menos fallas de red",
      "Documentación profesional para auditorías y mantenimiento",
      "Instalación sin interrumpir operaciones de la empresa",
      "Soporte técnico post-instalación incluido primer año"
    ]
  },
  {
    id: "consultores-iso",
    name: "Consultores ISO 27001",
    slug: "consultores-iso-27001",
    title: "Consultores ISO 27001 Colombia | Expertos SGSI Certificados | Implementación y Auditoría",
    description: "Consultores ISO 27001:2022 lead auditor certificados en Colombia. Equipo experto en implementación de SGSI (Sistema de Gestión de Seguridad de la Información) con 15+ años de experiencia. Consultoría estratégica para certificación garantizada ISO 27001. Servicios: análisis GAP, diseño SGSI, implementación 93 controles Anexo A, auditorías internas, capacitación personal, acompañamiento certificación. Especializados en integración con ISO 9001, ISO 20000, ISO 22301. Análisis de riesgos ISO 27005, OCTAVE, MAGERIT. Cumplimiento Ley 1581 Habeas Data Colombia. Consultores en Bogotá, Medellín, Cali. Sectores: financiero, salud, TI, telecomunicaciones, retail, manufactura, gobierno. Metodología probada en 100+ empresas certificadas.",
    shortDescription: "Consultores lead auditor ISO 27001 con metodología certificada",
    icon: "👥",
    category: "consultoria",
    features: [
      "Consultores Lead Auditor ISO 27001:2022 con certificación internacional",
      "Consultoría estratégica de alto nivel para direcciones y gerencias",
      "Capacitación y sensibilización en seguridad de la información",
      "Cursos certificados: ISO 27001 Foundation, Implementer, Lead Auditor",
      "Auditorías de seguridad internas según ISO 19011",
      "Evaluación de riesgos y controles existentes",
      "Plan de continuidad de negocio (BCP) según ISO 22301",
      "Asesoramiento legal en protección de datos y Ley 1581",
      "Consultoría en integración multi-normas (9001, 20000, 22301)",
      "Due diligence de seguridad para fusiones y adquisiciones",
      "Servicios de CISO virtual (Chief Information Security Officer)",
      "Diseño de políticas de seguridad y gobierno de datos",
      "Análisis de madurez de ciberseguridad (CMMI, NIST)",
      "Preparación para auditorías de clientes y reguladores",
      "Soporte continuo post-certificación y recertificaciones"
    ],
    benefits: [
      "Experiencia certificada: 15+ años, 100+ empresas certificadas",
      "Enfoque personalizado según sector y tamaño de organización",
      "Resultados comprobados: 98% aprobación en primera auditoría",
      "Apoyo integral desde diagnóstico hasta certificación",
      "Reducción de tiempo de implementación en 30% vs promedio",
      "Transferencia de conocimiento para autonomía del cliente",
      "Consultoría presencial y remota según necesidades",
      "Costos transparentes sin sorpresas ni extras ocultos",
      "Red de contactos con organismos certificadores acreditados",
      "Soporte en español con conocimiento regulatorio colombiano"
    ]
  },
  {
    id: "teamviewer",
    name: "Licenciamiento TeamViewer",
    slug: "licenciamiento-teamviewer-colombia",
    title: "TeamViewer Colombia Licencias Oficiales | Acceso Remoto Empresarial | Remote Support",
    description: "Distribuidor autorizado TeamViewer en Colombia. Licencias oficiales de acceso remoto y soporte técnico empresarial. TeamViewer Remote, Tensor, Monitoring, ServiceCamp para equipos de TI. Acceso seguro a computadoras, servidores, dispositivos móviles desde cualquier lugar. Ideal para soporte técnico remoto, trabajo híbrido, administración de sistemas, atención al cliente. Conexión cifrada AES 256-bit, autenticación 2FA. Gestión centralizada de dispositivos y usuarios. Grabación de sesiones para auditoría. Compatible Windows, Mac, Linux, iOS, Android. Licenciamiento flexible: perpetuo, anual, mensual. Soporte técnico certificado 24/7. Bogotá, Medellín, Cali, Colombia.",
    shortDescription: "Acceso remoto empresarial líder mundial - Licencias oficiales",
    icon: "💻",
    image: "/images/logos/teamviewer.svg",
    heroImage: "/images/hero/services/teamviewer.svg",
    category: "software",
    features: [
      "TeamViewer Remote Access para acceso desatendido 24/7",
      "TeamViewer Tensor para grandes empresas con gestión centralizada",
      "TeamViewer Monitoring & Asset Management integrado",
      "ServiceCamp para ticketing y gestión de incidentes",
      "Acceso remoto seguro con cifrado AES 256-bit end-to-end",
      "Autenticación de dos factores (2FA) y whitelist de dispositivos",
      "Transferencia de archivos segura durante sesiones remotas",
      "Soporte técnico remoto con chat, VoIP y video conferencia",
      "Gestión centralizada de dispositivos, usuarios y grupos",
      "Grabación de sesiones para cumplimiento y auditorías",
      "Wake-on-LAN para encender equipos remotamente",
      "Integración con Active Directory, Azure AD, LDAP",
      "Compatibilidad multiplataforma: Windows, Mac, Linux, móviles",
      "Panel web para administración sin instalar software",
      "API para integración con sistemas de ticketing (ServiceNow, Jira)"
    ],
    benefits: [
      "Productividad mejorada: resuelve incidentes sin desplazamientos",
      "Soporte técnico eficiente reduce tiempos de resolución 70%",
      "Reducción de costos operativos en soporte on-site",
      "Acceso desde cualquier lugar para equipos distribuidos",
      "Facilita trabajo remoto e híbrido de forma segura",
      "Gestión de flotas de dispositivos desde consola única",
      "Cumplimiento GDPR, SOC2, ISO 27001 con encriptación total",
      "Escalable desde 1 hasta 10,000+ dispositivos",
      "ROI promedio 400% en reducción de viajes y tiempo técnico",
      "Licenciamiento flexible sin compromiso a largo plazo"
    ]
  },
  {
    id: "mdm-soti",
    name: "MDM SOTI",
    slug: "soti-mdm-colombia",
    title: "SOTI MobiControl Colombia | MDM Empresarial | Gestión Dispositivos Móviles Android iOS Windows",
    description: "Distribuidor oficial SOTI MobiControl en Colombia. Solución MDM (Mobile Device Management) empresarial líder para gestión de dispositivos móviles Android, iOS, Windows, Linux. Control centralizado de smartphones, tablets, wearables, IoT, dispositivos industriales (rugged). Ideal para retail, logística, transporte, salud, manufactura, campo. Despliegue remoto de aplicaciones corporativas. Políticas de seguridad (encriptación, passwords, geofencing). Monitoreo en tiempo real de flota móvil. Soporte BYOD y COPE. Lockdown kiosk mode para POS y dispositivos dedicados. Geolocalización y asset tracking. Integración con EMM, UEM. Licenciamiento por dispositivo anual. Implementación certificada con soporte 24/7. Bogotá, Medellín, Cali, Colombia.",
    shortDescription: "MDM empresarial #1 para Android, iOS, Windows y dispositivos rugged",
    icon: "📱",
    image: "/images/logos/soti.svg",
    heroImage: "/images/hero/services/soti.svg",
    category: "software",
    features: [
      "SOTI MobiControl para gestión unificada de dispositivos móviles",
      "Soporte Android, iOS, Windows, Linux, Chrome OS",
      "Gestión centralizada desde consola web cloud u on-premise",
      "Despliegue remoto (OTA) de aplicaciones y configuraciones",
      "Políticas de seguridad: encriptación, passwords, VPN, certificates",
      "Lockdown y kiosk mode para dispositivos de uso único (POS, tablets)",
      "Geofencing y geolocalización en tiempo real de flota",
      "Borrado remoto (wipe) selectivo o completo de dispositivos",
      "Monitoreo de batería, conectividad, almacenamiento, estado",
      "Control de aplicaciones: blacklist/whitelist, instalación forzada",
      "Soporte técnico integrado: remote control, logs, diagnóstico",
      "Asset tracking para inventario de hardware y software",
      "Análisis y reportes de seguridad y cumplimiento",
      "Integración con Active Directory, LDAP, SCIM, API REST",
      "Soporte dispositivos rugged: Zebra, Honeywell, Datalogic, Panasonic"
    ],
    benefits: [
      "Control total de 10 a 100,000+ endpoints móviles",
      "Seguridad de datos empresariales en dispositivos móviles",
      "Cumplimiento de políticas corporativas y regulatorias",
      "Administración simplificada con automatización de tareas",
      "Reducción 60% en costos de soporte técnico móvil",
      "Incremento 40% en productividad de fuerza de campo",
      "Gestión de BYOD sin comprometer seguridad corporativa",
      "Protección contra pérdida/robo con geolocalización y wipe",
      "Ideal para retail (POS), logística (scanners), salud (tablets)",
      "ROI promedio 280% en primer año por eficiencia operativa"
    ]
  },
  {
    id: "hornetsecurity",
    name: "Hornetsecurity",
    slug: "hornetsecurity-colombia",
    title: "Hornetsecurity Colombia | Seguridad Email Empresarial | Antispam ATP Archivado Microsoft 365",
    description: "Distribuidor oficial Hornetsecurity en Colombia. Seguridad de correo electrónico empresarial líder en Europa. Protección avanzada contra spam, phishing, ransomware, malware por email. ATP (Advanced Threat Protection) con sandboxing. Ideal para Microsoft 365, Exchange, Google Workspace. Filtrado antispam 99.9% precisión sin falsos positivos. Email archiving con cumplimiento legal y e-discovery. Email encriptación S/MIME y TLS. Backup y recuperación de emails Office 365. Cumplimiento GDPR, ISO 27001. Protección contra fraude CEO, BEC, spear phishing. URL rewriting y sandboxing de adjuntos. Gestión centralizada multi-tenant para MSPs. Licenciamiento por usuario/buzón. Soporte 24/7. Bogotá, Colombia.",
    shortDescription: "Seguridad email #1 Europa - ATP, Archiving, Encriptación",
    icon: "✉️",
    image: "/images/logos/hornetsecurity.svg",
    heroImage: "/images/hero/services/hornetsecurity.svg",
    category: "security",
    features: [
      "Hornetsecurity Advanced Threat Protection (ATP) con sandboxing",
      "Filtrado antispam de última generación con IA (99.9% precisión)",
      "Protección antiphishing contra fraude CEO, BEC, spear phishing",
      "Antimalware de email con múltiples engines antivirus",
      "Protección contra ransomware entregado por correo electrónico",
      "Email archiving con cumplimiento legal (SOX, HIPAA, FINRA)",
      "E-discovery y búsqueda full-text de emails archivados",
      "Encriptación de mensajes: S/MIME, TLS, PDF password-protected",
      "Email continuity: acceso a emails durante caída de servidor",
      "Backup y recuperación granular de Microsoft 365 / Exchange",
      "URL rewriting para protección contra enlaces maliciosos",
      "Security Awareness Training integrado para usuarios",
      "Gestión centralizada multi-tenant ideal para MSPs",
      "Integración con Microsoft 365, Exchange, Google Workspace",
      "Reportes detallados de amenazas y cumplimiento"
    ],
    benefits: [
      "Reducción 99.9% de spam y 100% de malware conocido",
      "Protección contra amenazas sofisticadas (ATP) en tiempo real",
      "Cumplimiento regulatorio: GDPR, SOX, HIPAA, Ley 1581",
      "Protección de datos confidenciales con encriptación",
      "Disponibilidad de email garantizada 99.99%",
      "Archivado legal de emails con retención configurable",
      "Recuperación rápida de emails eliminados (backup)",
      "Prevención de fraude financiero por BEC/CEO fraud",
      "Reducción de carga en servidores de correo corporativo",
      "Implementación en minutos sin cambios en infraestructura"
    ]
  },
  {
    id: "ethical-hacking",
    name: "Ethical Hacking",
    slug: "ethical-hacking-colombia",
    title: "Ethical Hacking Colombia | Penetration Testing | Pentesting | Hacking Ético Certificado CEH OSCP",
    description: "Servicios profesionales de ethical hacking y penetration testing en Colombia. Hackers éticos certificados CEH, OSCP, GPEN, eWPT. Pruebas de penetración externa e interna de infraestructura, aplicaciones web, móviles, APIs. Red Team assessments. Análisis de vulnerabilidades con Nessus, Qualys, Burp Suite. Testing según OWASP Top 10, PTES, OSSTMM. Social engineering y phishing simulado. Wireless penetration testing. Cloud security assessment (AWS, Azure, GCP). Reportes ejecutivos y técnicos detallados. Recomendaciones priorizadas de remediación. Retesting sin costo. Cumplimiento PCI-DSS, ISO 27001, SOC 2. Sectores: financiero, e-commerce, salud, gobierno. Bogotá, Medellín, Cali, Colombia.",
    shortDescription: "Pentesting profesional por hackers éticos certificados CEH/OSCP",
    icon: "⚔️",
    heroImage: "/images/hero/services/hacking.svg",
    category: "security",
    features: [
      "Ethical hackers certificados: CEH, OSCP, GPEN, eWPT, eWPTX",
      "Penetration testing externo: perímetro de red, firewall, VPN",
      "Pentesting interno: segmentación de red, Active Directory",
      "Web application pentesting según OWASP Top 10",
      "Mobile app security testing (Android/iOS)",
      "API security assessment (REST, SOAP, GraphQL)",
      "Red Team exercises: simulación de APT y ataques dirigidos",
      "Social engineering: phishing, vishing, pretexting, baiting",
      "Wireless penetration testing (WiFi, Bluetooth, RFID)",
      "Cloud security assessment: AWS, Azure, GCP, Kubernetes",
      "Análisis de vulnerabilidades automatizado y manual",
      "Explotación controlada de vulnerabilidades críticas",
      "Reportes ejecutivos y técnicos con evidencias detalladas",
      "Recomendaciones priorizadas según riesgo (CVSS)",
      "Retesting sin costo adicional post-remediación"
    ],
    benefits: [
      "Identificación proactiva de vulnerabilidades antes que atacantes",
      "Mejora medible de postura de seguridad corporativa",
      "Cumplimiento auditorías: PCI-DSS, ISO 27001, SOC 2, HIPAA",
      "Protección contra brechas de seguridad y pérdida de datos",
      "Validación efectividad de controles de seguridad existentes",
      "Conciencia real de riesgos para toma de decisiones ejecutivas",
      "Priorización inteligente de inversiones en seguridad",
      "Cumplimiento regulatorio y requisitos de clientes",
      "Reducción de superficie de ataque en 70% promedio",
      "Metodología probada según estándares PTES, OSSTMM, NIST"
    ]
  },
  {
    id: "dlp",
    name: "DLP - Data Loss Prevention",
    slug: "dlp-bogota-colombia",
    title: "DLP Colombia | Data Loss Prevention | Prevención Pérdida de Datos | Symantec Forcepoint McAfee",
    description: "Soluciones DLP (Data Loss Prevention) empresariales en Colombia. Prevención de pérdida y fuga de datos sensibles y confidenciales. Protección de información en reposo, en uso, en movimiento. Marcas líderes: Symantec DLP, Forcepoint DLP, McAfee DLP, Digital Guardian. Detección automática de datos sensibles: PII, PCI, PHI, propiedad intelectual. Bloqueo de transferencias no autorizadas vía email, USB, cloud, impresión. Monitoreo de endpoints, red, cloud storage (OneDrive, Dropbox, Google Drive). Clasificación automática de documentos. Cumplimiento GDPR, HIPAA, PCI-DSS, Ley 1581. Reportes forenses y de cumplimiento. Integración con SIEM. Sectores: financiero, salud, legal, gobierno. Bogotá, Colombia.",
    shortDescription: "DLP empresarial - Protección total contra fuga de datos",
    icon: "🔒",
    heroImage: "/images/hero/services/dlp.svg",
    category: "security",
    features: [
      "Soluciones DLP líderes: Symantec, Forcepoint, McAfee, Digital Guardian",
      "Detección automática de datos sensibles con machine learning",
      "Protección de datos en reposo (servidores, endpoints, cloud)",
      "Protección de datos en movimiento (email, web, FTP, IM)",
      "Protección de datos en uso (aplicaciones, copiar/pegar, captura)",
      "Bloqueo de transferencias no autorizadas: USB, CD, impresión",
      "Monitoreo de cloud storage: OneDrive, Dropbox, Google Drive, Box",
      "Control de dispositivos móviles con contenido corporativo",
      "Clasificación automática de documentos por sensibilidad",
      "Auditoría y logging completo de actividades con datos",
      "Integración con Active Directory, SIEM, ticketing",
      "OCR para detección de datos en imágenes y escaneos",
      "Fingerprinting de documentos confidenciales",
      "Reportes ejecutivos y de cumplimiento automatizados",
      "Alertas en tiempo real para incidentes críticos"
    ],
    benefits: [
      "Protección de propiedad intelectual y secretos comerciales",
      "Cumplimiento normativo: GDPR, HIPAA, PCI-DSS, SOX, Ley 1581",
      "Reducción 85% de riesgos legales por fuga de datos",
      "Control total de exposición de datos confidenciales",
      "Prevención de insider threats y empleados malintencionados",
      "Visibilidad completa de movimiento de datos corporativos",
      "Reducción de primas de seguros cibernéticos",
      "Protección de datos de clientes y cumplimiento contractual",
      "Forense y evidencia para investigaciones de incidentes",
      "ROI promedio 250% por prevención de brechas de datos"
    ]
  },
  {
    id: "rthreat",
    name: "RThreat",
    slug: "rthreat-bogota-colombia",
    title: "RThreat - Inteligencia de Amenazas en Tiempo Real",
    description: "Plataforma de inteligencia de amenazas en tiempo real para protección proactiva.",
    shortDescription: "Inteligencia de amenazas",
    icon: "🚨",
    category: "security",
    features: [
      "Inteligencia de amenazas",
      "Análisis de patrones",
      "Alertas en tiempo real",
      "Automatización de respuestas",
      "Dashboard interactivo"
    ],
    benefits: [
      "Detección temprana de amenazas",
      "Respuesta rápida a incidentes",
      "Reducción de tiempos de investigación",
      "Mejora continua de defenses"
    ]
  },
  {
    id: "anydesk",
    name: "AnyDesk",
    slug: "software-anydesk-colombia",
    title: "AnyDesk - Escritorio Remoto Profesional",
    description: "Software de escritorio remoto AnyDesk para acceso seguro a computadoras y dispositivos.",
    shortDescription: "Acceso remoto profesional",
    icon: "🖥️",
    image: "/images/logos/anydesk.svg",
    category: "software",
    features: [
      "Conexión remota de alta velocidad",
      "Transferencia de archivos",
      "Sesiones de soporte",
      "Grabación de sesiones",
      "Integración empresarial"
    ],
    benefits: [
      "Rendimiento excepcional",
      "Seguridad de nivel empresarial",
      "Facilidad de uso",
      "Compatibilidad universal"
    ]
  },
  {
    id: "equipos-computo",
    name: "Equipos de Cómputo",
    slug: "equipos-de-computo-bogota-colombia",
    title: "Venta y Distribución de Equipos de Cómputo",
    description: "Distribución de equipos de cómputo, laptops, desktops y accesorios de alto rendimiento.",
    shortDescription: "Equipos y hardware empresarial",
    icon: "💾",
    category: "infraestructura",
    features: [
      "Equipos de última generación",
      "Garantía extendida",
      "Configuración personalizada",
      "Servicio técnico",
      "Financiamiento disponible"
    ],
    benefits: [
      "Mejor relación precio-rendimiento",
      "Soporte técnico incluido",
      "Actualización fácil",
      "Servicio postventa completo"
    ]
  },
  {
    id: "brother",
    name: "Equipos Brother",
    slug: "brother",
    title: "Impresoras y Multifuncionales Brother",
    description: "Soluciones de impresión Brother con tecnología de punta para empresas.",
    shortDescription: "Equipos de impresión profesional",
    icon: "🖨️",
    category: "infraestructura",
    features: [
      "Impresoras multifuncionales",
      "Impresoras de etiquetas",
      "Faxes profesionales",
      "Soluciones de flujo documental",
      "Soporte técnico especializado"
    ],
    benefits: [
      "Productividad aumentada",
      "Reducción de costos de impresión",
      "Confiabilidad comprobada",
      "Mantenimiento simplificado"
    ]
  }
];

export const categories = [
  { id: "antivirus", name: "Antivirus", color: "from-red-500 to-red-600" },
  { id: "consultoria", name: "Consultoría", color: "from-blue-500 to-blue-600" },
  { id: "infraestructura", name: "Infraestructura", color: "from-green-500 to-green-600" },
  { id: "software", name: "Software", color: "from-purple-500 to-purple-600" },
  { id: "security", name: "Seguridad", color: "from-yellow-500 to-yellow-600" }
];
