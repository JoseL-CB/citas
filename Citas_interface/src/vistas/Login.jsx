import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Login.css';
import logoSrc from '../assets/logo.jpg';
import { login } from '../controladores/LoginController'; // Importa la función de login
import LoginModel from '../modelos/LoginModel'; // Importa el modelo de login

function Login() {
    const [credentials, setCredentials] = useState(LoginModel);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            console.log("Credenciales antes de enviar:", credentials);  // Añadir log para depuración
            const response = await login(credentials); // Utiliza la función de login del controlador
            if (response.success) {
                if (response.role === 1) {
                    navigate('/Admindash');
                } else if (response.role === 2) {
                    navigate('/Recepcionista');
                } else if (response.role === 3) {
                    navigate('/Guarda');
                }
            } else {
                console.error('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error.message);
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
                            <input
                                type="text"
                                placeholder="Cedula"
                                name="cedula"
                                value={credentials.cedula}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                            />
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
