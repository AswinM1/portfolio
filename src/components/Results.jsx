import React from 'react';
import './Results.css';
import i1 from '../images/git.png'; // GitHub logo
import i2 from '../images/ln.png'; // LinkedIn logo
import i3 from '../images/b.png'; // Another LinkedIn logo

function Results() {
    const socials = [
        { name: 'AswinM1', logo: i1, link: 'https://github.com/AswinM1' },
        { name: 'Aswin.M', logo: i2, link: 'https://www.linkedin.com/in/aswin-m-22073a258/' },
        { name: 'LinkedIn', logo: i3, link: 'https://www.linkedin.com/in/aswin-m-22073a258/' },
    ];

    return (
        <div className="results">
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
                Let's Connect
            </h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '20px',
                }}
            >
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px', // Space between image and text
                        }}
                    >
                        <img
                            src={social.logo}
                            alt={`${social.name} logo`}
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%', // Optional, makes the icons circular
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                        
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Results;
