import React, { useState } from 'react';
import { createVisitante } from '../controladores/VisitanteController';
import useVisitanteData from '../modelos/ModeloVistante';
import { useNavigate } from 'react-router-dom';
import '../assets/AgregarUsuario.css';

function AgregarVisitante() {
  const { visitanteData, handleChange } = useVisitanteData();
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createVisitante(visitanteData);
      setShowAlert(true);
      console.log('Visitante registrado correctamente');
      setTimeout(() => {
        navigate('/Recepcionista');
        window.history.replaceState(null, '', '/');
      }, 2000); // Redirige a /visitante después de 2 segundos
    } catch (error) {
      console.error('Error al registrar visitante:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="admin-heading">Agregar Visitante</h2>
      <div className="form-container">
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombres">Nombre:</label>
            <input type="text" id="nombres" name="nombres" value={visitanteData.nombres} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" value={visitanteData.apellidos} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" name="edad" value={visitanteData.edad} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="cedula">Cédula:</label>
            <input type="text" id="cedula" name="cedula" value={visitanteData.cedula} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="relacion_paciente">Relación con el Paciente:</label>
            <input type="text" id="relacion_paciente" name="relacion_paciente" value={visitanteData.relacion_paciente} onChange={handleChange} required />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
      {showAlert && (
        <div className="alert-container">
          <p className="alert alert-success">Visitante registrado correctamente</p>
        </div>
      )}
    </div>
  );
}

export default AgregarVisitante;
