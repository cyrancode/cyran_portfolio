import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // highlight active section on scroll
      const sections = navLinks.map(l => document.getElementById(l.to))
      sections.forEach(section => {
        if (!section) return
        const rect = section.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom >= 80) {
          setActive(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">

        {/* Logo */}
        {isHome ? (
          <button
            onClick={() => scrollTo('hero')}
            className="text-sm font-bold text-text tracking-widest uppercase hover:text-primary transition-colors"
          >
            Cyran<span className="text-primary">.</span>
          </button>
        ) : (
          <Link
            to="/"
            className="text-sm font-bold text-text tracking-widest uppercase hover:text-primary transition-colors"
          >
            Cyran<span className="text-primary">.</span>
          </Link>
        )}

        {/* Desktop links — only show on home */}
        {isHome && (
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <button
                key={link.to}
                onClick={() => scrollTo(link.to)}
                className={`text-xs font-medium tracking-wide transition-colors ${
                  active === link.to
                    ? 'text-primary'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* Mobile hamburger — only on home */}
        {isHome && (
          <button
            className="md:hidden text-text-muted hover:text-text transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isHome && isOpen && (
        <div className="md:hidden bg-surface border-t border-border px-5 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <button
              key={link.to}
              onClick={() => scrollTo(link.to)}
              className={`text-xs font-medium tracking-wide text-left transition-colors ${
                active === link.to
                  ? 'text-primary'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar