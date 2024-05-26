// AgregarUsuarioController.js
import axios from 'axios';

const createUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/insert', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error al registrar usuario');
  }
};

export default createUser;
