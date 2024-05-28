import axios from 'axios';

const createUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/insert', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error al registrar usuario');
  }
};

const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/api/delete/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar usuario');
  }
};

const updateUser = async (id, userData) => {
  try {
    await axios.put(`http://localhost:8000/api/update/${id}`, userData);
  } catch (error) {
    throw new Error('Error al modificar usuario');
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/perfil_usuario/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener usuario por ID');
  }
};

const getUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/listar');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener la lista de usuarios');
  }
};

export { createUser, deleteUser, updateUser, getUserById, getUsers };
