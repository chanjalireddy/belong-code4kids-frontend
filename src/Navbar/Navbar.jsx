import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // 







const Navbar=()=>{
    return(
        <>

        <div>
        
        <div class="navi">
            <span class="name">Code4Kids</span>
            
            <p><NavLink to='/'>Home</NavLink></p>
            <p><NavLink to='/about'>About</NavLink></p>
            <p><NavLink to='/contact'>Contact</NavLink></p>

            
           
        </div>
    </div>
        
        
        
        
        
        
        
        </>


    )
}

export default Navbar;