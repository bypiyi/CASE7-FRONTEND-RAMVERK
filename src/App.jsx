// src/App.js
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <h2>Välkommen till Cinema</h2>
      </section>
      <section id="movies">
        <h2>Filmer</h2>
      </section>
      <section id="bookings">
        <h2>Bokningar</h2>
      </section>
    </div>
  );
}

export default App;
