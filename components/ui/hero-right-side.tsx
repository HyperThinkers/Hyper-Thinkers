'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroRightSide() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Floating tech labels - adjusted for a clear surround frame
  const techLabels = [
    { label: 'AI Engineering', top: '15%', right: '20%', delay: 0 },
    // Shifted Full Stack entirely to the right side
    { label: 'Full Stack', top: '48%', right: '0%', delay: 1 },
    { label: 'Cloud Architecture', bottom: '15%', right: '20%', delay: 2 },
  ];

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <div className="relative hidden lg:flex items-center justify-center h-[700px] w-full overflow-hidden">
      {/* Subtle central glow to make the chip pop off the animated background */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />

      {/* =========================================
          ISOMETRIC SCENE CONTAINER
          Applies 3D tilt to the whole scene
      ========================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: 60, rotateZ: -45 }}
        animate={{ opacity: 1, scale: 1, rotateX: 60, rotateZ: -45 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[800px] h-[800px] perspective-[2000px] transform-style-3d"
      >
        {/* REMOVED: The entire Motherboard Base Panel background, borders, grids, and shadows.
            Now it's completely transparent, like a PNG background removal.
        */}
        <div className="absolute inset-0">

          {/* Static decorative circuit traces - kept for the "floating energy" look */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 800">
            <path d="M 100 100 L 200 100 L 250 150 L 300 150" fill="none" stroke="#00d9ff" strokeWidth="2" strokeOpacity="0.3" />
            <path d="M 700 200 L 600 200 L 550 250 L 500 250" fill="none" stroke="#00d9ff" strokeWidth="2" strokeOpacity="0.3" />
            <path d="M 150 700 L 250 700 L 300 650 L 350 650" fill="none" stroke="#00d9ff" strokeWidth="2" strokeOpacity="0.3" />
            <path d="M 650 650 L 550 650 L 500 600 L 450 600" fill="none" stroke="#00d9ff" strokeWidth="2" strokeOpacity="0.3" />
            {/* Golden nodes */}
            <circle cx="100" cy="100" r="3" fill="#fbbf24" />
            <circle cx="700" cy="200" r="3" fill="#fbbf24" />
            <circle cx="150" cy="700" r="3" fill="#fbbf24" />
            <circle cx="650" cy="650" r="3" fill="#fbbf24" />
            <circle cx="250" cy="300" r="2" fill="#fbbf24" />
            <circle cx="600" cy="400" r="2" fill="#fbbf24" />
            <circle cx="300" cy="500" r="2" fill="#fbbf24" />
          </svg>

          {/* =========================================
              ANIMATED ELECTRIC CIRCUIT PATHS
              Electricity "dots" travel towards the CPU
          ========================================== */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800">
            <defs>
              <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Path 1 */}
            <path id="circuit1" d="M 0 200 L 250 200 L 350 300 L 400 300" fill="none" stroke="rgba(0,217,255,0.15)" strokeWidth="3" />
            <circle r="5" fill="#00d9ff" filter="url(#strong-glow)">
              <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                <mpath href="#circuit1" />
              </animateMotion>
            </circle>

            {/* Path 2 */}
            <path id="circuit2" d="M 100 800 L 100 550 L 250 400 L 300 400" fill="none" stroke="rgba(0,217,255,0.15)" strokeWidth="3" />
            <circle r="5" fill="#00d9ff" filter="url(#strong-glow)">
              <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto" begin="0.5s">
                <mpath href="#circuit2" />
              </animateMotion>
            </circle>

            {/* Path 3 */}
            <path id="circuit3" d="M 800 150 L 600 150 L 500 250 L 450 250" fill="none" stroke="rgba(0,217,255,0.15)" strokeWidth="3" />
            <circle r="5" fill="#00d9ff" filter="url(#strong-glow)">
              <animateMotion dur="2.8s" repeatCount="indefinite" rotate="auto" begin="1s">
                <mpath href="#circuit3" />
              </animateMotion>
            </circle>

            {/* Path 4 */}
            <path id="circuit4" d="M 700 800 L 700 600 L 550 450 L 450 450" fill="none" stroke="rgba(0,217,255,0.15)" strokeWidth="3" />
            <circle r="5" fill="#00d9ff" filter="url(#strong-glow)">
              <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" begin="1.5s">
                <mpath href="#circuit4" />
              </animateMotion>
            </circle>

            {/* Path 5 */}
            <path id="circuit5" d="M 800 400 L 450 400" fill="none" stroke="rgba(0,217,255,0.15)" strokeWidth="3" />
            <circle r="5" fill="#00d9ff" filter="url(#strong-glow)">
              <animateMotion dur="2.2s" repeatCount="indefinite" rotate="auto" begin="2s">
                <mpath href="#circuit5" />
              </animateMotion>
            </circle>

            {/* Additional reverse direction dots */}
            <circle r="4" fill="#00d9ff" filter="url(#neon-glow)">
              <animateMotion dur="3.2s" repeatCount="indefinite" rotate="auto" direction="reverse">
                <mpath href="#circuit1" />
              </animateMotion>
            </circle>
            <circle r="4" fill="#00d9ff" filter="url(#neon-glow)">
              <animateMotion dur="3.7s" repeatCount="indefinite" rotate="auto" direction="reverse" begin="0.7s">
                <mpath href="#circuit3" />
              </animateMotion>
            </circle>
          </svg>

          {/* =========================================
              MAIN CPU CORE (The ONLY physical shape left)
          ========================================== */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px]">
            {/* Outer glowing aura */}
            <div className="absolute inset-0 bg-[#00d9ff] rounded-xl opacity-[0.15] blur-[30px]" />
            <div className="absolute inset-2 bg-[#00d9ff] rounded-xl opacity-[0.3] blur-[15px]" />

            {/* CPU socket / pin area (cyan dot matrix) */}
            <div className="absolute inset-[-10px] bg-[#021526] rounded-xl border border-cyan-500/40 shadow-[0_0_40px_rgba(0,217,255,0.4)] flex items-center justify-center overflow-hidden">
              <div className="w-[90%] h-[90%] flex flex-wrap gap-[6px] justify-center items-center content-center opacity-80">
                {Array.from({ length: 144 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-[6px] h-[6px] rounded-full bg-cyan-400 shadow-[0_0_8px_#00d9ff]"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 1.5 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Metallic CPU cap (top layer) with subtle hover animation */}
            <motion.div
              className="absolute inset-0 rounded-lg overflow-hidden border border-cyan-300/30"
              style={{
                background: 'linear-gradient(135deg, #1b385e 0%, #0d1e36 40%, #061121 100%)',
                boxShadow: '-15px 15px 30px rgba(0,0,0,0.8), inset 2px 2px 5px rgba(255,255,255,0.2)',
                transform: 'translateZ(40px)',
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glossy reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 via-transparent to-transparent opacity-60" />
              <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-b from-white/10 to-transparent -rotate-45 translate-x-[-30%] translate-y-[-50%]" />
            </motion.div>
          </div>
          
          {/* REMOVED: Secondary small chips block. Gone for a clean PNG look. */}
        </div>
      </motion.div>

      {/* =========================================
          FLOATING TECH LABELS (cinematic entrance)
      ========================================== */}
      {techLabels.map((item, i) => (
        <motion.div
          key={i}
          className="absolute px-6 py-3 rounded-full border border-cyan-400/30 bg-[#071120]/80 backdrop-blur-md text-[14px] font-bold text-cyan-300 tracking-[0.2em] uppercase z-20 shadow-[0_0_30px_rgba(0,217,255,0.15)]"
          initial={{ opacity: 0, x: 30 }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.7, 1, 0.7],
            x: 0,
          }}
          transition={{
            y: { duration: 5, delay: item.delay, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 3, delay: item.delay, repeat: Infinity, ease: 'easeInOut' },
            x: { duration: 0.8, delay: item.delay * 0.2, ease: 'backOut' },
          }}
          style={{
            top: item.top,
            bottom: item.bottom,
            right: item.right,
          }}
        >
          {/* Glowing dot indicator */}
          <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00d9ff]" />
          {item.label}
        </motion.div>
      ))}

      {/* Cinematic pulse ring around the motherboard */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full border border-cyan-400/30 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}