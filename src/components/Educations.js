import React from 'react';
import './Educations.css';
import psitImage from '../assets/psit-college.jpg';
import schoolImage from '../assets/school-building.jpg';



//   store under /src/assets and import at top:
//      import psitImg from '../assets/psit-college.jpg';
//      Then set image: psitImg
 

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      field: "AI & ML Specialization",
      institution: "Pranveer Singh Institute of Technology, Kanpur",
      duration: "2022-2026 | 4th Year",
      cgpa: "7.5",
      image: psitImage, 
    },
    {
      id: 2,
      degree: "Class X and XII Education",
      field: "Science (PCM)",
      institution: "New Angels Senior Secondary School, Pratapgarh",
      duration: "2020-2022",
      percentage: "82.6 & 70",
      image: schoolImage, 
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="education-header">
          <h2 className="section-title">
            <i className="fas fa-graduation-cap" />
            My Education
          </h2>
        </div>

        <div className="education-cards">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card-modern">
              <div className="education-image-container">
                {/* Image */}
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="education-image"
                  loading="lazy"
                />
                {/* Duration chip (now positioned without purple overlay) */}
                <div className="education-duration-badge">{edu.duration}</div>
              </div>

              <div className="education-content-modern">
                <h3 className="education-degree-modern">{edu.degree}</h3>
                {edu.field && (
                  <h4 className="education-field-modern">{edu.field}</h4>
                )}

                <div className="education-institution-info">
                  <div className="institution-name">
                    <i className="fas fa-university" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <div className="education-grade-modern">
                  {edu.cgpa ? (
                    <span className="grade-badge">CGPA: {edu.cgpa}/10</span>
                  ) : (
                    <span className="grade-badge">
                      Percentage: {edu.percentage}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;