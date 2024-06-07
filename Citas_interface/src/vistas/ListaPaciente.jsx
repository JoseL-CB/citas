import React, { useState, useEffect } from 'react';
import { getPatients } from '../controladores/PacienteController';
import '../assets/admin.css'; // Asegúrate de que esta importación sea correcta

function AdminPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await getPatients();
        setPatients(patientsData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="background-container"> {/* Asegúrate de que las clases aquí sean correctas */}
      <div className="container">
        <h2 className="admin-heading">Listar Pacientes</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Estado</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Cédula</th>
                <th>Fecha de Nacimiento</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.estado}</td>
                  <td>{patient.nombres}</td>
                  <td>{patient.apellidos}</td>
                  <td>{patient.cedula}</td>
                  <td>{patient.fecha_nacimiento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPatients;
