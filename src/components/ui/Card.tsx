import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
};

export function Card({
  children,
  href,
  className = "",
  hover = false,
  padding = "md"
}: CardProps) {
  const baseStyles = `
    bg-white rounded-2xl
    border border-gray-200
    shadow-sm
    transition-all duration-300
    ${hover ? "hover:shadow-xl hover:border-blue-300 hover:-translate-y-1" : ""}
    ${paddingStyles[padding]}
    ${className}
  `.trim().replace(/\s+/g, " ");

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <div className={baseStyles}>
      {children}
    </div>
  );
}




