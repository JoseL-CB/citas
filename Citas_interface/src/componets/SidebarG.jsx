// SidebarG.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FileTextOutlined,QuestionCircleOutlined, InfoCircleOutlined } from '@ant-design/icons'; // Importa iconos de Ant Design
import '../assets/estilosGuarda.css'; // Importa el archivo de estilos específico para Sidebar

const SidebarG = () => (
  <div className="admin-sidebar">
    <ul>
      <li><Link to="/visitors"><FileTextOutlined /> Visitantes</Link></li>
      <li><Link to="/security-reports"><FileTextOutlined /> Reportes de Seguridad</Link></li>
    </ul>
    <div className="admin-menu-help">
      <ul>
        <li><Link to="/help"><QuestionCircleOutlined /> <b>Ayuda</b></Link></li>
        <li><Link to="/about"><InfoCircleOutlined /> Acerca de</Link></li>
      </ul>
    </div>
    <div className="admin-footer">
      <p>Hospital S.M. - 2024</p>
    </div>
  </div>
);

export default SidebarG;
