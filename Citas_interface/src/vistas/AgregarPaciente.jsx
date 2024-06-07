import React, { useState } from 'react';
import { createPatient } from '../controladores/PacienteController';
import '../assets/AgregarUsuario.css';
import usePatientData from '../modelos/ModeloPaciente';
import { useNavigate } from 'react-router-dom';

function AgregarPaciente() {
  const { patientData, handleChange } = usePatientData();
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validación básica del frontend antes de enviar los datos
    if (isNaN(patientData.estado) || isNaN(patientData.cedula)) {
      setError("Estado y Cédula deben ser números");
      return;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(patientData.fecha_nacimiento)) {
      setError("Fecha de nacimiento debe estar en formato YYYY-MM-DD");
      return;
    }

    try {
      await createPatient(patientData);
      setShowAlert(true);
      console.log('Paciente registrado correctamente');
      setTimeout(() => {
        navigate('/paciente');
        window.history.replaceState(null, '', '/');
      }, 2000); // Redirige a /adminpacientes después de 2 segundos
    } catch (error) {
      console.error('Error al registrar paciente:', error);
      setError("Error al registrar paciente");
    }
  };

  return (
    <div className="container">
      <h2 className="admin-heading">Agregar Paciente</h2>
      <div className="form-container">
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" name="estado" value={patientData.estado} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="nombres">Nombres:</label>
            <input type="text" id="nombres" name="nombres" value={patientData.nombres} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" value={patientData.apellidos} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="cedula">Cédula:</label>
            <input type="text" id="cedula" name="cedula" value={patientData.cedula} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" value={patientData.fecha_nacimiento} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
        {showAlert && (
          <div className="alert-container">
            <p className="alert alert-success">Paciente registrado correctamente</p>
          </div>
        )}
        {error && (
          <div className="alert-container">
            <p className="alert alert-danger">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgregarPaciente;
