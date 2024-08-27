import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export const Initial = () => {
    // Datos del gráfico
    const chartData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ingresos',
                data: [1200, 1900, 3000, 1123, 4234, 5345, 1567, 1678, 4788, 1900, 1324, 3223],
                backgroundColor: '#28a745',
                borderColor: '#218838',
                borderWidth: 1,
            },
            {
                label: 'Gastos',
                data: [123, 3343, 253, 563, 564, 756, 767, 567, 56, 879, 677, 89],
                backgroundColor: '#dc3545',
                borderColor: '#c82333 ',
                borderWidth: 1,
            }
        ],
    };
    const chartDataPie = {
        labels: ['Gastos', 'Ingresos', 'Saldo libre'],
        datasets: [
            {
                label: 'Dinero',
                data: [1800000, 1400000, 0], // Todos los datos en un solo conjunto
                backgroundColor: ['#dc3545', '#28a745', '#007bff'], // Colores para cada segmento
                borderColor: ['#c82333', '#218838', '#0056b3'], // Colores del borde para cada segmento
                borderWidth: 1,
            }
        ],
    };


    // Opciones del gráfico
    const chartjsBar = {
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

    const chartjsPie = {
        type: 'pie', // Cambia el tipo de gráfico aquí
        data: {
            labels: ['Ingresos', 'Gastos'],
            datasets: [{
                data: [300, 150], // Datos del gráfico
                backgroundColor: ['#FF6384', '#36A2EB'], // Colores de las secciones
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            }],
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribución mensual de dinero',
            },
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Gráfico de Ingresos y Gastos',
                },
            },
        },
    };

    return (
        <div className="container-fluid"> {/* Fondo del contenedor general */}
            <h2 className="text-center mb-4">Bienvenido, Daniel</h2>
            <div className="row gx-4"> {/* Margen horizontal entre columnas */}
                {/* Contenedor Anual */}
                <div className="col-lg-6 mb-4">
                    <div className="p-4 bg-body-tertiary rounded shadow-sm"> {/* Fondo interno uniforme */}
                        <h2 className="text-center mb-4">Anual</h2>
                        <div className="row mb-4 d-flex align-items-center justify-content-center">
                            <div className="col-md-4">
                                <div className="card bg-success text-white mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-6"><i className="bi bi-cash"></i> Ingresos Totales</h5>
                                        <p className="card-text">$1200</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-danger text-white mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-6"><i className="bi bi-credit-card"></i> Gastos Totales</h5>
                                        <p className="card-text">$800</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gráfico */}
                        <div className="card mb-3">
                            <div className="card-body d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                                <Bar data={chartData} options={chartjsBar} />
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
                <div className="col-lg-6 mb-4">
                    <div className="p-4 bg-body-tertiary rounded shadow-sm"> {/* Fondo interno uniforme */}
                        <h2 className="text-center mb-4">Mensual</h2>
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="card bg-success text-white mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-6"><i className="bi bi-cash"></i> Ingresos</h5>
                                        <p className="card-text">$1400000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-danger text-white mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-6"><i className="bi bi-credit-card"></i> Gastos</h5>
                                        <p className="card-text">$1800000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-primary text-white mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-6"><i className="bi bi-wallet2"></i> Saldo Actual</h5>
                                        <p className="card-text">$0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gráfico */}
                        <div className="card mb-3">
                            <div className="card-body d-flex align-items-center justify-content-center" style={{ maxHeight: '400px' }}>
                                <Pie data={chartDataPie} options={chartjsPie} />
                            </div>
                        </div>

                        {/* Alertas y Notificaciones */}
                        <div className="alert alert-danger" role="alert">
                            Tu balance esta en negativo!
                            Considera realizar un plan para reevaluar gastos.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};