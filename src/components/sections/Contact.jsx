import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Link2, Send, GitBranch } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

const contactInfo = [
  {
    icon: <Mail size={15} />,
    label: 'Email',
    value: 'cyrannjua@gmail.com',
    href: 'mailto:cyrannjua@gmail.com',
  },
  {
    icon: <Phone size={15} />,
    label: 'Phone',
    value: '+237 675 271 210',
    href: 'tel:+237675271210',
  },
  {
    icon: <MapPin size={15} />,
    label: 'Location',
    value: 'Douala, Cameroon',
    href: null,
  },
  {
    icon: <Link2 size={15} />,
    label: 'LinkedIn',
    value: 'njua-cyran-nkwain',
    href: 'https://linkedin.com/in/njua-cyran-nkwain',
  },
  {
    icon: <GitBranch size={15} />,
    label: 'GitHub',
    value: 'cyrancode',
    href: 'https://github.com/cyrancode',
  },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    const mailto = `mailto:cyrannjua@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.open(mailto, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-20 px-5">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col gap-1.5">
          <p className="text-sm font-mono text-primary tracking-widest uppercase">Get in touch</p>
          <h2 className="text-3xl font-bold text-text">Contact</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">

          {/* Left — info */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-6 md:w-72">
            <p className="text-sm text-text-muted leading-relaxed">
              Have a project in mind or want to work together?
              Feel free to reach out through any of the channels below.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-primary">{item.icon}</span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-text-faint">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-text-muted">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div {...fadeUp(0.3)} className="flex-1">
            <div className="flex flex-col gap-4">

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-xs text-text-faint">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="px-3.5 py-2.5 text-sm bg-surface border border-border rounded-btn text-text placeholder-text-faint focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-xs text-text-faint">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="px-3.5 py-2.5 text-sm bg-surface border border-border rounded-btn text-text placeholder-text-faint focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-text-faint">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="px-3.5 py-2.5 text-sm bg-surface border border-border rounded-btn text-text placeholder-text-faint focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="self-start flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary text-white rounded-btn hover:bg-primary-hover transition-colors"
              >
                <Send size={14} />
                {sent ? 'Opening mail client...' : 'Send Message'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
