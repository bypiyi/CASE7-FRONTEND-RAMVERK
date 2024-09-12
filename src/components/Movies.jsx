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
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="movie-card">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p><b>Genre:</b> {movie.genre}</p>
              {/* <p>{movie.releaseDate}</p> */}
              <p><b>Director:</b> {movie.director}</p>
              <p><b>Duration min:</b> {movie.duration}</p>
              {/* <p>{movie.rating}</p> */}
              <img src={movie.posterUrl} alt={`${movie.title} Poster`} className="movie-poster" />

              {/* buttons */}
              <div className="button-group">
                <button className="btn btn-trailer">TRAILER</button>
                <a href={`https://cinema-api.henrybergstrom.com/#/Booking/book_tickets/${movie.id}`} className="btn btn-book">Book tickets</a>
              </div>


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
