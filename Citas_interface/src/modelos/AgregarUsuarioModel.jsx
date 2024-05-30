import { useState } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState({
    nombres: '',
    apellidos: '',
    fecha_nacimiento: '',
    cedula: '',
    email: '',
    password: '',
    sexo: '',
    roleid: 1, 
  });

  const handleChange = (event) => {
    const value = event.target.name === 'roleid' ? parseInt(event.target.value, 10) : event.target.value;
    setUserData({ ...userData, [event.target.name]: value });
  };

  return { userData, handleChange };
};

export default useUserData;
