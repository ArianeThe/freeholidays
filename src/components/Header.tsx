import React from 'react';
import '../assets/css/Header.css';
import { FaBars } from 'react-icons/fa'; //Pour utiliser l'icône de menu burger

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo wip.jpg" alt="Logo" /> {/* Remplace par le chemin de ton logo */}
      </div>
      <div className="title">
        <h1>Free Holidays</h1>
      </div>
      <div className="menu-burger">
        <FaBars />
      </div>
    </header>
  );
}

export default Header;
