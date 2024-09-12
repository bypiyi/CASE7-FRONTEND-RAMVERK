// src/App.js
import React, { useState } from 'react';
import Movies from './components/Movies'; // Importera Movies-komponenten
import './app.css';
import Footer from './components/Footer';
import logoImage from './assets/header_logo.jpg';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // State för att hålla reda på vilken sida som visas

  const handleNavigation = (page) => {
    setCurrentPage(page); // Uppdatera state baserat på vilken länk som klickas
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#" onClick={() => handleNavigation('home')}>HOME</a></li>
            <li><a href="#" onClick={() => handleNavigation('movies')}>MOVIES</a></li>
            <li><a href="#" onClick={() => handleNavigation('shows')}>SHOWS</a></li>
            <li><a href="#" onClick={() => handleNavigation('bookings')}>BOOKINGS</a></li>
          </ul>
        </nav>
      </header>

      {/* Växla mellan sidorna baserat på currentPage state */}
      {currentPage === 'home' && (
        <div className="home">
          {/* Här kan du lägga till innehållet för din hemsida */}
        </div>
      )}

      {currentPage === 'movies' && <Movies />}
      {currentPage === 'shows' && <Shows />}
      {currentPage === 'bookings' && <Bookings />}
      {currentPage === 'about' && <About />}

      {/* Du kan skapa liknande komponenter för "shows", "bookings", etc */}
    
      <Footer />
    
    
    </div>
  );
}

export default App;
