import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto",
    description: "Solicita tu presupuesto o asesoramiento técnico. Estamos en Carlos Casares para impulsar tu proyecto.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Header />
            <ParticleBackground />

            <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 gap-12 relative z-10">

                {/* INFO COLUMN */}
                <div className="md:w-1/3 flex flex-col justify-center space-y-12">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold font-brand text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6 leading-tight">
                            Hablemos <br />
                            <span className="text-cyan-400">de tu idea.</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Ya sea una obra industrial, una reforma hogareña o una consulta técnica, estamos listos para asesorarte con la mejor energía.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <ContactItem icon={Phone} title="WhatsApp / Teléfono" value="2395 45-0285" href="https://wa.me/5492395450285" />
                        <ContactItem icon={Mail} title="Email" value="electromec.tienda@gmail.com" href="mailto:electromec.tienda@gmail.com" />
                        <ContactItem icon={MapPin} title="Ubicación" value="Maipú 171, Carlos Casares" href="https://maps.google.com" />
                    </div>
                </div>

                {/* FORM COLUMN */}
                <div className="md:w-2/3 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

                    <form className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <InputGroup label="Tu Nombre" placeholder="Ej: Juan Pérez" />
                            <InputGroup label="Tu Teléfono" placeholder="Ej: 2395 123456" />
                        </div>

                        <InputGroup label="Tu Email" placeholder="ejemplo@correo.com" type="email" />

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-cyan-400 uppercase tracking-widest ml-1">
                                ¿En qué podemos ayudarte?
                            </label>
                            <textarea
                                rows={4}
                                className="w-full bg-black/40 border-b-2 border-gray-700 p-4 text-white focus:border-cyan-400 outline-none transition-colors duration-300 resize-none rounded-t-lg"
                                placeholder="Estoy buscando presupuesto para una instalación..."
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="group w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                        >
                            <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            Enviar Consulta
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}

function ContactItem({ icon: Icon, title, value, href }: { icon: any, title: string, value: string, href: string }) {
    return (
        <a href={href} target="_blank" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/10">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-cyan-900 transition text-cyan-400 group-hover:text-white">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h5 className="text-xs text-gray-500 uppercase tracking-widest mb-1 group-hover:text-cyan-400 transition">{title}</h5>
                <p className="text-white font-medium text-lg">{value}</p>
            </div>
        </a>
    );
}

function InputGroup({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
    return (
        <div className="space-y-2 group">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-cyan-400 transition-colors">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-black/40 border-b-2 border-gray-700 p-4 text-white focus:border-cyan-400 outline-none transition-colors duration-300 rounded-t-lg"
            />
        </div>
    );
}
