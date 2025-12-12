export default function CertificacionesPage() {
  const certificaciones = [
    {
      categoria: "Formación Académica",
      items: [
        {
          titulo: "Técnico Superior en Desarrollo de Software",
          entidad: "I.T.E.S. Santa Rosa",
          estado: "Egresado",
          fecha: "03/12/2025",
          descripcion:
            "Formación integral en programación, bases de datos, redes, microcontroladores, gestión de proyectos y software factory.",
          evidencia: null, // podés poner "/docs/analitico.pdf" o link externo
        },
      ],
    },
    {
      categoria: "Capacitaciones .NET / Backend",
      items: [
        {
          titulo: "Master en .NET y SQL Server",
          entidad: "Capacitación / Curso",
          estado: "Completado",
          fecha: "—",
          descripcion:
            "Desarrollo backend con .NET, diseño de bases de datos y buenas prácticas para sistemas empresariales.",
          evidencia: null,
        },
        {
          titulo: "Master ASP.NET MVC + Entity Framework (7/8)",
          entidad: "Capacitación / Curso",
          estado: "Completado",
          fecha: "—",
          descripcion:
            "Aplicaciones web con arquitectura por capas, EF Core, migraciones y patrones comunes en producción.",
          evidencia: null,
        },
        {
          titulo: "Master Identity en .NET",
          entidad: "Capacitación / Curso",
          estado: "Completado",
          fecha: "—",
          descripcion:
            "Autenticación y autorización, roles, claims y seguridad en aplicaciones .NET.",
          evidencia: null,
        },
      ],
    },
    {
      categoria: "Frontend / Web",
      items: [
        {
          titulo: "JavaScript (experiencia práctica)",
          entidad: "Proyectos personales y práctica",
          estado: "En curso",
          fecha: "—",
          descripcion:
            "Desarrollo frontend moderno con React/Next.js, UI responsiva y fundamentos de integración con APIs.",
          evidencia: null,
        },
      ],
    },
  ];

  return (
    <section className="space-y-10">
      {/* HEADER */}
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          Formación y credenciales
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Certificaciones y capacitaciones
        </h1>
        <p className="text-gray-700 max-w-3xl">
          Esta sección reúne mi formación académica y cursos complementarios.
          Si necesitás evidencia (certificado/analítico), puedo enviarla por
          solicitud.
        </p>
      </header>

      {/* LISTADO */}
      <div className="space-y-8">
        {certificaciones.map((bloque, idx) => (
          <section key={idx} className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl md:text-2xl font-semibold">
                {bloque.categoria}
              </h2>
              <div className="h-px flex-1 bg-slate-200 hidden md:block" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {bloque.items.map((c, i) => (
                <article
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {c.titulo}
                      </h3>
                      <p className="text-sm text-gray-600">{c.entidad}</p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium border ${
                        c.estado === "Completado" || c.estado === "Egresado"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}
                    >
                      {c.estado}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                    {c.descripcion}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs rounded-full bg-slate-50 text-slate-700 border border-slate-200 px-2 py-1">
                      Fecha: {c.fecha}
                    </span>

                    {c.evidencia ? (
                      <a
                        href={c.evidencia}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-2 py-1 hover:bg-blue-100 transition-colors"
                      >
                        Ver evidencia
                      </a>
                    ) : (
                      <span className="text-xs rounded-full bg-slate-50 text-slate-500 border border-slate-200 px-2 py-1">
                        Evidencia: a solicitud
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          ¿Querés que te envíe certificados o documentación?
        </h2>
        <p className="text-gray-700 mb-4">
          Si estás evaluando trabajar conmigo, puedo enviarte el analítico y/o
          certificados disponibles.
        </p>
        <a
          href="https://wa.me/5492954216751"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          Solicitar evidencia por WhatsApp
        </a>
      </section>
    </section>
  );
}
