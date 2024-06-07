import { useState } from 'react';

const usePatientData = () => {
  const [patientData, setPatientData] = useState({
    estado: '',
    nombres: '',
    apellidos: '',
    cedula: '',
    fecha_nacimiento: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatientData({ ...patientData, [name]: value });
  };

  return { patientData, handleChange };
};

export default usePatientData;
