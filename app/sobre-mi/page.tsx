'use client';

import { useState } from 'react';

export default function SobreMiPage() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section className="relative space-y-12 overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent animate-pulse" style={{ animationDuration: '8s' }} />
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
          Técnico Superior en Desarrollo de Software
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Sobre{" "}
          <span className="relative inline-block">
            <span className="text-blue-600 relative z-10">mí</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-400/20 blur-xl -z-10" />
          </span>
        </h1>
      </header>

      {/* INTRO CON FOTO */}
      <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
        <div className="space-y-5 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Soy <span className="font-semibold text-gray-900">Gustavo Emanuel Torres</span>,
            Técnico Superior en Desarrollo de Software egresado del I.T.E.S. Santa
            Rosa. Aprobé el 100% de las asignaturas del plan de estudios, con una
            formación que abarca programación orientada a objetos, aplicaciones web
            y móviles, gestión y administración de bases de datos, redes,
            microcontroladores, software factory y gestión de proyectos de software.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Complemento mi formación superior con capacitaciones avanzadas en{" "}
            <span className="font-semibold text-gray-900">.NET y SQL Server</span>,{" "}
            <span className="font-semibold text-gray-900">
              ASP.NET MVC con Entity Framework 7 y 8
            </span>
            , e <span className="font-semibold text-gray-900">Identity en .NET</span>, además de
            experiencia práctica en <span className="font-semibold text-gray-900">JavaScript</span> y
            desarrollo web moderno.
          </p>
        </div>

        {/* Profile card */}
        <div className="relative group animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-sky-100 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative rounded-2xl border border-slate-200/60 bg-white/90 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-center w-full h-48 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 mb-4 text-6xl">
              👨‍💻
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-gray-900">Gustavo Emanuel Torres</h3>
              <p className="text-sm text-gray-600">Santa Rosa, La Pampa 🇦🇷</p>
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-100">
                  +3 años de experiencia
                </span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full border border-emerald-100">
                  Inglés B2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TECNOLOGÍAS */}
      <div className="space-y-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Stack Tecnológico
          </h2>
          <p className="text-gray-600">Herramientas y tecnologías con las que trabajo día a día</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <TechCard
            icon="💻"
            title="Backend"
            color="blue"
            items={[
              ".NET, ASP.NET MVC, Web API",
              "Entity Framework 7/8, Identity",
              "Arquitecturas limpias y escalables"
            ]}
            isActive={activeSkill === 0}
            onHover={() => setActiveSkill(0)}
            onLeave={() => setActiveSkill(null)}
          />

          <TechCard
            icon="🎨"
            title="Frontend"
            color="emerald"
            items={[
              "JavaScript, React/Next.js",
              "HTML, CSS, Tailwind",
              "Interfaces modernas y responsivas"
            ]}
            isActive={activeSkill === 1}
            onHover={() => setActiveSkill(1)}
            onLeave={() => setActiveSkill(null)}
          />

          <TechCard
            icon="🗄️"
            title="Bases de datos"
            color="violet"
            items={[
              "SQL Server, MySQL, MariaDB",
              "MongoDB (NoSQL)",
              "Optimización de consultas y rendimiento"
            ]}
            isActive={activeSkill === 2}
            onHover={() => setActiveSkill(2)}
            onLeave={() => setActiveSkill(null)}
          />

          <TechCard
            icon="📱"
            title="Desarrollo Móvil"
            color="amber"
            items={[
              "Android (Android Studio)",
              ".NET MAUI multiplataforma",
              "Apps nativas y híbridas"
            ]}
            isActive={activeSkill === 3}
            onHover={() => setActiveSkill(3)}
            onLeave={() => setActiveSkill(null)}
          />

          <TechCard
            icon="🔧"
            title="Dev & Datos"
            color="indigo"
            items={[
              "Docker, containerización",
              "QlikView, Power BI",
              "Minería y explotación de datos"
            ]}
            isActive={activeSkill === 4}
            onHover={() => setActiveSkill(4)}
            onLeave={() => setActiveSkill(null)}
          />

          <TechCard
            icon="🛡️"
            title="Otros"
            color="slate"
            items={[
              "Ciberseguridad básica",
              "Reparación de PC",
              "Inglés técnico nivel B2"
            ]}
            isActive={activeSkill === 5}
            onHover={() => setActiveSkill(5)}
            onLeave={() => setActiveSkill(null)}
          />
        </div>
      </div>

      {/* CÓMO TRABAJO */}
      <div className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl">
            ⚡
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Cómo trabajo</h2>
        </div>
        
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          Soy una persona organizada y responsable, con buenas relaciones
          interpersonales. Me gusta trabajar de forma cercana con cada cliente,
          entender su negocio y transformar sus procesos en soluciones de
          software claras, seguras y escalables.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <WorkPrinciple
            icon="🎯"
            title="Enfoque profesional"
            description="Relevamiento de requisitos detallado y análisis profundo"
          />
          <WorkPrinciple
            icon="🔄"
            title="Desarrollo iterativo"
            description="Entregas parciales para tu feedback constante"
          />
          <WorkPrinciple
            icon="✅"
            title="Calidad y pruebas"
            description="Testing exhaustivo antes de cada entrega"
          />
          <WorkPrinciple
            icon="📚"
            title="Documentación clara"
            description="Código limpio y documentación completa"
          />
          <WorkPrinciple
            icon="🤝"
            title="Acompañamiento"
            description="Soporte posterior y capacitación incluida"
          />
          <WorkPrinciple
            icon="📈"
            title="Escalabilidad"
            description="Pensado para crecer con tu negocio"
          />
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="relative group rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 p-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            ¿Trabajamos juntos en tu próximo proyecto?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Si buscás un desarrollador comprometido que entienda tu negocio y construya
            soluciones que realmente funcionen, conversemos.
          </p>
          <a
            href="https://wa.me/5492954216751"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105"
          >
            Agendar una reunión
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

function TechCard({ 
  icon, 
  title, 
  color, 
  items,
  isActive,
  onHover,
  onLeave
}: { 
  icon: string; 
  title: string; 
  color: string; 
  items: string[];
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
    slate: "bg-slate-50 text-slate-600 group-hover:bg-slate-100",
  };

  return (
    <div 
      className={`group relative rounded-2xl border bg-white/90 backdrop-blur-sm p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden ${
        isActive ? 'border-blue-300 shadow-lg' : 'border-slate-200'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colorClasses[color]} text-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            {icon}
          </div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        <ul className="space-y-1.5 text-sm text-gray-700">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WorkPrinciple({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="group flex items-start gap-3 p-4 rounded-xl hover:bg-blue-50/50 transition-colors cursor-default">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}