import React, { useState } from 'react';
import '../assets/AgregarUsuario.css';
import useUserData from '../modelos/AgregarUsuarioModel';
import { createUser } from '../controladores/AgregarUsuarioController';
import { useNavigate } from 'react-router-dom';

function AgregarUsuario() {
  const { userData, handleChange } = useUserData();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createUser(userData);
      console.log(response); // Manejar la respuesta de la API según necesites
      setShowAlert(true);
      setTimeout(() => {
        navigate('/Admindash');
        window.history.replaceState(null, '', '/');
      }, 2000); // Redirige a /usuarios después de 2 segundos
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='fondo'>
      <div className="user-container">
        <h2>Agregar Usuario</h2>
        <div className="form-container">
          <form className="user-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombres">Nombres:</label>
              <input type="text" id="nombres" name="nombres" value={userData.nombres} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos:</label>
              <input type="text" id="apellidos" name="apellidos" value={userData.apellidos} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
              <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" value={userData.fecha_nacimiento} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="cedula">Cédula:</label>
              <input type="number" id="cedula" name="cedula" value={userData.cedula} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="sexo">Sexo:</label>
              <select id="sexo" name="sexo" value={userData.sexo} onChange={handleChange} required>
                <option value="">Seleccionar Sexo</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="roleid">Rol:</label>
              <select id="roleid" name="roleid" value={userData.roleid} onChange={handleChange} required>
                <option value={1}>Admin</option>
                <option value={2}>Guardia</option>
                <option value={3}>Recepción</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
          </form>
        </div>
      </div>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Usuario agregado correctamente.
        </div>
      )}
    </div>
  );
}

export default AgregarUsuario;
