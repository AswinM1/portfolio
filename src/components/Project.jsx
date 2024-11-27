import React from 'react';
import './pro.css';

function Project() {
    const projects = [
        { name: 'React Portfolio', link: 'https://example.com/react-portfolio' },
        { name: 'Spotify Profile', link: 'https://example.com/express-api' },
        { name: 'Swiggy Clone', link: 'https://example.com/html-website' },
       
        { name: 'CSS Animations', link: 'https://example.com/css-animations' },
    ];

    return (
        <div style={{ padding: '60px 20px', backgroundColor: 'rgb(111, 14, 14)' }} id="projects">
            <h1
                style={{
                    textAlign: 'center',
                    fontFamily: 'sans-serif',
                    fontSize: '90px',
                    letterSpacing: '-5px',
                    fontWeight: '700',
                    color: 'black',
                    marginBottom: '40px',
                }}
            >
                Projects
            </h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat( autofit,minmax(100px, 10fr))',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems:'center',
                    padding:'0 10px'
                }}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '20px',
                            borderRadius: '8px',
                            backgroundColor: '#181818',
                            color: 'black',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            

                        }}
                        className="card"
                        onClick={() => window.open(project.link, '_blank')}
                    >
                        <h2
                            style={{
                                fontSize: '22px',
                                marginBottom: '15px',
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold',
                                color: 'black', 
                                position:'relative',
                                bottom:'0'
                            }}
                            
                        >
                            {project.name}
                        </h2>
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
