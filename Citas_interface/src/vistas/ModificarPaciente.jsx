import React, { useState, useEffect } from 'react';
import '../assets/ModificarUsuario.css';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePatient, getPatientById } from '../controladores/PacienteController';

function ModificarPaciente() {
  const { id } = useParams();
  const [patientData, setPatientData] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const data = await getPatientById(id);
        setPatientData(data);
      } catch (error) {
        console.error('Error al obtener paciente:', error);
      }
    };

    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData(prevPatientData => ({
      ...prevPatientData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePatient(id, patientData);
      setShowAlert(true);
      console.log('Paciente actualizado correctamente');
      setTimeout(() => {
        navigate('/paciente');
        window.history.replaceState(null, '', '/');
      }, 2000); // Redirige a /adminpacientes después de 2 segundos
    } catch (error) {
      console.error('Error al actualizar paciente:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="admin-heading">Modificar Paciente</h2>
      <div className="form-container">
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" name="estado" value={patientData.estado || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="nombres">Nombres:</label>
            <input type="text" id="nombres" name="nombres" value={patientData.nombres || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" value={patientData.apellidos || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="cedula">Cédula:</label>
            <input type="text" id="cedula" name="cedula" value={patientData.cedula || ''} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
            <input type="text" id="fecha_nacimiento" name="fecha_nacimiento" value={patientData.fecha_nacimiento || ''} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Guardar Cambios</button>
        </form>
      </div>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Paciente actualizado correctamente.
        </div>
      )}
    </div>
  );
}

export default ModificarPaciente;
