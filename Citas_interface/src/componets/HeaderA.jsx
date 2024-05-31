// AdminHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png'; // Importa tu logo
import '../assets/estilosLogin.css'; // Importa el archivo de estilos específico para Header
import { InfoCircleOutlined } from '@ant-design/icons'; // Importa iconos de Ant Design

const AdminHeader = () => (
  <div className="header">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <div className="bienvenida"><b>Bienvenido Administrador</b></div>
    <div className="menu">
      <ul>
        <li><Link to="/help"><InfoCircleOutlined /> Ayuda</Link></li>
      </ul>
    </div>
  </div>
);

export default AdminHeader;
