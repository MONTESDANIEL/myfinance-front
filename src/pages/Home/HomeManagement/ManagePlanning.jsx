export const ManagePlanning = () => {
    return (
        <div className="container p-3">
            <div className="p-3 bg-body-tertiary">
                <div className="text-center mb-3 text-ligth">
                    <h2>Planificación financiera</h2>
                </div>
                <hr />
                <div className="container p-3">
                    <div className="card mb-4">
                        <div className="card-header">
                            Configuración de Presupuestos
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="presupuesto" className="form-label">Nombre del Presupuesto</label>
                                    <input type="text" className="form-control" id="presupuesto" placeholder="Ej. Presupuesto Mensual de Agosto" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="montoPresupuesto" className="form-label">Monto del Presupuesto</label>
                                    <input type="number" className="form-control" id="montoPresupuesto" placeholder="Ej. 2000" />
                                </div>
                                <button type="submit" className="btn btn-primary">Guardar Presupuesto</button>
                            </form>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            Seguimiento de Presupuestos
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Monto</th>
                                        <th scope="col">Gasto Actual</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Presupuesto Mensual de Agosto</td>
                                        <td>$2000</td>
                                        <td>$1500</td>
                                        <td><span className="badge bg-warning">75% Utilizado</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            Alertas y Notificaciones
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-warning">¡Atención! El presupuesto de Agosto ha alcanzado el 75% de su límite.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            Simulador de Presupuestos
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="simulationAmount" className="form-label">Monto Simulado</label>
                                    <input type="number" className="form-control" id="simulationAmount" placeholder="Ej. 500" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="simulationScenario" className="form-label">Escenario</label>
                                    <select className="form-select" id="simulationScenario" defaultValue="1">
                                        <option value="1">Aumento de Gasto</option>
                                        <option value="2">Reducción de Ingresos</option>
                                        <option value="3">Inversión Extra</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-info">Simular Presupuesto</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}