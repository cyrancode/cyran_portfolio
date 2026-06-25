import { motion } from 'framer-motion'
import { Code2, Smartphone, Server } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

const cards = [
  {
    icon: <Code2 size={18} />,
    title: 'Frontend',
    desc: 'Building responsive, modern UIs with React and Tailwind CSS.',
  },
  {
    icon: <Server size={18} />,
    title: 'Backend',
    desc: 'Designing scalable REST APIs with Django and Django REST Framework.',
  },
  {
    icon: <Smartphone size={18} />,
    title: 'Mobile',
    desc: 'Delivering cross-platform mobile apps with Flutter and Firebase.',
  },
]

function About() {
  return (
    <section id="about" className="py-20 px-5">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col gap-1.5">
          <p className="text-sm font-mono text-primary tracking-widest uppercase">Who I am</p>
          <h2 className="text-3xl font-bold text-text">About Me</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">

          {/* Text */}
          <motion.div {...fadeUp(0.2)} className="flex-1 flex flex-col gap-4 text-sm text-text-muted leading-relaxed">
            <p>
              I'm <span className="text-text font-medium">Njua Cyran Nkwain</span>, a Full Stack & Mobile Developer
              based in Douala, Cameroon. I hold a Bachelor's degree in Technology with a specialization
              in Software Development from the University Institute of the Gulf of Guinea (IUG).
            </p>
            <p>
              With experience across Flutter, React, and Django, I've worked on everything from
              mobile learning platforms to risk management systems and influencer collaboration tools.
              I enjoy taking ownership of projects — from architecture decisions to final deployment.
            </p>
            <p>
              Beyond building, I mentor junior developers and interns, helping them grow into
              confident engineers. I'm always looking for new challenges that push me to grow
              technically and professionally.
            </p>

            <div className="flex flex-wrap gap-4 mt-2 text-sm text-text-muted">
              <span>📍 Douala, Cameroon</span>
              <span>🎓 B.Tech in Software Development</span>
              <span>🌐 English & French</span>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div {...fadeUp(0.3)} className="flex flex-col gap-3 md:w-72">
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-surface rounded-card border border-border"
              >
                <span className="text-primary mt-0.5">{card.icon}</span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-text">{card.title}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
