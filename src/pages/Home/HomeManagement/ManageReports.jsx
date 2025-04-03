import React, { useState } from 'react';
import axios from 'axios';

// Datos iniciales del formulario
const ManageReports = () => {
    const [reportData, setReportData] = useState({
        year: '',
        startMonth: '',
        endMonth: '',
        type: 'all',
        token: localStorage.getItem('authToken')
    });

    const [errors, setErrors] = useState({});

    // Manejador de cambios en los campos del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setReportData({
            ...reportData,
            [id]: value,
        });
    };

    // Función para manejar la validación y enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de los campos
        let formErrors = {};

        if (!reportData.year || reportData.year < 1900 || reportData.year > 9999) {
            formErrors.year = 'Por favor ingrese un año válido.';
        }

        if (!reportData.startMonth || reportData.startMonth < 1 || reportData.startMonth > 12) {
            formErrors.startMonth = 'El mes de inicio debe estar entre 1 y 12.';
        }

        if (!reportData.endMonth || reportData.endMonth < 1 || reportData.endMonth > 12) {
            formErrors.endMonth = 'El mes de fin debe estar entre 1 y 12.';
        }

        if (reportData.endMonth < reportData.startMonth) {
            formErrors.endMonth = 'El mes de fin no puede ser anterior al mes de inicio.';
        }

        if (Object.keys(formErrors).length === 0) {
            // Enviar datos a través de axios si no hay errores
            try {
                // Preparar datos en formato correcto para axios
                const response = await axios.post('http://192.168.1.9:8083/api/report/generateReport', reportData, {
                    responseType: 'blob', // Asegúrate de recibir el archivo en formato binario (PDF)
                });

                // Aquí agregarías la lógica para manejar la respuesta (por ejemplo, descargar el reporte)
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `reporte_${reportData.year}_${reportData.startMonth}_${reportData.endMonth}_${reportData.type}.pdf`;
                link.click(); // Simula un clic para iniciar la descarga
            } catch (error) {
                console.error('Error al generar el reporte', error);
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <>
            <div className="text-center">
                <h1>Reportes</h1>
                <p className="text-muted">Gestiona tus reportes personalizados</p>
            </div>

            <div className="bg-body-tertiary rounded px-2 py-3 mb-3">
                <div className="text-center">
                    <h3 className="mb-md-1">Generar Reporte Personalizado</h3>
                    <p className="text-muted d-none d-md-block">Selecciona los filtros para generar un reporte</p>
                    <hr />
                </div>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-md-4 my-2">
                                    <label htmlFor="year" className="form-label">Año</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="year"
                                        value={reportData.year}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.year && <div className="text-danger">{errors.year}</div>}
                                </div>
                                <div className="col-md-4 my-2">
                                    <label htmlFor="startMonth" className="form-label">Mes de Inicio</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="startMonth"
                                        value={reportData.startMonth}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.startMonth && <div className="text-danger">{errors.startMonth}</div>}
                                </div>
                                <div className="col-md-4 my-2">
                                    <label htmlFor="endMonth" className="form-label">Mes de Fin</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="endMonth"
                                        value={reportData.endMonth}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.endMonth && <div className="text-danger">{errors.endMonth}</div>}
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-12">
                                    <label htmlFor="reportCategory" className="form-label">Categoría</label>
                                    <select
                                        className="form-select"
                                        id="type"
                                        value={reportData.type}
                                        onChange={handleChange}
                                    >
                                        <option value="all">Todos</option>
                                        <option value="income">Ingresos</option>
                                        <option value="expense">Egresos</option>
                                        <option value="savings">Ahorros</option>
                                    </select>
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-success">
                                    <span>Generar Reporte</span>
                                    <i className="bi bi-file-earmark-pdf ms-2"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container-fluid rounded px-2 py-3 bg-body-tertiary">
                <div className="row align-items-center mb-2">
                    <div className="text-center">
                        <h3 className="mb-md-1">Previsualización del reporte</h3>
                        <hr />
                    </div>
                </div>

                <div className="card">
                    <div className="card-body text-center">
                        <p className="text-muted">Aquí se mostrará una previsualización del reporte solicitado por el cliente antes de la descarga.</p>
                        <button type="button" className="btn btn-primary">
                            <span>Descargar Reporte</span>
                            <i className="bi bi-download ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageReports;
