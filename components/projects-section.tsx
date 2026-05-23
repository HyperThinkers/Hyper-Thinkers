'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  demo: string
  github: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hyper Learning',
    description: 'Advanced AI-powered learning platform with personalized pathways for developers seeking production-grade skills.',
    technologies: ['Next.js', 'AI/ML', 'PostgreSQL', 'Redis'],
    image: 'bg-gradient-to-br from-primary/20 to-accent/20',
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Hyper Hub',
    description: 'Community-driven ecosystem connecting builders, engineers, and innovators for collaborative development.',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    image: 'bg-gradient-to-br from-accent/20 to-primary/20',
    demo: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'AI Labs',
    description: 'Experimental sandbox for cutting-edge AI engineering research, prototyping, and innovation at scale.',
    technologies: ['Python', 'LangChain', 'FastAPI', 'AWS'],
    image: 'bg-gradient-to-br from-primary/20 via-violet-500/20 to-accent/20',
    demo: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Production Systems',
    description: 'Battle-tested architecture patterns and tools for deploying resilient, scalable applications to production.',
    technologies: ['Docker', 'Kubernetes', 'CI/CD', 'DevOps'],
    image: 'bg-gradient-to-br from-violet-500/20 to-primary/20',
    demo: '#',
    github: '#',
  },
]

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4">
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
            Featured
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Innovative solutions built on production-ready systems and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative rounded-2xl border border-border/50 overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 ${project.image}`} />
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/10 to-transparent" />

              {/* Content */}
              <div className="relative p-6 md:p-8 h-full flex flex-col">
                {/* Image area */}
                <div className={`w-full h-40 rounded-xl ${project.image} mb-6 group-hover:scale-105 transition-transform duration-300 border border-border/30`} />

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 group-hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demo}
                    className="flex-1 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 font-medium text-sm flex items-center justify-center gap-2 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="flex-1 px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 font-medium text-sm flex items-center justify-center gap-2 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
