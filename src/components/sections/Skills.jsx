import { motion } from 'framer-motion'
import { skills } from '../../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

function Skills() {
  return (
    <section id="skills" className="py-20 px-5">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col gap-1.5">
          <p className="text-sm font-mono text-primary tracking-widest uppercase">What I work with</p>
          <h2 className="text-3xl font-bold text-text">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 * (i + 1))}
              className="p-5 bg-surface rounded-card border border-border flex flex-col gap-3"
            >
              <p className="text-xs font-semibold text-primary tracking-wide uppercase">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 text-sm bg-surface-alt text-text-muted rounded border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
