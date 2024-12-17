// src/api/userApi.js
import axios from 'axios';

// Configuración base para las solicitudes
const API_BASE_URL = 'http://192.168.1.2:8081/api/auth';

export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, loginData);
        // Devuelve el token recibido del backend
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (registerData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, registerData);
        // Devuelve la respuesta del backend
        return response.data.message;
    } catch (error) {
        throw error;
    }
};

export const recoverPassword = async (email) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/password-recovery`, {
            params: { email }
        });
        return response.data.message;
    } catch (error) {
        throw error;
    }
};


export const logout = async () => {
    const token = localStorage.getItem('authToken');  // Obtiene el token del localStorage
    if (token) {
        try {
            const response = await axios.post(
                `${API_BASE_URL}/logout`,
                {}, // Cuerpo vacío, ya que no necesitas datos en el POST
                {
                    headers: {
                        'Authorization': token  // Envía el token en el encabezado Authorization
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error during logout:', error.response?.data || error.message);
            return null;  // Retorna null si ocurre un error
        }
    } else {
        console.log('No auth token found');
        return null;  // Retorna null si no hay token
    }
};

/**
 * Función para enviar la nueva contraseña al backend.
 * @param {string} token - Token de recuperación obtenido del correo.
 * @param {string} newPassword - Nueva contraseña.
 * @param {string} confirmPassword - Confirmación de la nueva contraseña.
 * @returns {Promise<string>} - Mensaje de éxito del backend.
 */
export const resetPassword = async (token, newPassword, confirmPassword) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/reset-password`, {
            token,
            newPassword,
            confirmPassword,
        });
        return response.data.message; // Devuelve el mensaje del backend
    } catch (error) {
        // Manejo de errores
        throw error.response?.data || 'Error al intentar cambiar la contraseña.';
    }
};



