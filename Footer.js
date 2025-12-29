import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">Portfolio.</div>
            <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Creating exceptional digital experiences through modern web technologies 
              and innovative design solutions.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#projects">Web Development</a></li>
              <li><a href="#projects">UI/UX Design</a></li>
              <li><a href="#projects">Mobile Apps</a></li>
              <li><a href="#projects">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://github.com/Pnagar1807" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/pawannagar-fullstack" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://leetcode.com/u/PawanNagar18/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:pawannagar.cse@gmail.com" className="social-icon">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Pawan Nagar. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Built with React, Node.js, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;