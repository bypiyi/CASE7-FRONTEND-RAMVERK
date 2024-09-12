// src/components/Movies.js
import React, { useState, useEffect } from 'react';

const Movies = () => {
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
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="movie-card">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p>Genre: {movie.genre}</p>
              <p>Director: {movie.director}</p>
              <p>Duration: {movie.duration}</p>
              <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
              <div className="button-group">
                <button className="btn btn-trailer">Trailer</button>
                <button className="btn btn-book" onClick={() => handleBooking(movie.id)}>Book a Show</button>
              </div>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </section>
  );
}

export default Movies;
