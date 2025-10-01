import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            {/* brand  */}
            <div className="footer-brand" aria-label="Brand">
              <h3>Saumya&apos;s Portfolio</h3>
              <p>Full Stack Developer</p>
              <p>
                Thanks for stopping by my portfolio! Let’s turn ideas into
                reality, connect with me on socials and let’s build something amazing together.
              </p>
               <p>Kon'nichiwa, hajimemashite</p>
              <p>こんにちは、初めまして</p>
            </div>

            {/* quick links  */}
            <div className="footer-links-block" aria-label="Quick Links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* contact info  */}
            <div className="footer-contact" aria-label="Contact Info">
              <h4>Contact Info</h4>

              <div className="contact-list">
                <div className="contact-item">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <a
                    href="mailto:saumyasingh62552@gmail.com"
                    aria-label="Send email to Saumya"
                  >
                    saumyasingh62552@gmail.com
                  </a>
                </div>

                <div className="contact-item">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <span>Kanpur, India — 208019</span>
                </div>
              </div>

              {/* social icons */}
              <div className="social-row" aria-label="Social links">
                <a
                  className="icon-btn"
                  href="https://www.linkedin.com/in/saumya-singh-ss121825/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>

                <a
                  className="icon-btn"
                  href="https://github.com/Saumyas18s"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>

                <a
                  className="icon-btn"
                  href="https://www.instagram.com/toon.trendz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          {/* bottom  */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Saumya Singh. All rights reserved.</p>
            </div>
            <button
              className="scroll-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Back to top"
            >
              <i className="fas fa-arrow-up" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;