import React, { useState, useEffect } from 'react';
import '../BookingForm/booking_form.css';

const BookingForm = () => {
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      // Hämta tillgängliga föreställningar
      fetch('https://cinema-api.henrybergstrom.com/api/v1/shows')
        .then(response => response.json())
        .then(data => setShows(data))
        .catch(error => console.error('Error fetching shows:', error));
    }, []);
  
    useEffect(() => {
      // Hämta tillgängliga säten när en föreställning är vald
      if (selectedShow) {
        fetch(`https://cinema-api.henrybergstrom.com/api/v1/shows/${selectedShow}/seats`)
          .then(response => response.json())
          .then(data => setSeats(data))
          .catch(error => console.error('Error fetching seats:', error));
      }
    }, [selectedShow]);
  
    const handleShowChange = (event) => {
      setSelectedShow(event.target.value);
    };
  
    const handleSeatChange = (seat) => {
      setSelectedSeats(prevSeats => 
        prevSeats.includes(seat) ? prevSeats.filter(s => s !== seat) : [...prevSeats, seat]
      );
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Skicka bokningsinformation till API:et
      fetch('https://cinema-api.henrybergstrom.com/api/v1/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          show: selectedShow,
          seats: selectedSeats,
          email: email
        })
      })
      .then(response => response.json())
      .then(data => {
        setMessage(`Bokningen är klar! Email: ${data.email}, Bokningstid: ${data.bookingTime}, Totalt pris: ${data.totalPrice}`);
      })
      .catch(error => console.error('Error booking:', error));
    };
  
    return (
      <section id="bookings" className="bookings-section">
        <div className="bookings-form-container">
          <h2>Book a Show</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Show:
              <select value={selectedShow} onChange={handleShowChange} required>
                <option value="">Select a show</option>
                {shows.map(show => (
                  <option key={show.id} value={show.id}>
                    {show.title} - {show.time}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Seats:
              <div className="seats-container">
                {seats.length > 0 ? (
                  seats.map(seat => (
                    <div key={seat.id} className="seat">
                      <label>
                        <input 
                          type="checkbox" 
                          value={seat.id} 
                          checked={selectedSeats.includes(seat.id)} 
                          onChange={() => handleSeatChange(seat.id)}
                        />
                        {seat.number}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>No seats available for this show.</p>
                )}
              </div>
            </label>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <button type="submit">Book Now</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </section>
    );
  };
  
  export default BookingForm;
