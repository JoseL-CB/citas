// src/views/Dashboard.jsx
import React from 'react';
import Header from '../componets/Header';
import Sidebar from '../componets/Sidebar';
import '../assets/Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <Header />
    <Sidebar />
    <div className="dashboard-content">
      <h1>Bienvenido al Hospital S.M.</h1>
      <div className="info-section">
        <div className="card-container">
          <div className="info-card">
            <h2>Noticias y Actualizaciones</h2>
            <p>Mantente al día con las últimas noticias y eventos del hospital.</p>
            <ul>
              <li>Nueva tecnología de diagnóstico implementada.</li>
              <li>Inauguración de la nueva ala pediátrica.</li>
              <li>Jornada de vacunación este fin de semana.</li>
            </ul>
          </div>
          <div className="info-card">
            <h2>Estadísticas del Hospital</h2>
            <p>Datos relevantes sobre el funcionamiento del hospital.</p>
            <ul>
              <li>Pacientes atendidos: 500</li>
              <li>Tasa de ocupación: 85%</li>
              <li>Personal médico: 120</li>
            </ul>
          </div>
          <div className="info-card">
            <h2>Información de Contacto</h2>
            <p>Puedes contactarnos a través de los siguientes medios:</p>
            <ul>
              <li>Teléfono: (555) 123-4567</li>
              <li>Email: contacto@hospitalsm.com</li>
              <li>Dirección: Calle Falsa 123, Ciudad</li>
            </ul>
          </div>
          <div className="info-card">
            <h2>Horarios de Visita</h2>
            <p>Visítanos en los siguientes horarios:</p>
            <ul>
              <li>Lunes a Viernes: 10:00 AM - 6:00 PM</li>
              <li>Sábado: 10:00 AM - 2:00 PM</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
