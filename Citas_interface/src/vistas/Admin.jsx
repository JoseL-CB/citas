import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/admin.css';
import { UserAddOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteUser, updateUser, getUsers } from '../controladores/AgregarUsuarioController';

function Admin() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Función para obtener la lista de usuarios desde el controlador
    const obtenerUsuarios = async () => {
      try {
        const data = await getUsers();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    // Llamada a la función para obtener los usuarios al cargar la página
    obtenerUsuarios();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      // Eliminar el usuario de la lista localmente
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  const handleUpdate = async (id, userData) => {
    try {
      await updateUser(id, userData);
      // Actualizar los datos del usuario en la lista localmente
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

  return (
    <div className='fondo'>
      <div className="container">
        <h2 className="admin-heading">Listar Usuarios</h2>
        <div className="search-container">
          {/* Aquí se puede agregar el campo de búsqueda */}
          <input type="text" placeholder="Buscar usuario" />
          <button>Buscar</button>
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
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nombres}</td>
                  <td>{usuario.fecha_nacimiento}</td>
                  <td>{usuario.roleid}</td>
                  <td><span className={`status ${usuario.estado === 'activo' ? 'active' : 'inactive'}`}>&bull;</span> {usuario.estado}</td>
                  <td>
                    <Link to={`/modificar/${usuario.id}`} className="action-btn edit" title="Editar"><EditOutlined /></Link>
                    <button className="action-btn delete" title="Eliminar" onClick={() => handleDelete(usuario.id)}><DeleteOutlined /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/agregar-usuario" className="btn btn-primary"><UserAddOutlined /> Agregar Usuario</Link>
      </div>
    </div>
  );
}

export default Admin;
