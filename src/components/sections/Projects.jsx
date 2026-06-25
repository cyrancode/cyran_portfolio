import { motion } from 'framer-motion'
import { GitBranch, ExternalLink, Smartphone, Globe, Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

function ProjectCard({ project, onClick }) {
  const isLive = project.status === 'live'

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer p-5 bg-surface rounded-card border border-border hover:border-primary/40 transition-all duration-300 flex flex-col gap-3"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {project.type === 'Mobile'
            ? <Smartphone size={15} className="text-primary" />
            : <Globe size={15} className="text-primary" />
          }
          <p className="text-sm font-semibold text-text group-hover:text-primary transition-colors">
            {project.title}
          </p>
        </div>

        <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${
          isLive
            ? 'text-success border-success/30 bg-success/10'
            : 'text-text-faint border-border bg-surface-alt'
        }`}>
          {isLive ? 'Live' : 'In Dev'}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed">{project.shortDesc}</p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className="text-xs px-2 py-0.5 bg-surface-alt text-text-faint rounded border border-border"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="text-xs px-1.5 py-0.5 text-text-faint">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto pt-1">
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-text-faint hover:text-primary transition-colors"
          >
            <GitBranch size={13} /> Code
          </a>
        )}
        {project.links?.frontend && (
          <a
            href={project.links.frontend}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-text-faint hover:text-primary transition-colors"
          >
            <GitBranch size={13} /> Frontend
          </a>
        )}
        {project.links?.backend && (
          <a
            href={project.links.backend}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-text-faint hover:text-primary transition-colors"
          >
            <GitBranch size={13} /> Backend
          </a>
        )}
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-text-faint hover:text-primary transition-colors"
          >
            <ExternalLink size={13} /> Live
          </a>
        )}
        {!isLive && !project.links?.github && !project.links?.frontend && (
          <span className="flex items-center gap-1 text-xs text-text-faint">
            <Lock size={13} /> Private
          </span>
        )}
      </div>
    </div>
  )
}

function Projects() {
  const navigate = useNavigate()

  return (
    <section id="projects" className="py-20 px-5">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col gap-1.5">
          <p className="text-sm font-mono text-primary tracking-widest uppercase">What I've built</p>
          <h2 className="text-3xl font-bold text-text">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div key={project.id} {...fadeUp(0.1 * (i + 1))}>
              <ProjectCard
                project={project}
                onClick={() => navigate(`/projects/${project.slug}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
