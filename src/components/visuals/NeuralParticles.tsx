"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  hue: number;
  pulseSpeed: number;
  pulse: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 1;
    this.vy = (Math.random() - 0.5) * 1;
    this.baseRadius = Math.random() * 2 + 1;
    this.radius = this.baseRadius;
    this.hue = Math.random() * 360; // Random bright color
    this.pulse = Math.random() * Math.PI * 2;
    this.pulseSpeed = Math.random() * 0.05 + 0.02;
  }

  update(canvasWidth: number, canvasHeight: number, mouse: { x: number, y: number, radius: number }) {
    // Magnetic pull
    if (mouse.x !== -1000 && mouse.y !== -1000) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius;
        this.vx += (dx / distance) * force * 0.5;
        this.vy += (dy / distance) * force * 0.5;
      }
    }

    // Friction & speed limits
    this.vx *= 0.99;
    this.vy *= 0.99;

    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > 4) {
      this.vx = (this.vx / speed) * 4;
      this.vy = (this.vy / speed) * 4;
    }

    // Default drift if too slow
    if (speed < 0.2) {
      this.vx += (Math.random() - 0.5) * 0.1;
      this.vy += (Math.random() - 0.5) * 0.1;
    }

    this.x += this.vx;
    this.y += this.vy;

    // Bounce off walls
    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;

    // Sparkle effect
    this.pulse += this.pulseSpeed;
    this.radius = this.baseRadius + Math.sin(this.pulse) * 1.5;
  }

  draw(ctx: CanvasRenderingContext2D, isLightMode: boolean) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.1, this.radius), 0, Math.PI * 2);
    // Use bright saturated colors in both modes
    ctx.fillStyle = `hsla(${this.hue}, 90%, ${isLightMode ? '40%' : '70%'}, ${0.6 + Math.sin(this.pulse)*0.4})`;
    ctx.fill();
  }
}

export default function NeuralParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const isLightRef = useRef(false);

  useEffect(() => {
    isLightRef.current = resolvedTheme === "light";
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 200 // Larger magnetic field
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 10000); // More particles
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLight = isLightRef.current;
      const lineColor = isLight ? "0, 0, 0" : "255, 255, 255";

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height, mouse);
        particles[i].draw(ctx, isLight);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColor}, ${0.15 - distance / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] opacity-70"
      aria-hidden="true"
    />
  );
}
