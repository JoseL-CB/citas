import React from 'react';
import './Login.css';
import logoSrc from './logo.jpg'; // Importa el logo correctamente

function Login() {
  return (
    <div className="wrapper">
      <div className="ctn">
        <div className="ctn1">
          <h1 className="ctn11">INICIAR SESION</h1>
          <div className="ctn13">
            <p>or use your account</p>
            <div className="ctn131">
              <input type="text" placeholder="USUARIO"/>
              <input type="password" placeholder="CONTRASEÑA"/>
            </div>
            <p>¿Se te olvidó la contraseña?</p>
          </div>
          <div className="ctn14">
            <button>INGRESAR</button>
          </div>
        </div>
        <div className="ctn2">
          <h1 className="ctn21">HOSPITAL SAN MIGUEL</h1>
          <div className="ctn22">
             <img src={logoSrc} alt="Logo" className="logo" /> {/* Utiliza la variable logoSrc */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
