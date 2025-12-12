'use client';

import { useState } from 'react';

export default function ServiciosPage() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="relative space-y-16 overflow-hidden min-h-screen p-6 md:p-12">
      {/* Animated background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* CABECERA */}
      <header className="space-y-6 animate-fadeIn max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-sky-50 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          Soluciones profesionales de software
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Servicios de{" "}
            <span className="relative inline-block">
              <span className="text-blue-600 relative z-10">desarrollo de software</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-400/20 blur-xl -z-10" />
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Trabajo con empresas, profesionales y emprendedores para diseñar y
            construir soluciones que acompañen el crecimiento del negocio: 
            desde sistemas internos hasta plataformas completas.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <Badge color="blue" text=".NET · SQL Server" />
          <Badge color="emerald" text="Apps móviles" />
          <Badge color="slate" text="SaaS · Web · APIs" />
          <Badge color="violet" text="Figma · UI/UX" />
        </div>
      </header>

      {/* GRID DE SERVICIOS */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        
        {/* 1. MÓVIL */}
        <ServiceCard
          icon="📱"
          color="blue"
          title="Apps Móviles"
          description="Aplicaciones multiplataforma (Android/iOS) con Blazor Hybrid. Incluye diseño previo de pantallas y funcionalidades completas de comunicación con el usuario."
          features={[
            "Diseño UI previo en Figma",
            ".NET MAUI y Blazor Hybrid",
            "Envío de Emails y Notificaciones",
            "Publicación en Stores",
          ]}
          isActive={activeService === 0}
          onHover={() => setActiveService(0)}
          onLeave={() => setActiveService(null)}
        />

        {/* 2. SISTEMAS WEB */}
        <ServiceCard
          icon="🖥️"
          color="emerald"
          title="Sistemas de Gestión"
          description="Software a medida para procesos críticos (turnos, inventarios, administración). Validamos el flujo visual antes de programar para asegurar la mejor experiencia."
          features={[
            "Prototipado de flujos en Figma",
            "Arquitectura robusta .NET",
            "Servicios de Email Automáticos",
            "Reportes y Dashboards",
          ]}
          isActive={activeService === 1}
          onHover={() => setActiveService(1)}
          onLeave={() => setActiveService(null)}
        />

        {/* 3. SAAS */}
        <ServiceCard
          icon="☁️"
          color="violet"
          title="Plataformas SaaS"
          description="Soluciones listas para usar bajo suscripción. Ideal para startups o negocios que necesitan digitalizarse rápido sin una gran inversión inicial en infraestructura."
          features={[
            "Hosting y mantenimiento incluido",
            "Correos transaccionales",
            "Actualizaciones constantes",
            "Modelo de suscripción mensual",
          ]}
          isActive={activeService === 2}
          onHover={() => setActiveService(2)}
          onLeave={() => setActiveService(null)}
        />

        {/* 4. WEB / LANDING */}
        <ServiceCard
          icon="🌐"
          color="amber"
          title="Sitios Web"
          description="Sitios institucionales y landing pages optimizadas para conversión. Diseño moderno y responsive que se adapta a cualquier dispositivo móvil."
          features={[
            "Diseño UI/UX en Figma",
            "Formularios con envío de Email",
            "Integración con WhatsApp",
            "Optimización Móvil",
          ]}
          isActive={activeService === 3}
          onHover={() => setActiveService(3)}
          onLeave={() => setActiveService(null)}
        />

        {/* 5. CONSULTORÍA */}
        <ServiceCard
          icon="🔧"
          color="indigo"
          title="Consultoría y Soporte"
          description="No solo desarrollo desde cero; también ayudo a evolucionar sistemas existentes, mejorar el rendimiento, refactorizar código y solucionar errores críticos."
          features={[
            "Diagnóstico de Base de Datos",
            "Refactorización de Código Legacy",
            "Integración de servicios externos",
            "Planes de Mantenimiento",
          ]}
          isActive={activeService === 4}
          onHover={() => setActiveService(4)}
          onLeave={() => setActiveService(null)}
        />

        {/* TARJETA "COMODÍN" */}
        <div className="relative group rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-6 flex flex-col justify-center items-center text-center hover:bg-blue-50 transition-colors">
            <div className="text-4xl mb-3">👋</div>
            <h3 className="font-semibold text-gray-900 mb-2">¿Tenés otra idea?</h3>
            <p className="text-sm text-gray-600 mb-4">
                Si tu necesidad no encaja en estas categorías, hablemos igual. Me encantan los desafíos técnicos.
            </p>
            <a href="https://wa.me/5492954216751" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline">
                Consultar por WhatsApp &rarr;
            </a>
        </div>

      </section>

      {/* BANNER CTA */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10 skew-x-12 translate-x-[-30%]"></div>
        
        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm border border-white/20">
              💡 Primer paso
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              No hace falta tener todo claro para empezar
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Si todavía no sabés exactamente qué tecnología necesitás, agendemos una reunión corta. 
              Revisamos tu proceso actual y armamos una propuesta en etapas, priorizando lo urgente.
            </p>
          </div>
          <div className="flex-shrink-0">
             <a
              href="https://wa.me/5492954216751"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-6 py-4 text-sm font-bold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              Agendar asesoría gratuita
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-md p-8 shadow-lg">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">¿Cómo trabajamos juntos?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un proceso transparente y organizado para que siempre sepas en qué estado está tu proyecto.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -z-10" />
          
          <ProcessStep
            number="1"
            title="Reunión"
            description="Conversamos sobre tu negocio, los problemas actuales y definimos el alcance."
          />
          <ProcessStep
            number="2"
            title="Propuesta"
            description="Te presento una solución técnica detallada, con tiempos estimados y presupuesto."
          />
          <ProcessStep
            number="3"
            title="Desarrollo"
            description="Construyo el sistema con reportes de avance semanales y entregas parciales."
          />
          <ProcessStep
            number="4"
            title="Entrega"
            description="Puesta en producción, capacitación a usuarios y garantía post-lanzamiento."
          />
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
}

// COMPONENTES AUXILIARES

function Badge({ color, text }: { color: string; text: string }) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    violet: "bg-violet-50 text-violet-700 border-violet-100",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 font-medium ${colorClasses[color]} hover:scale-105 transition-transform cursor-default shadow-sm`}>
      {text}
    </span>
  );
}

function ServiceCard({ 
  icon, 
  color, 
  title, 
  description, 
  features,
  isActive,
  onHover,
  onLeave
}: { 
  icon: string; 
  color: string; 
  title: string; 
  description: string; 
  features: string[];
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
    violet: "bg-violet-50 text-violet-600 group-hover:bg-violet-100",
    amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
    indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100",
  };

  return (
    <article 
      className={`group relative flex flex-col h-full rounded-2xl border bg-white/90 backdrop-blur-sm p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${
        isActive ? 'border-blue-400 shadow-blue-100' : 'border-slate-100'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-white via-transparent to-${color.replace('amber', 'yellow')}-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${colorClasses[color]} text-2xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            {icon}
          </div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">{title}</h2>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Incluye</h4>
          <ul className="space-y-2.5">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className={`mt-0.5 flex h-4 w-4 items-center justify-center rounded-full ${colorClasses[color]} text-[10px]`}>
                   ✓
                </span>
                <span className="group-hover:text-gray-900 transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative group flex flex-col items-center text-center">
      <div className="mb-4 relative">
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-100 text-blue-600 text-xl font-bold shadow-lg group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
          {number}
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed max-w-[200px]">{description}</p>
    </div>
  );
}