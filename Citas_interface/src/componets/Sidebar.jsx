// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined, CalendarOutlined, FileTextOutlined, QuestionCircleOutlined, InfoCircleOutlined } from '@ant-design/icons'; // Importa iconos de Ant Design
import '../assets/Sidebar.css'; // Importa el archivo de estilos específico para Sidebar

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li><Link to="/patients"><UserOutlined /> Pacientes</Link></li>
      <li><Link to="/appointments"><CalendarOutlined /> Citas</Link></li>
      <li><Link to="/reports"><FileTextOutlined /> Informes</Link></li>
    </ul>
    <div className="menu-help">
      <ul>
        <li><Link to="/help"><QuestionCircleOutlined /> <b>Ayuda</b></Link></li>
        <li><Link to="/about"><InfoCircleOutlined /> Acerca de</Link></li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
