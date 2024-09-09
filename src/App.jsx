// src/App.js
import React from 'react';
import Navbar from './components/NavBar';
import './app.css'; // Din övergripande CSS
import heroImage from './assets/movie_festival.png'; // Importera din hero-bild från assets


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Huvudinnehåll */}

      <div className="hero">
        <img src={heroImage} alt="Hero Banner" className="hero-image" />
      </div>

      <main>


        {/* Exempel på innehåll */}

      </main>
    </div>
  );
}

export default App;
