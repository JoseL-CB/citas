// ModificarUsuario.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/ModificarUsuario.css';
import { updateUser, getUserById } from '../controladores/AgregarUsuarioController';

function ModificarUsuario() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const data = await getUserById(id);
        setUserData(data);
      } catch (error) {
        console.error('Error al obtener usuario:', error);
      }
    };

    obtenerUsuario();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, userData);
      console.log('Usuario actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="admin-heading">Modificar Usuario</h2>
      <div className="form-container">
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombres">Nombres:</label>
            <input type="text" id="nombres" name="nombres" value={userData.nombres || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" value={userData.apellidos || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" value={userData.fecha_nacimiento || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="cedula">Cédula:</label>
            <input type="number" id="cedula" name="cedula" value={userData.cedula || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={userData.email || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" value={userData.password || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="sexo">Sexo:</label>
            <select id="sexo" name="sexo" value={userData.sexo || ''} onChange={handleChange} required>
              <option value="">Seleccionar Sexo</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="roleid">Rol:</label>
            <select id="roleid" name="roleid" value={userData.roleid || ''} onChange={handleChange} required>
              <option value={1}>Admin</option>
              <option value={2}>Guardia</option>
              <option value={3}>Recepción</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}

export default ModificarUsuario;