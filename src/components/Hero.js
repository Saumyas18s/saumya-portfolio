import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Profile Image - Add this if you have one */}
          <div className="hero-image">
            <div className="profile-placeholder">
              <i className="fas fa-user-circle" style={{fontSize: '8rem', opacity: 0.3}}></i>
            </div>
          </div>

          <h1>
            Hi, I'm <span className="highlight">Saumya Singh</span>
          </h1>
          
          <p>
            AI & ML Engineering Student passionate about creating innovative 
            solutions through technology. Specializing in Machine Learning, 
            Full-Stack Development, and Data Science.
          </p>

          {/* Key Stats */}
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">7.3</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              <i className="fas fa-code"></i>
              View Projects
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              <i className="fas fa-envelope"></i>
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-social">
            <a 
              href="https://github.com/Saumyas18s" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/saumya-singh-ss121825/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:saumyasingh62552@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div 
              className="scroll-arrow"
              onClick={() => scrollToSection('about')}
            >
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
