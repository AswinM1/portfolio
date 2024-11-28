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
            <h1>Let's Connect</h1>
            <div className="socials-container">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={social.logo}
                            alt={`${social.name} logo`}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Results;
