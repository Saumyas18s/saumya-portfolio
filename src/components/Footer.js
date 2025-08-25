import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Saumya Singh</h3>
              <p>AI & ML Engineering Student</p>
              <p>Building the future, one line of code at a time.</p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <ul>
                  <li><a href="https://github.com/Saumyas18s" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="https://linkedin.com/in/saumya-singh-ss121825/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="mailto:saumyasingh62552@gmail.com">Email</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Technologies</h4>
                <ul>
                  <li>React & JavaScript</li>
                  <li>Python & Machine Learning</li>
                  <li>AWS & Cloud Computing</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Saumya Singh. All rights reserved.</p>
              <p>Built with React & CSS3</p>
            </div>
            
            <button className="scroll-to-top" onClick={scrollToTop}>
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;