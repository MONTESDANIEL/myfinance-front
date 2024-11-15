import { React, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import CardInfo from '@components/CardInfo';
import { dataYear } from '@data/initialData.js'

import { useMovementPalette } from '../../../context/ColorContext';


// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);


const calculateData = (dataArray, groups) =>
    groups.map(group => group.reduce((sum, idx) => sum + dataArray[idx], 0));

const PerformanceType = () => {

    const { colors } = useMovementPalette();

    if (!colors) {
        return <p>Cargando colores...</p>;
    }

    // Estado para manejar el tipo de reporte seleccionado
    const [reportType, setReportType] = useState('anual');

    // Ajustar los datos segun el tipo de grafico solicitado
    const getReportData = () => {
        switch (reportType) {
            case 'bimestral':
                const bimestralGroups = [
                    [0, 1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11]
                ];
                return {
                    labels: ['Enero-Febrero', 'Marzo-Abril', 'Mayo-Junio', 'Julio-Agosto', 'Septiembre-Octubre', 'Noviembre-Diciembre'],
                    datasets: [
                        {
                            label: 'Ingresos',
                            data: calculateData(dataYear.income, bimestralGroups),
                            backgroundColor: colors.income[1],
                            borderColor: colors.income[2],
                            borderWidth: 1,
                        },
                        {
                            label: 'Egresos',
                            data: calculateData(dataYear.expense, bimestralGroups),
                            backgroundColor: colors.expense[1],
                            borderColor: colors.expense[2],
                            borderWidth: 1,
                        }
                    ],
                };
            case 'trimestral':
                const trimestralGroups = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]
                ];
                return {
                    labels: ['Enero-Marzo', 'Abril-Junio', 'Julio-Septiembre', 'Octubre-Diciembre'],
                    datasets: [
                        {
                            label: 'Ingresos',
                            data: calculateData(dataYear.income, trimestralGroups),
                            backgroundColor: colors.income[1],
                            borderColor: colors.income[2],
                            borderWidth: 1,
                        },
                        {
                            label: 'Egresos',
                            data: calculateData(dataYear.expense, trimestralGroups),
                            backgroundColor: colors.expense[1],
                            borderColor: colors.expense[2],
                            borderWidth: 1,
                        }
                    ],
                };
            case 'semestral':
                return {
                    labels: ['Enero-Junio', 'Julio-Diciembre'],
                    datasets: [
                        {
                            label: 'Ingresos',
                            data: calculateData(dataYear.income, [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]]),
                            backgroundColor: colors.income[1],
                            borderColor: colors.income[2],
                            borderWidth: 1,
                        },
                        {
                            label: 'Egresos',
                            data: calculateData(dataYear.expense, [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]]),
                            backgroundColor: colors.expense[1],
                            borderColor: colors.expense[2],
                            borderWidth: 1,
                        }
                    ],
                };
            case 'anual':
            default:
                return {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    datasets: [
                        {
                            label: 'Ingresos',
                            data: dataYear.income,
                            backgroundColor: colors.income[1],
                            borderColor: colors.income[2],
                            borderWidth: 1,
                        },
                        {
                            label: 'Egresos',
                            data: dataYear.expense,
                            backgroundColor: colors.expense[1],
                            borderColor: colors.expense[2],
                            borderWidth: 1,
                        }
                    ],
                };
        }
    };

    // Opciones del grafico de barras
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

    // Constante que controla y solicita los datos
    const dataPerformance = getReportData();


    const annualIncome = dataYear.income.reduce((total, amount) => total + amount, 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    const annualExpense = dataYear.expense.reduce((total, amount) => total + amount, 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

    return (
        <div className="p-4 bg-body-tertiary rounded shadow-sm">

            <h2 className="text-center mb-4">Finanzas - {reportType.charAt(0).toUpperCase() + reportType.slice(1)}</h2>

            <div className="row mb-4 d-flex">
                {/* Tarjeta total ingresos */}
                <div className="col-md-6 text-center">
                    <CardInfo
                        title='Ingresos Totales'
                        icon='bi bi-cash'
                        value={annualIncome}
                        backgroundColor={colors.income[1]}
                    />
                </div>
                {/* Tarjeta total gastos */}
                <div className="col-md-6 text-center">
                    <CardInfo
                        title='Egresos Totales'
                        icon='bi bi-credit-card'
                        value={annualExpense}
                        backgroundColor={colors.expense[1]}
                    />
                </div>
            </div>

            {/* Gráfico de barras */}
            <div className="card mb-3">
                <div style={{ overflowX: 'auto' }}>
                    <div
                        className="card-body d-flex align-items-center justify-content-center"
                        style={{ minWidth: '500px', height: '455px' }}
                    >
                        <Bar data={dataPerformance} options={adjustBarChart} />
                    </div>
                </div>
                {/* Botones para seleccionar el tipo de reporte */}
                <div className="row justify-content-center m-3">
                    {['anual', 'bimestral', 'trimestral', 'semestral'].map(type => (

                        <div className='col-md-3' key={type}>
                            <button
                                className={`btn btn-sm ${type === reportType ? 'btn-secondary' : 'btn-outline-secondary'} m-1 w-100`}
                                onClick={() => setReportType(type)}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Alertas y Notificaciones */}
            <div className="alert alert-success mb-0" role="alert">
                Felicidades por mantener tus finanzas en verde! <br />
                Sigue asegurando tu futuro financiero.
            </div>

        </div>
    )
}

export default PerformanceType;