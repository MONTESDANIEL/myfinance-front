import React from 'react';

export const ManageReports = () => {
    return (
        <div className="container p-3">
            <div className="p-3 bg-body-tertiary">
                <div className="text-center mb-3 text-ligth">
                    <h2>Reportes</h2>
                </div>
                <hr />
                <div className="container p-3">
                    <div className="card mb-4">
                        <div className="card-header">
                            Reportes Personalizados
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="reportStartDate" className="form-label">Fecha de Inicio</label>
                                    <input type="date" className="form-control" id="reportStartDate" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="reportEndDate" className="form-label">Fecha de Fin</label>
                                    <input type="date" className="form-control" id="reportEndDate" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="reportCategory" className="form-label">Categoría</label>
                                    <select className="form-select" id="reportCategory"  defaultValue="1">
                                        <option value="1">Ingresos</option>
                                        <option value="2">Gastos</option>
                                        <option value="3">Transferencias</option>
                                    </select>
                                </div>
                                <button type="button" className="btn btn-info">
                                    Generar y Descargar Reporte
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            Balance General
                        </div>
                        <div className="card-body">
                            <p>Estado financiero en tiempo real.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
