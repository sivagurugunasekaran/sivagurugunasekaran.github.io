import { useState } from 'react'

const projects = [
  {
    title: 'Zhuttle',
    brief:
      'Zhuttle is an online shuttle booking platform built with Spring Boot, React and PostgreSQL that enables users to book shuttle seats for office commutes and events. It features dynamic route creation, multiple pickup points, real-time seat availability, secure authentication, and booking management through REST APIs.',
    repo: 'https://github.com/'
  },
  {
    title: 'Farm2Kitchen',
    brief:
      'Farm2Kitchen is an online marketplace connecting farmers directly with households and small businesses (hotels, eateries) for bulk purchase of perishable produce like onions, tomatoes, and potatoes. The platform features a dynamic, surge-style pricing engine that adjusts prices in real time based on simulated demand-supply signals, along with analytics dashboards showing seasonal price trends for both buyers and farmers. Built with Spring Boot, PostgreSQL and React, the project explores marketplace design, pricing algorithms, and time-series data visualization.',
    repo: 'https://github.com/'
  },
  
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? projects.length - 1 : current - 1))
  }

  const showNext = () => {
    setActiveIndex((current) => (current === projects.length - 1 ? 0 : current + 1))
  }

  return (
    <section id="projects" data-section className="section">
      <div className="section-card">
        <h2 className="eyebrow">Projects</h2>
       

        <div className="projects-shell">
          <div className="project-card">
            <div className="project-card__body">
             
              <h3 className="project-card__title">{activeProject.title}</h3>
              <p className="project-card__brief">{activeProject.brief}</p>
            </div>

            <a className="project-link" href={activeProject.repo} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.79 1.08.79 2.17 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              <span>View code</span>
            </a>
          </div>

          <div className="project-controls" aria-label="Project navigation">
            <button type="button" className="project-nav__button" onClick={showPrevious}>
              Previous
            </button>

            <div className="project-dots" aria-label="Project indicators">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  className={`project-dot${index === activeIndex ? ' active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${project.title}`}
                />
              ))}
            </div>

            <button type="button" className="project-nav__button" onClick={showNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
