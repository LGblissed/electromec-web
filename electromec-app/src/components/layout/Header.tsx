"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Search, User, ShoppingCart, LogOut } from "lucide-react";
import Sidebar from "@/components/ui/Sidebar";
import { useCart } from "@/lib/cartContext";
import { useAuth } from "@/lib/authContext";
import { Product } from "@/lib/api";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const { cartOpen, setCartOpen, cartCount, items, cartTotal, checkout } = useCart();
    const { user, login, logout } = useAuth();
    const [email, setEmail] = useState("");

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(email);
        setLoginOpen(false);
    };

    return (
        <>
            <header
                className={`fixed w-full top-0 z-50 transition-all duration-500 px-6 lg:px-12 flex justify-between items-center border-b border-transparent ${isScrolled
                    ? "bg-[#050505]/90 py-4 border-white/5 backdrop-blur-sm shadow-sm"
                    : "py-8"
                    }`}
            >
                {/* LEFT NAV (DESKTOP) */}
                <nav className="hidden lg:flex gap-8 text-xs uppercase items-center">
                    <NavLink initial="Iluminación" hover="Decoración" />
                    <NavLink initial="Herramientas" hover="Motores" />
                    <div className="cursor-pointer text-gray-300 hover:text-white transition tracking-widest font-bold text-xs font-brand">
                        ELECTRICIDAD
                    </div>
                </nav>

                {/* MOBILE MENU TOGGLE */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="text-white p-2 focus:outline-none"
                        aria-label="Abrir menú"
                    >
                        <div className="space-y-1.5 cursor-pointer">
                            <span className="block h-0.5 w-6 bg-white transition-transform"></span>
                            <span className="block h-0.5 w-6 bg-white transition-transform"></span>
                            <span className="block h-0.5 w-6 bg-white transition-transform"></span>
                        </div>
                    </button>
                </div>

                {/* CENTER LOGO */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link href="/">
                        <Image
                            src="/electromeclogo.jpg"
                            alt="ElectroMec"
                            width={300}
                            height={100}
                            className={`transition-all duration-500 logo-filter w-auto ${isScrolled ? "h-10" : "h-20"
                                }`}
                        />
                    </Link>
                </div>

                {/* RIGHT ICONS */}
                <div className="flex items-center gap-6">
                    <div className="relative group hidden xl:block">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="bg-transparent border-b border-gray-700 text-white w-24 group-hover:w-48 focus:w-56 focus:border-cyan-500 transition-all duration-300 outline-none text-xs pb-1 placeholder-gray-600 text-right pr-6"
                        />
                        <Search className="w-4 h-4 text-gray-500 absolute right-0 bottom-2 pointer-events-none group-hover:text-white transition" />
                    </div>

                    <Link
                        href="/contacto"
                        className="btn-electric hidden md:flex items-center gap-2 text-cyan-400 text-[10px] font-bold px-6 py-3 rounded-none uppercase tracking-wider"
                    >
                        Pedir Presupuesto
                    </Link>

                    <div className="flex gap-6 border-l border-gray-800 pl-6">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-cyan-400 uppercase hidden md:block">
                                    HOLA {user.name}
                                </span>
                                <button
                                    onClick={logout}
                                    aria-label="Cerrar sesión"
                                    className="focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                                >
                                    <LogOut className="w-5 h-5 text-red-500 hover:text-white cursor-pointer transition" />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setLoginOpen(true)}
                                aria-label="Iniciar sesión"
                                className="focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                            >
                                <User className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
                            </button>
                        )}

                        <button
                            className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                            onClick={() => setCartOpen(true)}
                            aria-label={`Carrito de compras, ${cartCount} items`}
                        >
                            <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-black">
                                {cartCount}
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE SIDEBAR MENU */}
            <Sidebar
                id="mobile-menu-sidebar"
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                title="Menú"
            >
                <nav className="flex flex-col gap-8 text-sm uppercase tracking-widest font-bold mt-10">
                    <div className="border-b border-gray-800 pb-4">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-cyan-400 transition">Inicio</Link>
                    </div>
                    <div className="border-b border-gray-800 pb-4">
                        <Link href="/contacto" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-cyan-400 transition">Contacto</Link>
                    </div>
                    <div className="text-gray-500 text-xs mt-4">Catálogo</div>
                    <Link href="#" className="block py-2 hover:text-white transition text-gray-300">Iluminación</Link>
                    <Link href="#" className="block py-2 hover:text-white transition text-gray-300">Herramientas</Link>
                    <Link href="#" className="block py-2 hover:text-white transition text-gray-300">Electricidad</Link>

                    <div className="mt-8">
                        <Link href="/contacto" onClick={() => setMobileMenuOpen(false)} className="w-full bg-cyan-700 text-white py-4 text-center block rounded-none hover:bg-cyan-600 transition">
                            PEDIR PRESUPUESTO
                        </Link>
                    </div>
                </nav>
            </Sidebar>

            {/* LOGIN SIDEBAR */}
            <Sidebar
                id="login-sidebar"
                isOpen={loginOpen}
                onClose={() => setLoginOpen(false)}
                title="Login"
            >
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:border-cyan-500 outline-none transition"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:border-cyan-500 outline-none transition"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-3 rounded transition"
                    >
                        ENTRAR
                    </button>
                </form>
            </Sidebar>

            {/* CART SIDEBAR */}
            <Sidebar
                id="cart-sidebar"
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
                title="Carrito"
            >
                <div className="flex-1 overflow-y-auto space-y-6">
                    {items.length === 0 ? (
                        <p className="text-gray-500 text-center py-10">Tu carrito está vacío.</p>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 border-b border-gray-800 pb-4">
                                <div className="w-20 h-20 bg-white rounded flex items-center justify-center p-2 relative overflow-hidden">
                                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-white leading-tight">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs text-gray-400 mt-1">{item.category}</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-xs text-gray-500">Cant: {item.quantity}</span>
                                        <span className="text-cyan-400 font-bold">${item.price.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="mt-6 border-t border-gray-800 pt-6">
                    <div className="flex justify-between items-center mb-4 text-white font-bold">
                        <span>Total:</span>
                        <span className="text-xl">${cartTotal.toLocaleString()}</span>
                    </div>
                    <button
                        type="button"
                        onClick={checkout}
                        className="w-full bg-white text-black font-bold py-4 rounded-none transition hover:bg-gray-200"
                    >
                        INICIAR COMPRA
                    </button>
                </div>
            </Sidebar>
        </>
    );
}

// Subcomponent for Nav Links to keep code clean
function NavLink({ initial, hover }: { initial: string; hover: string }) {
    return (
        <div className="nav-link-container">
            <div className="nav-link-track">
                <span className="nav-word">{initial}</span>
                <span className="nav-word">{hover}</span>
            </div>
        </div>
    );
}
