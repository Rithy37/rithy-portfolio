import { useState } from 'react'
import './Nav.css'

const LINKS = [
  { href: '#about', label: 'about.spec' },
  { href: '#skills', label: 'skills.spec' },
  { href: '#projects', label: 'projects.spec' },
  { href: '#contact', label: 'contact.spec' },
]

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="nav" data-test="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo mono" data-test="nav-logo">
          rithy<span className="nav-logo-dot">.</span>test
        </a>

        <nav className="nav-links nav-links-desktop" data-test="nav-menu-desktop">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="mono">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          data-test="nav-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={`nav-toggle-bar ${isOpen ? 'open' : ''}`} />
          <span className={`nav-toggle-bar ${isOpen ? 'open' : ''}`} />
          <span className={`nav-toggle-bar ${isOpen ? 'open' : ''}`} />
        </button>
      </div>

      <nav
        className={`nav-links-mobile ${isOpen ? 'open' : ''}`}
        data-test="nav-menu-mobile"
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mono"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Nav
