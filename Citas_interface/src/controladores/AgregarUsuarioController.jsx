import axios from 'axios';

const createUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/PerfilUsuario/insert', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error al registrar usuario');
  }
};

const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/PerfilUsuario/delete/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar usuario');
  }
};

const updateUser = async (id, userData) => {
  try {
    await axios.put(`http://localhost:8000/PerfilUsuario/update/${id}`, userData);
  } catch (error) {
    throw new Error('Error al modificar usuario');
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/PerfilUsuario/perfil_usuario/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener usuario por ID');
  }
};

const getUsers = async () => {
  try {
    // Obtener los usuarios
    const response = await axios.get('http://localhost:8000/PerfilUsuario/listar');
    const users = response.data;
    console.log("Usuarios sin asignar roles:", users);

    // Obtener los roles para cada usuario
    const rolesResponse = await axios.get('http://localhost:8000/roles/listar');
    const roles = rolesResponse.data;
    console.log("Roles obtenidos:", roles);

    // Asignar el nombre del rol a cada usuario
    const usersWithRoleNames = users.map(user => {
      const userRole = roles.find(role => role.id === user.roleid);
      const roleName = userRole ? userRole.namerol : "Desconocido";
      return {
        ...user,
        namerol: roleName
      };
    });
  
    return usersWithRoleNames;
  } catch (error) {
    throw new Error('Error al obtener la lista de usuarios');
  }
};


export { createUser, deleteUser, updateUser, getUserById, getUsers };
