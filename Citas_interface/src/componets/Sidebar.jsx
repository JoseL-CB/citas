// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarOutlined, FileTextOutlined, QuestionCircleOutlined, InfoCircleOutlined } from '@ant-design/icons'; // Importa iconos de Ant Design
import '../assets/Sidebar.css'; // Importa el archivo de estilos específico para Sidebar

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li><Link to="/ultimasNoticias"><FileTextOutlined /> Últimas Noticias</Link></li>
      <li><Link to="/eventos"><CalendarOutlined /> Eventos</Link></li>
      <li><Link to="/informes"><FileTextOutlined /> Informes</Link></li>
      <li><Link to="/admin"><FileTextOutlined /> admin</Link></li>
    </ul>
    <div className="menu-help">
      <ul>
        <li><Link to="/help"><QuestionCircleOutlined /> <b>Ayuda</b></Link></li>
        <li><Link to="/about"><InfoCircleOutlined /> Acerca de</Link></li>
      </ul>
    </div>
    <div className="footer">
      <p>Hospital S.M. - 2024</p>
    </div>
  </div>
);

export default Sidebar;
