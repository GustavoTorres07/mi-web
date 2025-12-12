import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/certificaciones", label: "Mis Certificaciones" },
   { href: "/planes", label: "Planes" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export default function NavBar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-semibold text-lg">
          Gustavo Torres
          <span className="text-sm text-gray-500"> · Desarrollo de Software</span>
        </div>
        <div className="flex gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
