import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/siva-guru-gunasekaran/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.75h2.88V18H5.5zM10.4 9.75h2.76v1.13h.04c.38-.72 1.32-1.48 2.71-1.48 2.9 0 3.43 1.91 3.43 4.39V18H16.4v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.96V18H10.4z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/sivagurugunasekaran',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.88 10.94.58.11.79-.25.79-.56v-2.18c-3.21.7-3.89-1.38-3.89-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.42.36.79 1.08.79 2.18v3.23c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    href: 'mailto:sivagurug2997@gmail.com',
    label: 'Email',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5.33-8-5.33V6l8 5.33L20 6Z" />
      </svg>
    ),
  },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight * 0.35
      const elements = Array.from(document.querySelectorAll('section[data-section]'))

      let closestSection = elements[0]
      let smallestDistance = Number.POSITIVE_INFINITY

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const distance = Math.abs(rect.top - viewportCenter)

        if (distance < smallestDistance) {
          smallestDistance = distance
          closestSection = element
        }
      })

      setActiveSection(closestSection?.id || 'home')
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <div className="portfolio-shell">
      <Navbar
        brand="Siva Guru"
        sections={sections}
        activeSection={activeSection}
        socialLinks={socialLinks}
      />

      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
