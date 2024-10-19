import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const getCSSVariable = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

const InitialSummary = () => {

    // Datos grafico ahorros mes en año
    const annualSavingsMonth = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ahorro Mensual',
                data: [300000, 400000, 500000, 350000, 800000, 550000],
                backgroundColor: getCSSVariable('--cyan-500'),
                borderWidth: 1
            }
        ]
    };

    const adjustBarChart = {
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

    return (
        <div>
            <div className="p-4 bg-body-tertiary rounded shadow-sm">
                <div className="row mb-3 d-flex">
                    {/** Tarjeta ahorro total */}
                    <div className="col-md-12 text-center">
                        <div className="card cyan-500 text-white mb-3">
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
                            <Bar data={annualSavingsMonth} options={adjustBarChart} />
                        </div>
                    </div>
                </div>

                {/** Alertas y Motivaciones */}
                <div className="alert alert-info" role="alert">
                    ¡Sigue así para alcanzar tus metas!
                </div>
            </div>
        </div>
    );

}

export default InitialSummary;