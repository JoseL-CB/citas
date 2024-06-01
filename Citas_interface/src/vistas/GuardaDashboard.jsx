// GuardaDashboard.jsx
import React from 'react';
import HeaderG from '../componets/HeaderG';
import SidebarG from '../componets/SidebarG';
import '../assets/estilosGuarda.css';

const GuardDashboard = () => (
  <div className="dashboard-container">
    <HeaderG />
    <SidebarG />
    <div className="dashboard-content">
      <h2>Bienvenido al Panel de Control del Guardia</h2>
    </div>
  </div>
);

export default GuardDashboard;
