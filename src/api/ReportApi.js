// src/api/userApi.js
import axios from "axios";

// Configuración base para las solicitudes
const API_BASE_URL = "http://192.168.1.9:8083/api/report";

export const generateReport = async (reportData) => {
  try {
    // Realiza la solicitud POST y espera la respuesta con el archivo PDF
    const response = await axios.post(
      `${API_BASE_URL}/generateReport`,
      reportData,
      {
        responseType: "blob", // Esto es importante para recibir un archivo binario (PDF)
      }
    );

    const { year, startMonth, endMonth, type } = reportData; // Suponiendo que estos datos están en reportData
    const reportType =
      type === "income"
        ? "Ingresos"
        : type === "savings"
        ? "Ahorros"
        : type === "expense"
        ? "Egresos"
        : "Todos";
    const fileName = `reporte_${year}_${startMonth}_${endMonth}_${reportType}.pdf`;

    // Crear un enlace temporal para la descarga del archivo
    const blob = new Blob([response.data], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName; // Nombre con el que se descargará el archivo
    link.click(); // Simula un clic para iniciar la descarga

    return true; // O cualquier otra lógica si es necesario
  } catch (error) {
    console.error("Error al generar el reporte", error);
    throw error; // O maneja el error según lo necesites
  }
};
