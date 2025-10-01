import React, { useEffect, useState } from 'react';
import './Hero.css';
import profileImage from './profile.jpg';

// Import Contact component
import Contact from './Contact';

// Smooth scroll utility function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.warn(`Section with id "${sectionId}" not found`);
  }
};

// Navigation Component
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-logo">SS|Saumya's Portfolio</div>
        <ul className="nav-menu">
          {['home', 'skills', 'projects', 'education', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Background Elements Component
const BackgroundElements = () => {
  return (
    <div className="hero-background">
      <div className="grid-overlay"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <Navigation />
      
      <section id="home" className="hero">
        <BackgroundElements />
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in-left">
              <h1>
                Hi, I'm <span className="highlight">Saumya Singh</span>
              </h1>
              <h2 className="subtitle">
                FULL STACK DEVELOPER & AI/ML ENGINEERING STUDENT
              </h2>
              <p className="bio">
                Computer Science student specializing in frontend engineering and full-stack development. Skilled in building
                responsive, user-friendly applications with React, Node.js, and MongoDB, and experienced in deploying ML models
                using Python, TensorFlow, and Flask on cloud platforms like AWS.
              </p>
              
              <div className="hero-stats">
                <div className="stat">
                  <h3>7.5/10</h3>
                  <p>CGPA</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat">
                  <h3>2026</h3>
                  <p>Graduation</p>
                </div>
              </div>

              <div className="hero-buttons">
                <button className="btn btn-primary">
                  <a 
                    href="https://toontrendz.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View My Work
                  </a>
                </button>

                <button className="btn btn-outline">
                  <a 
                    href="https://drive.google.com/file/d/13mLIdmv5_-7l2djTgYqfe4wvstiTat5x/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </button>
              </div>

              <div className="social-section">
                <div className="social-row">
                  <a className="icon-btn" href="https://www.linkedin.com/in/saumya-singh-ss121825/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="icon-btn" href="https://github.com/Saumyas18s" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a className="icon-btn" href="mailto:saumyasingh62552@gmail.com" title="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a className="icon-btn" href="https://www.instagram.com/toon.trendz/" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-image">
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
    </>
  );
};

export default Hero;