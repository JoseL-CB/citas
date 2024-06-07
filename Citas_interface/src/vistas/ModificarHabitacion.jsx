import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/ModificarUsuario.css';
import { updateHabitacion, getHabitacionById } from '../controladores/HabitacionController';

function ModificarHabitacion() {
  const { id } = useParams();
  const [habitacionData, setHabitacionData] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerHabitacion = async () => {
      try {
        const data = await getHabitacionById(id);
        setHabitacionData(data);
      } catch (error) {
        console.error('Error al obtener habitación:', error);
      }
    };

    obtenerHabitacion();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabitacionData(prevHabitacionData => ({
      ...prevHabitacionData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateHabitacion(id, habitacionData);
      setShowAlert(true);
      console.log('Habitación actualizada correctamente');
      setTimeout(() => {
        navigate('/habitacion');
        window.history.replaceState(null, '', '/');
      }, 2000); // Redirige a /adminhabitaciones después de 2 segundos
    } catch (error) {
      console.error('Error al actualizar habitación:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="admin-heading">Modificar Habitación</h2>
      <div className="form-container">
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="num_habitacion">Número de Habitación:</label>
            <input type="text" id="num_habitacion" name="num_habitacion" value={habitacionData.num_habitacion || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="tipo">Tipo:</label>
            <input type="text" id="tipo" name="tipo" value={habitacionData.tipo || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" name="estado" value={habitacionData.estado || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="num_cama">Número de Camas:</label>
            <input type="number" id="num_cama" name="num_cama" value={habitacionData.num_cama || ''} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Guardar Cambios</button>
        </form>
      </div>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Habitación actualizada correctamente.
        </div>
      )}
    </div>
  );
}

export default ModificarHabitacion;
