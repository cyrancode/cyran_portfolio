import { motion } from 'framer-motion'
import { ArrowDown, GitBranch, Link2, Mail } from 'lucide-react'
import profile from '../../assets/images/profile.jpeg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

const WHATSAPP_NUMBER = '237672527120' // +237 Cameroon country code, no leading 0/+
const WHATSAPP_MESSAGE = "Hi Cyran, I came across your portfolio and I'd like to discuss a project/service with you."
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2 22l5.36-1.4a9.9 9.9 0 0 0 4.68 1.19h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.18.83.85-3.1-.2-.32a8.2 8.2 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.24-8.2 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.8.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.57.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
    </svg>
  )
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

            <a href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#25D366] text-white rounded-btn hover:bg-[#1ebe5a] transition-colors"
            >
              <WhatsAppIcon size={16} />
              WhatsApp Me
            </a>
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
