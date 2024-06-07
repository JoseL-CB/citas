import { useState } from 'react';

const useHabitacionData = () => {
  const [habitacionData, setHabitacionData] = useState({
    num_habitacion: '',
    tipo: '',
    estado: '',
    num_cama: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHabitacionData({ ...habitacionData, [name]: value });
  };

  return { habitacionData, handleChange };
};

export default useHabitacionData;
