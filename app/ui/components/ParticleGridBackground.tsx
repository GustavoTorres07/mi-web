'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  update: (canvasWidth: number, canvasHeight: number) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export default function ParticleGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Variables ajustables
    let particles: Particle[] = [];
    let animationFrameId: number;
    let particleCount = 0;
    let connectionDistance = 0;

    // Función para iniciar/reiniciar según el tamaño de pantalla
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const w = canvas.width;
      const h = canvas.height;

      // CÁLCULO DINÁMICO:
      // Si la pantalla es grande (PC), ponemos más partículas y más distancia.
      // Si es chica (móvil), ponemos menos para no saturar.
      if (w < 768) {
        // Móvil
        particleCount = 50;
        connectionDistance = 120;
      } else {
        // Desktop / Laptop
        // Calculamos cantidad basada en el área para asegurar cobertura total
        // Aprox 1 partícula por cada 11,000 px cuadrados
        particleCount = Math.floor((w * h) / 11000);
        // Limitamos para que no sean demasiadas en pantallas 4k
        particleCount = Math.min(particleCount, 180); 
        connectionDistance = 180; // Aumentamos el alcance de las líneas
      }

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(w, h));
      }
    };

    const createParticle = (w: number, h: number): Particle => {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5, // Velocidad suave
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,

        update(width: number, height: number) {
          this.x += this.vx;
          this.y += this.vy;

          // Rebotar en los bordes
          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;

          // Asegurar que no se salgan
          this.x = Math.max(0, Math.min(width, this.x));
          this.y = Math.max(0, Math.min(height, this.y));
        },

        draw(context: CanvasRenderingContext2D) {
          context.beginPath();
          context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(59, 130, 246, 0.6)';
          context.fill();
        }
      };
    };

    // Bucle de animación
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar conexiones
      // Optimizamos el loop para dibujar solo líneas necesarias
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        // Comparar solo con partículas subsiguientes para no duplicar ni comparar consigo misma
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          
          // Si están muy lejos en X o Y, ni siquiera calculamos la raíz cuadrada (optimización)
          if (Math.abs(dx) > connectionDistance || Math.abs(dy) > connectionDistance) continue;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Opacidad basada en la distancia (más cerca = más visible)
            const opacity = (1 - distance / connectionDistance) * 0.5;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Dibujar partículas
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Inicializar
    init();
    animate();

    // Manejar redimensionamiento
    const handleResize = () => {
      init(); // Reiniciamos todo al cambiar tamaño para redistribuir puntos
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-30 pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}