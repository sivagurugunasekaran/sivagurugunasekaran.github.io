import React from 'react'

export default function Navbar({ brand, sections, activeSection, socialLinks }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        {brand}
      </a>

      <nav className="nav-links" aria-label="Section navigation">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div className="social-links">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            className="icon-link"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </header>
  )
}
