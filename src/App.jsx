// src/App.js
import React from 'react';
import './app.css'; // Importera din CSS
import heroImage from './assets/hero_banner.jpg';
import logoImage from './assets/header_logo.png';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">MOVIES</a></li>
            <li><a href="#services">SHOWS</a></li>
            <li><a href="#contact">BOOKINGS</a></li>
            <li><a href="#contact">ABOUT</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </section>

      {/* Här kan du lägga till resten av ditt innehåll */}
    </div>
  );
}

export default App;
