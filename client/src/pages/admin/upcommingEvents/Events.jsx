import React, { useState, useEffect } from 'react';
import './Events.css'; // Import your CSS file

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('URL')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []); 

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-details">
              <h3 className="event-name">{event.name}</h3>
              <p className="event-description">{event.description}</p>
              <p className="event-date">Date: {event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
