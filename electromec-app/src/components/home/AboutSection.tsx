import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#020202] z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">

                {/* TEXT CONTENT */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h4 className="text-gray-600 text-xs tracking-[0.6em] mb-6 uppercase">
                        Sobre Nosotros
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold font-brand text-white mb-8 tracking-tight">
                        Impulsando proyectos <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            con la mejor energía.
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed font-brand">
                        <span className="text-cyan-500 font-bold">Electromec</span> es tu aliado estratégico en <span className="text-white">Carlos Casares</span>.
                        Brindamos soluciones integrales en materiales eléctricos e iluminación, fusionando
                        calidad técnica con las últimas tendencias del mercado.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-600 to-transparent mx-auto mt-12 opacity-50"></div>
                </div>

                {/* IMAGE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">

                    <div className="relative rounded-2xl overflow-hidden group border border-gray-800">
                        <Image
                            src="/inside1.png"
                            alt="Local Electromec Interior 1"
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                            <span className="text-white font-bold tracking-widest text-sm uppercase">Atención Personalizada</span>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden group border border-gray-800">
                        <Image
                            src="/inside2.png"
                            alt="Local Electromec Interior 2"
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                            <span className="text-white font-bold tracking-widest text-sm uppercase">Variedad & Calidad</span>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden group border border-gray-800">
                        <Image
                            src="/inside3.png"
                            alt="Local Electromec Interior 3"
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition duration-1000 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                            <span className="text-white font-bold tracking-widest text-sm uppercase">Asesoramiento Técnico</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
