import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Initial = () => {
    // Datos del gráfico
    const chartData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ingresos',
                data: [1200, 1900, 3000, 1123, 4234, 5345, 1567, 1678, 4788, 1900, 1324, 3223],
                backgroundColor: '#a6ff93',
                borderColor: '#71e558',
                borderWidth: 1,
            },
            {
                label: 'Gastos',
                data: [123, 3343, 253, 563, 564, 756, 767, 567, 56, 879, 677, 89],
                backgroundColor: '#ee8a8a',
                borderColor: '#d34e4e ',
                borderWidth: 1,
            }
        ],
    };

    // Opciones del gráfico
    const chartOptions = {
        responsive: true, // Hacer que el gráfico se ajuste al tamaño del contenedor
        maintainAspectRatio: false, // Permite que el gráfico se ajuste al tamaño del contenedor
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico de Ingresos y Gastos',
            },
        },
        scales: {
            x: {
                ticks: {
                    // Ajusta la rotación de las etiquetas en el eje X
                    // Agrega la rotación vertical
                    maxRotation: 90,
                    minRotation: 90,
                },
                // Ajusta el padding para evitar el solapamiento
                grid: {
                    display: false, // Opcional: Oculta las líneas de la cuadrícula
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="container-fluid mt-4 bg-body-tertiary p-3">
            {/* Dashboard Personalizado */}
            <div className="mb-4">
                <h2 className="text-center mb-4">Bienvenido</h2>
                <div className="row mb-4">
                    {/* Resumen de Finanzas */}
                    <div className="col-md-4">
                        <div className="card bg-success text-white mb-3">
                            <div className="card-body">
                                <h5 className="card-title"><i className="bi bi-cash"> Ingresos</i></h5>
                                <p className="card-text">$1200</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-danger text-white mb-3">
                            <div className="card-body">
                                <h5 className="card-title"><i className="bi bi-credit-card"> Gastos</i></h5>
                                <p className="card-text">$800</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-primary text-white mb-3">
                            <div className="card-body">
                                <h5 className="card-title"><i className="bi bi-wallet2"> Saldo Actual</i></h5>
                                <p className="card-text">$400</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    {/* Gráfico */}
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body" style={{ minHeight: '400px' }}>
                                <Bar data={chartData} options={chartOptions} />
                            </div>
                        </div>
                    </div>
                    {/* Tabla */}
                    <div className="col-md-6" >
                        <div className="card mb-3" style={{ minHeight: '400px' }}>
                            <div className="card-header">
                                Últimas Transacciones
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
                                                <td>Compra en Supermercado</td>
                                                <td>$50</td>
                                            </tr>
                                            {/* Más filas aquí */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alertas y Notificaciones */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-warning" role="alert">
                            Presupuesto casi agotado para este mes.
                        </div>
                    </div>
                </div>
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
    );
};