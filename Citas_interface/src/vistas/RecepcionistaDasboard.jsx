import React from 'react';
import HeaderA from '../componets/HeaderA'; // Suponiendo que Header es el mismo para todos los roles
import recepcionistaSidebar from '../componets/recepcionistaSidebar'; // Sidebar específica para la recepcionista
import '../assets/dashboard2.css'; // Estilos generales del dashboard

const ReceptionistDashboard = () => (
  <div className="dashboard-container">
    <HeaderA />
    <recepcionistaSidebar />
    <div className="dashboard-content">
      <h2>Bienvenida al Panel de Control de Recepcionista</h2>
      {/* Contenido específico del dashboard de recepcionista */}
    </div>
  </div>
);

export default ReceptionistDashboard;
