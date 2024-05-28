// Login.jsx

import React, { useState } from 'react';
import '../assets/Login.css';
import logoSrc from '../assets/logo.jpg';
import { useHistory } from 'react-router-dom'; // Importa useHistory
import axios from 'axios';
import LoginModel from '../modelos/LoginModel';

function Login() {
  const [credentials, setCredentials] = useState(LoginModel);
  const history = useHistory(); // Obtiene la instancia de useHistory

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', credentials);
      if (response.data.success) {
        // Redirige a la página de dashboard
        history.push('/dashboard');
      } else {
        console.error('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="wrapper">
      <div className="ctn">
        <div className="ctn1">
          <h1 className="ctn11">INICIAR SESION</h1>
          <div className="ctn13">
            <p>or use your account</p>
            <div className="ctn131">
              <input type="text" placeholder="Cedula" name="cedula" value={credentials.cedula} onChange={handleChange} />
              <input type="password" placeholder="Contraseña" name="contrasena" value={credentials.contrasena} onChange={handleChange} />
            </div>
            <p>¿Se te olvidó la contraseña?</p>
          </div>
          <div className="ctn14">
            <button onClick={handleLogin}>INGRESAR</button>
          </div>
        </div>
        <div className="ctn2">
          <h1 className="ctn21">HOSPITAL SAN MIGUEL</h1>
          <div className="ctn22">
             <img src={logoSrc} alt="Logo" className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
