"use client";

import Image from "next/image";
import Link from "next/link";
import { Hammer, ArrowRight, Mail, Phone } from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-white">
      {/* Background FX */}
      <ParticleBackground />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 p-6 max-w-4xl w-full text-center flex flex-col items-center">

        {/* LOGO */}
        <div className="mb-12 animate-fade-in-down">
          <Image
            src="/electromeclogo.jpg"
            alt="ElectroMec"
            width={400}
            height={150}
            className="w-48 md:w-64 h-auto logo-filter mx-auto"
          />
        </div>

        {/* STATUS BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-8 animate-pulse">
          <Hammer className="w-4 h-4 text-yellow-500" />
          <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-[0.2em]">En Construcción</span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-5xl md:text-7xl font-black font-brand tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 leading-[0.9]">
          PREPARANDO<br />EL FUTURO.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Estamos actualizando nuestra plataforma digital para ofrecerte el catálogo más completo de soluciones eléctricas en Argentina.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto">
          <Link
            href="/contacto"
            className="flex-1 group relative inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-none overflow-hidden"
          >
            <div className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-300 ease-out"></div>
            <span className="relative flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contactar Ahora
            </span>
          </Link>

          <a
            href="https://wa.me/5492395450285"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group relative inline-flex items-center justify-center px-8 py-4 border border-white/10 hover:border-green-500/50 hover:bg-green-900/10 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-none"
          >
            <span className="relative flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-500" />
              WhatsApp
            </span>
          </a>
        </div>

        {/* FOOTER */}
        <div className="mt-20 text-xs text-gray-600 uppercase tracking-widest font-mono">
          ElectroMec 2.0 • Launching 2026
        </div>

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
      `}</style>
    </main>
  );
}
