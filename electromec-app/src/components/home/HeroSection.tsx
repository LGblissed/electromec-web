"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    brand: "SCHNEIDER ELECTRIC",
    logo: "/brandlogos/schneider.png",
    image: "/sliders/Schneider-Electric.jpg",
    title: "EcoStruxure Architecture",
    description: "Liderando la transformación digital de la gestión de la energía y la automatización.",
    color: "#3dcd58", // Schneider Green
    accent: "from-green-500 to-emerald-700"
  },
  {
    id: 2,
    brand: "MEC",
    logo: "/brandlogos/mec.png",
    image: "https://images.unsplash.com/photo-1565514020125-278d38bfa794?q=80&w=2070", // Industrial Motor
    title: "Tu Fuerza Productiva",
    description: "Motores eléctricos de alto rendimiento para impulsar la industria nacional.",
    color: "#ef4444", // Mec Red
    accent: "from-red-600 to-orange-600"
  },
  {
    id: 3,
    brand: "MACROLED",
    logo: "/brandlogos/macroled.png",
    image: "/sliders/macroled.jpg", // User Image
    title: "Future Vision",
    description: "Iluminación inteligente LED que adapta cada espacio a tus necesidades.",
    color: "#00eeff", // Macroled Cyan
    accent: "from-cyan-400 to-blue-600"
  },
  {
    id: 4,
    brand: "PRYSMIAN GROUP",
    logo: "/brandlogos/Prysmian_Logo.svg.png",
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071", // Fiber/Cable Abstract
    title: "The Planet's Pathways",
    description: "Conectando el futuro con cables de máxima seguridad y transmisión de datos.",
    color: "#a855f7", // Purple/Violet
    accent: "from-purple-600 to-indigo-600"
  },
  {
    id: 5,
    brand: "JADEVER TOOLS",
    logo: "/brandlogos/LOGO_JADEVER_1.png",
    image: "/sliders/jadever.jpg", // User Image
    title: "Heavy Duty",
    description: "Herramientas robustas diseñadas para los desafíos más exigentes de la construcción.",
    color: "#f97316", // Jadever Orange
    accent: "from-orange-500 to-red-600"
  },
  {
    id: 6,
    brand: "CHINT ELECTRIC",
    logo: "/brandlogos/chint.png",
    image: "/sliders/chint.jpg", // User Image
    title: "Empower the World",
    description: "Soluciones de energía inteligente y protección eléctrica de clase mundial.",
    color: "#2563eb", // Chint Blue
    accent: "from-blue-600 to-indigo-800"
  },
  {
    id: 7,
    brand: "ARGENPLAS",
    logo: "/brandlogos/argenplas.png",
    image: "https://images.unsplash.com/photo-1621905251189-fc01530c6c37?q=80&w=2069", // Copper Wire / Construction
    title: "Soluciones Confiables",
    description: "Conductores eléctricos fabricados con la más alta calidad y seguridad.",
    color: "#fbbf24", // Industrial Yellow/Gold
    accent: "from-yellow-500 to-amber-600"
  },
  {
    id: 8,
    brand: "GENROD",
    logo: "/brandlogos/genrod.png",
    image: "/sliders/genrod17.jpg", // User Image
    title: "Instalaciones Seguras",
    description: "Sistemas de canalización y envolventes que garantizan protección total.",
    color: "#10b981", // Genrod Greenish
    accent: "from-emerald-500 to-teal-600"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    const duration = 5000; // Speed up slightly to 5s for 8 slides
    const interval = 50;

    const timer = setInterval(() => {
      progressRef.current += (interval / duration) * 100;
      if (progressRef.current >= 100) {
        progressRef.current = 0;
        setCurrent((prev) => (prev + 1) % SLIDES.length);
      }
      setProgress(progressRef.current);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleManualChange = (index: number) => {
    setCurrent(index);
    progressRef.current = 0;
    setProgress(0);
  };

  return (
    <section className="h-screen w-full relative overflow-hidden bg-[#020202] flex items-center">

      {/* --- BACKGROUND LAYER --- */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Main Bg Image with Zoom */}
          <div className={`absolute inset-0 transform transition-transform duration-[8000ms] ease-linear overflow-hidden ${index === current ? "scale-105" : "scale-100"
            }`}>
            <Image
              src={slide.image}
              alt={slide.brand}
              fill
              priority={index === 0}
              className="object-cover opacity-50"
            />
          </div>

          {/* Elegant Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} opacity-30 mix-blend-overlay`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">

        {/* Animated Brand Logo Container */}
        <div className="h-24 mb-6 relative overflow-visible">
          {SLIDES.map((slide, index) => (
            index === current && (
              <div key={`logo-${index}`} className="absolute top-0 left-0 animate-fade-in-right">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 inline-block shadow-2xl">
                  <Image
                    src={slide.logo}
                    alt={slide.brand}
                    width={200}
                    height={80}
                    className="h-12 w-auto object-contain brightness-0 invert opacity-90 drop-shadow-md"
                  />
                </div>
              </div>
            )
          ))}
        </div>

        {/* Clean Massive Typography */}
        <div className="relative mb-8 h-32 md:h-48 overflow-hidden">
          {SLIDES.map((slide, index) => (
            index === current && (
              <div key={`text-${index}`} className="absolute top-0 left-0 w-full animate-slide-up-fade">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-brand text-white leading-tight tracking-tight drop-shadow-lg">
                  {slide.title}
                  <span className="text-cyan-400">.</span>
                </h1>
              </div>
            )
          ))}
        </div>

        {/* Description */}
        <div className="max-w-xl relative h-28">
          {SLIDES.map((slide, index) => (
            index === current && (
              <div key={`desc-${index}`} className="absolute inset-0 animate-fade-up-delayed">
                <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed border-l-4 border-cyan-500 pl-6">
                  {slide.description}
                </p>
              </div>
            )
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link href="/contacto" className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all duration-300 rounded-none">
            <span className="relative flex items-center gap-3">
              Explorar Soluciones
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

      </div>

      {/* --- HUD CONTROLS --- */}
      <div className="absolute bottom-10 right-6 md:right-12 flex gap-3 z-30 flex-wrap max-w-[50%] justify-end">
        {SLIDES.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleManualChange(index)}
            aria-label={`Ir a slide ${index + 1}: ${slide.brand}`}
            className={`group relative h-1 transition-all duration-500 mb-2 ${index === current ? "w-12 bg-white" : "w-6 bg-white/30 hover:bg-white/50"}`}
          >
            {/* Progress bar for active slide */}
            {index === current && (
              <div
                className="absolute top-0 left-0 h-full bg-cyan-400 transition-all duration-100 ease-linear shadow-[0_0_10px_cyan]"
                style={{ width: `${progress}%` }}
              ></div>
            )}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-up-fade {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up-fade {
            animation: slide-up-fade 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes fade-in-right {
            0% { transform: translateX(-20px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        .animate-fade-in-right {
            animation: fade-in-right 0.8s ease-out forwards;
        }
        @keyframes fade-up-delayed {
           0% { transform: translateY(20px); opacity: 0; }
           100% { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-up-delayed {
            animation: fade-up-delayed 0.8s ease-out 0.2s forwards;
            opacity: 0;
        }
      `}</style>
    </section>
  );
}
