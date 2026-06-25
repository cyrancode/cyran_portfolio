import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  GitBranch,
  ExternalLink,
  Smartphone,
  Globe,
  Lock,
  Users,
  User,
} from 'lucide-react'
import { projects } from '../data'

function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(function (p) { return p.slug === slug })

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-text-muted">Project not found.</p>
        <button
          onClick={function () { navigate('/') }}
          className="flex items-center gap-2 text-xs text-primary hover:text-primary-hover transition-colors"
        >
          <ArrowLeft size={14} />
          Back to home
        </button>
      </div>
    )
  }

  const isLive = project.status === 'live'
  const links = project.links || {}

  return (
    <div className="min-h-screen pt-20 pb-20 px-5">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={function () { navigate('/') }}
          className="self-start flex items-center gap-2 text-xs text-text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} />
          Back to projects
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            {project.type === 'Mobile'
              ? <Smartphone size={16} className="text-primary" />
              : <Globe size={16} className="text-primary" />
            }
            <span className="text-xs font-mono text-text-muted">{project.type}</span>
            <span className={
              isLive
                ? 'text-xs px-2 py-0.5 rounded-full border font-mono text-success border-success bg-surface-alt'
                : 'text-xs px-2 py-0.5 rounded-full border font-mono text-text-faint border-border bg-surface-alt'
            }>
              {isLive ? 'Live' : 'In Development'}
            </span>
          </div>

          <h1 className="text-2xl font-bold text-text">{project.title}</h1>
          <p className="text-sm text-text-muted leading-relaxed">{project.shortDesc}</p>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Details grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Role */}
          <div className="p-4 bg-surface rounded-card border border-border flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-primary">
              {project.collaboration
                ? <Users size={13} />
                : <User size={13} />
              }
              <span className="text-xs font-semibold text-text">Role</span>
            </div>
            <p className="text-xs text-text-muted">{project.role}</p>
            <p className="text-xs text-text-faint">
              {project.collaboration ? 'Collaborative project' : 'Solo project'}
            </p>
          </div>

          {/* Tech stack */}
          <div className="p-4 bg-surface rounded-card border border-border flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-text">Tech Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map(function (tech, i) {
                return (
                  <span
                    key={i}
                    className="text-xs px-1.5 py-0.5 bg-surface-alt text-text-muted rounded border border-border"
                  >
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Long description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <h2 className="text-sm font-semibold text-text">About the project</h2>
          <p className="text-sm text-text-muted leading-relaxed">{project.longDesc}</p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-primary text-white rounded-btn hover:bg-primary-hover transition-colors"
            >
              <ExternalLink size={12} />
              View Live
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-border text-text-muted rounded-btn hover:border-primary hover:text-primary transition-colors"
            >
              <GitBranch size={12} />
              View Code
            </a>
          )}
          {links.frontend && (
            <a
              href={links.frontend}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-border text-text-muted rounded-btn hover:border-primary hover:text-primary transition-colors"
            >
              <GitBranch size={12} />
              Frontend Repo
            </a>
          )}
          {links.backend && (
            <a
              href={links.backend}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-border text-text-muted rounded-btn hover:border-primary hover:text-primary transition-colors"
            >
              <GitBranch size={12} />
              Backend Repo
            </a>
          )}
          {!links.live && !links.github && !links.frontend && (
            <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-border text-text-faint rounded-btn cursor-not-allowed">
              <Lock size={12} />
              Private Repository
            </span>
          )}
        </motion.div>

        {/* Other projects */}
        <div className="border-t border-border pt-8 flex flex-col gap-4">
          <p className="text-xs font-semibold text-text">Other Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects
              .filter(function (p) { return p.slug !== slug })
              .slice(0, 4)
              .map(function (p, i) {
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    onClick={function () { navigate('/projects/' + p.slug) }}
                    className="cursor-pointer p-3 bg-surface rounded-card border border-border hover:border-primary transition-all duration-200 flex flex-col gap-1"
                  >
                    <p className="text-xs font-semibold text-text">{p.title}</p>
                    <p className="text-xs text-text-faint line-clamp-2">{p.shortDesc}</p>
                  </motion.div>
                )
              })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetail