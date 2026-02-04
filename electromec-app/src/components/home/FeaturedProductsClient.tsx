"use client";

import { Product } from "@/lib/api";
import { useCart } from "@/lib/cartContext";
import { ShoppingCart } from "lucide-react";

export default function FeaturedProductsClient({ products }: { products: Product[] }) {
    const { addToCart } = useCart();

    return (
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-900/50">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                        Destacados <span className="text-red-600">.</span>
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Stock permanente y entrega inmediata.
                    </p>
                </div>
                <a
                    href="#"
                    className="text-cyan-400 text-sm hover:underline font-bold"
                >
                    Ver catálogo completo -&gt;
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                {/* Main large item (first product) */}
                {products[0] && (
                    <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('${products[0].image}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-10 w-full flex flex-col items-start">
                            <span className="bg-cyan-600 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 inline-block">
                                {products[0].category}
                            </span>
                            <h4 className="text-3xl font-bold text-white mb-2">
                                {products[0].name}
                            </h4>
                            <p className="text-gray-300 text-sm max-w-lg mb-4">
                                Eficiencia energética para grandes superficies y galpones.
                            </p>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(products[0]);
                                }}
                                className="group/btn bg-white text-black px-4 py-2 rounded-none text-xs font-bold hover:bg-gray-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 flex items-center gap-2"
                            >
                                <ShoppingCart className="w-3 h-3 group-active/btn:scale-90 transition-transform" /> AGREGAR AL CARRITO
                            </button>
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-6">
                    {/* Second Item */}
                    {products[1] && (
                        <div className="flex-1 relative group overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 cursor-pointer">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black p-6 flex flex-col justify-between group-hover:border-red-500/30 border border-transparent transition"
                            >
                                {products[1].isHot && (
                                    <div className="self-end">
                                        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-none">
                                            HOT
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <h4 className="text-xl font-bold text-white">
                                        {products[1].name}
                                    </h4>
                                    <p className="text-xs text-gray-400 mb-2">
                                        Kit Profesional 1000V
                                    </p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(products[1]);
                                        }}
                                        className="text-cyan-400 text-xs font-bold hover:text-white active:scale-95 focus:outline-none focus:underline transition-all duration-200 flex items-center gap-1"
                                    >
                                        + AGREGAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Third Item */}
                    {products[2] && (
                        <div className="flex-1 relative group overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 cursor-pointer">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black p-6 flex flex-col justify-between group-hover:border-cyan-500/30 border border-transparent transition"
                            >
                                {products[2].isNew && (
                                    <div className="self-end">
                                        <span className="bg-cyan-900 text-cyan-400 text-[10px] font-bold px-2 py-1 rounded-none border border-cyan-700">
                                            NEW
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <h4 className="text-xl font-bold text-white">
                                        {products[2].name}
                                    </h4>
                                    <p className="text-xs text-gray-400 mb-2">
                                        Control inteligente Schneider
                                    </p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(products[2]);
                                        }}
                                        className="text-cyan-400 text-xs font-bold hover:text-white active:scale-95 focus:outline-none focus:underline transition-all duration-200 flex items-center gap-1"
                                    >
                                        + AGREGAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
