import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Events.css';

const Events = () => (
  <div className="events-container">
    <h1>Eventos</h1>
    <div className="event-card">
      <h2>Conferencia de Salud Mental</h2>
      <p>Un evento para discutir los últimos avances en salud mental.</p>
      <Link to="/events/mental-health" className="event-link">Ver más</Link>
    </div>
    <div className="event-card">
      <h2>Taller de Primeros Auxilios</h2>
      <p>Aprende cómo manejar emergencias médicas en este taller.</p>
      <Link to="/events/first-aid" className="event-link">Ver más</Link>
    </div>
    <div className="event-card">
      <h2>Seminario de Nutrición</h2>
      <p>Conoce más sobre la importancia de una alimentación balanceada.</p>
      <Link to="/events/nutrition" className="event-link">Ver más</Link>
    </div>
    <div className="event-card">
      <h2>Jornada de Vacunación</h2>
      <p>Vacúnate y protege a tu familia contra diversas enfermedades.</p>
      <Link to="/events/vaccination" className="event-link">Ver más</Link>
    </div>
    <div className="event-card">
      <h2>Charla sobre el Cáncer de Mama</h2>
      <p>Información y prevención del cáncer de mama.</p>
      <Link to="/events/breast-cancer" className="event-link">Ver más</Link>
    </div>
  </div>
);

export default Events;
