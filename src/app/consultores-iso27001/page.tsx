import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Consultores ISO 27001 Certificados | Expertos en Ciberseguridad Empresarial",
  description:
    "Consultores ISO 27001 Lead Implementer con +15 años de experiencia. Implementamos SGSI, auditorías de ciberseguridad y cumplimiento normativo para empresas en Colombia. Certificación garantizada.",
};

export default function ConsultoresISO27001Redirect() {
  redirect("/es/consultores-iso27001");
}

