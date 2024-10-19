import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const ahorro = getComputedStyle(document.documentElement).getPropertyValue('--cyan-500');

const InitialSummary = () => {

    // Datos grafico ahorros mes en año
    const annualSavingsMonth = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ahorro Mensual',
                data: [300000, 400000, 500000, 350000, 800000, 550000],
                backgroundColor: ahorro,
                borderWidth: 1
            }
        ]
    };

    // Ajustes del grafico de barras
    const adjustBarChart = {
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
        scales: {
            x: {
                ticks: {
                    maxRotation: 90,
                    minRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
            },
        }
    };

    return (
        <div className="p-4 bg-body-tertiary rounded shadow-sm">
            {/** Tarjeta ahorro total */}
            <div className="col-md-12 text-center">
                <div
                    className="card text-white mb-3"
                    style={{ backgroundColor: ahorro }}>
                    <div className="card-body">
                        <h5 className="card-title fs-6 d-flex justify-content-center">
                            <i className="bi bi-piggy-bank me-2"></i>
                            <span className="ms-1">Ahorro Total</span>
                        </h5>
                        <p className="card-text">$2,200,000.00</p>
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
            <div className="alert alert-info mb-0" role="alert">
                ¡Sigue así para alcanzar tus metas!
            </div>
        </div>
    );

}

export default InitialSummary;