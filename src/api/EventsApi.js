// src/api/userApi.js
import axios from "axios";

// Configuración base para las solicitudes
const API_BASE_URL = "http://192.168.1.9:8083/api/events";

const token = localStorage.getItem("authToken"); // Obtiene el token del localStorage

export const getUserEvents = async () => {
  if (token) {
    try {
      const response = await axios.get(`${API_BASE_URL}/viewUserEvents`, {
        headers: {
          Authorization: `Bearer ${token}`, // Envía el token en el encabezado Authorization
        },
      });
      return response.data.data; // Devuelve los movimientos del usuario
    } catch (error) {
      console.error("Error al obtener los eventos del usuario:", error);
      return null; // Retorna null si ocurre un error
    }
  } else {
    console.warn("No se encontró el token.");
    return null; // Retorna null si no hay token
  }
};

export const newUserEvent = async (eventData) => {
  if (token) {
    try {
      const response = await axios.post(`${API_BASE_URL}/newEvent`, eventData, {
        headers: {
          Authorization: `Bearer ${token}`, // Envía el token en el encabezado Authorization
        },
      });
      return response.data.message;
    } catch (error) {
      console.error("Error al crear un nuevo evento del usuario:", error);
      return null; // Retorna null si ocurre un error
    }
  } else {
    return null; // Retorna null si no hay token
  }
};

export const deleteUserEvent = async (id) => {
  if (token) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/deleteEvent/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Envía el token en el encabezado Authorization
        },
      });
      return response.data.message;
    } catch (error) {
      console.error("Error al eliminar el evento del usuario:", error);
      return null; // Retorna null si ocurre un error
    }
  } else {
    return null; // Retorna null si no hay token
  }
};

export const updateUserEvent = async (eventData) => {
  if (token) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/updateEvent`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Envía el token en el encabezado Authorization
          },
        }
      );
      return response.data.message;
    } catch (error) {
      console.error("Error al actualizar el evento del usuario:", error);
      return null; // Retorna null si ocurre un error
    }
  } else {
    return null; // Retorna null si no hay token
  }
};
