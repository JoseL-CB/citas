import React from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined, FileTextOutlined, ScheduleOutlined, QuestionCircleOutlined, InfoCircleOutlined } from '@ant-design/icons'; // Importa todos los iconos necesarios
import '../assets/estilosRecepcionista.css'; // Asegúrate de que el nombre del archivo CSS sea correcto

const SidebarR = () => (
  <div className="admin-sidebar">
    <ul>
      <li><Link to="/patients"><FileTextOutlined /> Pacientes</Link></li>
      <li><Link to="/visitante"><UserOutlined /> Visitantes</Link></li>
      <li><Link to="/visits"><ScheduleOutlined /> Registro de Visitas</Link></li>
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

export default SidebarR;
