"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CertificacionesPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  const startAutoScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const container = carouselRef.current;

      if (!container) return;

      const mitad = container.scrollWidth / 2;

      if (container.scrollLeft >= mitad) {
        container.scrollLeft = 0;
      }

      container.scrollLeft += 1;
    }, 25);
  };

  const stopAutoScroll = () => {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const formacionAcademica = {
    titulo: "Técnico Superior en Desarrollo de Software",
    entidad: "I.T.E.S - Santa Rosa",
    estado: "Egresado",
    descripcion:
      "Formación integral en programación, bases de datos, redes, microcontroladores, gestión de proyectos y software factory.",
  };

  const capacitaciones = [
    {
      titulo: "Ciberseguridad",
      entidad: "Academia Identidad Argentina",
      estado: "Completado",
      descripcion:
        "Introducción a la Ciberseguridad, fundamentos, amenazas, vulnerabilidades y buenas prácticas para proteger sistemas y datos.",
      certificado:
        "/archivos/Academia Identidad Argentina - Ciberseguridad_page-0001.jpg",
    },
    {
      titulo: "Programación .NET",
      entidad: "Telecom",
      estado: "Completado",
      descripcion:
        "Desarrollo de aplicaciones con .NET, C#, ASP.NET MVC, Entity Framework y buenas prácticas de programación.",
      certificado:
        "/archivos/Certificado Asistencia digitalers 2023_page-0001.jpg",
    },
    {
      titulo: "Introducción al Mundo Web",
      entidad: "Telecom",
      estado: "Completado",
      descripcion:
        "Fundamentos del desarrollo web, HTML, CSS, JavaScript, frameworks frontend y backend, y mejores prácticas de desarrollo.",
      certificado:
        "/archivos/Certificado-Introducción-al-mundo-web-EducaciónIT.png",
    },
    {
      titulo: "Ingles Nivel 2 - A1.2",
      entidad: "CUI UBA",
      estado: "Completado",
      descripcion:
        "Curso de inglés nivel A1.2, cubriendo habilidades básicas de comunicación, gramática y vocabulario para principiantes.",
      certificado: "/archivos/CUI .UBA - Ingles Nivel 2 A1.2_page-0001.jpg",
    },
        {
      titulo: "Ingles Nivel 3 - A2.1",
      entidad: "CUI UBA",
      estado: "Completado",
      descripcion:
        "Curso de inglés nivel A2.1, enfocándose en habilidades de comunicación intermedias, gramática y vocabulario para avanzar en el aprendizaje del idioma.",
      certificado: "/archivos/CUI .UBA - Ingles Nivel 3 A2.1_page-0001.jpg",  
    },
            {
      titulo: "Reparador de PC",
      entidad: "Instituto Giuseppe",
      estado: "Completado",
      descripcion:
        "Curso de reparación de PC, cubriendo diagnóstico, mantenimiento y solución de problemas de hardware y software en computadoras personales.",
      certificado: "/archivos/Instituto Giuseppe - Reparador de PC_page-0002.jpg",  
    },
                {
      titulo: "Universidad HTML - Aprende HTML desde Cero hasta Experto",
      entidad: "Udemy",
      estado: "Completado",
      descripcion:
        "Curso de HTML en Udemy, cubriendo desde los conceptos básicos hasta técnicas avanzadas para crear sitios web efectivos y atractivos utilizando HTML.",
      certificado: "/archivos/UC-666d5d7a-7ec9-47ca-949c-2ddc8ffb339a.jpg",  
    },
                    {
      titulo: "Curso de Programacion desde Cero - Fundamentos y Logica 2026",
      entidad: "Udemy",
      estado: "Completado",
      descripcion:
        "Curso de programación en Udemy, cubriendo fundamentos, lógica de programación y conceptos clave para desarrollar habilidades de codificación desde cero.",
      certificado: "/archivos/UC-2c25d0c8-dabb-43b5-84b6-27925260fb03.jpg",  
    },
  ];

  const capacitacionesCarrusel = [
    ...capacitaciones,
    ...capacitaciones,
  ];

  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll();
  }, []);

  return (
    <section className="space-y-12">
      {/* HEADER */}
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          Formación y credenciales
        </div>

        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Certificaciones y capacitaciones
        </h1>

        <p className="max-w-3xl text-gray-700">
          Formación académica y capacitaciones orientadas al desarrollo de
          software, arquitectura backend, bases de datos y tecnologías web.
        </p>
      </header>

      {/* FORMACION ACADEMICA */}
      <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="text-sm font-medium text-blue-700">
              Formación Académica
            </span>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              {formacionAcademica.titulo}
            </h2>

            <p className="mt-1 text-gray-600">
              {formacionAcademica.entidad}
            </p>

            <p className="mt-4 max-w-3xl text-gray-700">
              {formacionAcademica.descripcion}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            {formacionAcademica.estado}
          </span>
        </div>
      </section>

      {/* CAPACITACIONES */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">
              Capacitaciones y Certificaciones
            </h2>

            <div className="hidden h-px w-32 bg-slate-200 md:block" />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                stopAutoScroll();
                scrollLeft();
                setTimeout(startAutoScroll, 3000);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm transition hover:bg-slate-50"
            >
              ←
            </button>

            <button
              onClick={() => {
                stopAutoScroll();
                scrollRight();
                setTimeout(startAutoScroll, 3000);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm transition hover:bg-slate-50"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {capacitacionesCarrusel.map((c, index) => (
            <article
              key={index}
              className="w-[380px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {c.certificado ? (
                <a
                  href={c.certificado}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative h-56 w-full border-b border-slate-200 bg-white">
                    <Image
                      src={c.certificado}
                      alt={c.titulo}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </a>
              ) : (
                <div className="flex h-56 items-center justify-center border-b border-slate-200 bg-slate-50 text-sm text-slate-400">
                  Certificado no disponible
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {c.titulo}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      {c.entidad}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
                      c.estado === "Completado"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-amber-200 bg-amber-50 text-amber-700"
                    }`}
                  >
                    {c.estado}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  {c.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
        <h2 className="mb-2 text-xl font-semibold md:text-2xl">
          ¿Necesitás documentación respaldatoria?
        </h2>

        <p className="mb-4 text-gray-700">
          Puedo compartir certificados, analítico y documentación adicional
          relacionada con mi formación académica y capacitaciones.
        </p>

        <a
          href="https://wa.me/5492954216751"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          Contactar por WhatsApp
        </a>
      </section>
    </section>
  );
}