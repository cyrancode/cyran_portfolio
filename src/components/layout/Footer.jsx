import { GitBranch, Link2, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-xs text-text-faint">
          Designed and built by{' '}
          <span className="text-primary font-medium">Njua Cyran Nkwain</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/cyrancode"
            target="_blank"
            rel="noreferrer"
            className="text-text-faint hover:text-primary transition-colors"
          >
            <GitBranch size={15} />
          </a>
          <a
            href="https://linkedin.com/in/njua-cyran-nkwain"
            target="_blank"
            rel="noreferrer"
            className="text-text-faint hover:text-primary transition-colors"
          >
            <Link2 size={15} />
          </a>
          <a
            href="mailto:cyrannjua@gmail.com"
            className="text-text-faint hover:text-primary transition-colors"
          >
            <Mail size={15} />
          </a>
        </div>

        <p className="text-xs text-text-faint">
          2026
        </p>
      </div>
    </footer>
  )
}

export default Footer