import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/admin.css';
import { UserAddOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { deleteUser, updateUser, getUsers, getUserById } from '../controladores/AgregarUsuarioController';

function Admin() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtroId, setFiltroId] = useState('');
  const [usuarioFiltrado, setUsuarioFiltrado] = useState(null);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const data = await getUsers();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  const handleUpdate = async (id, userData) => {
    try {
      await updateUser(id, userData);
      setUsuarios(
        usuarios.map((usuario) => {
          if (usuario.id === id) {
            return { ...usuario, ...userData };
          }
          return usuario;
        })
      );
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  };

  const handleBuscar = async () => {
    if (filtroId.trim() === '') {
      setUsuarioFiltrado(null);
      return;
    }

    try {
      const data = await getUserById(parseInt(filtroId));
      setUsuarioFiltrado(data);
    } catch (error) {
      console.error('Error al buscar usuario:', error);
      setUsuarioFiltrado(null);
    }
  };

  return (
    <div className="background-container">
      <div className="container">
        <h2 className="admin-heading">Listar Usuarios</h2>
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
                <th>Nombre</th>
                <th>Fecha de Creación</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarioFiltrado ? (
                <tr key={usuarioFiltrado.id}>
                  <td>{usuarioFiltrado.id}</td>
                  <td>{usuarioFiltrado.nombres}</td>
                  <td>{usuarioFiltrado.fecha_nacimiento}</td>
                  <td>{usuarioFiltrado.roleid}</td>
                  <td><span className={`status ${usuarioFiltrado.estado === 'activo' ? 'active' : 'inactive'}`}>&bull;</span> {usuarioFiltrado.estado}</td>
                  <td>
                    <Link to={`/modificar-usuario/${usuarioFiltrado.id}`} className="action-btn edit" title="Editar"><EditOutlined /></Link>
                    <button className="action-btn delete" title="Eliminar" onClick={() => handleDelete(usuarioFiltrado.id)}><DeleteOutlined /></button>
                  </td>
                </tr>
              ) : (
                usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nombres}</td>
                    <td>{usuario.fecha_nacimiento}</td>
                    <td>{usuario.roleid}</td>
                    <td><span className={`status ${usuario.estado === 'activo' ? 'active' : 'inactive'}`}>&bull;</span> {usuario.estado}</td>
                    <td>
                      <Link to={`/modificar-usuario/${usuario.id}`} className="action-btn edit" title="Editar"><EditOutlined /></Link>
                      <button className="action-btn delete" title="Eliminar" onClick={() => handleDelete(usuario.id)}><DeleteOutlined /></button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Link to="/agregar-usuario" className="btn btn-primary"><UserAddOutlined /> Agregar Usuario</Link>
      </div>
    </div>
  );
}

export default Admin;
