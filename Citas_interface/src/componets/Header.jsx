// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png'; // Importa tu logo
import '../assets/Header.css'; // Importa el archivo de estilos específico para Header
import { CalendarOutlined, UserOutlined, FileTextOutlined } from '@ant-design/icons'; // Importa iconos de Ant Design

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <div className="bienvenida"><b>Bienvenidos Hospital S.M.</b></div>
    <div className="menu">
      <ul>
        <li><Link to="/recepcion"><UserOutlined /> Recepción</Link></li>
        <li><Link to="/admin"><FileTextOutlined /> Admin</Link></li>
        <li><Link to="/calendar"><CalendarOutlined /> Calendario</Link></li>
        <li><Link to="/login">Inicio Sesión</Link></li>
      </ul>
    </div>
  </div>
);

export default Header;
