import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              <span className="btn-icon">🚀</span>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              <span className="btn-icon">💼</span>
              Hire Me
            </button>
          </div>
          
          {/* Tech Stack Icons */}
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
          </div>
        </div>
        
        <div className="hero-image">
          <div className="profile-container">
            {/* Modern Profile Image Design */}
            <div className="profile-card">
              <div className="profile-shape">
                {/* Gradient Background */}
                <div className="profile-gradient"></div>
                
                {/* Animated Rings */}
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
                
                {/* Your Photo - Use this if you have an image */}
                <div className="profile-photo-container">
                  <img 
                    src="/images/pavan.png" 
                    alt="Pawan Nagar"
                    className="profile-photo"
                    onError={(e) => {
                      // If image fails to load, show initials instead
                      e.target.style.display = 'none';
                      document.querySelector('.profile-initials').style.display = 'flex';
                    }}
                  />
                  
                  {/* Initials (shown if image doesn't load) */}
                  <div className="profile-initials" style={{display: 'none'}}>
                    <span className="initial-p">P</span>
                    <span className="initial-n">N</span>
                  </div>
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
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="floating-elements">
              <div className="float-1"></div>
              <div className="float-2"></div>
              <div className="float-3"></div>
              <div className="float-4"></div>
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