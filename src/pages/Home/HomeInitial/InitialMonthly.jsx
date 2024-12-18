import { React, useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import CardInfo from '@components/CardInfo';
import { CardMovements } from './CardMovements';

import { useMovementPalette } from '@context/ColorContext';

import { realMovementsData as movementsData } from '@data/movementsData';
import { getUserData } from '@api/MovementsApi'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const processDailyMovements = (movements) => {

    // Obtener el mes y año actual
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Los meses en JavaScript empiezan desde 0
    const currentYear = currentDate.getFullYear();

    // Inicializar el objeto data con arrays vacíos para cada tipo de movimiento
    const data = {
        income: [],
        expense: [],
        savings: []
    };

    // Filtrar y procesar los movimientos
    movements.forEach(movement => {
        const movementDate = new Date(movement.date);
        const movementMonth = movementDate.getMonth() + 1;
        const movementYear = movementDate.getFullYear();

        // Filtrar por el mes y año actual
        if (movementMonth === currentMonth && movementYear === currentYear) {
            const amount = movement.movementType === 'egress' ? Math.abs(movement.amount) : movement.amount;

            if (movement.movementType === 'income') {
                data.income.push(amount);
            } else if (movement.movementType === 'savings') {
                data.savings.push(amount);
            } else if (movement.movementType === 'expense') {
                data.expense.push(amount);
            }
        }
    });

    return data;
};

// Llamada a la función con la data
const dataMonth = processDailyMovements(movementsData);

const PerformanceMonthly = () => {

    const [allUserMovements, setAllUserMovements] = useState(null);

    useEffect(() => {
        const fetchMovements = async () => {
            try {
                const data = await getUserData();  // Llama a la función para obtener los datos
                if (data) {
                    setAllUserMovements(data);  // Establece los movimientos en el estado
                } else {
                }
            } catch (error) {
            }
        };

        fetchMovements();  // Llama a la función cuando el componente se monta
    }, []);

    const { colors } = useMovementPalette();

    // Datos totales numericos para graficos
    const monthlyIncome = dataMonth.income.reduce((total, amount) => total + amount, 0);
    const monthlySavings = dataMonth.savings.reduce((total, amount) => total + amount, 0);
    const monthlyExpense = dataMonth.expense.reduce((total, amount) => total + amount, 0);
    const negativeBalance = (monthlyIncome - (monthlyExpense + monthlySavings)) < 0;
    const monthlyAvailable = (monthlyIncome - (monthlyExpense + monthlySavings));

    // Funcion para dar formato a las cantidades numericas
    const formatCurrency = (amount) => amount.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

    // Datos totales formateados para Texto
    const formatMonthlyIncome = formatCurrency(monthlyIncome)
    const formatMonthlySavings = formatCurrency(monthlySavings)
    const formatMonthlyExpense = formatCurrency(monthlyExpense)
    const formatMonthlyAvailable = formatCurrency(Math.abs(monthlyAvailable))

    // Datos configurados para el grafico de barras
    const monthlyPerformance = {
        labels: negativeBalance
            ? ['Ahorros', 'Egresos']
            : ['Disponible', 'Ahorros', 'Egresos'],
        datasets: [
            {
                label: 'Dinero',
                data: negativeBalance
                    ? [monthlySavings, monthlyExpense]
                    : [monthlyAvailable, monthlySavings, monthlyExpense],
                backgroundColor: negativeBalance
                    ? [colors.savings[1], colors.expense[1]]
                    : [colors.income[1], colors.savings[1], colors.expense[1]],
                borderColor: negativeBalance
                    ? [colors.savings[2], colors.expense[2]]
                    : [colors.income[2], colors.savings[2], colors.expense[2]],
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
                text: `Distribución mensual de dinero (Total ${negativeBalance ? 'gastado' : 'ingresos'} en el mes) `
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const data = tooltipItem.chart.data.datasets[0].data;
                        const total = data.reduce((a, b) => a + b, 0);
                        const value = tooltipItem.raw;
                        const percentage = (total === 0) ? 0 : ((value / total) * 100).toFixed(2); // Evitar división por cero
                        if (total < 0) {
                            // Si el total es negativo, ajustar la visualización
                            return `${tooltipItem.label}: -${Math.abs(percentage)}% (Balance negativo)`;
                        }
                        return `${tooltipItem.label}: ${percentage}%`;
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
        <div className="p-2 bg-body-tertiary rounded h-100 align-content-center"> {/* Fondo interno uniforme */}

            <h2 className="text-center mb-4">Mensual - {monthNames[new Date().getMonth()]}</h2>

            <div className="row">
                {/** Tarjeta total ingresos */}
                <div
                    className="col-md-12 text-center"
                    onClick={() => handleOpen('Ingresos')}
                    style={{ cursor: 'pointer' }}>
                    <CardInfo
                        title={`Ingresos`}
                        icon='bi bi-cash'
                        value={formatMonthlyIncome}
                        backgroundColor={colors.income[3]}
                    />
                </div>
            </div>

            <hr />

            <div className="row d-flex">

                {/** Tarjeta total Disponible */}
                <div className="col-md-4 my-2 text-center">
                    <CardInfo
                        title={(negativeBalance ? 'Desbalance' : 'Disponible')}
                        icon={(negativeBalance ? 'bi-graph-down-arrow' : 'bi-wallet2')}
                        value={formatMonthlyAvailable}
                        className={(negativeBalance ? 'bg-danger' : '')}
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

                {
                    negativeBalance && (
                        <div className="col-md-12">
                            <div className="alert alert-danger text-center">
                                <i className="bi bi-exclamation-diamond"></i>
                                <span className="ms-2">
                                    Has excedido tus ingresos mensuales.
                                </span>
                            </div>
                        </div>
                    )
                }

                <CardMovements
                    title={selectedTitle}
                    isOpen={isOpen}
                    onClose={handleClose}
                    month={new Date()}
                    showAll={selectedTitle === 'Todos'}
                />

            </div>

            <div className="card mb-3">
                <div className="card-body d-flex align-items-center justify-content-center" style={{ height: '450px', width: '100%' }}>
                    <Pie data={monthlyPerformance} options={adjustPieChart} />
                </div>
            </div>
        </div>
    )
}

export default PerformanceMonthly;