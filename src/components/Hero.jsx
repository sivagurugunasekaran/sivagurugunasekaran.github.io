import React from 'react'

export default function Hero() {
  return (
    <section id="home" data-section className="section">
      <div className="section-card hero-card">
        <p className="eyebrow"></p>
        <h1>Hi, I’m Siva Guru Gunasekaran</h1>
        <h1>Software Engineer</h1>
        <p className="intro">
            Java • Spring Boot • REST APIs • Microservices • React
        </p>
        <p>
            Building scalable backend systems and modern web applications with a focus on performance, security, and clean architecture.
        </p>
        <div className="button-row">
          <a className="primary-btn" href="https://docs.google.com/document/d/1JRqXypG-tgTAZW_Q5dfBwNo13nLmVWz68SKDvuybAmU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
          <a className="primary-btn" href="#contact">
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  )
}
