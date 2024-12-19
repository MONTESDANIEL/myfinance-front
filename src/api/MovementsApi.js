// src/api/userApi.js
import axios from 'axios';

// Configuración base para las solicitudes
const API_BASE_URL = 'http://192.168.1.2:8082/api/movements';

const token = localStorage.getItem('authToken');  // Obtiene el token del localStorage

export const getUserMovements = async () => {
    if (token) {
        try {
            const response = await axios.get(`${API_BASE_URL}/viewUserMovements`, {
                headers: {
                    'Authorization': `Bearer ${token}`  // Envía el token en el encabezado Authorization
                }
            });
            return response.data.data;  // Devuelve los movimientos del usuario
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
            return null;  // Retorna null si ocurre un error
        }
    } else {
        console.warn('No se encontró el token.');
        return null;  // Retorna null si no hay token
    }
};

export const newUserMovement = async (movementData) => {
    if (token) {
        try {
            const response = await axios.post(`${API_BASE_URL}/newMovement`, movementData, {
                headers: {
                    'Authorization': `Bearer ${token}`  // Envía el token en el encabezado Authorization
                }
            });
            return response.data.message;
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;  // Retorna null si ocurre un error
        }
    } else {
        return null;  // Retorna null si no hay token
    }
};

export const deleteUserMovement = async (id) => {
    if (token) {
        try {
            const response = await axios.delete(`${API_BASE_URL}/deleteMovement/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`  // Envía el token en el encabezado Authorization
                }
            });
            return response.data.message;
        } catch (error) {
            console.error('Error deleting user movement:', error);
            return null;  // Retorna null si ocurre un error
        }
    } else {
        return null;  // Retorna null si no hay token
    }
};

export const updateUserMovement = async (movementData) => {
    if (token) {
        try {
            const response = await axios.post(`${API_BASE_URL}/newMovement`, movementData, {
                headers: {
                    'Authorization': `Bearer ${token}`  // Envía el token en el encabezado Authorization
                }
            });
            return response.data.message;
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;  // Retorna null si ocurre un error
        }
    } else {
        return null;  // Retorna null si no hay token
    }
};