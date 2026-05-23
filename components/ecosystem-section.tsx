'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// =========================================
// DATA CONFIGURATION
// Positioned using percentages relative to a 1000x800 aspect ratio box
// =========================================
const chips = [
  { id: 1, label: 'Hyper Thinkers', x: '50%', y: '12.5%', w: '24%', h: '8.5%', delay: 0.2, isMain: true },
  { id: 2, label: 'Hyper Learning', x: '20%', y: '31.25%', w: '18%', h: '7.5%', delay: 1.8 },
  { id: 3, label: 'Hyper Hub', x: '80%', y: '31.25%', w: '18%', h: '7.5%', delay: 1.8 },
  { id: 4, label: 'Hyper AI Labs', x: '20%', y: '60%', w: '18%', h: '7.5%', delay: 3.4 },
  { id: 5, label: 'Tutorials', x: '80%', y: '60%', w: '18%', h: '7.5%', delay: 3.4 },
  { id: 6, label: 'Hyper Community', x: '50%', y: '85%', w: '28%', h: '10%', delay: 5.2, isMain: true },
];

const circuits = [
  // Phase 1: From Thinkers (1) to Learning (2) & Hub (3)
  { id: 'c1-2', d: 'M 500 100 L 500 175 L 200 175 L 200 250', delay: 0.8, dur: 1 },
  { id: 'c1-3', d: 'M 500 100 L 500 175 L 800 175 L 800 250', delay: 0.8, dur: 1 },

  // Phase 2: From 2 & 3 to 4 & 5
  { id: 'c2-4', d: 'M 180 250 L 180 480', delay: 2.4, dur: 1 },
  { id: 'c3-5', d: 'M 820 250 L 820 480', delay: 2.4, dur: 1 },

  // Phase 2 (Bypass): From 2 & 3 directly heading towards Community (6)
  { id: 'c2-6', d: 'M 220 250 L 220 365 L 470 365 L 470 680', delay: 2.4, dur: 2.5 },
  { id: 'c3-6', d: 'M 780 250 L 780 365 L 530 365 L 530 680', delay: 2.4, dur: 2.5 },

  // Phase 3: From 4 & 5 converging to Community (6)
  { id: 'c4-6', d: 'M 200 480 L 200 580 L 490 580 L 490 680', delay: 4.0, dur: 1.2 },
  { id: 'c5-6', d: 'M 800 480 L 800 580 L 510 580 L 510 680', delay: 4.0, dur: 1.2 },
];

export function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // Trigger animations only when the section is nicely in view
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            The
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-[#00d9ff] to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,217,255,0.3)]">
              Hyper Ecosystem
            </span>
          </h2>
          <p className="text-cyan-100/50 text-lg md:text-xl max-w-2xl mx-auto font-light">
            A dynamic, interconnected network of tools and platforms. Energy flows where focus goes—building the future of AI engineering.
          </p>
        </motion.div>

        {/* =========================================
            CIRCUIT BOARD VISUALIZATION
        ========================================== */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[5/4] mb-20">
          
          {/* SVG Layer: Draws the connecting lines and electricity */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 800"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="hyper-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static Grid lines for extra cyber aesthetic */}
            <g className="opacity-[0.05]">
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`v-${i}`} x1={i * 50} y1={0} x2={i * 50} y2={800} stroke="#00d9ff" strokeWidth="1" />
              ))}
              {Array.from({ length: 16 }).map((_, i) => (
                <line key={`h-${i}`} x1={0} y1={i * 50} x2={1000} y2={i * 50} stroke="#00d9ff" strokeWidth="1" />
              ))}
            </g>

            {circuits.map((circuit) => (
              <g key={circuit.id}>
                {/* 1. Base trace line (faint) */}
                <path
                  d={circuit.d}
                  fill="none"
                  stroke="rgba(0,217,255,0.1)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* 2. The animated drawing line (bright cyan) */}
                <motion.path
                  id={circuit.id}
                  d={circuit.d}
                  fill="none"
                  stroke="#00d9ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#hyper-glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{
                    pathLength: { duration: circuit.dur, delay: circuit.delay, ease: 'easeInOut' },
                    opacity: { duration: 0.1, delay: circuit.delay },
                  }}
                />

                {/* 3. Infinite electricity packet flowing along the path */}
                {isInView && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    // Electricity starts slightly after the line finishes drawing
                    transition={{ delay: circuit.delay + circuit.dur - 0.2 }}
                  >
                    <circle r="4" fill="#ffffff" filter="url(#hyper-glow)">
                      <animateMotion
                        dur={`${circuit.dur * 1.2}s`}
                        repeatCount="indefinite"
                      >
                        <mpath href={`#${circuit.id}`} />
                      </animateMotion>
                    </circle>
                  </motion.g>
                )}
              </g>
            ))}
          </svg>

          {/* HTML Layer: The Digital Chips positioned perfectly over the SVG paths */}
          {chips.map((chip) => (
            <motion.div
              key={chip.id}
              className="absolute flex items-center justify-center z-20 group"
              style={{
                left: chip.x,
                top: chip.y,
                width: chip.w,
                height: chip.h,
                x: '-50%',
                y: '-50%',
              }}
              initial={{ opacity: 0, scale: 0.3, rotateX: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: chip.delay, type: 'spring', stiffness: 120 }}
            >
              {/* Outer faint border ring (matches the outer trace ring in the image) */}
              <div className="absolute inset-[-10px] border border-[#00d9ff]/30 rounded-lg pointer-events-none" />

              {/* Main neon chip (matches the bright glowing central square) */}
              <div className={`relative w-full h-full bg-[#020611] border-[2px] border-[#00d9ff] rounded-md flex items-center justify-center z-10
                ${chip.isMain ? 'shadow-[0_0_35px_#00d9ff,inset_0_0_20px_rgba(0,217,255,0.5)]' : 'shadow-[0_0_20px_#00d9ff,inset_0_0_12px_rgba(0,217,255,0.5)]'}
              `}>
                
                {/* Circuit Connection Points (glowing dots on the outer ring) */}
                <div className="absolute -left-[11px] top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-[#00d9ff] rounded-full shadow-[0_0_10px_#00d9ff]" />
                <div className="absolute -right-[11px] top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-[#00d9ff] rounded-full shadow-[0_0_10px_#00d9ff]" />
                <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-[#00d9ff] rounded-full shadow-[0_0_10px_#00d9ff]" />
                <div className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-[#00d9ff] rounded-full shadow-[0_0_10px_#00d9ff]" />

                {/* Solid dark void interior */}
                <div className="absolute inset-1 bg-[#010308] rounded-sm pointer-events-none" />

                {/* Chip Text */}
                <span 
                  className={`relative z-10 text-cyan-50 font-bold uppercase tracking-widest text-center px-1 drop-shadow-[0_0_10px_#00d9ff]
                    ${chip.isMain ? 'text-[clamp(0.6rem,2vw,1.1rem)]' : 'text-[clamp(0.5rem,1.5vw,0.85rem)]'}
                  `}
                >
                  {chip.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            INFO CARDS (Matching the cyberpunk theme)
        ========================================== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 6.0 }} // Appears after full sequence
        >
          {[
            {
              title: 'Interconnected',
              description: 'All tools and platforms work seamlessly together in perfect harmony.',
              icon: '🔗',
            },
            {
              title: 'Production-Ready',
              description: 'Built on battle-tested architecture patterns for real-world scale.',
              icon: '⚡',
            },
            {
              title: 'Community-Driven',
              description: 'Powered by builders and engineers creating the future together.',
              icon: '🌐',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-xl border border-cyan-900/50 bg-[#071120]/60 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.1)]"
            >
              <div className="absolute top-0 left-8 w-12 h-[1px] bg-cyan-400/50" />
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-cyan-100/50 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}