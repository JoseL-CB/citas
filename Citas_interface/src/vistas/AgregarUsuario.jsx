// AgregarUsuario.jsx

import React from 'react';
import '../assets/AgregarUsuario.css'; // Importa el archivo de estilos específico para AgregarUsuario

function AgregarUsuario() {
  return (
    <div className='fondo'>
    <div className="user-container">
      <h2>Agregar Usuario</h2>
      <div className="form-container">
        <form className="user-form">
          <div className="form-group">
            <label htmlFor="nombres">Nombres:</label>
            <input type="text" id="nombres" name="nombres" required />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" required />
          </div>
          <div className="form-group">
            <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required />
          </div>
          <div className="form-group">
            <label htmlFor="cedula">Cédula:</label>
            <input type="number" id="cedula" name="cedula" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="sexo">Sexo:</label>
            <select id="sexo" name="sexo" required>
              <option value="">Seleccionar Sexo</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="rol">Rol:</label>
            <select id="rol" name="rol" required>
              <option value="">Seleccionar Rol</option>
              <option value="admin">Admin</option>
              <option value="guardia">Guardia</option>
              <option value="recepcion">Recepción</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AgregarUsuario;
