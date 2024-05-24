import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Importa el archivo de estilos específico para Dashboard
import logo from '../logo2.png'; // Importa tu logo
import { CalendarOutlined, UserOutlined, FileTextOutlined, QuestionCircleOutlined, InfoCircleOutlined } from '@ant-design/icons'; // Importa iconos de Ant Design

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="header">
        {/* Colocamos el logo a la izquierda */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className='bienvenida'><b>Bienvenidos Hospital S.M.</b></div>
        <div className="menu">
          <ul>      
            <li><Link to="/recepcion"><UserOutlined /> Recepción</Link></li>
            <li><Link to="/admin"><FileTextOutlined /> Admin</Link></li>
            <li><Link to="/calendar"><CalendarOutlined /> Calendario</Link></li>
            <li><Link to="/login">Inicio Sesión</Link></li>
          </ul>
        </div>
      </div>
      <div className="sidebar">
        <ul>
          <li><Link to="/patients">Pacientes</Link></li>
          <li><Link to="/appointments">Citas</Link></li>
          <li><Link to="/reports">Informes</Link></li>
        </ul>
         {/* Div para las secciones de Ayuda y Acerca de */}
         <div className="menu-help">
            <ul>
            {/* Mejoramos el estilo del menú Help */}
            <li><Link to="/help"><QuestionCircleOutlined /> <b>Ayuda</b></Link></li>
            <li><Link to="/about"><InfoCircleOutlined /> Acerca de</Link></li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
