import { redirect } from "next/navigation";
import { defaultLanguage } from "@/config/i18n";

export const runtime = 'edge';

interface CatchAllProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CatchAllPage({ params }: CatchAllProps) {
  const { slug } = await params;
  const path = slug ? `/${slug.join("/")}` : "";
  
  // Redirect to the same path with default language prefix
  redirect(`/${defaultLanguage}${path}`);
}

