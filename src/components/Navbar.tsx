import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import '../assets/css/Navbar.css'


function Navbar() {
  
    
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };

    return(
        <nav className="navbar">
        <div className="navbar-content">

            <div className="navbar-logo"> <img src="/logo wip.jpg" alt="Logo" width="60px" height="60px"/> 
            </div>
            <div className="nav-brand"> Free Holidays
            </div>
            
            <button className="menu-toggle"
                onClick={toggleMenu}>
                <FaBars />
                </button>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}> 
                    <NavLink to='/' onClick={closeMenu}>
                    Accueil</NavLink>

                    <NavLink to='/about' onClick={closeMenu}>
                    A propos</NavLink>

                    <NavLink to='/connexion' onClick={closeMenu}>
                    Connexion</NavLink>
                </div>
            
        </div>
        </nav>
    );
}

export default Navbar;