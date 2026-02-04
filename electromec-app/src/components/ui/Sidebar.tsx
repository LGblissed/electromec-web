"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface SidebarProps {
    id: string;
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Sidebar({ id, isOpen, onClose, title, children }: SidebarProps) {
    const [isVisible, setIsVisible] = useState(false);

    // Handle animation delay
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 400); // Match transition duration
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className={`sidebar-overlay ${isOpen ? "active" : ""}`}
                onClick={onClose}
            />

            {/* Sidebar Panel */}
            <aside
                id={id}
                className={`sidebar p-8 flex flex-col ${isOpen ? "active" : ""}`}
            >
                <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                        {title}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {children}
            </aside>
        </>
    );
}
