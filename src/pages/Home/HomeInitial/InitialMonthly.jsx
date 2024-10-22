import { React } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import CardInfo from '@components/CardInfo';
import colors from '@components/Colors';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const monthlyData = {
    income: [32000, 35000, 40000, 30000, 50000, 45000, 47000, 48000, 52000, 40000, 43000, 46000],
    savings: [15000, 10000, 18000, 16000, 19000, 20000],
    expense: [28000, 30000, 25000, 30000, 31000, 33000, 29000, 34000, 36000, 30000, 31000, 32000],
};


const PerformanceMonthly = () => {

    // Datos totales numericos para graficos
    const monthlyIncome = monthlyData.income.reduce((total, amount) => total + amount, 0);
    const monthlySavings = monthlyData.savings.reduce((total, amount) => total + amount, 0);
    const monthlyExpense = monthlyData.expense.reduce((total, amount) => total + amount, 0);


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

    // Opciones del gráfico de desempeño mensual
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
        },
    };

    return (
        <div className="p-4 bg-body-tertiary rounded shadow-sm"> {/* Fondo interno uniforme */}

            <h2 className="text-center mb-4">Mensual</h2>

            <div className="row">
                {/** Tarjeta total ingresos */}
                <div className="col-md-12 text-center">
                    <CardInfo
                        title='Ingresos Octubre'
                        icon='bi bi-cash'
                        value={formatMonthlyTotalIncome}
                        backgroundColor={colors.income[3]}
                    />
                </div>
            </div>

            <hr />

            <div className="row d-flex">

                {/** Tarjeta total ingresos */}
                <div className="col-md-4 my-2 text-center">
                    <CardInfo
                        title="Disponible"
                        icon="bi-cash"
                        value={formatMonthlyIncome}
                        backgroundColor={colors.income[1]}
                    />
                </div>

                {/** Tarjeta total ahorro */}
                <div className="col-md-4 my-2 text-center">
                    <CardInfo
                        title="Ahorro"
                        icon="bi-piggy-bank"
                        value={formatMonthlySavings}
                        backgroundColor={colors.savings[1]}
                    />
                </div>

                {/** Tarjeta total gastos */}
                <div className="col-md-4 my-2 text-center">
                    <CardInfo
                        title="Egresos"
                        icon="bi-credit-card"
                        value={formatMonthlyExpense}
                        backgroundColor={colors.expense[1]}
                    />
                </div>

            </div>

            <div className="card mb-3">
                <div className="card-body d-flex align-items-center justify-content-center" style={{ height: '400px', width: '100%' }}>
                    <Pie data={monthlyPerformance} options={adjustPieChart} />
                </div>
            </div>

            {/* Alertas y Notificaciones */}
            <div className="alert alert-danger mb-0" role="alert">
                Tu balance esta en negativo! <br />
                Considera realizar un plan para reevaluar gastos.
            </div>

        </div>
    )
}

export default PerformanceMonthly;