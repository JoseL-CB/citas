// AdminSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined, FileTextOutlined, CalendarOutlined, QuestionCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import '../assets/estilosAdmim.css';

const AdminSidebar = () => (
  <div className="admin-sidebar">
    <ul>
      <li><Link to="/admin"><UserOutlined /> Usuarios</Link></li>
      <li><Link to="/listap"><FileTextOutlined /> Pacientes</Link></li>
      <li><Link to="/lista"><FileTextOutlined /> Habitaciones</Link></li>
      <li><Link to="/evento"><CalendarOutlined /> Eventos</Link></li>
      <li><Link to="/informes"><FileTextOutlined /> Informes</Link></li>
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
