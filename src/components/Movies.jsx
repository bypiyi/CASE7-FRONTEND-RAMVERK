// src/components/Movies.js
import React, { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Hämta filmer från API:et
    fetch('https://cinema-api.henrybergstrom.com/api/v1/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <section id="movies" className="movies-section">
      <h2>Movies</h2>
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="movie-card">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </section>
  );
}

export default Movies;
