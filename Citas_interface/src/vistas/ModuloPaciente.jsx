import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/admin.css';
import { UserAddOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { deletePatient, getPatients, getPatientById } from '../controladores/PacienteController';

function AdminPatients() {
  const [patients, setPatients] = useState([]);
  const [filterId, setFilterId] = useState('');
  const [filteredPatient, setFilteredPatient] = useState(null);

  const fetchPatients = async () => {
    try {
      const patientsData = await getPatients();
      setPatients(patientsData);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePatient(id);
      setPatients(patients.filter((patient) => patient.id !== id));
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const handleSearch = async () => {
    if (filterId.trim() === '') {
      setFilteredPatient(null);
      return;
    }

    try {
      const data = await getPatientById(parseInt(filterId));
      setFilteredPatient(data);
    } catch (error) {
      console.error('Error searching patient:', error);
      setFilteredPatient(null);
    }
  };

  return (
    <div className="background-container">
      <div className="container">
        <h2 className="admin-heading">Listado de Pacientes</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por ID"
            value={filterId}
            onChange={(e) => setFilterId(e.target.value)}
          />
          <button onClick={handleSearch}><SearchOutlined /></button>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Estado</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Cédula</th>
                <th>Fecha de Nacimiento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatient ? (
                <tr key={filteredPatient.id}>
                  <td>{filteredPatient.id}</td>
                  <td>{filteredPatient.estado}</td>
                  <td>{filteredPatient.nombres}</td>
                  <td>{filteredPatient.apellidos}</td>
                  <td>{filteredPatient.cedula}</td>
                  <td>{filteredPatient.fecha_nacimiento}</td>
                  <td>
                    <Link to={`/ModificarPaciente/${filteredPatient.id}`} className="action-btn edit" title="Editar"><EditOutlined /></Link>
                    <button className="action-btn delete" title="Eliminar" onClick={() => handleDelete(filteredPatient.id)}><DeleteOutlined /></button>
                  </td>
                </tr>
              ) : (
                patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.estado}</td>
                    <td>{patient.nombres}</td>
                    <td>{patient.apellidos}</td>
                    <td>{patient.cedula}</td>
                    <td>{patient.fecha_nacimiento}</td>
                    <td>
                      <Link to={`/ModificarPaciente/${patient.id}`} className="action-btn edit" title="Editar"><EditOutlined /></Link>
                      <button className="action-btn delete" title="Eliminar" onClick={() => handleDelete(patient.id)}><DeleteOutlined /></button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Link to="/AgregarPaciente" className="btn btn-primary"><UserAddOutlined /> Agregar Paciente</Link>
      </div>
    </div>
  );
}

export default AdminPatients;
