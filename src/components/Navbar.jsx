import './NavbarStyle.css'
import React, { useEffect, useRef, useLocation } from "react";
import {NavLink} from 'react-router-dom';


function Navbar ({ observerRefs }){

    // Hamburger
    function navToggle () {
        const primaryNav = document.querySelector('.nav-links');
        const toggle = document.querySelector('.mobile-toggle');
        const visibility = primaryNav.getAttribute('data-visible');

        if (visibility === "false"){
            primaryNav.setAttribute('data-visible', true);
            toggle.setAttribute('aria-expanded', true);
        } else if (visibility === "true") {
            primaryNav.setAttribute('data-visible', false);
            toggle.setAttribute('aria-expanded', false);
        }
    }
        
    return(
        
        <nav>
            <div className="button-background">
                <button className="mobile-toggle" aria-controls="nav-links" aria-expanded="false" onClick={navToggle}>
                </button>
            </div>

            <ul id="nav-links" data-visible='false' className="nav-links flex-row items-center justify-center gap-1 bg-translucent-white"> 
                <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
                {/* <li><NavLink to="/projects" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Projects</NavLink></li> */}
                <li><NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Blog</NavLink></li>
                {/* <li><NavLink to="/fun-stuff" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Fun Stuff</NavLink></li> */}
            </ul>
        </nav>
    )
    
}

export default Navbar;