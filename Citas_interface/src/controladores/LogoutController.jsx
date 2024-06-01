import axios from 'axios';

export const logout = async () => {
    try {
        const response = await axios.post('http://localhost:8000/PerfilUsuario/logout', {
            // Puedes incluir cualquier dato adicional necesario, como el token de autenticación
        });
        return response.data;
    } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
        throw error;
    }
};
