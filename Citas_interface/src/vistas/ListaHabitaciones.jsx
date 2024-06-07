import React, { useState, useEffect } from 'react';
import { getHabitaciones } from '../controladores/HabitacionController';
import '../assets/admin.css'

function AdminHabitaciones() {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const obtenerHabitaciones = async () => {
      try {
        const habitacionesData = await getHabitaciones();
        setHabitaciones(habitacionesData);
      } catch (error) {
        console.error('Error al obtener habitaciones:', error);
      }
    };

    obtenerHabitaciones();
  }, []);

  return (
    <div className="background-container">
      <div className="container">
        <h2 className="admin-heading">LISTADO HABITACIONES</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Número de Habitación</th>
                <th>Tipo</th>
                <th>Estado</th>
                <th>Número de Camas</th>
              </tr>
            </thead>
            <tbody>
              {habitaciones.map((habitacion) => (
                <tr key={habitacion.id}>
                  <td>{habitacion.id}</td>
                  <td>{habitacion.num_habitacion}</td>
                  <td>{habitacion.tipo}</td>
                  <td>{habitacion.estado}</td>
                  <td>{habitacion.num_cama}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminHabitaciones;
