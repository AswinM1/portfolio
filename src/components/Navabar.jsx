import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className='container'>
      <Link to='hello' smooth={true}>
      <p className='logo' style={{fontFamily:'sans-serif',color:'black',fontWeight:'bold',borderRadius:'10px',width:'40px',height:'40px',marginLeft:'20px',alignContent:'center',justifyContent:'center',padding:'2px',cursor:'pointer'}}>aswin</p>
      </Link>
      <div className='contents'>
    
        <Link to="hello" smooth={true}>
          <p>Home</p>
        </Link>
       
        <Link to="pricing" smooth={true}>
          <p>Tech Stacks</p>
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
