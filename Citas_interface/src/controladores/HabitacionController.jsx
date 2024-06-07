import axios from 'axios';

const createHabitacion = async (habitacionData) => {
  try {
    const response = await axios.post('http://localhost:8000/habitacion/insert', habitacionData);
    return response.data;
  } catch (error) {
    throw new Error('Error al registrar habitación');
  }
};

const deleteHabitacion = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/habitacion/delete/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar habitación');
  }
};

const updateHabitacion = async (id, habitacionData) => {
  try {
    await axios.put(`http://localhost:8000/habitacion/update/${id}`, habitacionData);
  } catch (error) {
    throw new Error('Error al modificar habitación');
  }
};

const getHabitacionById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/habitacion/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener habitación por ID');
  }
};

const getHabitaciones = async () => {
  try {
    const response = await axios.get('http://localhost:8000/habitacion/listar');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener la lista de habitaciones');
  }
};

export { createHabitacion, deleteHabitacion, updateHabitacion, getHabitacionById, getHabitaciones };
