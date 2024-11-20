import { React, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import CardInfo from '@components/CardInfo';
import { dataMonth } from '@data/initialData.js'
import { CardMovements } from './CardMovements';

import { useMovementPalette } from '@context/ColorContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const PerformanceMonthly = () => {

    const { colors } = useMovementPalette();

    // Datos totales numericos para graficos
    const monthlyIncome = dataMonth.income.reduce((total, amount) => total + amount, 0);
    const monthlySavings = dataMonth.savings.reduce((total, amount) => total + amount, 0);
    const monthlyExpense = dataMonth.expense.reduce((total, amount) => total + amount, 0);


    // Funcion para dar formato a las cantidades numericas
    const formatCurrency = (amount) => amount.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

    // Datos totales formateados para Texto
    const formatMonthlyIncome = formatCurrency(monthlyIncome)
    const formatMonthlySavings = formatCurrency(monthlySavings)
    const formatMonthlyExpense = formatCurrency(monthlyExpense)
    const formatMonthlyTotalIncome = formatCurrency(monthlyIncome + monthlySavings + monthlyExpense)

    // Datos configurados para el grafico de barras
    const monthlyPerformance = {
        labels: ['Disponible', 'Ahorros', 'Egresos'],
        datasets: [
            {
                label: 'Dinero',
                data: [monthlyIncome, monthlySavings, monthlyExpense],
                backgroundColor: [
                    colors.income[1],
                    colors.savings[1],
                    colors.expense[1],
                ],
                borderColor: [
                    colors.income[2],
                    colors.savings[2],
                    colors.expense[2],
                ],
                borderWidth: 1,
            }
        ],
    };

    const adjustPieChart = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribución mensual de dinero',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const total = tooltipItem.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                        const value = tooltipItem.raw;
                        const percentage = ((value / total) * 100).toFixed(2);
                        return `${tooltipItem.label}: ${percentage}%`;  // Mostrar porcentaje en el tooltip
                    }
                }
            }
        }
    };


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

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];


    return (
        <div className="p-4 bg-body-tertiary rounded shadow-sm"> {/* Fondo interno uniforme */}

            <h2 className="text-center mb-4">Mensual</h2>

            <div className="row">
                {/** Tarjeta total ingresos */}
                <div
                    className="col-md-12 text-center"
                    onClick={() => handleOpen('Todos')}
                    style={{ cursor: 'pointer' }}>
                    <CardInfo
                        title={`Ingresos ${monthNames[new Date().getMonth()]}`}
                        icon='bi bi-cash'
                        value={formatMonthlyTotalIncome}
                        backgroundColor={colors.income[3]}
                    />
                </div>
            </div>

            <hr />

            <div className="row d-flex">

                {/** Tarjeta total ingresos */}
                <div
                    className="col-md-4 my-2 text-center"
                    onClick={() => handleOpen('Disponible')}
                    style={{ cursor: 'pointer' }}>
                    <CardInfo
                        title="Disponible"
                        icon="bi-cash"
                        value={formatMonthlyIncome}
                        backgroundColor={colors.income[1]}
                    />
                </div>

                {/** Tarjeta total ahorro */}
                <div
                    className="col-md-4 my-2 text-center cursor-pointer"
                    onClick={() => handleOpen('Ahorro')}
                    style={{ cursor: 'pointer' }}>
                    <CardInfo
                        title="Ahorro"
                        icon="bi-piggy-bank"
                        value={formatMonthlySavings}
                        backgroundColor={colors.savings[1]}
                    />
                </div>

                {/** Tarjeta total gastos */}
                <div
                    className="col-md-4 my-2 text-center cursor-pointer"
                    onClick={() => handleOpen('Egresos')}
                    style={{ cursor: 'pointer' }}>
                    <CardInfo
                        title="Egresos"
                        icon="bi-credit-card"
                        value={formatMonthlyExpense}
                        backgroundColor={colors.expense[1]}
                    />
                </div>

                <CardMovements
                    title={selectedTitle}
                    isOpen={isOpen}
                    onClose={handleClose}
                    month={new Date()}
                    showAll={selectedTitle === 'Todos'}
                />

            </div>

            <div className="card mb-3">
                <div className="card-body d-flex align-items-center justify-content-center" style={{ height: '400px', width: '100%' }}>
                    <Pie data={monthlyPerformance} options={adjustPieChart} />
                </div>
            </div>
        </div>
    )
}

export default PerformanceMonthly;