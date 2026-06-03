'use client';

import { useState } from 'react';

export default function PortafolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="relative space-y-12 overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-sky-50" />

      {/* HEADER */}
      <header className="animate-fadeIn">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm mb-6">
          🚀 Proyectos destacados
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          <span className="text-blue-600">Portafolio</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Algunos de los proyectos en los que he trabajado, integrando frontend,
          backend y arquitectura de software profesional.
        </p>
      </header>

      {/* PROYECTOS PRINCIPALES */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Proyectos Principales</h2>

        <div className="grid gap-6 md:grid-cols-2">
          
          {/* --- PROYECTO 1: CLINIPLUS (Actualizado) --- */}
          <ProjectCard
            icon="🏥"
            title="CliniPlus"
            subtitle="Sistema de Gestión Médica"
            description="Sistema médico integral para gestión de turnos, pacientes, historia clínica y agenda profesional."
            features={[
              "Gestión de turnos y agenda",
              "Historia clínica digital",
              "Obras sociales y facturación",
              "Dashboard administrativo",
              "JWT + Roles",
              "App móvil híbrida",
            ]}
            tech=".NET 8.0 • Web API • MAUI Blazor • SQL Server • JWT • EF Core"
            color="blue"
            isSelected={selectedProject === 0}
            onSelect={() => setSelectedProject(selectedProject === 0 ? null : 0)}
            
            // --- CAMBIOS AQUI ---
            demoUrl="./archivos/CliniPlus.apk" // Ruta a tu archivo en la carpeta public
            isDownload={true}                  // Indicamos que es una descarga
            buttonText="Descargar App para Demo" // Texto personalizado
            demoCreds={{ 
                user: 'admin@cliniplus.com', 
                pass: 'Admin1234!' 
            }}
          />

          {/* --- PROYECTO 3: SISTEMA UNIVERSIDAD --- */}
          <ProjectCard
            icon="🎓"
            title="Sistema de Gestión Académica"
            subtitle="Proyecto Final Programación III - Aplicaciones Web"
            description="Sistema web académico desarrollado en .NET Framework 4.8 MVC."
            features={[
              "Usuarios y roles",
              "Gestión académica",
              "Asignación de materias",
              "Reportes PDF",
              "Historial académico",
              "Panel administrativo",
            ]}
            tech=".NET Framework 4.8 • ASP.NET MVC • SQL Server • Bootstrap"
            color="violet"
            isSelected={selectedProject === 2}
            onSelect={() => setSelectedProject(selectedProject === 2 ? null : 2)}
            demoUrl="https://www.sistemauniversidad.somee.com/"
            demoCreds={{ user: 'Admin', pass: 'Admin123' }}
          />
                    {/* --- PROYECTO 4: SISTEMA UNIVERSIDAD --- */}
          <ProjectCard
            icon="🎓"
            title="EduSys"
            subtitle="Gestion Universitaria Integral"
            description="Sistema web académico desarrollado por mi cuenta personal, con funcionalidades avanzadas para la gestión universitaria."
            features={[
              "Gestión de usuarios y roles",
              "Administración académica completa",
              "Inscripcion de Alumnos a Carreras y Materias",
              "Asignación de materias y horarios",
              "Generación de reportes en PDF",
              "Historial académico detallado",
              "Panel administrativo intuitivo",
              "Notificaciones por email",
              "Envio de Mensajes Masivos",
              "Y mucho mas... (Entra al portal para explorar todas las funcionalidades!)",
            ]}
            tech=".NET 8.0 • Web Api • SQL Server • MudBlazor"
            color="emerald"
            isSelected={selectedProject === 2}
            onSelect={() => setSelectedProject(selectedProject === 2 ? null : 2)}
            demoUrl="https://edusys.runasp.net/"
            demoCreds={{ user: 'admin@edusys.com', pass: 'Admin123!' }}
          />
          
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">¿Tenés un proyecto en mente?</h2>
        <p className="text-gray-700 mb-4">
          Puedo ayudarte a desarrollar tu sistema web, aplicación móvil o
          plataforma SaaS.
        </p>
        <a
          href="https://wa.me/5492954216751"
          target="_blank"
          className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Hablemos por WhatsApp →
        </a>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

/* ================= COMPONENTES ACTUALIZADOS ================= */

function ProjectCard({
  icon,
  title,
  subtitle,
  description,
  features,
  tech,
  color,
  isSelected,
  onSelect,
  demoUrl,
  demoCreds,
  buttonText, // Nuevo prop
  isDownload, // Nuevo prop
}: {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string;
  color: string;
  isSelected: boolean;
  onSelect: () => void;
  demoUrl?: string;
  demoCreds?: { user: string; pass: string };
  buttonText?: string;
  isDownload?: boolean;
}) {
  const colors: any = {
    blue: 'from-blue-50 to-sky-50 border-blue-200',
    emerald: 'from-emerald-50 to-teal-50 border-emerald-200',
    violet: 'from-violet-50 to-purple-50 border-violet-200',
  };

  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-2xl border bg-gradient-to-br p-6 shadow-md hover:shadow-lg transition-all flex flex-col ${colors[color]} ${
        isSelected ? 'ring-2 ring-blue-400' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{icon}</div>
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-xs text-gray-600">{subtitle}</p>
          </div>
        </div>
        <span className="text-gray-400">{isSelected ? '−' : '+'}</span>
      </div>

      <p className="text-sm text-gray-700 mb-3">{description}</p>

      {isSelected && (
        <ul className="text-xs text-gray-700 space-y-1 mb-4">
          {features.map((f, i) => (
            <li key={i}>✓ {f}</li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-4 border-t border-gray-200 space-y-3">
        <p className="text-xs font-mono text-gray-600">{tech}</p>

        {demoCreds && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs">
            <strong>🔑 Acceso Demo</strong>
            <br />
            Usuario: <span className="font-mono select-all">{demoCreds.user}</span> ·
            Contraseña:{' '}
            <span className="font-mono select-all">{demoCreds.pass}</span>
          </div>
        )}

        <a
          href={demoUrl}
          // Si es descarga, agregamos el atributo download y evitamos abrir pestaña nueva vacía
          target={isDownload ? "_self" : "_blank"} 
          download={isDownload ? "CliniPlus_Demo.apk" : undefined}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center justify-center w-full rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          {isDownload ? (
            <span className="flex items-center gap-2">
               📥 {buttonText || "Descargar"}
            </span>
          ) : (
            buttonText || "Ver sistema en vivo →"
          )}
        </a>
      </div>
    </div>
  );
}