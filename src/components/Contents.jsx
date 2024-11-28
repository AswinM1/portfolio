import React, { useEffect } from 'react';
import './Hello.css';
import Project from './Project';
import Tech from './Tech';


function Contents() {
 
  
  return (
    <div className="hello" style={{backgroundColor:'rgb(111, 14, 14)'}}>
      <div className="content-wrapper">
     
        <div className="text">
          <p><span style={{backgroundColor:'black',color:'rgb(111,14,14)'}}>Aswin</span>,Web Developer
           </p>
             <p>I Design And Build Stuffs
           </p>
      
        </div>
       
        <Tech></Tech>
       

       
      </div>
    </div>
  );
}

export default Contents;
