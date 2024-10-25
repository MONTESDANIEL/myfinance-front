import React, { useState } from 'react';
import { movementPalette, goalsPalette } from '@components/Colors';
import FloatWindow from '@components/FloatWindow'


const financialGoalsData = [
    {
        "id": 1,
        "title": "Ahorro para diciembre",
        "targetAmount": 5000,
        "savedAmount": 2500,
        "lastDeposit": "500 el 1 de octubre",
        "weeklyGoal": 300,
        "progress": 50,
        "color": "indigo",
        "depositHistory": [
            "Deposito de $500 el 1 de octubre",
            "Deposito de $300 el 15 de septiembre",
            "Deposito de $200 el 1 de septiembre"
        ]
    },
    {
        "id": 2,
        "title": "No gastar más de $500 en entretenimiento",
        "targetAmount": 500,
        "currentSpending": 300,
        "lastExpense": "Cena en restaurante ($50)",
        "remainingBudget": 200,
        "progress": 70,
        "color": "blue",
        "recentExpenses": [
            "Cine: $15",
            "Salidas a comer: $100",
            "Suscripción a plataforma de streaming: $15"
        ]
    },
    {
        "id": 3,
        "title": "No gastar más de $500 en entretenimiento",
        "targetAmount": 500,
        "currentSpending": 300,
        "lastExpense": "Cena en restaurante ($50)",
        "remainingBudget": 200,
        "progress": 30,
        "color": "red",
        "recentExpenses": [
            "Cine: $15",
            "Salidas a comer: $100",
            "Suscripción a plataforma de streaming: $15"
        ]
    },
    {
        "id": 4,
        "title": "Comprar una moto",
        "targetAmount": 600,
        "currentSpending": 100,
        "lastExpense": "Cena en restaurante ($50)",
        "remainingBudget": 200,
        "progress": 100,
        "color": "yellow",
        "recentExpenses": [
            "Cine: $15",
            "Salidas a comer: $100",
            "Suscripción a plataforma de streaming: $15"
        ]
    }
];

const PlanningGoals = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState(null);

    const handleShowDetails = (goal) => {
        setSelectedGoal(goal);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedGoal(null);
    };

    return (
        <div className="row justify-content-center p-3">
            {financialGoalsData.map((goal) => (
                <div className="col-lg-6 p-2" key={goal.id}>
                    <div className="card bg-dark-subtle">
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className='my-2'>{goal.title}: ${goal.targetAmount}</h5>
                            </div>
                            <div className="progress my-3">
                                <div
                                    className="progress-bar text-black"
                                    role="progressbar"
                                    style={{ width: `${goal.progress}%`, backgroundColor: goalsPalette[goal.color] }}
                                    aria-valuenow={goal.progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    {goal.progress}%
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => handleShowDetails(goal)}
                            >
                                <i className="bi bi-info-circle"><span className="ms-2">Detalles</span></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {selectedGoal && (
                <FloatWindow isOpen={isOpen} onClose={handleClose} title={selectedGoal.title}>
                    <div>
                        <div className='row justify-content-center p-3'>
                            <div
                                className='card col-lg-5 m-1 p-1 text-center justify-content-center'
                                style={{ backgroundColor: movementPalette.income[2] }}>
                                <h6 className='m-3'>Cantidad Objetivo: ${selectedGoal.targetAmount}</h6>
                            </div>

                            {selectedGoal.savedAmount !== undefined && (
                                <div
                                    className='card col-lg-5 m-1 p-1 text-center justify-content-center'
                                    style={{ backgroundColor: movementPalette.savings[2] }}>
                                    <h6 className='m-3'>Cantidad Ahorrada: ${selectedGoal.savedAmount}</h6>
                                </div>
                            )}
                        </div>

                        <div className='card p-3'>
                            <div className='m-2'>
                                {selectedGoal.currentSpending !== undefined && (
                                    <h6>Gasto Actual: ${selectedGoal.currentSpending}</h6>
                                )}
                                {selectedGoal.remainingBudget !== undefined && (
                                    <h6>Presupuesto Restante: ${selectedGoal.remainingBudget}</h6>
                                )}
                                {selectedGoal.lastDeposit && (
                                    <h6>Último Depósito: {selectedGoal.lastDeposit}</h6>
                                )}
                                {selectedGoal.lastExpense && (
                                    <h6>Último Gasto: {selectedGoal.lastExpense}</h6>
                                )}
                            </div>
                            <div className="m-2 my-3">
                                {/* Barra de progreso */}
                                <h6>Progreso:</h6>
                                <div style={{ position: 'relative', width: '100%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
                                    <div
                                        style={{
                                            width: `${selectedGoal.progress}%`,
                                            height: '100%',
                                            backgroundColor: goalsPalette[selectedGoal.color],
                                            borderRadius: '5px',
                                            transition: 'width 0.5s ease-in-out',
                                        }}
                                    ></div>
                                    <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', color: 'black' }}>
                                        {selectedGoal.progress}%
                                    </span>
                                </div>
                            </div>

                            <div className="m-2">
                                {selectedGoal.depositHistory && (
                                    <>
                                        <h6>Historial de Depósitos:</h6>
                                        <ul className='mb-0'>
                                            {selectedGoal.depositHistory.map((deposit, index) => (
                                                <li key={index}>{deposit}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                {selectedGoal.recentExpenses && (
                                    <>
                                        <h6>Gastos Recientes:</h6>
                                        <ul className='mb-0'>
                                            {selectedGoal.recentExpenses.map((expense, index) => (
                                                <li key={index}>{expense}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </FloatWindow>
            )}

        </div>
    );
};

export default PlanningGoals;