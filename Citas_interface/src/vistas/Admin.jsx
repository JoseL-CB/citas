import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/admin.css';
import { UserAddOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { deleteUser, getUsers, getUserById, createUser } from '../controladores/AgregarUsuarioController'; // Importar función de creación de usuario

function Admin() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtroId, setFiltroId] = useState('');
  const [usuarioFiltrado, setUsuarioFiltrado] = useState(null);
  const [redirectToAddUser, setRedirectToAddUser] = useState(false); // Estado para redirigir a la página de agregar usuario
  const navigate = useNavigate(); // Hook para la navegación programática

  const obtenerDatos = async () => {
    try {
      const usuariosData = await getUsers();
      setUsuarios(usuariosData);
    } catch (error) {
      console.error('Error al obtener datos de usuarios:', error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
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

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      // Si el usuario no está autenticado, redirigir a la página de login
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const handleAddUser = async () => {
    try {
      // Lógica para agregar un usuario (llamada a la función createUser)
      await createUser(/* Datos del usuario a crear */);
      setRedirectToAddUser(true); // Establecer redirección a true después de agregar el usuario
    } catch (error) {
      console.error('Error al agregar usuario:', error);
    }
  };

  // Redirigir a la página de agregar usuario si se agrega un usuario correctamente
  useEffect(() => {
    if (redirectToAddUser) {
      navigate('/agregar-usuario');
    }
  }, [redirectToAddUser, navigate]);

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
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Fecha de Creación</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarioFiltrado ? (
                <tr key={usuarioFiltrado.id}>
                  <td>{usuarioFiltrado.id}</td>
                  <td>{usuarioFiltrado.nombres}</td>
                  <td>{usuarioFiltrado.apellidos}</td>
                  <td>{usuarioFiltrado.fecha_nacimiento}</td>
                  <td>{usuarioFiltrado.rol}</td>
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
                    <td>{usuario.apellidos}</td>
                    <td>{usuario.fecha_nacimiento}</td>
                    <td>{usuario.rol}</td>
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
