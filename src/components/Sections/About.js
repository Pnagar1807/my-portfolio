import React from 'react';

const About = () => {
  const skills = [
    'React', 'Next.js', 'Node.js', 'Express', 
    'MongoDB', 'JavaScript', 'TypeScript', 'CSS3',
    'Tailwind', 'Git'
  ];

  const stats = [
    { value: '10+', label: 'Academic & Personal Projects' },
    { value: '5+', label: 'Months Mern Stack Practice' },
    { value: '4+', label: 'Tech Skills' },
    { value: '100+', label: 'DSA Problems Solved' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
            I’m a passionate full-stack developer with a strong foundation in 
            the MERN stack. I enjoy building responsive, user-friendly web 
            applications and turning complex problems into simple, clean solutions. 
            I’m eager to learn, grow, and contribute to real-world projects.
            </p>
            <p>
              My approach combines technical expertise with creative design 
              thinking. I believe in writing clean, maintainable code and 
              creating intuitive user experiences that solve real problems.
            </p>
            
            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;