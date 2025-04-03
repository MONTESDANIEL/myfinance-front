// src/api/userApi.js
import axios from "axios";

// Configuración base para las solicitudes
const API_BASE_URL = "http://192.168.1.9:8081/api/users";

const token = localStorage.getItem("authToken"); // Obtiene el token del localStorage

export const getUserData = async () => {
  if (token) {
    try {
      const response = await axios.get(`${API_BASE_URL}/view`, {
        headers: {
          Authorization: `Bearer ${token}`, // Envía el token en el encabezado Authorization
        },
      });
      return response.data.data; // Devuelve todos los datos del usuario (id, username, etc.)
    } catch (error) {
      return null; // Retorna null si ocurre un error
    }
  } else {
    return null; // Retorna null si no hay token
  }
};

export const updateUserData = async (userData) => {
  if (token) {
    try {
      const response = await axios.put(`${API_BASE_URL}/update`, userData, {
        headers: {
          Authorization: `Bearer ${token}`, // Envía el token en el encabezado Authorization
        },
      });
      return response.data.message;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null; // Retorna null si ocurre un error
    }
  } else {
    return null; // Retorna null si no hay token
  }
};
