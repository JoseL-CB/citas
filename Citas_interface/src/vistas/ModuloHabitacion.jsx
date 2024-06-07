import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/admin.css';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { deleteHabitacion, getHabitaciones, getHabitacionById } from '../controladores/HabitacionController';

function AdminHabitaciones() {
  const [habitaciones, setHabitaciones] = useState([]);
  const [filtroId, setFiltroId] = useState('');
  const [habitacionFiltrada, setHabitacionFiltrada] = useState(null);

  const obtenerDatos = async () => {
    try {
      const habitacionesData = await getHabitaciones();
      setHabitaciones(habitacionesData);
    } catch (error) {
      console.error('Error al obtener datos de habitaciones:', error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteHabitacion(id);
      setHabitaciones(habitaciones.filter((habitacion) => habitacion.id !== id));
    } catch (error) {
      console.error('Error al eliminar habitación:', error);
    }
  };

  const handleBuscar = async () => {
    if (filtroId.trim() === '') {
      setHabitacionFiltrada(null);
      return;
    }

    try {
      const data = await getHabitacionById(parseInt(filtroId));
      setHabitacionFiltrada(data);
    } catch (error) {
      console.error('Error al buscar habitación:', error);
      setHabitacionFiltrada(null);
    }
  };

  return (
    <div className="background-container">
      <div className="container">
        <h2 className="admin-heading">Listar Habitaciones</h2>
        <div className="search-container">
          <input
            type="text"
            value={filtroId}
            onChange={(e) => setFiltroId(e.target.value)}
            placeholder="Buscar por ID"
          />
          <button onClick={handleBuscar}><SearchOutlined /></button>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Número de Habitación</th>
                <th>Tipo</th>
                <th>Estado</th>
                <th>Número de Camas</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {habitacionFiltrada ? (
                <tr key={habitacionFiltrada.id}>
                  <td>{habitacionFiltrada.id}</td>
                  <td>{habitacionFiltrada.num_habitacion}</td>
                  <td>{habitacionFiltrada.tipo}</td>
                  <td>{habitacionFiltrada.estado}</td>
                  <td>{habitacionFiltrada.num_cama}</td>
                  <td>
                    <Link to={`/modificarhabitacion/${habitacionFiltrada.id}`} className="action-btn edit" title="Editar"><EditOutlined /></Link>
                    <button className="action-btn delete" title="Eliminar" onClick={() => handleDelete(habitacionFiltrada.id)}><DeleteOutlined /></button>
                  </td>
                </tr>
              ) : (
                habitaciones.map((habitacion) => (
                  <tr key={habitacion.id}>
                    <td>{habitacion.id}</td>
                    <td>{habitacion.num_habitacion}</td>
                    <td>{habitacion.tipo}</td>
                    <td>{habitacion.estado}</td>
                    <td>{habitacion.num_cama}</td>
                    <td>
                      <Link to={`/modificarhabitacion/${habitacion.id}`} className="action-btn edit" title="Editar"><EditOutlined /></Link>
                      <button className="action-btn delete" title="Eliminar" onClick={() => handleDelete(habitacion.id)}><DeleteOutlined /></button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Link to="/agregarhabitacion" className="btn btn-primary">Agregar Habitación</Link>
      </div>
    </div>
  );
}

export default AdminHabitaciones;
