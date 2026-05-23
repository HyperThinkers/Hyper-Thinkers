'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    // ------------------------------
    // Configuration
    // ------------------------------
    const config = {
      bgColor: '#030914',
      primaryColorRgb: '0, 217, 255', // cyan
      // Particle & motion
      baseSpeed: 0.2,
      damping: 0.97,           // velocity retention (0.95-0.99)
      attractionStrength: 0.02, // how strongly particles are pulled to mouse
      maxAttractionDistance: 250,
      // Visual
      maxConnectionDistance: 160,
      mouseConnectionDistance: 220,
      particleCountFactor: 12000, // area / this = particle count
    };

    // Mouse position (screen coordinates)
    const mouse = { x: -1000, y: -1000, inside: false };

    // ------------------------------
    // Canvas sizing (High-DPI aware)
    // ------------------------------
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initParticles();
    };

    // ------------------------------
    // Particle generation
    // ------------------------------
    const initParticles = () => {
      const area = width * height;
      const particleCount = Math.max(60, Math.floor(area / config.particleCountFactor));

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * config.baseSpeed,
          vy: (Math.random() - 0.5) * config.baseSpeed,
          size: Math.random() * 2 + 0.8,
          pulseSpeed: 1.5 + Math.random() * 1.5,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    // ------------------------------
    // Mouse tracking
    // ------------------------------
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.inside = true;
    };

    const handleMouseLeave = () => {
      mouse.inside = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // ------------------------------
    // Animation loop
    // ------------------------------
    const animate = () => {
      if (!ctx) return;

      // Clear canvas completely (no trails)
      ctx.fillStyle = config.bgColor;
      ctx.fillRect(0, 0, width, height);

      const now = Date.now() / 1000;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // ----- Attraction to mouse (smooth, non‑aggressive) -----
        if (mouse.inside) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = config.maxAttractionDistance * config.maxAttractionDistance;

          if (distSq < maxDistSq && distSq > 0.1) {
            const dist = Math.sqrt(distSq);
            // Force inversely proportional to distance, but capped
            const strength = config.attractionStrength * (1 - dist / config.maxAttractionDistance);
            const angle = Math.atan2(dy, dx);
            const forceX = Math.cos(angle) * strength;
            const forceY = Math.sin(angle) * strength;
            p.vx += forceX;
            p.vy += forceY;
          }
        }

        // Apply damping & velocity limits
        p.vx *= config.damping;
        p.vy *= config.damping;
        const maxSpeed = 2.5;
        p.vx = Math.min(maxSpeed, Math.max(-maxSpeed, p.vx));
        p.vy = Math.min(maxSpeed, Math.max(-maxSpeed, p.vy));

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges (seamless infinite space)
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Opacity pulsing (gentle breathing effect)
        const pulse = (Math.sin(now * p.pulseSpeed + p.pulsePhase) + 1) / 2; // 0..1
        const opacity = 0.3 + pulse * 0.5; // range 0.3 .. 0.8

        // Draw particle (glowing dot)
        ctx.fillStyle = `rgba(${config.primaryColorRgb}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // ----- Draw connections (neural network style) -----
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Particle-particle connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxConnectionDistance) {
            const opacity = (1 - distance / config.maxConnectionDistance) * 0.35;
            ctx.strokeStyle = `rgba(${config.primaryColorRgb}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Mouse connections (only if inside and distance small)
        if (mouse.inside) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < config.mouseConnectionDistance) {
            const opacity = (1 - distance / config.mouseConnectionDistance) * 0.5;
            ctx.strokeStyle = `rgba(${config.primaryColorRgb}, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // ------------------------------
    // Setup & cleanup
    // ------------------------------
    const setup = () => {
      resizeCanvas();
      animate();

      window.addEventListener('resize', resizeCanvas);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    };

    setup();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: '#030914' }} // fallback
    />
  );
}