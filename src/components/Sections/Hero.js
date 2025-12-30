import React, { useState } from 'react';

const Hero = () => {
  // Scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Image error state
  const [imageError, setImageError] = useState(false);

  // Resume download function
  const downloadResume = () => {
  window.open('https://drive.google.com/file/d/1oz9HQlZwqi2-RxXVgleERaA7DZZI1Idf/view?usp=drivesdk', '_blank');
};

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm 
            <span className="highlight-name">Pawan Nagar</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I create exceptional digital experiences that combine beautiful design 
            with robust functionality. Specializing in modern web technologies 
            to bring ideas to life.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('projects')}
            >
              <span className="btn-icon">🚀</span>
              View Projects
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={downloadResume}
            >
              <span className="btn-icon">📄</span>
              Download Resume
            </button>
          </div>
          
          {/* Tech Stack */}
          <div className="tech-stack">
            <div className="tech-item">
              <span className="tech-icon-small">⚛️</span>
              <span>React</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon-small">⬢</span>
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon-small">🗄️</span>
              <span>MongoDB</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon-small">⚡</span>
              <span>Express</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon-small">🎨</span>
              <span>Tailwind</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon-small">🐙</span>
              <span>Git</span>
            </div>
          </div>
        </div>
        
        {/* PROFILE IMAGE SECTION */}
        <div className="hero-image">
          <div className="profile-container">
            <div className="profile-card">
              <div className="profile-shape">
                {/* Gradient Background */}
                <div className="profile-gradient"></div>
                
                {/* Animated Rings */}
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
                
                {/* IMAGE CONTAINER  */}
                <div className="profile-image-container">
                  {imageError ? (
                    // Fallback initials if image fails
                    <div className="profile-initials-fallback">
                      <span className="initial-p">P</span>
                      <span className="initial-n">N</span>
                    </div>
                  ) : (
                    <img 
                      src="/images/pawan.png" 
                      alt="Pawan Nagar"
                      className="profile-photo"
                      onError={() => {
                        console.log('Image failed to load, showing initials');
                        setImageError(true);
                      }}
                      onLoad={() => console.log('✅ Profile image loaded successfully')}
                    />
                  )}
                </div>
                
                {/* Tech Icons Around */}
                <div className="tech-icon react-icon">
                  <div className="tech-icon-inner">⚛️</div>
                  <div className="tech-tooltip">React</div>
                </div>
                <div className="tech-icon node-icon">
                  <div className="tech-icon-inner">⬢</div>
                  <div className="tech-tooltip">Node.js</div>
                </div>
                <div className="tech-icon js-icon">
                  <div className="tech-icon-inner">JS</div>
                  <div className="tech-tooltip">JavaScript</div>
                </div>
                <div className="tech-icon css-icon">
                  <div className="tech-icon-inner">CSS</div>
                  <div className="tech-tooltip">CSS3</div>
                </div>
              </div>
              
              {/* Name Badge */}
              <div className="name-badge">
                <h3>Pawan Nagar</h3>
                <p>Full Stack Developer</p>
                <div className="availability">
                  <span className="availability-dot"></span>
                  <span className="availability-text">Available for Opportunities</span>
                </div>
                {/* Resume Download Link in Badge */}
                <div className="resume-link">
                  <a 
                    href="#!" 
                    onClick={downloadResume}
                    className="resume-download-link"
                  >
                    <span>📄 Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="floating-elements">
              <div className="float-1"></div>
              <div className="float-2"></div>
              <div className="float-3"></div>
              <div className="float-2"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;