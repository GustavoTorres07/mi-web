'use client';

import { useState, useEffect } from 'react';
import ParticleGridBackground from './ui/components/ParticleGridBackground';

// Definimos la forma de los datos para que TypeScript no se queje
interface FloatingParticle {
  top: string;
  left: string;
  delay: string;
  duration: string;
}

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [currentWord, setCurrentWord] = useState(0);
  
  // 1. ESTADO PARA LAS PARTÍCULAS (Inicialmente vacío)
  // Esto evita el error porque al principio no renderiza nada que pueda diferir entre servidor y cliente
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  const words = ['empresas', 'clínicas', 'profesionales', 'emprendedores', 'startups', 'instituciones'];
  const fullText = words[currentWord];

  // Efecto de tipeado
  useEffect(() => {
    let timeout;
    if (typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setCurrentWord((prev) => (prev + 1) % words.length);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [typedText, fullText, currentWord]);

  // 2. EFECTO PARA GENERAR NÚMEROS ALEATORIOS (Solo en el cliente)
  useEffect(() => {
    // Aquí es seguro usar Math.random() porque esto solo corre en el navegador
    const newParticles = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${15 + Math.random() * 10}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative space-y-12 overflow-hidden min-h-screen p-6 md:p-12">
      
      {/* FONDO GRADIENTE */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* RED DE PARTÍCULAS */}
      <ParticleGridBackground />

      {/* 3. BURBUJAS FLOTANTES (CORREGIDO) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* IMPORTANTE: Aquí usamos la variable 'particles', NO [...Array(20)] directo */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: p.left,     // Usamos los valores guardados en el estado
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* HERO PRINCIPAL */}
      <header className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center relative z-0">
        <div className="space-y-6 animate-fadeIn">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Disponible para proyectos freelance en 2025
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Desarrollo de Software para
              <span className="relative block mt-2 min-h-[1.2em]">
                <span className="text-blue-600 relative z-10">
                  {typedText}
                  <span className="animate-blink ml-1">|</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-400/20 blur-xl -z-10 w-fit" />
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
              Construyo aplicaciones móviles, sistemas web y soluciones SaaS
              sobre arquitectura .NET y bases de datos robustas, para que
              puedas digitalizar tus procesos, mejorar la organización y tomar
              mejores decisiones con tus datos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5492954216751"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105"
            >
              Agendar una reunión
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/portafolio"
              className="group text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 bg-white/50 px-4 py-2 rounded-lg"
            >
              Ver proyectos y experiencias
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-xs md:text-sm text-gray-600">
            <div className="group cursor-default">
              <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">+3 años</p>
              <p>de experiencia construyendo sistemas</p>
            </div>
            <div className="group cursor-default">
              <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Stack especializado</p>
              <p>.NET · SQL Server · MAUI · React</p>
            </div>
          </div>
        </div>

        {/* PANEL LATERAL TECNOLOGÍAS */}
        <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-blue-200 via-sky-100 to-transparent blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-xl backdrop-blur-md hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">⚡</span>
              Stack tecnológico
            </h2>
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-700">
              <TechCard icon="💻" title="Backend" items={[".NET · ASP.NET", "Web API · EF · Identity"]} />
              <TechCard icon="🌐" title="Frontend" items={["React · Next.js", "Blazor · HTML/CSS"]} />
              <TechCard icon="📱" title="Móvil" items={[".NET MAUI · Android", "Blazor Hybrid"]} />
              <TechCard icon="🗄️" title="Datos" items={["SQL Server · MySQL", "Power BI · QlikView"]} />
            </div>
            <div className="mt-5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 px-4 py-3 text-xs text-gray-600 border border-slate-100">
              <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                ¿Necesitás algo a medida?
              </p>
              <p>
                Integro APIs, autenticación, reportes y paneles de gestión para
                clínicas, comercios, estudios profesionales y pymes.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* BLOQUES: QUÉ HAGO / PARA QUIÉN TRABAJO */}
      <section className="grid gap-6 md:grid-cols-2 relative z-0">
        <InfoCard
          icon="⚙️"
          color="blue"
          title="¿Qué hago?"
          items={[
            "Aplicaciones móviles (.NET MAUI / Android).",
            "Sistemas web escalables (.NET, SQL Server, APIs REST).",
            "Desarrollo fullstack moderno (React / Next.js).",
            "Software a medida para la realidad de tu negocio.",
            "Plataformas SaaS listas para usar con suscripción mensual.",
          ]}
        />

        <InfoCard
          icon="👥"
          color="emerald"
          title="¿Para quién trabajo?"
          items={[
            "Clínicas, consultorios y centros de salud.",
            "Comercios y pymes que necesitan ordenarse.",
            "Profesionales independientes (abogados, contadores, etc.).",
            "Emprendedores y startups digitales.",
            "Instituciones educativas y academias.",
          ]}
        />
      </section>

      {/* CTA FINAL */}
      <section className="relative group rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 px-6 py-7 md:px-8 md:py-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">
              ¿Necesitás una aplicación o un sistema para tu negocio?
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-xl">
              Podemos revisar juntos tu idea o proceso actual y definir una
              solución realista en etapas, con enfoque en resultados y no solo
              en tecnología.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <a
              href="https://wa.me/5492954216751"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">Enviar mensaje por WhatsApp</span>
              <span className="relative group-hover/btn:translate-x-1 transition-transform">→</span>
            </a>
            <span className="text-xs text-gray-500">
              Respondo personalmente desde Santa Rosa, La Pampa.
            </span>
          </div>
        </div>
      </section>

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

        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
}

// COMPONENTES AUXILIARES
function TechCard({ icon, title, items }: { icon: string; title: string; items: string[] }) {
  return (
    <div className="group space-y-1 p-2 rounded-lg hover:bg-blue-50/50 transition-colors cursor-default">
      <div className="flex items-center gap-2">
        <div className="text-blue-600 group-hover:scale-110 transition-transform text-lg">
          {icon}
        </div>
        <p className="font-semibold text-gray-900">{title}</p>
      </div>
      {items.map((item, i) => (
        <p key={i} className="text-gray-700">{item}</p>
      ))}
    </div>
  );
}

function InfoCard({ icon, color, title, items }: { icon: string; color: 'blue' | 'emerald'; title: string; items: string[] }) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
  };

  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colorClasses[color]} text-lg transition-colors duration-300`}>
            {icon}
          </div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </div>
        <ul className="space-y-2 text-sm">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700 group-hover:text-gray-900 transition-colors">
              <span className="text-blue-600 mt-0.5 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}