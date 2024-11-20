import React from 'react';

// Datos del form para generar el reporte
const report = {
    start: new Date(2024, 9, 10),
    finish: new Date(2024, 10, 20),
    categoria: "Gastos"
}

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-CO', options);
}

const ManageReports = () => {
    return (
        <>
            <div className="text-center">
                <h1>Reportes</h1>
                <p className="text-muted text-center">Gestiona tus reportes personalizados</p>
            </div>

            <div className="bg-body-tertiary rounded px-2 py-3 mb-3">
                <div className="text-center">
                    <h3 className="mb-md-1">Generar Reporte Personalizado</h3>
                    <p className="text-muted d-none d-md-block">Selecciona los filtros para generar un reporte</p>
                    <hr />
                </div>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="reportStartDate" className="form-label">Fecha de Inicio</label>
                                    <input type="date" className="form-control" id="reportStartDate" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="reportEndDate" className="form-label">Fecha de Fin</label>
                                    <input type="date" className="form-control" id="reportEndDate" />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-12">
                                    <label htmlFor="reportCategory" className="form-label">Categoría</label>
                                    <select className="form-select" id="reportCategory" defaultValue="1">
                                        <option value="1">Ingresos</option>
                                        <option value="2">Gastos</option>
                                        <option value="3">Movimientos</option>
                                    </select>
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="button" className="btn btn-success">
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
                        <p className="text-muted d-none d-md-block">Reporte de {report.categoria} realizados entre {formatDate(report.start)} y {formatDate(report.finish)}</p>
                        <hr />
                    </div>
                </div>

                <div className="card">
                    <div className="card-body text-center">
                        <p className="text-muted">Aqui se mostrara una previsualización del reporte solicitado por el cliente antes de la descarga.</p>
                        <button type="button" className="btn btn-primary">
                            <span>Descargar Reporte</span>
                            <i className="bi bi-download ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageReports;
