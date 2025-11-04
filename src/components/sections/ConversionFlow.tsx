import { ReactNode } from "react";
import { Container, Card, Button, Badge } from "@/components/ui";
import { cn } from "@/lib/cn";

interface ConversionFlowStep {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface ConversionFlowCTA {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "ghost" | "secondary" | "danger";
}

type ConversionFlowTheme = "light" | "dark" | "gradient";

interface ConversionFlowProps {
  id?: string;
  eyebrow?: string;
  badge?: string;
  title: string;
  description: string;
  steps: ConversionFlowStep[];
  highlights?: string[];
  primaryCta: ConversionFlowCTA;
  secondaryCta?: ConversionFlowCTA;
  theme?: ConversionFlowTheme;
}

const themeClasses: Record<ConversionFlowTheme, { section: string; card: string; secondaryCard: string; text: string; accent: string; badge: string } > = {
  light: {
    section: "bg-white text-slate-900",
    card: "border-slate-200 bg-white text-slate-900",
    secondaryCard: "border-blue-100 bg-blue-50 text-blue-900",
    text: "text-slate-600",
    accent: "text-blue-600",
    badge: "border border-blue-200 bg-blue-50 text-blue-700"
  },
  dark: {
    section: "bg-slate-950 text-white",
    card: "border-white/15 bg-white/10 text-white",
    secondaryCard: "border-white/20 bg-white/10 text-white",
    text: "text-white/70",
    accent: "text-blue-200",
    badge: "border border-white/20 bg-white/10 text-white"
  },
  gradient: {
    section: "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white",
    card: "border-white/15 bg-white/10 text-white",
    secondaryCard: "border-white/15 bg-white/10 text-white",
    text: "text-white/75",
    accent: "text-blue-200",
    badge: "border border-white/20 bg-white/10 text-white"
  }
};

export function ConversionFlow({
  id,
  eyebrow,
  badge,
  title,
  description,
  steps,
  highlights,
  primaryCta,
  secondaryCta,
  theme = "light"
}: ConversionFlowProps) {
  const themeStyle = themeClasses[theme];

  return (
    <section id={id} className={cn("py-24", themeStyle.section)}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-blue-500/80">
              <span className="h-px w-10 bg-current/30" />
              <span>{eyebrow}</span>
              <span className="h-px w-10 bg-current/30" />
            </div>
          )}
          {badge && (
            <div className="mb-3 flex justify-center">
              <Badge className={cn("px-4 py-1.5 text-[11px] uppercase tracking-[0.35em]", themeStyle.badge)}>
                {badge}
              </Badge>
            </div>
          )}
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className={cn("mt-4 text-base sm:text-lg", themeStyle.text)}>
            {description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className={cn("relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", themeStyle.card)}
              padding="lg"
            >
              <span className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-semibold text-white shadow-lg">
                {index + 1}
              </span>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  {step.icon && <span className="text-2xl">{step.icon}</span>}
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className={cn("text-sm leading-relaxed", themeStyle.text)}>{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {(highlights?.length ?? 0) > 0 && (
          <div className="mt-10 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {highlights!.map((item) => (
              <Card key={item} className={cn("flex h-full items-center gap-3", themeStyle.secondaryCard)} padding="md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">✓</span>
                <span className={cn("leading-relaxed", themeStyle.text)}>{item}</span>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={primaryCta.href} size="lg" className="shadow-colored">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              size="lg"
              variant={secondaryCta.variant ?? "outline"}
              className={cn(
                theme !== "light" ? "border-white/30 text-white hover:border-white" : undefined,
                theme === "light" ? "border-blue-200 text-blue-700 hover:border-blue-300" : undefined
              )}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

