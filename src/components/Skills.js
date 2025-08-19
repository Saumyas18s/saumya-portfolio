import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚙️",
      skills: ["React", "Node.js", "Flask", "Express.js", "TailwindCSS", "Bootstrap"]
    },
    {
      title: "Databases & Tools",
      icon: "🛠️",
      skills: ["MongoDB", "MySQL", "Git", "GitHub", "ML Flow"]
    },
    {
      title: "Cloud & Design",
      icon: "☁️",
      skills: ["AWS", "GCP", "Figma", "Canva", "Adobe Photoshop"]
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      skills: ["TensorFlow", "FastAI", "Scikit-learn", "LSTM", "MLOps"]
    }
  ];

  const certifications = [
    "UI/UX Design Specialization - Udemy",
    "TCS iON Career Edge – Young Professional",
    "Complete Web Development Course – Udemy",
    "The Complete Python Bootcamp – Udemy",
    "AWS Cloud Practitioner Essentials",
    "AWS Cloud Technical Essentials – Coursera"
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title fade-in-up">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3 className="certifications-title fade-in-up">Certifications & Achievements</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="cert-icon">🏆</div>
                <p>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;