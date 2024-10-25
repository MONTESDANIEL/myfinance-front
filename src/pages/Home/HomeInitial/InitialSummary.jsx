import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import CardInfo from '@components/CardInfo';
import { movementPalette as colors } from '@components/Colors';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// Se define el color de la grafica y la tarjeta
const ahorro = colors.savings[3];

const monthlyData = {
    income: [3200000, 3500000, 4000000, 3000000, 5000000, 4500000, 4700000, 4800000, 5200000, 4000000, 4300000, 4600000],
    savings: [15000000, 17000000, 18000000, 16000000, 19000000, 20000000],
    expense: [2800000, 3000000, 2500000, 3200000, 3100000, 3300000, 2900000, 3400000, 3600000, 3000000, 3100000, 3200000],
};

const InitialSummary = () => {

    // Datos grafico ahorros mes en año
    const annualSavingsMonth = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ahorro Mensual',
                data: monthlyData.savings,
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

    // Variable del total de los ahorros
    const annualSavingsTotal = monthlyData.savings.reduce((total, amount) => total + amount, 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

    return (
        <div className="p-4 bg-body-tertiary rounded shadow-sm">
            {/** Tarjeta ahorro total */}
            <div className="col-md-12 text-center">
                <CardInfo
                    title='Ahorro Total'
                    icon='bi bi-piggy-bank'
                    value={annualSavingsTotal}
                    backgroundColor={ahorro}
                />
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