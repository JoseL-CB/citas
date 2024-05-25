// src/views/Dashboard.jsx
import React from 'react';
import Header from '../componets/Header';
import Sidebar from '../componets/Sidebar';
import '../assets/Dahboard.css'; // Importa el archivo de estilos específico para Dashboard

const Dashboard = () => (
  <div className="dashboard-container">
    <Header />
    <Sidebar />
    <div className="dashboard-content">
      {/* Aquí puedes agregar el contenido principal del Dashboard */}
      <p>Bienvenido al panel de control del Hospital S.M.</p>
    </div>
  </div>
);

export default Dashboard;
