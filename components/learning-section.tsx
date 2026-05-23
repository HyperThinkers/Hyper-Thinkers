'use client'

import { motion } from 'framer-motion'
import { Zap, Code2, Server, Layers } from 'lucide-react'

interface LearningTrack {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  lessons: number
}

const tracks: LearningTrack[] = [
  {
    id: 1,
    icon: <Code2 className="w-8 h-8" />,
    title: 'Full Stack Engineering',
    description: 'Master modern web development from frontend to backend with production patterns.',
    difficulty: 'Intermediate',
    lessons: 24,
  },
  {
    id: 2,
    icon: <Zap className="w-8 h-8" />,
    title: 'AI Engineering',
    description: 'Build intelligent systems using cutting-edge AI models and frameworks.',
    difficulty: 'Advanced',
    lessons: 18,
  },
  {
    id: 3,
    icon: <Server className="w-8 h-8" />,
    title: 'DevOps Foundations',
    description: 'Learn infrastructure, deployment, and operations at scale.',
    difficulty: 'Intermediate',
    lessons: 16,
  },
  {
    id: 4,
    icon: <Layers className="w-8 h-8" />,
    title: 'Production Architecture',
    description: 'Design and build systems that scale, perform, and maintain reliability.',
    difficulty: 'Advanced',
    lessons: 20,
  },
]

const difficultyColors = {
  Beginner: 'text-green-400 bg-green-500/10 border-green-500/30',
  Intermediate: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
  Advanced: 'text-red-400 bg-red-500/10 border-red-500/30',
}

export function LearningSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Learning
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tracks
            </span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Structured pathways to master modern engineering, AI, and production systems.
          </p>
        </motion.div>

        {/* Tracks Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tracks.map((track) => (
            <motion.div
              key={track.id}
              variants={cardVariants}
              className="group p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-background to-card/50 hover:border-accent/50 transition-all duration-300 cursor-pointer hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="mb-6 w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:border-accent/50 flex items-center justify-center text-primary transition-all">
                {track.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {track.title}
              </h3>

              <p className="text-foreground/70 mb-6">
                {track.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-6 border-t border-border/50">
                <div className="flex gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      difficultyColors[track.difficulty]
                    }`}
                  >
                    {track.difficulty}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground/60">
                  {track.lessons} lessons
                </span>
              </div>

              {/* Hover action */}
              <motion.div
                className="mt-6 pt-6 border-t border-accent/0 group-hover:border-accent/30 transition-colors"
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: 'auto' }}
              >
                <button className="w-full px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 font-medium text-sm transition-all">
                  Start Learning
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
