// AgregarUsuario.jsx

import React from 'react';
import './AgregarUsuario.css'; // Importa el archivo de estilos específico para AgregarUsuario

function AgregarUsuario() {
  return (
    <div className="user-container">
      <h2>Agregar Usuario</h2>
      <div className="form-container">
        <form className="user-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
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
  );
}

export default AgregarUsuario;
