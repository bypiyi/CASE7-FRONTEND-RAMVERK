import React from 'react';
import logo from '../assets/header_logo.png';
import '../styles/header.css'; 

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Cinema Logo" className="logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#movies">Movies</a>
          </li>
          <li className="nav-item">
            <a href="#bookings">Bookings</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
