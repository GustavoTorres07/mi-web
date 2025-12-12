'use client';

import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative overflow-hidden">
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

      <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
        {/* FORMULARIO */}
        <div className="space-y-6 animate-fadeIn">
          <header>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-sky-50 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Respuesta en menos de 24 horas
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              <span className="relative inline-block">
                <span className="text-blue-600 relative z-10">Contacto</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-400/20 blur-xl -z-10" />
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Contame brevemente qué necesitás y te responderé lo antes posible para
              analizar la mejor solución para tu proyecto.
            </p>
          </header>

          {/* FORMULARIO */}
          <div className="space-y-5 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-lg">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white hover:border-blue-300"
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white hover:border-blue-300"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white hover:border-blue-300 resize-none"
                placeholder="Contame brevemente sobre tu proyecto, qué necesitás desarrollar, tiempos estimados, presupuesto aproximado..."
              />
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-[1.02] ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>Enviar mensaje</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </>
              )}
            </button>

            {/* Success message */}
            {submitStatus === 'success' && (
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-800">
                  <span className="text-xl">✓</span>
                  <p className="text-sm font-medium">
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* INFORMACIÓN DE CONTACTO */}
        <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          {/* Contacto directo */}
          <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📞</span>
              Contacto directo
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              También podés contactarme directamente por estos medios:
            </p>
            
            <div className="space-y-4">
              <ContactMethod
                icon="💬"
                label="WhatsApp"
                value="+54 9 2954 216751"
                href="https://wa.me/5492954216751"
                color="emerald"
              />
              <ContactMethod
                icon="📧"
                label="Email (Gmail)"
                value="gtreal62@gmail.com"
                href="mailto:gtreal62@gmail.com"
                color="blue"
              />
              <ContactMethod
                icon="📨"
                label="Email (Outlook)"
                value="gustavotorres_07@outlook.com"
                href="mailto:gustavotorres_07@outlook.com"
                color="violet"
              />
              <ContactMethod
                icon="📍"
                label="Ubicación"
                value="Santa Rosa, La Pampa 🇦🇷"
                color="slate"
              />
            </div>
          </div>

          {/* Horario de respuesta */}
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-50 p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="text-xl">⏰</span>
              Horario de respuesta
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span><strong>Lunes a Viernes:</strong> 9:00 - 19:00 hs</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span><strong>Sábados:</strong> 10:00 - 13:00 hs</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">○</span>
                <span className="text-gray-500"><strong>Domingos:</strong> Cerrado</span>
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-xs text-gray-600">
                💡 <strong>Consultas urgentes:</strong> Enviame un mensaje por WhatsApp y te responderé lo antes posible.
              </p>
            </div>
          </div>

          {/* Por qué contactarme */}
          <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">💡</span>
              ¿Por qué trabajar conmigo?
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                <span>Respuesta rápida y comunicación fluida</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                <span>Propuestas claras con tiempos y costos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                <span>Desarrollo profesional y código de calidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5 flex-shrink-0">✓</span>
                <span>Soporte posterior y acompañamiento</span>
              </li>
            </ul>
          </div>
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

function ContactMethod({ 
  icon, 
  label, 
  value, 
  href, 
  color 
}: { 
  icon: string; 
  label: string; 
  value: string; 
  href?: string;
  color: string;
}) {
  const colorClasses: Record<string, string> = {
    emerald: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200",
    blue: "bg-blue-50 hover:bg-blue-100 border-blue-200",
    violet: "bg-violet-50 hover:bg-violet-100 border-violet-200",
    slate: "bg-slate-50 hover:bg-slate-100 border-slate-200",
  };

  const content = (
    <>
      <div className="flex items-center gap-3 flex-1">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="text-xs text-gray-600 font-medium">{label}</p>
          <p className="text-sm text-gray-900 font-semibold">{value}</p>
        </div>
      </div>
      {href && (
        <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-between p-4 rounded-xl border ${colorClasses[color]} transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={`flex items-center justify-between p-4 rounded-xl border ${colorClasses[color]}`}>
      {content}
    </div>
  );
}