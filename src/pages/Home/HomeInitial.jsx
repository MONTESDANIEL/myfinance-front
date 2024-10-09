import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export const Initial = () => {

    // Datos del gráfico de desempeño anual
    const chartData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ingresos',
                data: [1200, 1900, 3000, 1123, 4234, 5345, 1567, 1678, 4788, 1900, 1324, 3223],
                backgroundColor: '#198754',
                borderColor: '#287e56',
                borderWidth: 1,
            },
            {
                label: 'Gastos',
                data: [123, 3343, 253, 563, 564, 756, 767, 567, 56, 879, 677, 89],
                backgroundColor: '#DC3545',
                borderColor: '#A7424C',
                borderWidth: 1,
            }
        ],
    };

    // Opciones del gráfico de desempeño anual
    const chartjsBar = {
        responsive: true, // Hacer que el gráfico se ajuste al tamaño del contenedor
        maintainAspectRatio: false, // Permitir que el gráfico cambie de proporción
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
        }
    };

    // Datos del gráfico de desempeño mensual
    const chartDataPie = {
        labels: ['Gastos del mes', 'Saldo Distponible', 'Ahorros del mes'],
        datasets: [
            {
                label: 'Dinero',
                data: [1000000, 500000, 400000], // Todos los datos en un solo conjunto
                backgroundColor: ['#DC3545', '#198754', '#0DCAF0'], // Colores para cada segmento
                borderColor: ['#A7424C', '#287e56', '#0E9DB9'], // Colores del borde para cada segmento
                borderWidth: 1,
            }
        ],
    };

    // Opciones del gráfico de desempeño mensual
    const chartjsPie = {
        responsive: true,
        maintainAspectRatio: false, // Cambiar a false para que sea responsivo
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribución mensual de dinero',
            },
        },
    };

    const savingsChartData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ahorro Mensual',
                data: [300000, 400000, 500000, 350000, 800000, 550000],
                backgroundColor: '#0DCAF0',
                borderColor: '#0E9DB9',
                borderWidth: 1
            }
        ]
    };

    return (
        <div className="container-fluid">
            <div className="container-fluid bg-dark-subtle rounded">
                <h2 className="text-center p-4">Desempeño Financiero</h2>
                <div className="row gx-4"> {/* Margen horizontal entre columnas */}
                    {/* Contenedor Anual */}
                    <div className="col-xl-6 col-lg-12 mb-4">
                        <div className="p-4 bg-body-tertiary rounded shadow-sm">
                            <h2 className="text-center mb-4">Anual</h2>
                            <div className="row mb-4 d-flex">
                                {/** Tarjeta total ingresos */}
                                <div className="col-md-6 text-center">
                                    <div className="card bg-success text-white mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title fs-6 d-flex justify-content-center">
                                                <i className="bi bi-cash me-2"></i>
                                                <span className="ms-1">Ingresos Totales</span>
                                            </h5>
                                            <p className="card-text">$10,200,000.00</p>
                                        </div>
                                    </div>
                                </div>
                                {/** Tarjeta total gastos */}
                                <div className="col-md-6 text-center">
                                    <div className="card bg-danger text-white mb-3 ">
                                        <div className="card-body">
                                            <h5 className="card-title fs-6 d-flex justify-content-center">
                                                <i className="bi bi-credit-card me-2"></i>
                                                <span className="ms-1">Gastos Totales</span>
                                            </h5>
                                            <p className="card-text">$8,000,000.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/** Gráfico de barras */}
                            <div className="card mb-3">
                                <div style={{ overflowX: 'auto' }}>
                                    <div
                                        className="card-body d-flex align-items-center justify-content-center"
                                        style={{ minWidth: '500px', height: '533px' }}
                                    >
                                        <Bar data={chartData} options={chartjsBar} />
                                    </div>
                                </div>
                            </div>

                            {/* Alertas y Notificaciones */}
                            <div className="alert alert-success" role="alert">
                                Felicidades por mantener tus finanzas en verde! <br />
                                Sigue asegurando tu futuro financiero.
                            </div>
                        </div>
                    </div>
                    {/* Contenedor Mensual */}
                    <div className="col-xl-6 col-lg-12 mb-4">
                        <div className="p-4 bg-body-tertiary rounded shadow-sm"> {/* Fondo interno uniforme */}
                            <h2 className="text-center mb-4">Mensual</h2>
                            <div className="row">
                                {/** Tarjeta total ingresos */}
                                <div className="col-md-12 text-center">
                                    <div className="card bg-primary text-white">
                                        <div className="card-body">
                                            <h5 className="card-title fs-6 d-flex justify-content-center">
                                                <i className="bi bi-cash me-2"></i>
                                                <span className="ms-1">Ingresos Octubre</span>
                                            </h5>
                                            <p className="card-text">$ 1,900,000.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='my-4' />
                            <div className="row mb-4 d-flex">
                                {/** Tarjeta total ingresos */}
                                <div className="col-md-4 text-center">
                                    <div className="card bg-success text-white mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title fs-6 d-flex justify-content-center">
                                                <i className="bi bi-cash me-2"></i>
                                                <span className="ms-1">Disponible</span>
                                            </h5>
                                            <p className="card-text">$ 500,000.00</p>
                                        </div>
                                    </div>
                                </div>
                                {/** Tarjeta total ahorro */}
                                <div className="col-md-4 text-center">
                                    <div className="card bg-info text-white mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title fs-6 d-flex justify-content-center">
                                                <i className="bi bi-piggy-bank me-2"></i>
                                                <span className="ms-1">Ahorro</span>
                                            </h5>
                                            <p className="card-text">$ 400,000.00</p>
                                        </div>
                                    </div>
                                </div>
                                {/** Tarjeta total gastos */}
                                <div className="col-md-4 text-center">
                                    <div className="card bg-danger text-white mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title fs-6 d-flex justify-content-center">
                                                <i className="bi bi-credit-card me-2"></i>
                                                <span className="ms-1">Gasto</span>
                                            </h5>
                                            <p className="card-text">$ 1,000,000.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/** Gráfico de pie */}
                            <div className="card mb-3">
                                <div className="card-body d-flex align-items-center justify-content-center" style={{ height: '400px', width: '100%' }}>
                                    <Pie data={chartDataPie} options={chartjsPie} />
                                </div>
                            </div>


                            {/* Alertas y Notificaciones */}
                            <div className="alert alert-danger" role="alert">
                                Tu balance esta en negativo! <br />
                                Considera realizar un plan para reevaluar gastos.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark-subtle p-3 mt-3 rounded">
                <h2 className="text-center p-3">Resumen de ahorro anual</h2>
                <div>
                    <div className="p-4 bg-body-tertiary rounded shadow-sm">
                        <div className="row mb-3 d-flex">
                            {/** Tarjeta ahorro total */}
                            <div className="col-md-12 text-center">
                                <div className="card bg-info text-white mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-6 d-flex justify-content-center">
                                            <i className="bi bi-piggy-bank me-2"></i>
                                            <span className="ms-1">Ahorro Total</span>
                                        </h5>
                                        <p className="card-text">$2,200,000.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/** Gráfico de Ahorro */}
                        <div className="card mb-3">
                            <div style={{ overflowX: 'auto' }}>
                                <div
                                    className="card-body d-flex align-items-center justify-content-center"
                                    style={{ minWidth: '500px', height: '400px' }}
                                >
                                    <Bar data={savingsChartData} options={chartjsBar} />
                                </div>
                            </div>
                        </div>

                        {/** Alertas y Motivaciones */}
                        <div className="alert alert-info" role="alert">
                            ¡Sigue así para alcanzar tus metas!
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};