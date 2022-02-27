import React from 'react'
import logo from "../logo.jpg";
import jquery from 'jquery';
import { Link } from 'react-router-dom';
import "./Navbar.css";


// for changing navbar  color
jquery(window).scroll(function() {
jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
})
 function Navbar() {
    return( 
       <div className='navbar'>
         <div className='leftSide'>
           <img src={logo} alt='logo' className='logo' />
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
           <Link to="/">Rooms</Link>
           <Link to="/">About</Link>
           <Link to="/">Contact</Link>
            </div>

         </div>
         <div className='rightSide'>
           <Link to="/">Home</Link>
           <Link to="/">Rooms</Link>
           <Link to="/">About</Link>
           <Link to="/">Contact</Link>
         </div>
       </div>
     
  )
}

export default Navbar;

 