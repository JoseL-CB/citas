import React from 'react';
import { Link } from 'react-router-dom';
import { FileTextOutlined, UserOutlined, ScheduleOutlined } from '@ant-design/icons';
import '../assets/recepcionistaSidebar.css'; // Archivo de estilos específico para la recepcionista

const ReceptionistSidebar = () => (
  <div className="sidebar">
    <ul>
      <li><Link to="/patients"><FileTextOutlined /> Pacientes</Link></li>
      <li><Link to="/visitors"><UserOutlined /> Visitantes</Link></li>
      <li><Link to="/visits"><ScheduleOutlined /> Registro de Visitas</Link></li>
    </ul>
  </div>
);

export default ReceptionistSidebar;
