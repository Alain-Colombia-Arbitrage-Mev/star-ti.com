import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 shadow-lg hover:shadow-xl",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 shadow hover:shadow-lg",
  outline:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
  ghost: "text-white/80 hover:text-white hover:bg-white/10",
  danger:
    "bg-gradient-to-r from-rose-600 to-red-600 text-white hover:from-rose-500 hover:to-red-500 shadow-lg hover:shadow-xl",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = [
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl",
    "transition-all duration-300 ease-out",
    "transform hover:-translate-y-0.5 active:translate-y-0",
    "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (href && !disabled) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles} disabled={disabled}>
      {children}
    </button>
  );
}







