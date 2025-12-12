'use client';

import { useState } from 'react';

export default function PortafolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="relative space-y-12 overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* HEADER */}
      <header className="animate-fadeIn">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-sky-50 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm mb-6">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          Proyectos destacados
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          <span className="relative inline-block">
            <span className="text-blue-600 relative z-10">Portafolio</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-400/20 blur-xl -z-10" />
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed">
          Algunos de los proyectos en los que he trabajado, integrando frontend, backend y
          arquitectura de software profesional.
        </p>
      </header>

      {/* PROYECTOS DESTACADOS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          Proyectos Principales
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            icon="🏥"
            title="CliniPlus"
            subtitle="Sistema de Gestión Médica"
            description="Sistema médico integral para gestión de turnos, pacientes, historia clínica, obras sociales y agenda de profesionales."
            features={[
              "Gestión completa de turnos y agenda médica",
              "Historia clínica digital con recetas y diagnósticos",
              "Módulo de obras sociales y facturación",
              "Dashboard administrativo con reportes",
              "Autenticación segura con JWT",
              "App móvil híbrida para pacientes"
            ]}
            tech=".NET • Web API • MAUI Blazor • SQL Server • JWT • EF Core"
            color="blue"
            isSelected={selectedProject === 0}
            onSelect={() => setSelectedProject(selectedProject === 0 ? null : 0)}
            demoUrl="https://tu-hosting.com/cliniplus"
          />

          <ProjectCard
            icon="🛒"
            title="TecnoStore"
            subtitle="E-commerce & Gestión de Inventario"
            description="Plataforma de comercio electrónico con gestión completa de productos, stock, pedidos, roles de usuario y soporte para app móvil."
            features={[
              "Catálogo de productos con búsqueda y filtros",
              "Carrito de compras y proceso de checkout",
              "Panel administrativo de inventario y stock",
              "Gestión de pedidos y estados de envío",
              "Roles de usuario (Admin, Vendedor, Cliente)",
              "App móvil para compras en Android/iOS"
            ]}
            tech=".NET • Web API • MAUI Blazor Hybrid • SQL Server • Entity Framework"
            color="emerald"
            isSelected={selectedProject === 1}
            onSelect={() => setSelectedProject(selectedProject === 1 ? null : 1)}
            demoUrl="https://tu-hosting.com/tecnostore"
          />

          <ProjectCard
            icon="🎓"
            title="Sistema de Gestión Académica"
            subtitle="Proyecto Final Programación II"
            description="Sistema web completo de gestión académica desarrollado en .NET Framework 4.8 MVC para administrar estudiantes, profesores, materias y generar reportes académicos."
            features={[
              "Login y registro de usuarios con roles",
              "Gestión de estudiantes y profesores",
              "Asignación de profesores a materias",
              "Generación de reportes PDF (Plan de estudios)",
              "Historial académico del estudiante",
              "Panel administrativo con estadísticas",
              "Control de notas y calificaciones"
            ]}
            tech=".NET Framework 4.8 • ASP.NET MVC • SQL Server • Bootstrap • PDF Reports"
            color="violet"
            isSelected={selectedProject === 2}
            onSelect={() => setSelectedProject(selectedProject === 2 ? null : 2)}
            demoUrl="https://tu-hosting.com/gestion-academica"
          />
        </div>
      </div>

      {/* PROYECTOS ACADÉMICOS Y PRÁCTICA */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-2xl">💡</span>
          Experiencia de Aprendizaje
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SmallProjectCard
            icon="📱"
            title="Apps Móviles .NET MAUI"
            description="Desarrollo de aplicaciones multiplataforma con integración de APIs, notificaciones push y almacenamiento local."
            tags={[".NET MAUI", "Android", "APIs REST"]}
          />

          <SmallProjectCard
            icon="🔐"
            title="Sistemas de Autenticación"
            description="Implementación de Identity, JWT, autorización basada en roles y políticas de seguridad."
            tags={["ASP.NET Identity", "JWT", "OAuth"]}
          />

          <SmallProjectCard
            icon="📊"
            title="Reportes y BI"
            description="Generación de reportes dinámicos, dashboards interactivos y análisis de datos con Power BI."
            tags={["Power BI", "QlikView", "PDF Reports"]}
          />

          <SmallProjectCard
            icon="🗄️"
            title="Bases de Datos"
            description="Diseño de bases de datos relacionales, optimización de consultas y stored procedures."
            tags={["SQL Server", "MySQL", "Entity Framework"]}
          />

          <SmallProjectCard
            icon="🌐"
            title="APIs REST"
            description="Desarrollo de Web APIs escalables con documentación Swagger, versionado y buenas prácticas."
            tags={["ASP.NET Web API", "Swagger", "RESTful"]}
          />

          <SmallProjectCard
            icon="🐳"
            title="Docker & DevOps"
            description="Containerización de aplicaciones, CI/CD básico y gestión de ambientes de desarrollo."
            tags={["Docker", "Git", "CI/CD"]}
          />
        </div>
      </div>

      {/* TECNOLOGÍAS UTILIZADAS */}
      <div className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-2xl">⚙️</span>
          Stack Tecnológico en Proyectos
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <TechStack
            category="Backend"
            icon="💻"
            items={[".NET Core/.NET 8", "ASP.NET MVC", "Web API", "Entity Framework", "Identity & JWT"]}
          />
          <TechStack
            category="Frontend"
            icon="🎨"
            items={["Blazor", "React/Next.js", "HTML/CSS", "JavaScript", "Bootstrap/Tailwind"]}
          />
          <TechStack
            category="Móvil"
            icon="📱"
            items={[".NET MAUI", "Blazor Hybrid", "Android Studio", "Xamarin Forms"]}
          />
          <TechStack
            category="Datos & Otros"
            icon="🗄️"
            items={["SQL Server", "MySQL/MariaDB", "MongoDB", "Power BI", "Docker"]}
          />
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="relative group rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 p-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Puedo ayudarte a construir tu próxima aplicación web, móvil o sistema empresarial
            con tecnologías modernas y arquitectura profesional.
          </p>
          <a
            href="https://wa.me/5492954216751"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105"
          >
            Hablemos de tu proyecto
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}

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
  demoUrl
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
}) {
  const colorClasses: Record<string, string> = {
    blue: "from-blue-50 to-sky-50 border-blue-200 hover:border-blue-300",
    emerald: "from-emerald-50 to-teal-50 border-emerald-200 hover:border-emerald-300",
    violet: "from-violet-50 to-purple-50 border-violet-200 hover:border-violet-300",
  };

  const iconBgClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    emerald: "bg-emerald-100 text-emerald-600",
    violet: "bg-violet-100 text-violet-600",
  };

  return (
    <div 
      className={`group relative rounded-2xl border bg-gradient-to-br ${colorClasses[color]} p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
        isSelected ? 'ring-2 ring-blue-400 scale-[1.02]' : 'hover:-translate-y-1'
      }`}
      onClick={onSelect}
    >
      <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBgClasses[color]} text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <p className="text-xs text-gray-600 font-medium">{subtitle}</p>
            </div>
          </div>
          <button 
            className="text-gray-400 hover:text-gray-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            <span className="text-lg">{isSelected ? '−' : '+'}</span>
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          {description}
        </p>

        <div className={`space-y-2 mb-4 transition-all duration-300 ${
          isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <p className="text-xs font-semibold text-gray-900 mb-2">Características principales:</p>
          <ul className="space-y-1.5">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                <span className="text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-200/50 space-y-3">
          <p className="text-xs text-gray-600 font-mono">{tech}</p>
          <a
            href={demoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Ver sistema en vivo</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function SmallProjectCard({ icon, title, description, tags }: { icon: string; title: string; description: string; tags: string[] }) {
  return (
    <div className="group relative rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 text-xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
            {icon}
          </div>
          <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
        </div>
        <p className="text-xs text-gray-600 mb-3 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechStack({ category, icon, items }: { category: string; icon: string; items: string[] }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <h3 className="font-semibold text-gray-900">{category}</h3>
      </div>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-blue-600 mt-0.5 flex-shrink-0 text-xs">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}