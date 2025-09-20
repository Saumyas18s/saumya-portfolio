import React from 'react';
import './Hero.css';
import profileImage from './profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-left">
            <h1>
              Hi, I'm <span className="highlight">Saumya Singh</span>
            </h1>
            <h2 className="subtitle">
              AI & ML Engineering Student
            </h2>
            <p className="bio">
             Computer Science student specializing in frontend engineering and full-stack development. Skilled in building
responsive, user-friendly applications with React, Node.js, and MongoDB, and experienced in deploying ML models
using Python, TensorFlow, and Flask on cloud platforms like AWS. Seeking to apply technical expertise in creating
scalable, high-performance solutions in a software development or frontend engineering role.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <h3>7.3/10</h3>
                <p>CGPA</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Projects</p>
              </div>
              <div className="stat">
                <h3>2026</h3>
                <p>Graduation</p>
              </div>
            </div>

            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>

            <div className="social-links">
              <a href="https://github.com/Saumyas18s" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/saumya-singh-ss121825/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:saumyasingh62552@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://www.instagram.com/toon.trendz/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              
              </a>
            </div>
          </div>

<div className="hero-image fade-in-right">
  <div className="image-container">
    <div className="profile-photo">
      <img src={profileImage} alt="Saumya Singh" />
      
    </div>

    <div className="floating-tech">
      <div className="tech-icon tech-react">⚛️</div>
      <div className="tech-icon tech-python">🐍</div>
      <div className="tech-icon tech-js">📜</div>
      <div className="tech-icon tech-ai">🤖</div>
    </div>
  </div>
</div>
</div>
</div>  
  

      <div className="scroll-indicator">
        <div className="scroll-arrow" onClick={() => scrollToSection('skills')}>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;