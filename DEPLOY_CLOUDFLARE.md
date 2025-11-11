# 🚀 Guía de Despliegue en Cloudflare Pages

## ✅ Pre-requisitos Completados

- ✅ Código en GitHub: `Alain-Colombia-Arbitrage-Mev/star-ti.com`
- ✅ Build exitoso verificado localmente
- ✅ Errores 500 corregidos (icon.png, grid.svg)
- ✅ Runtime edge configurado en todas las páginas
- ✅ Dependencias actualizadas

---

## 📋 Pasos para Desplegar en Cloudflare Pages

### **1. Acceder a Cloudflare Dashboard**

1. Ve a: https://dash.cloudflare.com/
2. Inicia sesión con tu cuenta de Cloudflare
3. Selecciona tu cuenta/organización

---

### **2. Crear Nuevo Proyecto de Pages**

1. En el menú lateral, haz clic en **"Pages"**
2. Haz clic en **"Create a project"**
3. Selecciona **"Connect to Git"**

---

### **3. Conectar Repositorio de GitHub**

1. Selecciona **GitHub** como proveedor
2. Autoriza Cloudflare Pages a acceder a tus repositorios
3. Busca y selecciona: **`Alain-Colombia-Arbitrage-Mev/star-ti.com`**
4. Haz clic en **"Begin setup"**

---

### **4. Configurar Build Settings**

Configura los siguientes valores:

```
Project name: star-ti-website
Production branch: main
Framework preset: Next.js (Static HTML Export) - OPCIONAL, puedes dejarlo en "None"
```

**Build Settings:**
```
Build command: npm run pages:build
Build output directory: .vercel/output/static
Root directory: / (raíz del proyecto)
```

**⚠️ IMPORTANTE:**
- **Deploy command:** ⚠️ **DEJAR VACÍO** (no configurar nada)
- **Node version:** 18 o superior (selecciona en el dropdown)

---

### **5. Variables de Entorno (Opcional)**

Si necesitas variables de entorno:
1. Ve a **Settings** → **Environment Variables**
2. Agrega las variables necesarias
3. Configura para **Production**, **Preview**, o ambos

---

### **6. Guardar y Desplegar**

1. Haz clic en **"Save and Deploy"**
2. Cloudflare comenzará el proceso de build automáticamente
3. Espera a que termine (puede tomar 3-5 minutos la primera vez)

---

### **7. Verificar Despliegue**

Una vez completado el build:

1. Verás una URL temporal: `https://star-ti-website.pages.dev`
2. Haz clic para verificar que el sitio funciona
3. Prueba las rutas principales:
   - `/es/consultores-iso27001`
   - `/es/`
   - `/es/contactenos`

---

### **8. Configurar Dominio Personalizado (Opcional)**

Si tienes un dominio personalizado:

1. Ve a **Settings** → **Custom domains**
2. Haz clic en **"Set up a custom domain"**
3. Ingresa tu dominio (ej: `star-ti.com`)
4. Sigue las instrucciones de DNS:
   - Agrega un registro CNAME apuntando a `star-ti-website.pages.dev`
   - O usa el proxy de Cloudflare (recomendado)

---

## 🔍 Verificar que el Despliegue Funciona

### **URLs a Probar:**

```
✅ https://star-ti-website.pages.dev/
✅ https://star-ti-website.pages.dev/es/
✅ https://star-ti-website.pages.dev/es/consultores-iso27001
✅ https://star-ti-website.pages.dev/grid.svg (debe cargar)
✅ https://star-ti-website.pages.dev/icon.png (debe cargar)
```

---

## 🐛 Solución de Problemas

### **Error: Build Failed**

1. Revisa los logs en Cloudflare Dashboard
2. Verifica que el **Build command** sea exactamente: `npm run pages:build`
3. Verifica que el **Output directory** sea: `.vercel/output/static`
4. Asegúrate de que **NO hay un Deploy command** configurado

### **Error 500 en Producción**

1. Revisa los logs de runtime en Cloudflare Dashboard
2. Verifica que todas las páginas tengan `export const runtime = 'edge';`
3. Verifica que no haya `generateStaticParams` en páginas con edge runtime

### **Error 404 en Rutas**

1. Verifica que el middleware esté funcionando correctamente
2. Revisa que las rutas dinámicas estén configuradas con edge runtime

---

## 📊 Monitoreo Post-Despliegue

1. **Analytics:** Cloudflare Pages incluye analytics básicos
2. **Logs:** Revisa los logs en tiempo real en el dashboard
3. **Performance:** Usa Cloudflare Analytics para métricas de rendimiento

---

## 🔄 Deploys Automáticos

Cloudflare Pages automáticamente:
- ✅ Detecta pushes a la rama `main`
- ✅ Ejecuta el build automáticamente
- ✅ Despliega la nueva versión
- ✅ Mantiene un historial de deploys

**Cada vez que hagas push a `main`, se desplegará automáticamente.**

---

## ✅ Checklist Final

Antes de considerar el despliegue completo:

- [ ] Build exitoso en Cloudflare Pages
- [ ] Página principal carga correctamente
- [ ] Rutas dinámicas funcionan (`/es/consultores-iso27001`)
- [ ] Assets estáticos cargan (grid.svg, icon.png)
- [ ] Formulario de lead magnet funciona
- [ ] No hay errores 500 en consola
- [ ] Dominio personalizado configurado (si aplica)

---

**¡Listo para desplegar!** 🚀

