import React from 'react'

function GraduationCapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 2 7l10 4 10-4-10-4Z" />
      <path d="M4 10v4c0 2.2 3.6 4 8 4s8-1.8 8-4v-4" />
      <path d="M7 13v3c0 1.3 2.2 2.5 5 2.5s5-1.2 5-2.5v-3" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h1" />
      <path d="M9 12h1" />
      <path d="M9 17h1" />
      <path d="M14 7h1" />
      <path d="M14 12h1" />
      <path d="M14 17h1" />
      <path d="M4 21h16" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6-5.3-6-11a6 6 0 1 1 12 0c0 5.7-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

function AwardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 13.5-1.5 6 5-3 5 3-1.5-6" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  )
}

export default function Education() {
  return (
    <section id="education" data-section className="section">
      <div className="section-card">
        <h2 className="eyebrow">Education</h2>
        <div className="education-card">
          <div className="education-timeline">
            <div className="education-row">
              <div className="education-left-item">
                <span className="education-icon" aria-hidden="true">
                  <GraduationCapIcon />
                </span>
                <span className="education-item-value education-item-value--primary">
                  Bachelor of Engineering in Mechanical Engineering
                </span>
              </div>

              <div className="education-right-item">
                <span className="education-icon" aria-hidden="true">
                  <MapPinIcon />
                </span>
                <span className="education-item-value">Madurai, Tamil Nadu, India</span>
                <span className="education-icon" aria-hidden="true">
                  <CalendarIcon />
                </span>
                <span className="education-item-value">2015 - 2019</span>
              </div>
            </div>

            <div className="education-row education-row--secondary">
              <div className="education-left-item">
                <span className="education-icon" aria-hidden="true">
                  <BuildingIcon />
                </span>
                <span className="education-item-value ">
                  Thiagarajar College of Engineering (TCE)
                </span>
              </div>

              <div className="education-right-item education-right-item--meta">
                

                <span className="education-icon education-icon--spaced" aria-hidden="true">
                  <AwardIcon />
                </span>
                <span className="education-item-value">CGPA: 8.7 / 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
