export default function BrandsTicker() {
    return (
        <section className="py-24 border-t border-gray-900 bg-black/40">
            <div className="brands-container overflow-hidden relative w-full">
                <div className="brands-track flex items-center gap-10 md:gap-20 animate-slide-brands w-max">
                    {/* First set of brands */}
                    <BrandItem name="SCHNEIDER" color="#007a33" glow="rgba(0,122,51,0.4)" />
                    <BrandItem name="GENROD" color="#84cc16" glow="rgba(132,204,22,0.4)" />
                    <BrandItem name="JADEVER" color="#f97316" glow="rgba(249,115,22,0.4)" />
                    <BrandItem name="MACROLED" color="#00EEFF" glow="rgba(0,238,255,0.4)" />
                    <BrandItem name="CHINT" color="#1d4ed8" glow="rgba(29,78,216,0.4)" />
                    <BrandItem name="PRYSMIAN" color="#3b82f6" glow="rgba(59,130,246,0.4)" />
                    <BrandItem name="ARGENPLAS" color="#38bdf8" glow="rgba(56,189,248,0.4)" />
                    <BrandItem name="MEC" color="#9ca3af" glow="rgba(156,163,175,0.4)" />

                    {/* Duplicate set for seamless loop */}
                    <BrandItem name="SCHNEIDER" color="#007a33" glow="rgba(0,122,51,0.4)" />
                    <BrandItem name="GENROD" color="#84cc16" glow="rgba(132,204,22,0.4)" />
                    <BrandItem name="JADEVER" color="#f97316" glow="rgba(249,115,22,0.4)" />
                    <BrandItem name="MACROLED" color="#00EEFF" glow="rgba(0,238,255,0.4)" />
                    <BrandItem name="CHINT" color="#1d4ed8" glow="rgba(29,78,216,0.4)" />
                    <BrandItem name="PRYSMIAN" color="#3b82f6" glow="rgba(59,130,246,0.4)" />
                    <BrandItem name="ARGENPLAS" color="#38bdf8" glow="rgba(56,189,248,0.4)" />
                    <BrandItem name="MEC" color="#9ca3af" glow="rgba(156,163,175,0.4)" />
                </div>
            </div>
        </section>
    );
}

function BrandItem({ name, color, glow }: { name: string; color: string; glow: string }) {
    return (
        <div
            className="brand-text whitespace-nowrap"
            style={{ "--brand-color": color, "--brand-glow": glow } as React.CSSProperties}
        >
            {name}
        </div>
    );
}
