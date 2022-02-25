import React from 'react'
import logo from "../logo.jpg";

/*---------------------IMPORTS FOR THE FONTS AWESOME--------------------- */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import jquery from 'jquery';

// for changing navbar  color
jquery(window).scroll(function() {
jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
})


function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className='container'> 
  <a className="navbar-brand" href="/some/valid/uri"><img className="logo" src={logo} alt="logo..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   
   
  
  <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
  </button>



  </div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/some/valid/uri#top">Home</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/some/valid/uri#top">Rooms</a>
        
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/some/valid/uri#top">Services</a>
        
      </li>
    
      <li className="nav-item">
        <a className="nav-link" href="/some/valid/uri#top">ContactUs</a>
      
      </li>
    </ul>  
  </div>
</nav>
  )
}

export default Navbar

 