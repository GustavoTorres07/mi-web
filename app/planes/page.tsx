'use client';

import { useState } from 'react';

export default function PlanesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative space-y-16 overflow-hidden min-h-screen p-6 md:p-12">
      {/* 1. FONDO ANIMADO (Consistente con Servicios) */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* 2. CABECERA */}
      <header className="space-y-6 animate-fadeIn max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-sky-50 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          Metodología y Propuestas
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Planes y modalidades de{" "}
            <span className="relative inline-block">
              <span className="text-blue-600 relative z-10">trabajo</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-400/20 blur-xl -z-10" />
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl">
            En <span className="font-semibold text-gray-900">GT DevStudio</span> trabajo con un
            modelo híbrido pensado para desarrollar software sólido, mantenerlo
            en el tiempo y permitir que los sistemas evolucionen junto al negocio.
            No se trata solo de “hacer una app”, sino de acompañar procesos reales.
          </p>
        </div>
      </header>

      {/* 3. CÓMO TRABAJO (Timeline visual) */}
      <section className="space-y-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-2">
           <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-lg">🚀</span>
           <h2 className="text-2xl font-bold text-gray-900">El ciclo de vida del proyecto</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <PhaseCard
            step="01"
            title="Proyecto Inicial"
            description="Todo comienza con un desarrollo a medida. Analizo tu necesidad real y construyo la primera versión funcional del sistema."
            items={[
              "Relevamiento y análisis de requisitos",
              "Diseño de prototipos y alcance",
              "Desarrollo full-stack (.NET / React)",
              "Entrega por etapas funcionales"
            ]}
            color="blue"
          />

          <PhaseCard
            step="02"
            title="Mantenimiento Mensual"
            description="Una vez entregado, el sistema entra en soporte continuo para asegurar estabilidad, correcciones rápidas y tranquilidad."
            items={[
              "Soporte técnico prioritario",
              "Correcciones y ajustes menores",
              "Backups y monitoreo de servidores",
              "Gestión de Hosting y Dominios"
            ]}
            color="emerald"
          />
        </div>
      </section>

      {/* 4. EVOLUCIÓN (Grid de 3) */}
      <section className="space-y-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-2">
           <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600 text-lg">📈</span>
           <h2 className="text-2xl font-bold text-gray-900">Evolución del sistema</h2>
        </div>
        <p className="text-gray-700 max-w-3xl">
          Los sistemas no son estáticos. A medida que tu negocio crece, aparecen nuevas necesidades. 
          Las mejoras se cotizan como módulos adicionales.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard 
            icon="🧩" 
            title="Nuevos Módulos" 
            text="Funcionalidades extra como reportes avanzados, nuevos paneles de control o automatizaciones específicas." 
          />
          <FeatureCard 
            icon="📱" 
            title="Apps Móviles" 
            text="Extensión del sistema hacia aplicaciones Android/iOS para clientes o personal de campo." 
          />
          <FeatureCard 
            icon="🔌" 
            title="Integraciones" 
            text="Conexión con APIs externas (AFIP, MercadoPago), servicios de mensajería o herramientas de terceros." 
          />
        </div>
      </section>

      {/* 5. PLANES (Pricing visual) */}
      <section className="space-y-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
        <div className="text-center md:text-left">
           <h2 className="text-2xl font-bold text-gray-900">Modalidades habituales</h2>
           <p className="text-gray-600 mt-2">Elegí la estructura que mejor se adapte a tu etapa actual.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 items-start">
          <PlanCard
            title="Plan Inicial"
            subtitle="Para validar ideas"
            description="Ideal para profesionales y pequeños negocios que necesitan dar el primer paso digital."
            features={["Proyecto puntual", "Funcionalidad principal", "Mantenimiento básico"]}
            color="slate"
            active={hoveredCard === 0}
            onHover={() => setHoveredCard(0)}
            onLeave={() => setHoveredCard(null)}
          />

          <PlanCard
            title="Plan Profesional"
            subtitle="El más elegido"
            description="Para empresas que necesitan un sistema completo, escalable y con seguridad robusta."
            features={["Sistema web completo", "Roles y permisos", "Mantenimiento mensual", "Soporte prioritario"]}
            color="blue"
            isPopular={true}
            active={hoveredCard === 1}
            onHover={() => setHoveredCard(1)}
            onLeave={() => setHoveredCard(null)}
          />

          <PlanCard
            title="Plan SaaS / Evolutivo"
            subtitle="Crecimiento continuo"
            description="Para proyectos que requieren mejoras constantes, nuevas features mes a mes y alta disponibilidad."
            features={["Modelo por suscripción", "Evolución por módulos", "Infraestructura incluida", "Reuniones de seguimiento"]}
            color="violet"
            active={hoveredCard === 2}
            onHover={() => setHoveredCard(2)}
            onLeave={() => setHoveredCard(null)}
          />
        </div>
      </section>

      {/* 6. CTA FINAL (Estilo Banner) */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10 skew-x-12 translate-x-[-30%]"></div>
        
        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">
              ¿Querés una propuesta personalizada?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Cada proyecto es distinto. Si querés que analicemos tu idea o sistema
              actual, escribime para recibir una propuesta clara, con etapas y costos definidos.
            </p>
          </div>
          <div className="flex-shrink-0">
             <a
              href="https://wa.me/5492954216751"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-8 py-4 text-sm font-bold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              Solicitar propuesta
              <span>→</span>
            </a>
          </div>
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

// --- COMPONENTES AUXILIARES ---

function PhaseCard({ step, title, description, items, color }: { step: string; title: string; description: string; items: string[]; color: string }) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      <div className={`absolute -right-4 -top-4 text-9xl font-bold opacity-5 ${color === 'blue' ? 'text-blue-900' : 'text-emerald-900'}`}>
        {step}
      </div>
      <div className="relative z-10">
        <div className={`mb-4 inline-flex items-center rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wider ${colorClasses[color]}`}>
          Etapa {step}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
               <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white ${color === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'}`}>✓</span>
               {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm transition-all hover:bg-white hover:shadow-md hover:border-violet-200">
      <div className="mb-3 text-3xl group-hover:scale-110 transition-transform origin-left">{icon}</div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

function PlanCard({ 
  title, subtitle, description, features, color, isPopular, active, onHover, onLeave 
}: { 
  title: string; subtitle: string; description: string; features: string[]; color: string; isPopular?: boolean; active: boolean; onHover: () => void; onLeave: () => void; 
}) {
  const borderColors: Record<string, string> = {
    slate: "border-slate-200 hover:border-slate-300",
    blue: "border-blue-200 hover:border-blue-400",
    violet: "border-violet-200 hover:border-violet-400",
  };

  return (
    <div 
      className={`relative rounded-2xl border bg-white p-6 md:p-8 transition-all duration-300 ${borderColors[color]} ${active ? 'shadow-xl -translate-y-2' : 'shadow-sm'}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-bold text-white shadow-md">
          RECOMENDADO
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className={`text-sm font-medium uppercase tracking-wide opacity-80 ${color === 'blue' ? 'text-blue-600' : color === 'violet' ? 'text-violet-600' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      </div>
      
      <p className="text-sm text-gray-600 mb-6 min-h-[60px]">{description}</p>
      
      <div className="space-y-3 pt-6 border-t border-gray-100">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
             <span className="text-green-500 font-bold">✓</span>
             {feature}
          </div>
        ))}
      </div>
    </div>
  );
}