// src/components/Experience/Experience.jsx
import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experienceData = [
    {
      id: 1,
      title: "Toon Trendz",
      company: "E-Commerce Project Mern Based",
      location: "Remote",
      duration: "oct 2024- april 2025",
      type: "Self",
      liveLink: "https://toontrendz.netlify.app/", // Add your actual link
      description: "Designed and developed a full-stack e-commerce website for selling stickers with category-based browsing, authentication flow, and interactive UI features.",
      responsibilities: [
        "Built reusable React components including ProductGrid, ShopPage, Navigation, and FeedbackCarousel",
        "Implemented login and signup authentication flow with responsive layouts",
        "Created interactive animations such as loading screen with logo/video and customer feedback carousel",
        "Integrated context API and dummy product data for dynamic shopping experience",
        "Applied modular file structure and best practices for scalability and maintainability"
      ],
      technologies: ["React", "TypeScript", "Vite", "CSS3", "Framer Motion","Figma","UI/UX", "Context API", "Git/GitHub", "NPM"]
    },
    {
      id: 2,
      title: "Shine Leather Finishers",
      company: "Full Stack Developer",
      type: "Freelance",
      location: "Remote",
      duration: "July 2025 ",
      liveLink: "https://www.shineleatherfinishers.com", // Add your actual link
      description: "Developing end-to-end web applications using MERN stack, focusing on performance optimization and user experience enhancement.",
      responsibilities: [
        "Designed and developed responsive web applications",
        "Optimized database queries improving load times by 25x",
        "Implemented user authentication and security features",
        "Created RESTful APIs and integrated third-party services"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "CSS3"],
      achievements: [
        "40% faster client onboarding process",
        "Successfully completed 5+ client projects",
        "Maintained 99.9% uptime for deployed applications"
      ]
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-header">
          <h2 className="section-title">Experience</h2>
          {/* <p className="section-subtitle">My professional journey and key projects</p> */}
        </div>

        <div className="experience-content">
          <div className="experience-tabs">
            {experienceData.map((exp, index) => (
              <button
                key={exp.id}
                className={`tab-button ${activeTab === index ? 'active' : ''} ${exp.type.toLowerCase()}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="tab-company">{exp.company}</div>
                <div className="tab-title">{exp.title}</div>
              </button>
            ))}
          </div>

          <div className="experience-details">
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience-card ${activeTab === index ? 'active' : ''} ${exp.type.toLowerCase()}`}
              >
                <div className="experience-card-header">
                  <div className="experience-title-section">
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">
                      <i className="fas fa-building"></i>
                      {exp.company}
                    </h4>
                      {exp.liveLink && (
                  <div className="live-link-wrapper">
                    <a 
                      href={exp.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="experience-live-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      View Live Project
                    </a>
                  </div>
                )}
                  </div>
                  <div className="experience-meta">
                    <span className={`experience-type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                    <span className="experience-duration">
                      <i className="fas fa-calendar-alt"></i>
                      {exp.duration}
                    </span>
                    <span className="experience-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                {/* Live Link Section */}
                {/* {exp.liveLink && (
                  <div className="live-link-wrapper">
                    <a 
                      href={exp.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="experience-live-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      View Live Project
                    </a>
                  </div>
                )} */}

                <div className="responsibilities-technologies-wrapper">
                  <div className="responsibilities-column">
                    <div className="responsibilities-section">
                      <h5 className="section-heading">
                        <i className="fas fa-tasks"></i>
                        Key Responsibilities
                      </h5>
                      <ul className="responsibilities-list horizontal">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="technologies-column">
                    <div className="technologies-section">
                      <h5 className="section-heading">
                        <i className="fas fa-code"></i>
                        Technologies Used
                      </h5>
                      <div className="technologies-grid">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="technology-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;