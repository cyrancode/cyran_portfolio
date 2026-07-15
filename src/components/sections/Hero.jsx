import { motion } from 'framer-motion'
import { ArrowDown, GitBranch, Link2, Mail } from 'lucide-react'
import profile from '../../assets/images/profile.jpeg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-14 px-5"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16">

        {/* Left — text */}
        <div className="flex-1 flex flex-col gap-5">

          <motion.p
            {...fadeUp(0.1)}
            className="text-sm font-mono text-primary tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl md:text-5xl font-extrabold text-text leading-tight"
          >
            Njua Cyran<br />
            <span className="text-primary">Nkwain</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-sm font-mono text-text-muted"
          >
            Full Stack & Mobile Developer
          </motion.p>

          <motion.p
            {...fadeUp(0.4)}
            className="text-sm text-text-muted leading-relaxed max-w-md"
          >
            I design and build efficient, scalable web and mobile applications.
            Passionate about clean architecture, great user experiences, and
            solving real-world problems through code.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap gap-3 mt-2"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-5 py-2.5 text-sm font-semibold bg-primary text-white rounded-btn hover:bg-primary-hover transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 text-sm font-semibold border border-border text-text-muted rounded-btn hover:border-primary hover:text-primary transition-colors"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex items-center gap-5 mt-1"
          >
            <a
              href="https://github.com/cyrancode"
              target="_blank"
              rel="noreferrer"
              className="text-text-faint hover:text-primary transition-colors"
            >
              <GitBranch size={18} />
            </a>
            <a
              href="https://linkedin.com/in/njua-cyran-nkwain"
              target="_blank"
              rel="noreferrer"
              className="text-text-faint hover:text-primary transition-colors"
            >
              <Link2 size={18} />
            </a>
            <a
              href="mailto:cyrannjua@gmail.com"
              className="text-text-faint hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-border">
            <img
              src={profile}
              alt="Njua Cyran Nkwain, Full Stack and Mobile Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-faint"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
