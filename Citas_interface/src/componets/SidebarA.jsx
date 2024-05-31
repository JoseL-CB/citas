// AdminSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined, FileTextOutlined, CalendarOutlined, QuestionCircleOutlined, InfoCircleOutlined } from '@ant-design/icons'; // Importa iconos de Ant Design
import '../assets/estilosLogin.css'; // Importa el archivo de estilos específico para Sidebar

const AdminSidebar = () => (
  <div className="admin-sidebar">
    <ul>
      <li><Link to="/users"><UserOutlined /> Usuarios</Link></li>
      <li><Link to="/patients"><FileTextOutlined /> Pacientes</Link></li>
      <li><Link to="/rooms"><FileTextOutlined /> Habitaciones</Link></li>
      <li><Link to="/events"><CalendarOutlined /> Eventos</Link></li>
      <li><Link to="/reports"><FileTextOutlined /> Informes</Link></li>
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

export default AdminSidebar;
