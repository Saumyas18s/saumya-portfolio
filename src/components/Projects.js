import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      title: "Water Quality Prediction System",
      year: "2025",
      description: "Comprehensive ML-powered system for predicting water quality and algae blooms using LSTM models. Features real-time monitoring capabilities and responsive React frontend.",
      technologies: ["Python", "TensorFlow", "LSTM", "React", "Flask", "AWS EC2", "Scikit-learn"],
      features: [
        "92% accuracy in water quality prediction",
        "89% F1-score for algae bloom prediction",
        "70% reduction in lab testing requirements",
        "Real-time monitoring via Flask API",
        "Responsive React frontend with Figma design",
        "MLOps pipeline for model deployment"
      ],
      github: "https://github.com/Saumyas18s/water-quality-prediction",
      demo: "#",
      image: "/api/placeholder/400/250",
      status: "Completed"
    },
    {
      title: "DesignHub - UI/UX Template Gallery",
      year: "2024",
      description: "Full-stack MERN application serving as a comprehensive gallery platform for design templates. Optimized for performance with advanced MongoDB queries.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "CSS3", "JavaScript"],
      features: [
        "40% reduction in client onboarding time",
        "25x improvement in load speed performance",
        "Optimized MongoDB query architecture",
        "Responsive design gallery interface",
        "Advanced search and filtering system",
        "User authentication and template management"
      ],
      github: "https://github.com/Saumyas18s/designhub",
      demo: "#",
      image: "/api/placeholder/400/250",
      status: "Completed"
    },
    {
      title: "DataDrill - Web Scraper",
      year: "2023",
      description: "High-performance web scraper built in Go leveraging goroutines for concurrent data retrieval from dynamic websites with exceptional efficiency.",
      technologies: ["Go", "Goroutines", "HTML Parser", "Concurrent Programming", "Web APIs"],
      features: [
        "60% improvement in scraping efficiency",
        "Concurrent data retrieval using goroutines",
        "Dynamic website parsing capabilities",
        "Scalable architecture design",
        "Advanced error handling and retry logic",
        "Data processing optimization"
      ],
      github: "https://github.com/Saumyas18s/datadrill",
      demo: "#",
      image: "/api/placeholder/400/250",
      status: "Completed"
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title fade-in-up">Featured Projects</h2>
        
        <div className="projects-carousel-wrapper">
          {/* Carousel Container */}
          <div className="image-carousel-container" 
               onMouseEnter={pauseAutoPlay} 
               onMouseLeave={resumeAutoPlay}>
            
            {/* Navigation Buttons */}
            <button className="nav-btn prev-btn" onClick={prevProject}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <button className="nav-btn next-btn" onClick={nextProject}>
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Carousel Track */}
            <div className="carousel-track-container">
              <div 
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentProject * 100}%)`
                }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="project-card">
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                        <div className="project-overlay">
                          <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                              <i className="fab fa-github"></i>
                              <span>Code</span>
                            </a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                              <i className="fas fa-external-link-alt"></i>
                              <span>Demo</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="project-content">
                        <div className="project-header">
                          <h3>{project.title}</h3>
                          <span className="project-year">{project.year}</span>
                        </div>
                        
                        <p className="project-description">{project.description}</p>
                        
                        <div className="project-features">
                          <h4>Key Features:</h4>
                          <ul>
                            {project.features.slice(0, 3).map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="project-tech">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="project-status">
                          <span className={`status-badge ${project.status.toLowerCase()}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${index === currentProject ? 'active' : ''}`}
                  onClick={() => goToProject(index)}
                >
                  <div className={`dot-progress ${index === currentProject && isAutoPlaying ? 'animating' : ''}`}></div>
                </button>
              ))}
            </div>

            {/* Auto-play Status */}
            <div className="auto-play-status">
              <div className={`play-status ${isAutoPlaying ? 'playing' : 'paused'}`}>
                <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              </div>
              <span className="status-text">
                {isAutoPlaying ? 'Auto' : 'Manual'}
              </span>
            </div>
          </div>

          {/* Project Info Panel */}
          <div className="project-info-panel">
            <div className="project-counter">
              <span className="current-num">{String(currentProject + 1).padStart(2, '0')}</span>
              <span className="separator">—</span>
              <span className="total-num">{String(projects.length).padStart(2, '0')}</span>
            </div>
            
            <div className="project-preview-info">
              <h4>{projects[currentProject].title}</h4>
              <p>{projects[currentProject].year}</p>
            </div>
          </div>
        </div>

        <div className="projects-cta fade-in-up">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for additional projects and contributions</p>
          <a href="https://github.com/Saumyas18s" target="_blank" rel="noopener noreferrer" className="btn">
            <i className="fab fa-github"></i>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;