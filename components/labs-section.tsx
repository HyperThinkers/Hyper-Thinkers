'use client'

import { motion } from 'framer-motion'
import { Beaker, Zap, Rocket } from 'lucide-react'

interface Experiment {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  status: 'Active' | 'Coming Soon' | 'Beta'
  progress: number
}

const experiments: Experiment[] = [
  {
    id: 1,
    title: 'Neural Networks at Scale',
    description: 'Exploring distributed neural network training across multiple GPUs and regions.',
    icon: <Zap className="w-6 h-6" />,
    status: 'Active',
    progress: 75,
  },
  {
    id: 2,
    title: 'Real-time AI Inference',
    description: 'Building ultra-low latency AI model serving for production applications.',
    icon: <Rocket className="w-6 h-6" />,
    status: 'Beta',
    progress: 60,
  },
  {
    id: 3,
    title: 'Autonomous Systems',
    description: 'Developing self-healing and self-optimizing infrastructure systems.',
    icon: <Beaker className="w-6 h-6" />,
    status: 'Coming Soon',
    progress: 40,
  },
  {
    id: 4,
    title: 'Quantum Computing Integration',
    description: 'Bridging quantum computing with classical systems for hybrid workloads.',
    icon: <Zap className="w-6 h-6" />,
    status: 'Coming Soon',
    progress: 20,
  },
]

const statusColors = {
  Active: 'text-green-400 bg-green-500/10 border-green-500/30',
  Beta: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
  'Coming Soon': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
}

export function LabsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="labs" className="relative py-20 md:py-32 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, 50, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Hyper
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Labs
            </span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Cutting-edge experiments and R&D initiatives pushing the boundaries of what&apos;s possible.
          </p>
        </motion.div>

        {/* Experiments */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiments.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              className="group p-6 md:p-8 rounded-xl border border-border/50 bg-gradient-to-r from-background via-card/30 to-background hover:border-accent/50 transition-all duration-300"
              whileHover={{ x: 10 }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                {/* Icon and status */}
                <div className="flex items-start gap-4 flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start md:items-center gap-3 mb-2 flex-col md:flex-row">
                      <h3 className="font-bold text-xl group-hover:text-accent transition-colors">
                        {exp.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          statusColors[exp.status as keyof typeof statusColors]
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>
                    <p className="text-foreground/60 text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full md:w-48 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-foreground/60">Progress</span>
                    <span className="text-xs font-bold text-accent">{exp.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-border/50 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${exp.progress}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 rounded-lg bg-primary/10 border border-primary/50 text-primary hover:bg-primary/20 font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Labs
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
