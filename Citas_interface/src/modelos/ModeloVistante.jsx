import { useState } from 'react';

const useVisitanteData = () => {
  const [visitanteData, setVisitanteData] = useState({
    nombres: '',
    apellidos: '',
    edad: '',
    cedula: '',
    relacion_paciente: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVisitanteData({ ...visitanteData, [name]: value });
  };

  return { visitanteData, handleChange };
};

export default useVisitanteData;
