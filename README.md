# STAR Solutions T.I. - Website

🌐 **Sitio web corporativo de STAR Solutions T.I.**

Empresa líder en Colombia especializada en soluciones de ciberseguridad, antivirus empresarial (Bitdefender, Kaspersky, ESET), consultoría ISO 27001, cableado estructurado y servicios de TI.

## 🚀 Características

- ✅ **Multi-idioma**: Soporte para Español e Inglés
- ✅ **Multi-país**: Preparado para Colombia, Venezuela y Estados Unidos
- ✅ **SEO Optimizado**: Metadata, canonical URLs y sitemap
- ✅ **Responsive Design**: Optimizado para mobile, tablet y desktop
- ✅ **Next.js 15**: App Router con TypeScript
- ✅ **Tailwind CSS**: Diseño moderno y profesional
- ✅ **Performance**: Fast Refresh y optimización de imágenes

## 📦 Servicios Destacados

- **Antivirus para Empresas**: Bitdefender, Kaspersky, ESET, Trend Micro
- **Consultoría ISO 27001:2022**: Implementación y certificación SGSI
- **Cableado Estructurado**: Cat6A, Cat7, Fibra Óptica certificada
- **Ethical Hacking**: Pentesting y auditorías de seguridad
- **SOC 24/7**: Centro de Operaciones de Seguridad
- **DLP**: Prevención de pérdida de datos

## 🛠️ Tecnologías

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React 19](https://react.dev/)

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

#### Para Cloudflare Pages:

```bash
npm run pages:build
```

Esto genera los archivos en `.vercel/output/static/` listos para Cloudflare Pages.

#### Preview local con Wrangler:

```bash
npm run preview
```

#### Deploy a Cloudflare Pages:

```bash
npm run deploy
```

O configura en Cloudflare Pages dashboard:
- **Build command**: `npm run pages:build`
- **Build output directory**: `.vercel/output/static`
- **Node version**: `20.18.0`

### Lint

```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
star-ti-website/
├── src/
│   ├── app/
│   │   ├── [lang]/              # Rutas localizadas
│   │   │   ├── [slug]/          # Páginas de servicios dinámicas
│   │   │   ├── contactenos/     # Página de contacto
│   │   │   ├── nosotros/        # Página "Acerca de"
│   │   │   └── page.tsx         # Homepage localizada
│   │   ├── [...slug]/           # Catch-all para redirects
│   │   └── layout.tsx           # Layout raíz
│   ├── components/
│   │   ├── ui/                  # Componentes UI reutilizables
│   │   ├── Header.tsx           # Navegación principal
│   │   └── Footer.tsx           # Pie de página
│   ├── config/
│   │   ├── i18n.ts              # Configuración de idiomas
│   │   └── seo.ts               # Configuración SEO
│   ├── data/
│   │   └── services.ts          # Datos de servicios
│   └── i18n/
│       ├── es.ts                # Traducciones español
│       └── en.ts                # Traducciones inglés
├── middleware.ts                # Middleware para i18n
└── public/
    └── images/                  # Imágenes y assets
```

## 🌍 Internacionalización (i18n)

El sitio soporta múltiples idiomas con rutas localizadas:

- **Español**: `/es/` (por defecto)
- **English**: `/en/`

Las URLs sin prefijo de idioma redirigen automáticamente al idioma por defecto.

Ejemplo:
- `/` → `/es/`
- `/antivirus-para-empresas-colombia` → `/es/antivirus-para-empresas-colombia`

## 📞 Contacto

- **Website**: https://star-ti.com
- **Email**: info@star-ti.com
- **Teléfono**: +57 (1) 234-5678
- **Ubicación**: Bogotá, Colombia

## 📄 Licencia

© 2024 STAR Solutions T.I. Todos los derechos reservados.
