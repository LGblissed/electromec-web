"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application Error:", error);
    }, [error]);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white p-6">
            <AlertCircle className="w-16 h-16 text-red-500 mb-6" />
            <h2 className="text-3xl font-bold font-brand mb-4 text-center">
                Algo salió mal
            </h2>
            <p className="text-gray-400 mb-8 text-center max-w-md">
                Se ha producido un error inesperado en el sistema. Nuestro equipo ha sido notificado.
            </p>
            <button
                onClick={() => reset()}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-none font-bold uppercase tracking-widest text-xs transition-colors"
            >
                <RefreshCw className="w-4 h-4" />
                Intentar de nuevo
            </button>
        </div>
    );
}
