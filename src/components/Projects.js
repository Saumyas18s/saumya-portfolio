import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Projects.css';

// === Easy-to-edit content hooks ===
const TEMPLATE_URL = "https://www.canva.com/design/DAGymYnrz9M/gxWaWFw4D0_oD_REgc31Cg/edit?utm_content=DAGymYnrz9M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"; // ← replace with your real Canva link/folder
const CTA_COPY = {
  title: "Explore More Projects",
  subtitle:
    "Browse my GitHub for more code and see polished Canva templates I use for pitch decks, resumes, and project one-pagers.",
  templateBlurb:
    "Prefer visuals? I keep a curated set of ready-to-use Canva templates—clean, consistent, and optimized for quick edits.",
};

const Projects = () => {
  // State management
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Projects data - memoized to prevent unnecessary re-renders
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: 'Water Quality Prediction System',
        year: '2025',
        description:
          'Comprehensive ML-powered system for predicting water quality and algae blooms using LSTM models. Features real-time monitoring capabilities and responsive React frontend.',
        technologies: ['Python', 'TensorFlow', 'LSTM', 'React', 'Flask', 'AWS EC2', 'Scikit-learn'],
        features: [
          '92% accuracy in water quality prediction',
          '89% F1-score for algae bloom prediction',
          '70% reduction in lab testing requirements',
          'Real-time monitoring via Flask API',
          'Responsive React frontend with Figma design',
          'MLOps pipeline for model deployment',
        ],
        github: 'https://github.com/Saumyas18s/water-quality-prediction',
        demo: 'https://water-quality-demo.netlify.app',
        image: 'https://picsum.photos/400/600?random=1&t=' + Date.now(),
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        status: 'Completed',
        category: 'Machine Learning',
      },
      {
        id: 2,
        title: 'DesignHub - UI/UX Template Gallery',
        year: '2024',
        description:
          'Full-stack MERN application serving as a comprehensive gallery platform for design templates. Optimized for performance with advanced MongoDB queries.',
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'CSS3', 'JavaScript'],
        features: [
          '40% reduction in client onboarding time',
          '25x improvement in load speed performance',
          'Optimized MongoDB query architecture',
          'Responsive design gallery interface',
          'Advanced search and filtering system',
          'User authentication and template management',
        ],
        github: 'https://github.com/Saumyas18s/designhub',
        demo: 'https://designhub-gallery.netlify.app',
        image: 'https://picsum.photos/400/600?random=2&t=' + Date.now(),
        color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        status: 'Completed',
        category: 'Full Stack',
      },
      {
        id: 3,
        title: 'DataDrill - Web Scraper',
        year: '2023',
        description:
          'High-performance web scraper built in Go leveraging goroutines for concurrent data retrieval from dynamic websites with exceptional efficiency.',
        technologies: ['Go', 'Goroutines', 'HTML Parser', 'Concurrent Programming', 'Web APIs'],
        features: [
          '60% improvement in scraping efficiency',
          'Concurrent data retrieval using goroutines',
          'Dynamic website parsing capabilities',
          'Scalable architecture design',
          'Advanced error handling and retry logic',
          'Data processing optimization',
        ],
        github: 'https://github.com/Saumyas18s/datadrill',
        demo: 'https://datadrill-demo.netlify.app',
        image: 'https://picsum.photos/400/600?random=3&t=' + Date.now(),
        color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        status: 'Completed',
        category: 'Backend',
      },
      {
        id: 4,
        title: 'AI Chat Assistant',
        year: '2024',
        description:
          'Intelligent conversational AI built with modern NLP techniques, featuring context awareness and multi-language support for enhanced user interactions.',
        technologies: ['Python', 'OpenAI', 'FastAPI', 'React', 'WebSocket', 'Docker'],
        features: [
          'Multi-language conversation support',
          'Context-aware responses with memory',
          'Real-time messaging with WebSocket',
          'Containerized deployment with Docker',
          'Custom training pipeline integration',
          'Comprehensive analytics dashboard',
        ],
        github: 'https://github.com/Saumyas18s/ai-chat-assistant',
        demo: 'https://ai-chat-demo.netlify.app',
        image: 'https://picsum.photos/400/600?random=4&t=' + Date.now(),
        color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        status: 'Completed',
        category: 'AI/ML',
      },
      {
        id: 5,
        title: 'Blockchain Voting System',
        year: '2024',
        description:
          'Secure and transparent voting platform built on Ethereum blockchain with smart contracts and decentralized architecture for tamper-proof elections.',
        technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask', 'IPFS'],
        features: [
          'Immutable vote recording on blockchain',
          'Smart contract validation and security',
          'Decentralized storage with IPFS',
          'MetaMask wallet integration',
          'Real-time result tracking dashboard',
          'Complete audit trail functionality',
        ],
        github: 'https://github.com/Saumyas18s/blockchain-voting',
        demo: 'https://blockchain-vote-demo.netlify.app',
        image: 'https://picsum.photos/400/600?random=5&t=' + Date.now(),
        color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        status: 'Completed',
        category: 'Blockchain',
      },
    ],
    []
  );

  // Navigation functions - memoized to prevent unnecessary re-renders
  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false); // Pause auto-play on manual navigation
  }, [projects.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  // Touch handlers with proper null checks
  const handleTouchStart = useCallback((e) => {
    if (!e.targetTouches || !e.targetTouches[0]) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!e.targetTouches || !e.targetTouches[0]) return;
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextProject();
    else if (isRightSwipe) prevProject();
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, nextProject, prevProject]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevProject();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextProject();
          break;
        case ' ':
          e.preventDefault();
          setIsAutoPlaying((prev) => !prev);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextProject, prevProject]);

  // Visible projects
  const getVisibleProjects = useMemo(() => {
    const visibleCount = 5;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentProject + i - 2 + projects.length) % projects.length;
      visible.push({
        ...projects[index],
        position: i - 2,
        index: i,
      });
    }
    return visible;
  }, [currentProject, projects]);

  const getPositionClass = useCallback((position) => {
    const positionMap = {
      0: 'center',
      [-1]: 'left-1',
      [-2]: 'left-2',
      1: 'right-1',
      2: 'right-2',
    };
    return positionMap[position] || '';
  }, []);

  const handleCardClick = useCallback(
    (project, e) => {
      e.preventDefault();
      e.stopPropagation();
      if (project.position !== 0) {
        const targetIndex = projects.findIndex((p) => p.id === project.id);
        if (targetIndex !== -1) {
          setCurrentProject(targetIndex);
          setIsAutoPlaying(false);
        }
      }
    },
    [projects]
  );

  const handleIndicatorClick = useCallback(
    (index, e) => {
      e.preventDefault();
      e.stopPropagation();
      if (index >= 0 && index < projects.length) {
        setCurrentProject(index);
        setIsAutoPlaying(false);
      }
    },
    [projects.length]
  );

  const handleImageError = useCallback((e) => {
    e.target.src = 'https://via.placeholder.com/400x600/667eea/ffffff?text=Project+Image';
    e.target.onerror = null;
  }, []);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className="projects-section" id="projects">
      {/* Background animated elements */}
      <div className="projects-background" aria-hidden="true" />

      {/* Section header */}
      <header className="project-info">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcasing innovative solutions and technical excellence</p>
      </header>

      {/* Main carousel container */}
      <div
        className="project-carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        role="region"
        aria-label="Projects carousel"
      >
        {/* Navigation buttons */}
        <button className="nav-button nav-prev" onClick={prevProject} aria-label="Previous project" type="button">
          <span aria-hidden="true">‹</span>
        </button>

        <button className="nav-button nav-next" onClick={nextProject} aria-label="Next project" type="button">
          <span aria-hidden="true">›</span>
        </button>

        {/* Project track */}
        <div className="project-track" role="tabpanel" aria-live="polite">
          {getVisibleProjects.map((project) => {
            const positionClass = getPositionClass(project.position);
            const isCurrent = project.position === 0;

            return (
              <div
                key={`project-${project.id}-${project.index}`}
                className={`project-card ${positionClass} ${isLoading ? 'loading' : ''}`}
                style={{
                  '--project-color': project.color,
                  '--tx': project.position === -1 ? '-200px' : project.position === 1 ? '200px' : '0px',
                  '--ry': project.position === -1 ? '25deg' : project.position === 1 ? '-25deg' : '0deg',
                  '--mobile-tx-1': project.position === -1 ? '-160px' : '160px',
                }}
                onClick={(e) => handleCardClick(project, e)}
                role="button"
                tabIndex={isCurrent ? 0 : -1}
                aria-label={`${project.title} - ${project.year}`}
                aria-current={isCurrent}
                data-project-id={project.id}
              >
                {/* Project image */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    draggable="false"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`View ${project.title} demo`}
                      >
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="project-content">
                  <div>
                    <div className="project-year" aria-label={`Project year: ${project.year}`}>
                      {project.year}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>

                  {/* Technology badges */}
                  <div className="project-tech" role="list" aria-label="Technologies used">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={`${project.id}-tech-${idx}`} className="tech-badge" role="listitem">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-badge" role="listitem">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicators */}
        <div className="carousel-indicators" role="tablist" aria-label="Project navigation">
          {projects.map((project, index) => (
            <button
              key={`indicator-${project.id}`}
              className={`indicator ${index === currentProject ? 'active' : ''}`}
              onClick={(e) => handleIndicatorClick(index, e)}
              role="tab"
              aria-selected={index === currentProject}
              aria-label={`Go to project ${index + 1}: ${project.title}`}
              type="button"
            />
          ))}
        </div>
      </div>

     {/* === Explore More Projects — Full Width CTA === */}
<div className="github-cta">
  <div className="github-cta-content">
    {/* Canva mini brand row */}
    <div className="brand-canva" aria-label="Canva">
      <div className="canva-logo" role="img" aria-label="Canva logo">
        <svg viewBox="0 0 48 48" className="canva-logo-svg" aria-hidden="true">
          <defs>
            <linearGradient id="cgrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopOpacity="1" stopColor="#28C3D4" />
              <stop offset="100%" stopOpacity="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="22" fill="url(#cgrad)"></circle>
          <text x="24" y="31" textAnchor="middle" fontSize="24" fontWeight="700" fill="#fff" fontFamily="inherit">C</text>
        </svg>
      </div>
      <div className="brand-canva-text">
        <span className="brand-canva-name">Canva</span>
        <span className="brand-canva-tag">Template Pack</span>
      </div>
    </div>

    <h3 className="github-cta-title">{CTA_COPY.title}</h3>
    <p className="github-cta-subtitle">{CTA_COPY.subtitle}</p>
    <p className="template-blurb">{CTA_COPY.templateBlurb}</p>

   <div className="cta-actions">
  <a
    href="https://github.com/Saumyas18s"
    target="_blank"
    rel="noopener noreferrer"
    className="github-cta-button"
    aria-label="Visit GitHub profile"
  >
    <svg
      className="github-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
    <span>View on GitHub</span>
  </a>

  <a
    href={TEMPLATE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-secondary template-cta-button"
    aria-label="Open Canva templates"
  >
    <span className="btn-icon" aria-hidden="true">📝</span>
    <span>View Templates</span>
  </a>
</div>

  </div>
</div>
    </section>
  );
};

export default Projects;
