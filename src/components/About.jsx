import React, { useEffect, useState } from 'react'
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'

const images = [img1, img2, img3, img4]

export default function About() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="about" data-section className="section">
      <div className="section-card">
        <h2 className="eyebrow">About Me</h2>

        <div className="about-layout">
          <div className="about-copy">
            <p>
              I'm a Software Engineer with over two years of experience building secure, scalable web applications across both backend and frontend technologies. My primary expertise lies in Java, Spring Boot, REST APIs, and relational databases, while React enables me to build complete end-to-end solutions when needed.
            </p>
            <p>
              I enjoy solving real business problems through clean architecture, efficient APIs, and maintainable code. Whether it's designing authentication systems, optimizing database performance, integrating cloud services, or deploying production applications, I focus on building software that is reliable, secure, and easy to scale.
            </p>
            <p>
              I'm continuously learning modern software design principles and enjoy turning complex requirements into simple, practical solutions.
            </p>
          </div>

          <div className="about-visual">
            <div className="about-image-frame">
              <img
                src={images[activeImage]}
                alt={`About showcase ${activeImage + 1}`}
                className="about-image"
              />
            </div>

            <div className="about-dots" aria-label="Image carousel indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`about-dot ${activeImage === index ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
