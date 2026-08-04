import React from 'react'
const experiences = [
  {
    company: "Software Developer • Freelance",
    duration: "July 2025 – Present",
    description:
      "Designing and delivering full-stack web applications for multiple clients using Java, Spring Boot, React, and PostgreSQL. Building secure, scalable solutions with a strong focus on backend architecture, cloud integration, and user experience.",
    highlights: [
      "Built a Logo Management Platform with JWT authentication, AWS S3 integration, approval workflows, and analytics dashboards.",
      "Developed a CCTV Safety Monitoring System with dual admin and client portals for industrial safety compliance.",
      "Implemented role-based access control, Redis session management, and secure authentication flows.",
      "Integrated real-time notifications, cloud image retrieval, and interactive analytics using charts and dashboards.",
      "Containerized applications with Docker and optimized system workflows, improving detection efficiency by 30%.",
    ],
  },
  {
    company: "Software Developer • Qicpic Innovations",
    duration: "May 2024 – May 2025",
    description:
      "Contributed to the development of internal enterprise applications that streamlined business operations across hiring, payroll, procurement, and reporting systems. Focused on backend performance, database optimization, and secure application development.",
    highlights: [
      "Developed internal dashboards for hiring, work tracking, sales management, and document verification.",
      "Optimized invoice generation workflows, improving onboarding and payment verification processes.",
      "Implemented end-to-end encryption for sensitive payroll and financial data.",
      "Migrated production databases from MySQL to PostgreSQL with minimal downtime.",
      "Optimized SQL queries for datasets exceeding 100,000 records, significantly improving application performance.",
      "Built the backend for a B2B procurement system supporting dynamic pricing, request auditing, and transparent log tracking.",
    ],
  },
  {
    company: "Content Writer • The HK Online",
    duration: "August 2020 – October 2023",
    description:
      "Responsible for creating and editing content for the company's website and marketing materials. Collaborated with the design and development teams to ensure content alignment with brand guidelines and user experience goals.",
    highlights: [
      "Performed SEO Analysis for creating quality content and SEO Audits, on-page optimization forenhancing site overall performance.",
      "Keyword Research on covering a wide range of topics for websites using Keywords Everywhere, Google Trends, Ubersuggest.",
      "Created the best strategy to get better ranking on Google SERPs with Google Search Console and necessary tools.",
     
    ],
  },
];



export default function Experience() {
  return (
    <section id="experience" data-section className="section">
      <div className="section-card">
        <h2 className="eyebrow">Work Experience</h2>

        

        <p className="intro">
          Over the past two years, I've worked on building secure, scalable,
          and production-ready applications using Java, Spring Boot, React,
          PostgreSQL, and cloud technologies.
        </p>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-company">{exp.company}</h3>
                <span className="experience-duration">{exp.duration}</span>
              </div>

              <p className="experience-description">{exp.description}</p>

              <ul className="experience-highlights">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="experience-highlight">
                    <span className="experience-bullet">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
