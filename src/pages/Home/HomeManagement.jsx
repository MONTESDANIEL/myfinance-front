export const HomeManagement = () => {
    return (
        <div className="container">
            <div className="p-3 bg-body-tertiary">
                <div className="text-center mb-3 text-success">
                    <h2>Gestión de Finanzas</h2>
                </div>
                <form>
                    <hr />
                    <div className="mb-3">
                        <h4 className="p-3">Transacciones</h4>
                        <div className="mb-3 mx-2">
                            <label htmlFor="income" className="form-label">Ingresos</label>
                            <input type="text" className="form-control" id="income" placeholder="Registro y clasificación de ingresos" />
                        </div>
                        <div className="mb-3 mx-2">
                            <label htmlFor="expenses" className="form-label">Gastos</label>
                            <input type="text" className="form-control" id="expenses" placeholder="Registro y clasificación de gastos" />
                        </div>
                        <div className="mb-3 mx-2">
                            <label htmlFor="transfers" className="form-label">Transferencias</label>
                            <input type="text" className="form-control" id="transfers" placeholder="Registro de transferencias entre cuentas" />
                        </div>
                    </div>
                    <hr />
                    <div className="mb-3">
                        <h4 className="p-3">Planificación Financiera</h4>
                        <div className="mb-3 mx-2">
                            <label htmlFor="monthlyBudget" className="form-label">Presupuestos Mensuales</label>
                            <input type="text" className="form-control" id="monthlyBudget" placeholder="Configuración y seguimiento de presupuestos" />
                        </div>
                        <div className="mb-3 mx-2">
                            <label htmlFor="alerts" className="form-label">Alertas y Notificaciones</label>
                            <input type="text" className="form-control" id="alerts" placeholder="Avisos sobre el estado de los presupuestos" />
                        </div>
                        <div className="mb-3 mx-2">
                            <label htmlFor="budgetSimulator" className="form-label">Simulador de Presupuestos</label>
                            <input type="text" className="form-control" id="budgetSimulator" placeholder="Evaluación de diferentes escenarios presupuestarios" />
                        </div>
                    </div>
                    <hr />
                    <div className="mb-3">
                        <h4 className="p-3">Reportes y Análisis</h4>
                        <div className="mb-3 mx-2">
                            <label htmlFor="chartsTables" className="form-label">Gráficos y Tablas</label>
                            <input type="text" className="form-control" id="chartsTables" placeholder="Visualización de datos financieros" />
                        </div>
                        <div className="mb-3 mx-2">
                            <label htmlFor="customReports" className="form-label">Reportes Personalizados</label>
                            <input type="text" className="form-control" id="customReports" placeholder="Generación de reportes por fechas y categorías" />
                        </div>
                        <div className="mb-3 mx-2">
                            <label htmlFor="balance" className="form-label">Balance General</label>
                            <input type="text" className="form-control" id="balance" placeholder="Estado financiero en tiempo real" />
                        </div>
                    </div>
                    <hr />
                    <div className="mb-3">
                        <h4 className="p-3">Control de Deudas</h4>
                        <div className="mb-3 mx-2">
                            <label htmlFor="debtRecords" className="form-label">Registro de Deudas</label>
                            <input type="text" className="form-control" id="debtRecords" placeholder="Seguimiento de deudas" />
                        </div>
                        <div className="mb-3 mx-2">
                            <label htmlFor="paymentPlan" className="form-label">Plan de Pago</label>
                            <input type="text" className="form-control" id="paymentPlan" placeholder="Herramientas para gestionar el pago de deudas" />
                        </div>
                    </div>
                    <div className="m-3 d-flex justify-content-end">
                        <button type="button" className="btn btn-warning ms-2"><i className="bi bi-pencil-square"> Editar</i></button>
                        <button type="button" className="btn btn-primary ms-2"><i className="bi bi-save"> Guardar</i></button>
                    </div>
                </form>
            </div>
            {/* Acceso Rápido */}
            <div>
                <h2 className="text-center mb-4">Acceso Rápido</h2>
                <div className="row mb-4">
                    {/* Registrar Ingreso/Gasto */}
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-header">
                                Registrar Ingreso/Gasto
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">Monto</label>
                                        <input type="number" className="form-control" id="amount" placeholder="Ingrese el monto" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Descripción</label>
                                        <input type="text" className="form-control" id="description" placeholder="Ingrese una descripción" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="type" className="form-label">Tipo</label>
                                        <select className="form-select" id="type">
                                            <option value="income">Ingreso</option>
                                            <option value="expense">Gasto</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary"><i className="bi bi-plus-circle"> Registrar</i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Ver Transacciones */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-header">
                                Ver Transacciones
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Fecha</th>
                                                <th>Descripción</th>
                                                <th>Monto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2024-08-22</td>
                                                <td>Pago de Alquiler</td>
                                                <td>$500</td>
                                            </tr>
                                            {/* Más filas aquí */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}