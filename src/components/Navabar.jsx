import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className='container'>
      
      <div className='contents'>
    
        <Link to="hello" smooth={true}>
          <p>Home</p>
        </Link>
       
       
        <Link to="projects" smooth={true}>
          <p>Projects</p>
        </Link>
        <Link to="results" smooth={true}>
          <p>Let's Connect</p>
        </Link>
        </div>
      
    </div>
  );
}

export default Navbar;
