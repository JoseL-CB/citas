// HeaderR.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo2.png';
import { LogoutOutlined } from '@ant-design/icons';
import { logout } from '../controladores/LogoutController'; // Importa la función de logout

const HeaderR = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout(); // Llama a la función de cerrar sesión en el controlador
            localStorage.removeItem('user'); // Limpia los datos de usuario del almacenamiento local
            navigate('/', { replace: true }); // Redirige al inicio y reemplaza la entrada en el historial
            window.history.replaceState(null, '', '/'); // Limpia el historial de navegación
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
        }
    };

    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="welcome-container">
                <b className="welcome-text">Bienvenido</b>
                <span className="username">{user ? user.nombre : 'Recepcionista'}</span>
            </div>
            <div className="menu">
                <ul>
                    <li onClick={handleLogout}><LogoutOutlined /> Cerrar sesión</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderR;
