import "@/app/ui/global.css";
import NavBar from "@/app/ui/components/NavBar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Torres · Desarrollo de Software",
  description:
    "Desarrollo de aplicaciones móviles, sistemas web y soluciones SaaS para negocios y emprendedores.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* NavBar de tu carpeta UI */}
        <NavBar />

        {/* Contenido principal */}
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
