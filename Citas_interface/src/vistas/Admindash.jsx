import React from 'react';
import HeaderA from '../componets/HeaderA';
import SidebarA from '../componets/SidebarA';
import '../assets/estilosLogin.css';

const AdminDashboard = () => (
  <div className="dashboard-container">
    <HeaderA />
    <SidebarA />
    <div className="dashboard-content">
      <h2>Bienvenido al Panel de Control del Administrador</h2>
    </div>
  </div>
);

export default AdminDashboard;
