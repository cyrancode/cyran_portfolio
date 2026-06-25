import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { experiences } from '../../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

function Experience() {
  return (
    <section id="experience" className="py-20 px-5">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col gap-1.5">
          <p className="text-sm font-mono text-primary tracking-widest uppercase">Where I've worked</p>
          <h2 className="text-3xl font-bold text-text">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col gap-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              {...fadeUp(0.1 * (i + 1))}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              {/* Line + dot */}
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full border-2 mt-1.5 flex-shrink-0 ${
                  exp.current ? 'border-primary bg-primary' : 'border-border bg-surface'
                }`} />
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-1" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5 pb-2">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-text">{exp.role}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={13} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-primary">{exp.period}</p>
                </div>

                <ul className="flex flex-col gap-1.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-text-muted flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
