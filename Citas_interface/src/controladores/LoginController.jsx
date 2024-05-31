import axios from 'axios';

const login = async (credentials) => {
    try {
        const response = await axios.post('http://localhost:8000/PerfilUsuario/login', credentials);
        return response.data;
    } catch (error) {
        throw new Error('Error en la solicitud de inicio de sesión');
    }
};

export { login };
