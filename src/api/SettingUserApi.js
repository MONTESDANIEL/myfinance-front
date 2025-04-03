// src/api/userApi.js
import axios from "axios";

// Configuración base para las solicitudes
const API_BASE_URL = "http://192.168.1.9:8084/api/settings";

const token = localStorage.getItem("authToken"); // Obtiene el token del localStorage

// EndPoints para los colores del usuario

export const getUserFavoriteColors = async () => {
  if (token) {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/viewUserFavoriteColors`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.error("Error al obtener los movimientos del usuario:", error);
      return null;
    }
  } else {
    console.warn("No se encontró el token.");
    return null;
  }
};

export const updateUserFavoriteColors = async (colorsData) => {
  if (token) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/updateFavoriteColors`,
        colorsData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.message;
    } catch (error) {
      console.error(
        "Error al obtener los movimientos realacionados a una meta: ",
        error
      );
      return null;
    }
  } else {
    console.warn("No se encontró el token.");
    return null;
  }
};

export const resetToDefaultColors = async () => {
  if (token) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/resetToDefaultColors`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.message;
    } catch (error) {
      console.error("Error deleting user movement:", error);
      return null; // Retorna null si ocurre un error
    }
  } else {
    return null; // Retorna null si no hay token
  }
};

// EndPoints para las preferencias del usuario

export const getUserSettings = async () => {
  if (token) {
    try {
      const response = await axios.get(`${API_BASE_URL}/viewUserSettings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Error al obtener los movimientos del usuario:", error);
      return null;
    }
  } else {
    console.warn("No se encontró el token.");
    return null;
  }
};

export const updateUserSettings = async (settingsData) => {
  if (token) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/updateUserSettings`,
        settingsData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.message;
    } catch (error) {
      console.error(
        "Error al obtener los movimientos realacionados a una meta: ",
        error
      );
      return null;
    }
  } else {
    console.warn("No se encontró el token.");
    return null;
  }
};

export const resetToDefaultSettings = async () => {
  if (token) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/resetToDefaultSettings`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.message;
    } catch (error) {
      console.error("Error deleting user movement:", error);
      return null; // Retorna null si ocurre un error
    }
  } else {
    return null; // Retorna null si no hay token
  }
};
