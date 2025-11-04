import Link from "next/link";
import Image from "next/image";
import { Service } from "@/data/services";
import { Badge } from "./ui/Badge";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/${service.slug}`} className="block h-full">
      <div className="group h-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 cursor-pointer hover-lift relative overflow-hidden">
        {/* Decorative gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-5">
          {service.image ? (
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:shadow-lg transition-all duration-300 flex-shrink-0">
              <Image
                src={service.image}
                alt={service.name}
                fill
                  sizes="64px"
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                placeholder="empty"
              />
            </div>
          ) : (
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                {service.icon}
              </div>
          )}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-1">
            {service.name}
          </h3>
        </div>
          </div>
          
          <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <Badge
              key={idx}
                variant="primary"
                size="sm"
                className="group-hover:bg-blue-200 group-hover:text-blue-800 transition-colors"
            >
              {feature}
              </Badge>
          ))}
        </div>
          
          <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
            <span>Ver más</span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
