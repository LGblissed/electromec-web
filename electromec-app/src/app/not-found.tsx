import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50"></div>

            <div className="relative z-10 text-center px-6">
                <AlertTriangle className="w-20 h-20 text-yellow-500 mx-auto mb-6 animate-pulse" />
                <h1 className="text-8xl font-black font-brand tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-4">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-300 uppercase tracking-widest">
                    Página no encontrada
                </h2>
                <p className="text-gray-500 max-w-md mx-auto mb-10 text-sm leading-relaxed">
                    La conexión que buscas no existe o ha sido movida. Verifica la URL o regresa al centro de control.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-cyan-400 transition-colors duration-300 rounded-none"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
}
