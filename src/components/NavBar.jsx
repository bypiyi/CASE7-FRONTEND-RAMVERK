// src/components/Navbar.js
import React, { useState } from 'react';
import '../styles/navbar.css'; // Importera CSS för navbar
import logo from '../assets/header_logo.png'; // Byt ut 'logo.png' mot din logotypfil

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-container">
      {/* Hamburgarmenyn i vänstra hörnet */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Logga i högra hörnet */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigeringslänkar */}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/bookings">Bookings</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
