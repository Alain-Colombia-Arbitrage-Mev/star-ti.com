# Cloudflare Pages Deployment

Este proyecto está configurado para desplegarse en Cloudflare Pages.

## Configuración de Build

- **Build command:** `npm run pages:build`
- **Output directory:** `.vercel/output/static`
- **Node version:** 18 o superior
- **Deploy command:** ⚠️ **NO CONFIGURAR** - Dejar vacío (Cloudflare Pages despliega automáticamente)
- **Framework:** @cloudflare/next-on-pages (nota: deprecated pero funcional, migración a OpenNext pendiente)

## Pasos para Desplegar

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Selecciona **Pages** en el menú lateral
3. Haz clic en **Create a project**
4. Conecta tu repositorio de GitHub
5. Configura:
   - **Project name:** `star-ti-website`
   - **Production branch:** `main`
   - **Build command:** `npm run pages:build`
   - **Build output directory:** `.vercel/output/static`
   - **Root directory:** `/` (raíz del proyecto)
   - **Deploy command:** ⚠️ **DEJAR VACÍO** (no configurar)
6. Haz clic en **Save and Deploy**

## ⚠️ IMPORTANTE: Deploy Command

**NO configures un "Deploy command" en Cloudflare Pages.** 

Cloudflare Pages automáticamente despliega el contenido del directorio de output después del build. Si configuras un comando de deploy personalizado, causará errores como:
```
✘ [ERROR] It looks like you've run a Workers-specific command in a Pages project.
```

**Solo necesitas:**
- ✅ Build command: `npm run pages:build`
- ✅ Output directory: `.vercel/output/static`
- ❌ Deploy command: (vacío)

## Nota sobre @cloudflare/next-on-pages

Este proyecto usa `@cloudflare/next-on-pages@1.13.16` que está deprecated pero sigue funcionando correctamente. 
Cloudflare recomienda migrar a `@opennextjs/cloudflare` en el futuro, pero por ahora esta versión funciona sin problemas.

## Variables de Entorno

Si necesitas variables de entorno, agrégalas en:
- Cloudflare Dashboard → Pages → Tu proyecto → Settings → Environment Variables

## Dominio Personalizado

Para conectar un dominio personalizado:
1. Ve a Settings → Custom domains
2. Agrega tu dominio (ej: `star-ti.com`)
3. Sigue las instrucciones de DNS

## Notas Técnicas

- Todas las páginas usan `runtime = 'edge'` para compatibilidad con Cloudflare Pages
- `generateStaticParams` está deshabilitado para compatibilidad con edge runtime
- El build genera archivos estáticos en `.vercel/output/static`

