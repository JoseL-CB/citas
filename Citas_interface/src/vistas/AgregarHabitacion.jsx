import React, { useState } from 'react';
import { createHabitacion } from '../controladores/HabitacionController';
import useHabitacionData from '../modelos/ModeloHabitacion';
import '../assets/AgregarUsuario.css';
import { useNavigate } from 'react-router-dom';

function AgregarHabitacion() {
  const { habitacionData, handleChange } = useHabitacionData();
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createHabitacion(habitacionData);
      setShowAlert(true);
      console.log('Habitación registrada correctamente');
      setTimeout(() => {
        navigate('/ModuloHabitacion');
        window.history.replaceState(null, '', '/');
      }, 2000); // Redirige a /adminhabitaciones después de 2 segundos
    } catch (error) {
      console.error('Error al registrar habitación:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="admin-heading">Agregar Habitación</h2>
      <div className="form-container">
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="num_habitacion">Número de Habitación:</label>
            <input type="text" id="num_habitacion" name="num_habitacion" value={habitacionData.num_habitacion} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="tipo">Tipo:</label>
            <input type="text" id="tipo" name="tipo" value={habitacionData.tipo} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" name="estado" value={habitacionData.estado} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="num_cama">Número de Camas:</label>
            <input type="number" id="num_cama" name="num_cama" value={habitacionData.num_cama} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
      {showAlert && (
        <div className="alert-container">
          <p className="alert alert-success">Habitación registrada correctamente</p>
        </div>
      )}
    </div>
  );
}

export default AgregarHabitacion;
