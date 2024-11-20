import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import CardInfo from '@components/CardInfo';
import { dataYear } from '@data/initialData.js'
import { CardMovements } from './CardMovements';

import { useMovementPalette } from '@context/ColorContext';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const InitialSummary = () => {

    const { colors } = useMovementPalette();

    if (!colors) {
        return <p>Cargando colores...</p>;
    }

    // Datos grafico ahorros mes en año
    const annualSavingsMonth = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Ahorro Mensual',
                data: dataYear.savings,
                backgroundColor: colors.savings[3],
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
    const annualSavingsTotal = dataYear.savings.reduce((total, amount) => total + amount, 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

    const [isOpen, setIsOpen] = useState(false); // Estado para saber si el CardMovements está abierto
    const [selectedTitle, setSelectedTitle] = useState(""); // Estado para almacenar el título de la tarjeta seleccionada

    const handleOpen = (title) => {
        setSelectedTitle(title); // Establecer el título de la tarjeta seleccionada
        setIsOpen(true); // Abrir el CardMovements
    };

    const handleClose = () => {
        setIsOpen(false); // Cerrar el CardMovements
        setSelectedTitle(""); // Limpiar el título
    };


    return (
        <div className="p-4 bg-body-tertiary rounded shadow-sm">
            {/** Tarjeta ahorro total */}
            <div
                className="col-md-12 text-center"
                onClick={() => handleOpen('Ahorro')}
                style={{ cursor: 'pointer' }}>
                <CardInfo
                    title='Ahorro Total'
                    icon='bi bi-piggy-bank'
                    value={annualSavingsTotal}
                    backgroundColor={colors.savings[3]}
                />
            </div>

            <CardMovements
                title={selectedTitle}
                isOpen={isOpen}
                onClose={handleClose}
                year={new Date()}
            />

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
        </div>
    );

}

export default InitialSummary;