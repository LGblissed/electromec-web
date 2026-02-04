import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ElectroMec",
    default: "ElectroMec - Materiales Eléctricos e Iluminación",
  },
  description: "Soluciones integrales en materiales eléctricos, iluminación LED, herramientas y motores en Carlos Casares. Distribuidores oficiales Schneider, Macroled, Chint.",
  keywords: ["electricidad", "iluminación", "herramientas", "carlos casares", "schneider electric", "macroled", "materiales electricos"],
  authors: [{ name: "ElectroMec" }],
  creator: "ElectroMec",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://electromec.com.ar",
    siteName: "ElectroMec",
    title: "ElectroMec - Potencia y Tecnología",
    description: "Tu aliado en proyectos eléctricos industriales y hogareños. Catálogo completo y asesoramiento experto.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ElectroMec Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ElectroMec - Materiales Eléctricos",
    description: "Calidad y potencia para tus proyectos. Visítanos en Carlos Casares.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://electromeccc.com"),
};

import { CartProvider } from "@/lib/cartContext";
import { AuthProvider } from "@/lib/authContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${spaceGrotesk.variable} antialiased bg-[#050505] text-white font-sans`}
      >
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
