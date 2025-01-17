// src/api/userApi.js
import axios from 'axios';

// Configuración base para las solicitudes
const API_BASE_URL = 'http://192.168.1.2:8083/api/goals';

const token = localStorage.getItem('authToken');  // Obtiene el token del localStorage

export const getUserGoals = async () => {
    if (token) {
        try {
            const response = await axios.get(`${API_BASE_URL}/viewUserGoals`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data.data;
        } catch (error) {
            console.error('Error al obtener las metas del usuario:', error);
            return null;
        }
    } else {
        console.warn('No se encontró el token.');
        return null;
    }
};

export const newUserGoal = async (goalData) => {
    if (token) {
        try {
            const response = await axios.post(`${API_BASE_URL}/newGoal`, goalData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data.message;
        } catch (error) {
            console.error('Error al crear una nueva meta del usuario:', error);
            return null;
        }
    } else {
        return null;
    }
};

export const deleteUserGoal = async (id) => {
    if (token) {
        try {
            const response = await axios.delete(`${API_BASE_URL}/deleteGoal/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data.message;
        } catch (error) {
            console.error('Error al eliminar la meta del usuario:', error);
            return null;
        }
    } else {
        return null;
    }
};

export const updateUserGoal = async (eventData) => {
    if (token) {
        try {
            const response = await axios.put(`${API_BASE_URL}/updateGoal`, eventData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data.message;
        } catch (error) {
            console.error('Error al actualizar la meta del usuario:', error);
            return null; 
        }
    } else {
        return null;
    }
};