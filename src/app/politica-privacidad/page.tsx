import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "Política de Privacidad | STAR Solutions T.I.",
  description: "Conoce cómo protegemos tu información personal."
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                Última actualización: Octubre 2024
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introducción</h2>
              <p className="text-gray-700 mb-4">
                STAR Solutions T.I. respeta tu privacidad y se compromete a proteger tus datos personales.
                Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tu información.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Información que Recopilamos</h2>
              <p className="text-gray-700 mb-4">Recopilamos información que proporcionas voluntariamente:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Nombre, email y teléfono en formularios de contacto</li>
                <li>Información de empresa cuando aplica</li>
                <li>Mensajes y consultas que envías</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Uso de la Información</h2>
              <p className="text-gray-700 mb-4">Utilizamos tu información para:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Responder a tus consultas y solicitudes</li>
                <li>Enviar información sobre nuestros servicios</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Nuestro sitio utiliza cookies para mejorar tu experiencia. Las cookies son pequeños archivos
                almacenados en tu dispositivo que nos ayudan a entender cómo usas nuestro sitio.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Seguridad</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas y administrativas para proteger tu información
                contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Tus Derechos</h2>
              <p className="text-gray-700 mb-4">
                Tienes derecho a acceder, corregir o eliminar tus datos personales. Contacta con nosotros
                para ejercer estos derechos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:
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
