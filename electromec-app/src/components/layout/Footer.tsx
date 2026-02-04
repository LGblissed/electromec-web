import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#020202] pt-20 pb-10 text-sm border-t border-gray-900 relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                <div className="space-y-6">
                    <Image
                        src="/electromeclogo.jpg"
                        alt="ElectroMec Logo"
                        width={150}
                        height={50}
                        className="h-8 w-auto logo-filter opacity-50"
                    />
                    <ul className="text-gray-400 space-y-4">
                        <li>
                            <a
                                href="https://share.google/TlU85npg7Rx8XUvH4"
                                target="_blank"
                                className="flex gap-3 items-start group hover:text-white transition"
                            >
                                <div className="p-2 bg-gray-900 rounded-full group-hover:bg-cyan-900 transition">
                                    <MapPin className="w-4 h-4 text-cyan-600 group-hover:text-cyan-300" />
                                </div>
                                <span>
                                    Maipú 171, Carlos Casares
                                    <br />
                                    <span className="text-xs text-gray-600 group-hover:text-gray-400">
                                        Ver en Mapa -&gt;
                                    </span>
                                </span>
                            </a>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone className="w-4 h-4 text-cyan-700" />
                            <span>2395 45-0285</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white font-bold mb-6 text-xs tracking-widest uppercase">
                        Social
                    </h5>
                    <div className="flex gap-4 mb-8">
                        <a
                            href="https://www.instagram.com/electromec_"
                            target="_blank"
                            className="p-3 bg-gray-900 rounded hover:text-white text-gray-400 transition border border-gray-800 hover:border-pink-500"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.facebook.com/Electromec.CC"
                            target="_blank"
                            className="p-3 bg-gray-900 rounded hover:text-white text-gray-400 transition border border-gray-800 hover:border-blue-600"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>

                    <h5 className="text-white font-bold mb-6 text-xs tracking-widest uppercase">
                        Pagos
                    </h5>
                    <div className="flex gap-2 text-gray-500">
                        {/* Simple CSS-only cards representation or generic icons */}
                        <div className="h-8 w-12 bg-gray-800 rounded border border-gray-700 flex items-center justify-center text-[8px] font-bold">VISA</div>
                        <div className="h-8 w-12 bg-gray-800 rounded border border-gray-700 flex items-center justify-center text-[8px] font-bold">MASTER</div>
                        <div className="h-8 w-12 bg-gray-800 rounded border border-gray-700 flex items-center justify-center text-[8px] font-bold">MP</div>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <h5 className="text-white font-bold mb-6 text-xs tracking-widest uppercase">
                        Newsletter
                    </h5>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Email corporativo"
                            className="bg-gray-900 border border-gray-800 text-white px-4 py-3 w-full rounded focus:border-cyan-600 outline-none transition"
                        />
                        <button
                            type="button"
                            className="bg-cyan-800 text-white px-6 py-3 rounded hover:bg-cyan-700 font-bold transition uppercase text-xs tracking-wider"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto text-gray-600 text-xs">
                <p>© 2026 ElectroMec. Todos los derechos reservados.</p>

                {/* INFINITY LOGO */}
                <div className="mt-4 md:mt-0 flex items-center justify-center cursor-default infinity-wrapper">
                    <div className="infinity-symbol">
                        <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="infinity-path"
                                d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}
