"use client";

import Image from "next/image";
import Link from "next/link";
import { Hammer, Mail, Phone, ArrowRight } from "lucide-react";
import BrandsTicker from "@/components/home/BrandsTicker";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col justify-between overflow-x-hidden bg-[#050505] text-white">

      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 mix-blend-overlay"></div>
      </div>

      {/* Main Content Centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 w-full max-w-5xl mx-auto text-center mt-10">

        {/* Animated Logo */}
        <div className="mb-10 animate-fade-in-down">
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/20 blur-xl rounded-full opacity-50 animate-pulse"></div>
            <Image
              src="/electromeclogo.jpg"
              alt="ElectroMec"
              width={400}
              height={150}
              className="w-56 md:w-72 h-auto logo-filter relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full mb-8 animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </span>
          <span className="text-gray-300 text-xs font-bold uppercase tracking-[0.3em]">Página en Proceso</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black font-brand tracking-tighter mb-6 leading-tight animate-fade-in-up delay-100">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            PRÓXIMAMENTE
          </span>
          <span className="block text-2xl md:text-4xl font-light text-cyan-400 mt-2 tracking-widest">
            ELECTROMEC 2.0
          </span>
        </h1>

        <p className="text-gray-400 text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
          Estamos cargando nuestro nuevo catálogo digital con las mejores marcas del mercado. Volvemos en breve con más potencia.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto animate-fade-in-up delay-300">


          <a
            href="https://wa.me/5492395450285"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group relative inline-flex items-center justify-center px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-none"
          >
            <span className="relative flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              WHATSAPP
            </span>
          </a>
        </div>

      </div>

      {/* Brands Ticker at Bottom */}
      <div className="relative z-20 w-full border-t border-white/5 bg-black/60 backdrop-blur-md">

        <BrandsTicker />
      </div>

      <style jsx>{`
        .logo-filter {
            filter: invert(1) grayscale(100%) brightness(1.5);
            mix-blend-mode: screen;
            opacity: 0.9;
        }
        @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
            animation: fade-in-down 1s ease-out forwards;
        }
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </main>
  );
}
