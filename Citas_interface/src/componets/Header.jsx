// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png'; // Importa tu logo
import '../assets/Header.css'; // Importa el archivo de estilos específico para Header
import { LogoutOutlined } from '@ant-design/icons'; // Importa iconos de Ant Design

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <div className="bienvenida"><b>Hospital S.M. - Su bienestar, nuestra prioridad</b></div>
    <div className="menu">
      <ul>

        <li><Link to="/login"><LogoutOutlined /> Login</Link></li>
      </ul>
    </div>
  </div>
);

export default Header;
