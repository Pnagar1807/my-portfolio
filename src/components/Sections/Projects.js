import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "CropBoom – AI Crop Marketplace",
      description: "AI-powered crop marketplace connecting farmers and buyers. Features include role-based authentication, farmer and buyer registration, AI-assisted crop listings, booking management, and sales tracking through a dedicated farmer dashboard.",
      technologies: ["React", "Tailwind CSS", "Gemini API", "Java"],
      category: "fullstack",
      image: "/images/projects/CropBoom.png",
      liveUrl: "http://krishixmitra.netlify.app",
      githubUrl: "https://github.com/sharmmohit/Online_farmer_Crop_Marketplace"
    },
    {
      id: 2,
      title: "Inventory Management System",
      description: "Responsive inventory management application for tracking stock levels and organizing products by category. Features an interactive dashboard with inventory insights, alerts, search functionality, and bill generation.",
      technologies: ["React", "Tailwind CSS"],
      category: "frontend",
      image: "/images/projects/InventoryManagementSystem.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern portfolio website with dynamic content management, contact form, and project showcase. Built with React and styled-components.",
      technologies: ["React", "Styled Components", "Node.js", "MongoDB"],
      category: "frontend",
      image: "/images/projects/PortfolioWebsite.png",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  // Function to get emoji for placeholder
  const getProjectImage = (project) => {
    const imageMap = {
      'cropboom': '🌾',
      'inventory': '📊',
      'portfolio': '💼',
      'default': '💻'
    };
    
    const projectType = project.title.toLowerCase();
    if (projectType.includes('cropboom')) return imageMap.cropboom;
    if (projectType.includes('inventory')) return imageMap.inventory;
    if (projectType.includes('portfolio')) return imageMap.portfolio;
    return imageMap.default;
  };

  const categories = ['all', 'frontend', 'backend', 'fullstack'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Function to check if image exists
  const checkImageExists = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            // Check if image path is valid
            const isExternalImage = project.image.startsWith('http');
            const isLocalImage = project.image.startsWith('/');
            
            return (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  {/* Show image if it exists, otherwise show placeholder */}
                  {isExternalImage || isLocalImage ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => {
                        // If image fails to load, replace with placeholder
                        e.target.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'project-placeholder';
                        placeholder.innerHTML = `
                          <div class="placeholder-emoji">${getProjectImage(project)}</div>
                          <div class="placeholder-text">${project.title}</div>
                        `;
                        e.target.parentNode.appendChild(placeholder);
                      }}
                    />
                  ) : (
                    // Show placeholder if no image path
                    <div className="project-placeholder">
                      <div className="placeholder-emoji">
                        {getProjectImage(project)}
                      </div>
                      <div className="placeholder-text">
                        {project.title}
                      </div>
                    </div>
                  )}

                  <div className="project-overlay">
                    <div className="project-links">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a 
                          href={project.liveUrl} 
                          className="project-link" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a 
                          href={project.githubUrl} 
                          className="project-link" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map(tech => (
                      <span key={tech} className="project-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;