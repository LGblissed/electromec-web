"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "./api";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartOpen: boolean;
    setCartOpen: (open: boolean) => void;
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    cartTotal: number;
    cartCount: number;
    checkout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartOpen, setCartOpen] = useState(false);
    const [items, setItems] = useState<CartItem[]>([]);
    const [isClient, setIsClient] = useState(false);

    // Load cart from localStorage on mount (client-side only)
    useEffect(() => {
        setIsClient(true);
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save to localStorage whenever items change
    useEffect(() => {
        if (isClient) {
            localStorage.setItem("cart", JSON.stringify(items));
        }
    }, [items, isClient]);

    const addToCart = (product: Product) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setCartOpen(true); // Open cart when adding item
    };

    const removeFromCart = (productId: string) => {
        setItems((prev) => prev.filter((item) => item.id !== productId));
    };

    const cartTotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const cartCount = items.reduce((count, item) => count + item.quantity, 0);

    const checkout = () => {
        if (items.length === 0) return;

        const phone = "5492395450285";
        let message = "Hola ElectroMec! 👋 Quiero realizar el siguiente pedido:\n\n";

        items.forEach(item => {
            message += `• *${item.name}* (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString()}\n`;
        });

        message += `\n💰 *Total: $${cartTotal.toLocaleString()}*`;
        message += "\n\nQuedo a la espera de confirmación de stock y pago.";

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <CartContext.Provider
            value={{
                cartOpen,
                setCartOpen,
                items,
                addToCart,
                removeFromCart,
                cartTotal,
                cartCount,
                checkout,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
