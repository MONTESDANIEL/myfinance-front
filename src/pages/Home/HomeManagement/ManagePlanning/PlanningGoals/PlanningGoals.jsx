import React, { useState } from 'react';
import { movementPalette, goalsPalette } from '@components/Colors';
import FloatWindow from '@components/FloatWindow';

const financialGoalsData = [
    {
        "id": 1,
        "title": "No gastar tanto en entretenimiento",
        "targetAmount": 500000,
        "currentSpending": 300000,
        "lastExpense": {
            "description": "Cena en restaurante",
            "amount": 50000
        },
        "remainingBudget": 200000,
        "progress": 70,
        "color": "blue",
        "recentExpenses": [
            { "description": "Cine", "amount": 15000 },
            { "description": "Salidas a comer", "amount": 100000 },
            { "description": "Suscripción a plataforma de streaming", "amount": 15000 }
        ]
    },
    {
        "id": 2,
        "title": "Ahorro para vacaciones",
        "targetAmount": 1000000,
        "currentSpending": 450000,
        "lastDeposit": {
            "description": "Depósito inicial",
            "amount": 150000
        },
        "remainingBudget": 550000,
        "progress": 45,
        "color": "green",
        "depositHistory": [
            { "description": "Depósito de cumpleaños", "amount": 10000 },
            { "description": "Depósito mensual", "amount": 200000 },
            { "description": "Regalo familiar", "amount": 5000 },
            { "description": "Intereses ganados", "amount": 1500 },
            { "description": "Depósito de sueldo", "amount": 7500 },
            { "description": "Depósito extra", "amount": 3000 },
            { "description": "Intereses", "amount": 1000 },
            { "description": "Depósito de bonificación", "amount": 400000 },
            { "description": "Venta de artículos", "amount": 5000 },
            { "description": "Reembolso de gastos", "amount": 1000 }
        ]
    },
    {
        "id": 3,
        "title": "Presupuesto mensual de compras",
        "targetAmount": 400000,
        "currentSpending": 200000,
        "lastExpense": {
            "description": "Frutas y verduras",
            "amount": 20000
        },
        "remainingBudget": 200000,
        "progress": 50,
        "color": "orange",
        "recentExpenses": [
            { "description": "Supermercado", "amount": 5000 },
            { "description": "Farmacia", "amount": 3000 },
            { "description": "Limpieza del hogar", "amount": 2500 },
            { "description": "Panadería", "amount": 1500 }
        ]
    },
    {
        "id": 4,
        "title": "Ahorro para fondo de emergencia",
        "targetAmount": 2000000,
        "currentSpending": 1700000,
        "lastDeposit": {
            "description": "Depósito de emergencia",
            "amount": 200000
        },
        "remainingBudget": 300000,
        "progress": 85,
        "color": "purple",
        "depositHistory": [
        ]
    },
    {
        "id": 5,
        "title": "Ahorro para fondo de emergencia",
        "targetAmount": 2000000,
        "currentSpending": 1700000,
        "lastDeposit": {
            "description": "Depósito de emergencia",
            "amount": 200000
        },
        "remainingBudget": 300000,
        "progress": 85,
        "color": "yellow",
        "depositHistory": [
            { "description": "Supermercado", "amount": 5000 },
            { "description": "Farmacia", "amount": 3000 },
            { "description": "Limpieza del hogar", "amount": 2500 },
            { "description": "Panadería", "amount": 1500 }
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
        <>

            <div className='row justify-content-center p-3'>
                {financialGoalsData.map((goal) => (
                    <div className="col-lg-6 p-2 d-flex" key={goal.id}>
                        <div className="card bg-dark-subtle flex-fill">
                            <div className="card-body d-flex flex-column">
                                <div className="text-center d-flex flex-grow-1 align-items-center justify-content-center">
                                    <h5 className='my-1'>{goal.title}</h5>
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
            </div>



            {selectedGoal && (
                <FloatWindow isOpen={isOpen} onClose={handleClose} title={selectedGoal.title}>
                    <div>
                        <div
                            className='card mb-1 p-1 text-center justify-content-center'
                            style={{ backgroundColor: movementPalette.income[2] }}>
                            <div className="align-items-center">
                                <h6 className="col-md-12 m-0">Cantidad Objetivo</h6>
                                <h7 className="col-md-12 m-0">${selectedGoal.targetAmount}</h7>
                            </div>
                        </div>

                        {selectedGoal.currentSpending !== undefined && (
                            <div
                                className='card mb-2 p-1 text-center justify-content-center'
                                style={{ backgroundColor: movementPalette.savings[2] }}>
                                <div className='align-items-center'>
                                    <h6 className='m-0'>Gasto Actual:</h6>
                                    <h7 className="m-0">${selectedGoal.currentSpending}</h7>
                                </div>
                            </div>
                        )}

                        <div className='card p-3'>
                            <h3 className='text-center m-0'>Detalles</h3>
                            <hr />
                            <div>
                                {selectedGoal.remainingBudget !== undefined && (
                                    <div className='d-flex'>
                                        <h6 >Presupuesto Restante:</h6>
                                        <h6 className="text-success ms-3">$ {selectedGoal.remainingBudget}</h6>
                                    </div>
                                )}
                                {selectedGoal.lastDeposit && (
                                    <div className='d-flex'>
                                        <h6 className='m-0'>Último Depósito:</h6>
                                        <h6 className="text-info ms-3">{selectedGoal.lastDeposit.description} : $ {selectedGoal.lastDeposit.amount}</h6>
                                    </div>
                                )}
                                {selectedGoal.lastExpense && (
                                    <div className='d-flex'>
                                        <h6 className='m-0'>Último Gasto:</h6>
                                        <h6 className="text-danger ms-3">{selectedGoal.lastExpense.description} : $ {selectedGoal.lastExpense.amount}</h6>
                                    </div>
                                )}
                            </div>
                            <div className="mt-2 mb-3">
                                <h6>Progreso:</h6>
                                <div style={{ position: 'relative', width: '100%', height: '15px', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
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

                            {selectedGoal.depositHistory && (
                                <>
                                    <h6>Historial de Depósitos:</h6>
                                    {selectedGoal.depositHistory.length > 0 ? (
                                        <div
                                            className="list-group overflow-auto"
                                            style={{ height: selectedGoal.depositHistory.length > 3 ? '150px' : 'auto' }}
                                        >
                                            {selectedGoal.depositHistory.map((deposit, index) => (

                                                <div className="list-group-item d-flex justify-content-between" key={index}>
                                                    <span>{deposit.description}</span>
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-danger ms-2 text-nowrap">- $ {deposit.amount}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-center m-2">No hay nada para mostrar</p>
                                    )}
                                </>
                            )}
                            {selectedGoal.recentExpenses && (
                                <>
                                    <h6>Gastos Recientes:</h6>


                                    {selectedGoal.recentExpenses.length > 0 ? (
                                        <div
                                            className="list-group overflow-auto"
                                            style={{ height: selectedGoal.recentExpenses.length > 3 ? '150px' : 'auto' }}
                                        >
                                            {selectedGoal.recentExpenses.map((expense, index) => (

                                                <div className="list-group-item d-flex justify-content-between" key={index}>
                                                    <span>{expense.description}</span>
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-danger ms-2 text-nowrap">- $ {expense.amount}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-center m-2">No hay nada para mostrar</p>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </FloatWindow >
            )}
        </>
    );
};

export default PlanningGoals;
