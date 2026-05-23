'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-primary via-accent to-primary" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Join
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hyper Thinkers?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Start your journey into the future of AI engineering, full stack development, and production-ready systems today. Join our community of builders shaping the next generation.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-bold text-lg flex items-center justify-center gap-2 hover:shadow-glow transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="px-8 py-4 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 font-bold text-lg transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="pt-8 border-t border-border/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-foreground/60 mb-4">Trusted by builders and engineers worldwide</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {['2000+ Members', 'Active Community', '500+ Projects'].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  whileInView={{ scale: [0.8, 1] }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg font-bold text-accent">{stat}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
