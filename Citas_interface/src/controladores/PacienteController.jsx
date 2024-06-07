import axios from 'axios';

const getPatients = async () => {
  try {
    const response = await axios.get('http://localhost:8000/pacientes/listar');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener la lista de pacientes');
  }
};

const createPatient = async (patientData) => {
  try {
    const response = await axios.post('http://localhost:8000/pacientes/insert', patientData);
    return response.data;
  } catch (error) {
    throw new Error('Error al registrar paciente');
  }
};

const deletePatient = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/pacientes/delete/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar paciente');
  }
};

const updatePatient = async (id, patientData) => {
  try {
    await axios.put(`http://localhost:8000/pacientes/update/${id}`, patientData);
  } catch (error) {
    throw new Error('Error al modificar paciente');
  }
};

const getPatientById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/pacientes/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener paciente por ID');
  }
};

export { getPatients, createPatient, deletePatient, updatePatient, getPatientById };
