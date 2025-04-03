// src/api/userApi.js
import axios from "axios";

// Configuración base para las solicitudes
const API_BASE_URL = "http://192.168.1.9:8082/api/tag";

const token = localStorage.getItem("authToken"); // Obtiene el token del localStorage

export const getUserTags = async () => {
  if (token) {
    try {
      const response = await axios.get(`${API_BASE_URL}/viewUserTags`, {
        headers: {
          Authorization: `Bearer ${token}`, // Envía el token en el encabezado Authorization
        },
      });
      return response.data.data; // Devuelve los movimientos del usuario
    } catch (error) {
      console.error("Error al obtener las etiquetas del usuario:", error);
      return null; // Retorna null si ocurre un error
    }
  } else {
    console.warn("No se encontró el token.");
    return null; // Retorna null si no hay token
  }
};

export const newUserTag = async (tagData) => {
  if (token) {
    try {
      const response = await axios.post(`${API_BASE_URL}/newTag`, tagData, {
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

export const deleteUserTag = async (id) => {
  if (token) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/deleteTag/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Envía el token en el encabezado Authorization
        },
      });
      return response.data.message;
    } catch (error) {
      console.error("Error deleting user movement:", error);
      return null; // Retorna null si ocurre un error
    }
  } else {
    return null; // Retorna null si no hay token
  }
};

export const updateUserTag = async (tagData) => {
  if (token) {
    try {
      const response = await axios.put(`${API_BASE_URL}/updateTag`, tagData, {
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
