"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

export function FloatingLeadMagnetBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de 50% de scroll
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrolled / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 20 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollPercentage <= 20) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4 animate-slide-up">
      <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-300/50 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 p-4 shadow-2xl backdrop-blur-sm sm:p-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white text-lg font-bold transition-colors hover:bg-white/30"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4 text-white">
            <div className="hidden sm:flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 text-3xl backdrop-blur shadow-lg">
              🎁
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold sm:text-base">
                <span className="inline-block animate-pulse">⚠️</span> <strong>¿Perdiste contratos por NO tener SGSI certificado?</strong>
              </p>
              <p className="mt-1 text-xs text-white/90 sm:text-sm">
                SGSI + Certificación ISO 27001 en 90 días | +$2.400M ganados | 🔥 Solo 3 cupos
              </p>
            </div>
          </div>
          
          <Button 
            href="#lead-magnet" 
            size="md" 
            className="w-full flex-shrink-0 bg-white text-red-700 font-bold shadow-2xl hover:bg-red-50 hover:scale-105 transition-all sm:w-auto animate-pulse"
          >
            🔥 Quiero Certificarme YA
          </Button>
        </div>
      </div>
    </div>
  );
}

