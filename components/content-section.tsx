'use client'

import { motion } from 'framer-motion'
import { Play, BookOpen, Lightbulb } from 'lucide-react'

interface ContentItem {
  id: number
  icon: React.ReactNode
  type: 'Tutorial' | 'Devlog' | 'Architecture'
  title: string
  description: string
  duration: string
  thumbnail: string
}

const contentItems: ContentItem[] = [
  {
    id: 1,
    icon: <Play className="w-6 h-6" />,
    type: 'Tutorial',
    title: 'Building Scalable APIs with Next.js',
    description: 'Learn how to architect API endpoints that handle millions of requests.',
    duration: '45 min',
    thumbnail: 'bg-gradient-to-br from-primary/30 to-accent/30',
  },
  {
    id: 2,
    icon: <BookOpen className="w-6 h-6" />,
    type: 'Devlog',
    title: 'AI Labs Development Updates',
    description: 'Latest progress on our experimental AI engineering platform and breakthroughs.',
    duration: '20 min',
    thumbnail: 'bg-gradient-to-br from-accent/30 to-primary/30',
  },
  {
    id: 3,
    icon: <Lightbulb className="w-6 h-6" />,
    type: 'Architecture',
    title: 'Production-Ready System Design',
    description: 'Deep dive into architectural patterns that power modern infrastructure.',
    duration: '60 min',
    thumbnail: 'bg-gradient-to-br from-violet-500/30 to-primary/30',
  },
  {
    id: 4,
    icon: <Play className="w-6 h-6" />,
    type: 'Tutorial',
    title: 'Full Stack Development Fundamentals',
    description: 'Master the essentials of modern full stack development practices.',
    duration: '90 min',
    thumbnail: 'bg-gradient-to-br from-primary/30 to-violet-500/30',
  },
  {
    id: 5,
    icon: <BookOpen className="w-6 h-6" />,
    type: 'Devlog',
    title: 'Community Highlights - May 2026',
    description: 'Showcase of amazing projects built by our community members.',
    duration: '30 min',
    thumbnail: 'bg-gradient-to-br from-accent/30 to-violet-500/30',
  },
  {
    id: 6,
    icon: <Lightbulb className="w-6 h-6" />,
    type: 'Architecture',
    title: 'Microservices at Scale',
    description: 'Building and managing distributed systems for enterprise applications.',
    duration: '75 min',
    thumbnail: 'bg-gradient-to-br from-primary/30 to-accent/30',
  },
]

const typeColors = {
  Tutorial: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  Devlog: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  Architecture: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
}

export function ContentSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="tutorials" className="relative py-20 md:py-32 px-4">
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
            Latest
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Content
            </span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Tutorials, devlogs, and architectural deep dives from our team.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contentItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group rounded-xl overflow-hidden border border-border/50 bg-background/50 hover:border-accent/50 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -8 }}
            >
              {/* Thumbnail */}
              <div className={`relative w-full aspect-video ${item.thumbnail} border-b border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                {/* Play button overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-colors"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-accent text-background flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Type badge */}
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
                      typeColors[item.type]
                    }`}
                  >
                    {item.icon}
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 text-sm mb-4">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs text-foreground/50">{item.duration}</span>
                  <motion.a
                    href="#"
                    className="text-accent text-sm font-medium hover:text-accent-foreground transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    Watch →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 rounded-lg border border-accent/50 text-accent hover:bg-accent/10 font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Content →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
