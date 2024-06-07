import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/ModificarUsuario.css';
import { updateVisitante, getVisitanteById } from '../controladores/VisitanteController';

function ModificarVisitante() {
  const { id } = useParams();
  const [visitanteData, setVisitanteData] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerVisitante = async () => {
      try {
        const data = await getVisitanteById(id);
        setVisitanteData(data);
      } catch (error) {
        console.error('Error al obtener visitante:', error);
      }
    };

    obtenerVisitante();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitanteData(prevVisitanteData => ({
      ...prevVisitanteData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateVisitante(id, visitanteData);
      setShowAlert(true);
      console.log('Visitante actualizado correctamente');
      setTimeout(() => {
        navigate('/Recepcionista');
        window.history.replaceState(null, '', '/');
      }, 2000); // Redirige a /visitante después de 2 segundos
    } catch (error) {
      console.error('Error al actualizar visitante:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="admin-heading">Modificar Visitante</h2>
      <div className="form-container">
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombres">Nombres:</label>
            <input type="text" id="nombres" name="nombres" value={visitanteData.nombres || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" value={visitanteData.apellidos || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" name="edad" value={visitanteData.edad || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="cedula">Cédula:</label>
            <input type="number" id="cedula" name="cedula" value={visitanteData.cedula || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="relacion_paciente">Relación con Paciente:</label>
            <input type="text" id="relacion_paciente" name="relacion_paciente" value={visitanteData.relacion_paciente || ''} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Guardar Cambios</button>
        </form>
      </div>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Visitante actualizado correctamente.
        </div>
      )}
    </div>
  );
}

export default ModificarVisitante;
