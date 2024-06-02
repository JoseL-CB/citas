import axios from 'axios';

const createVisitante = async (visitanteData) => {
  try {
    const response = await axios.post('http://localhost:8000/visitantes/insert', visitanteData);
    return response.data;
  } catch (error) {
    throw new Error('Error al registrar visitante');
  }
};

const deleteVisitante = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/visitantes/delete/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar visitante');
  }
};

const updateVisitante = async (id, visitanteData) => {
  try {
    await axios.put(`http://localhost:8000/visitantes/update/${id}`, visitanteData);
  } catch (error) {
    throw new Error('Error al modificar visitante');
  }
};

const getVisitanteById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/visitantes/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener visitante por ID');
  }
};

const getVisitantes = async () => {
  try {
    const response = await axios.get('http://localhost:8000/visitantes/listar');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener la lista de visitantes');
  }
};

export { createVisitante, deleteVisitante, updateVisitante, getVisitanteById, getVisitantes };
