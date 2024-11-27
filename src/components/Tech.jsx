import React from 'react';
import i3 from '../images/ex.png';
import i4 from '../images/fig.png';
import i5 from '../images/css.png';
import i6 from '../images/rs.png';
import './Tech.css'


function Tech() {
    const skills = [
        { name: 'React', logo: i3 },
        { name: 'Express.js', logo: i4 },
        { name: 'HTML', logo: i5 },
        { name: 'Figma', logo: i6 },
        { name: 'CSS', logo: i6 },
    ];

    return (
        <div style={{ padding: '0px 50px', backgroundColor: 'rgb(111, 14, 14)' }} id="pricing">
          
            <div
                style={{
                    display: 'flex',
                  alignContent:'center',
                  justifyContent:'center',
                    gap: '20px',
                    justifyContent: 'center',
                }}
            >
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '10px',
                          
                            backgroundColor: 'transparent',
                        }}
                        className='ab'
                    >
                        <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            style={{
                                width: '80px',
                                height: '80px',
                                
                            }}
                        />
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tech;
