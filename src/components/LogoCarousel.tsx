import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoItem {
  name: string;
  src: string;
  alt?: string;
}

interface LogoCarouselProps {
  logos: LogoItem[];
  className?: string;
}

export function LogoCarousel({ logos, className }: LogoCarouselProps) {
  const items = [...logos, ...logos];

  return (
    <div className={cn("overflow-hidden rounded-3xl border border-slate-200 bg-white/80 px-8 py-6 shadow-lg", className)}>
      <div className="relative h-16">
        <div className="logo-marquee absolute flex h-16 min-w-max gap-10">
          {items.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-16 w-40 items-center justify-center rounded-2xl border border-slate-100 bg-white/90 px-6 py-3 shadow-sm"
            >
              <Image
                src={logo.src}
                alt={logo.alt ?? logo.name}
                width={140}
                height={40}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


