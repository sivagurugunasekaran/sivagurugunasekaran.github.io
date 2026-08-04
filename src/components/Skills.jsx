import React from 'react'

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "Hibernate",
      "JPA",
      "JWT",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Redux",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "AWS S3",
      "Nginx",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" data-section className="section">
      <div className="section-card skills-card">
       

        <h2 className="section-heading">SKILLS</h2>
         <p>Technologies I Work With</p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-badges">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
