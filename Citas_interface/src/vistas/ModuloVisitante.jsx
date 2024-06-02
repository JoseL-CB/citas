import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/admin.css';
import { UserAddOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { deleteVisitante, getVisitantes, getVisitanteById } from '../controladores/VisitanteController';

function AdminVisitantes() {
  const [visitantes, setVisitantes] = useState([]);
  const [filtroId, setFiltroId] = useState('');
  const [visitanteFiltrado, setVisitanteFiltrado] = useState(null);

  const obtenerDatos = async () => {
    try {
      const visitantesData = await getVisitantes();
      setVisitantes(visitantesData);
    } catch (error) {
      console.error('Error al obtener datos de visitantes:', error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteVisitante(id);
      setVisitantes(visitantes.filter((visitante) => visitante.id !== id));
    } catch (error) {
      console.error('Error al eliminar visitante:', error);
    }
  };

  const handleBuscar = async () => {
    if (filtroId.trim() === '') {
      setVisitanteFiltrado(null);
      return;
    }

    try {
      const data = await getVisitanteById(parseInt(filtroId));
      setVisitanteFiltrado(data);
    } catch (error) {
      console.error('Error al buscar visitante:', error);
      setVisitanteFiltrado(null);
    }
  };

  return (
    <div className="background-container">
      <div className="container">
        <h2 className="admin-heading">Listar Visitantes</h2>
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
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Edad</th>
                <th>Cédula</th>
                <th>Relación con Paciente</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {visitanteFiltrado ? (
                <tr key={visitanteFiltrado.id}>
                  <td>{visitanteFiltrado.id}</td>
                  <td>{visitanteFiltrado.nombres}</td>
                  <td>{visitanteFiltrado.apellidos}</td>
                  <td>{visitanteFiltrado.edad}</td>
                  <td>{visitanteFiltrado.cedula}</td>
                  <td>{visitanteFiltrado.relacion_paciente}</td>
                  <td>
                    <Link to={`/modificarvisitante/${visitanteFiltrado.id}`} className="action-btn edit" title="Editar"><EditOutlined /></Link>
                    <button className="action-btn delete" title="Eliminar" onClick={() => handleDelete(visitanteFiltrado.id)}><DeleteOutlined /></button>
                  </td>
                </tr>
              ) : (
                visitantes.map((visitante) => (
                  <tr key={visitante.id}>
                    <td>{visitante.id}</td>
                    <td>{visitante.nombres}</td>
                    <td>{visitante.apellidos}</td>
                    <td>{visitante.edad}</td>
                    <td>{visitante.cedula}</td>
                    <td>{visitante.relacion_paciente}</td>
                    <td>
                      <Link to={`/modificarvisitante/${visitante.id}`} className="action-btn edit" title="Editar"><EditOutlined /></Link>
                      <button className="action-btn delete" title="Eliminar" onClick={() => handleDelete(visitante.id)}><DeleteOutlined /></button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Link to="/agregarvisitante" className="btn btn-primary"><UserAddOutlined /> Agregar Visitante</Link>
      </div>
    </div>
  );
}

export default AdminVisitantes
