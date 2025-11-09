import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

const sizeStyles = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full"
};

export function Container({
  children,
  size = "xl",
  className = ""
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto px-4 sm:px-6 lg:px-8
        ${sizeStyles[size]}
        ${className}
      `.trim().replace(/\s+/g, " ")}
    >
      {children}
    </div>
  );
}









