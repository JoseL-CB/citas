import axios from 'axios';

export const login = async (credentials) => {
    try {
        console.log("Enviando credenciales:", credentials);  // Añadir log para depuración
        const response = await axios.post('http://localhost:8000/PerfilUsuario/login', credentials);
        const userData = response.data;

        if (userData.success) {
            // Guarda la información del usuario en localStorage
            localStorage.setItem('user', JSON.stringify(userData));
        }

        return userData;
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        throw error;
    }
};
