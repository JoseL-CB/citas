// ReceptionistDashboard.jsx
import React from 'react';
import HeaderR from '../componets/HeaderR';
import SidebarR from '../componets/SidebarR';
import '../assets/estilosRecepcionista.css';

const ReceptionistDashboard = () => (
  <div className="dashboard-container">
    <HeaderR />
    <SidebarR />
    <div className="dashboard-content">
      <h2>Bienvenido al Panel de Control de la Recepcionista</h2>
    </div>
  </div>
);

export default ReceptionistDashboard;
