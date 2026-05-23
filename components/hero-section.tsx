'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroRightSide  from '@/components/ui/hero-right-side';

export function HeroSection() {
  const titleTop = 'Hyper';
  const titleBottom = 'Thinkers';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* =========================================
          GLOBAL SECTION GRID OVERLAY
          Ties the left and right sides together
      ========================================== */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,217,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,217,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated background glowing orbs */}
      <motion.div
        className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 217, 255, 0.12) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-[-10%] left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(10, 25, 47, 0.8) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Container - Expanded to max-w-7xl for the massive 3D chip */}
      <motion.div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* =========================================
              LEFT SIDE — TYPOGRAPHY & CTA
          ========================================== */}
          <div className="space-y-8 lg:pr-8">
            <motion.div variants={itemVariants} className="space-y-1" style={{ perspective: 1200 }}>
              <div className="overflow-hidden">
                <h1 className="flex flex-wrap text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tight leading-none">
                  {titleTop.split('').map((letter, index) => (
                    <motion.span
                      key={`top-${index}`}
                      initial={{
                        opacity: 0,
                        y: 140,
                        rotateX: -90,
                        filter: 'blur(20px)',
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        filter: 'blur(0px)',
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block text-white drop-shadow-lg"
                      style={{
                        transformOrigin: 'bottom',
                        willChange: 'transform',
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </h1>
              </div>
              <div className="overflow-hidden pb-4">
                <h1 className="flex flex-wrap text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tight leading-none">
                  {titleBottom.split('').map((letter, index) => (
                    <motion.span
                      key={`bottom-${index}`}
                      initial={{
                        opacity: 0,
                        y: 140,
                        rotateX: -90,
                        scale: 0.8,
                        filter: 'blur(20px)',
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
                        filter: 'blur(0px)',
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.35 + index * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block bg-gradient-to-r from-cyan-400 via-[#00d9ff] to-cyan-200 bg-clip-text text-transparent"
                      style={{
                        transformOrigin: 'bottom',
                        willChange: 'transform',
                        textShadow:
                          '0 0 30px rgba(0,217,255,0.4), 0 0 60px rgba(0,217,255,0.15)',
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </h1>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-cyan-100/70 max-w-xl leading-relaxed font-light"
            >
              Building production-ready systems for the next generation of AI
              engineering, full stack development, and advanced learning
              experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              <p className="text-base text-cyan-100/40 max-w-lg font-light tracking-wide">
                A futuristic ecosystem focused on innovation, quality, and
                empowering developers to ship at scale.
              </p>
            </motion.div>

            {/* Glowing Cyberpunk Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 pt-6">
              <motion.button
                className="px-8 py-3.5 rounded-lg bg-[#00d9ff] text-[#030914] font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] hover:bg-cyan-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Ecosystem
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="px-8 py-3.5 rounded-lg border border-cyan-500/30 text-cyan-400 bg-[#071120]/50 backdrop-blur-sm hover:bg-cyan-950/50 hover:border-cyan-400 transition-all duration-300 font-semibold tracking-wide shadow-[inset_0_0_0_rgba(0,217,255,0)] hover:shadow-[inset_0_0_20px_rgba(0,217,255,0.15)]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>

          {/* =========================================
              RIGHT SIDE — CYBERPUNK AI CORE 
          ========================================== */}
          <HeroRightSide />
        </div>

        {/* Scroll indicator - Synced with Cyan glow */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-3 text-cyan-400/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
            <div className="relative w-[2px] h-12 overflow-hidden rounded-full bg-cyan-900/30">
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-400 to-transparent shadow-[0_0_10px_#00d9ff]"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}