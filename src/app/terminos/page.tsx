import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones | STAR Solutions T.I.",
  description: "Lee nuestros términos y condiciones de uso."
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                Última actualización: Octubre 2024
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Aceptación de Términos</h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar este sitio web, aceptas estar vinculado por estos términos y condiciones.
                Si no aceptas estos términos, no utilices este sitio.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Licencia de Uso</h2>
              <p className="text-gray-700 mb-4">
                Se te otorga una licencia limitada, no exclusiva e intransferible para acceder y utilizar
                este sitio para propósitos personales.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Responsabilidades del Usuario</h2>
              <p className="text-gray-700 mb-4">Eres responsable de:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Toda actividad en tu cuenta</li>
                <li>Cumplir con todas las leyes aplicables</li>
                <li>No usar el sitio para actividades ilícitas</li>
                <li>No intentar acceder sin autorización</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Descargo de Responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                Este sitio se proporciona &quot;tal cual&quot; sin garantías de ningún tipo. STAR Solutions T.I.
                no se responsabiliza por daños indirectos, incidentales o consecuentes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                En ningún caso STAR Solutions T.I. será responsable por daños que superen el monto
                pagado por el usuario, si corresponde.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento.
                Los cambios serán efectivos inmediatamente.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para preguntas sobre estos términos, contacta con:
              </p>
              <p className="text-gray-700 mb-4">
                Email: <a href="mailto:info@star-ti.com" className="text-blue-600 hover:text-blue-700">info@star-ti.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
