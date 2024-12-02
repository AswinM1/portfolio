import React from 'react';
import './pro.css';

function Project() {
  const projects = [
    { name: 'React Portfolio', link: 'https://example.com/react-portfolio' },
    { name: 'Project 2', link: 'https://example.com/express-api' },
    { name: 'Project 3', link: 'https://example.com/html-website' },
    { name: 'Project 4', link: 'https://example.com/css-animations' },
  ];

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            onClick={() => window.open(project.link, '_blank')}
          >
            {/* Optionally, you can display the project name inside the card */}
            <p>{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
