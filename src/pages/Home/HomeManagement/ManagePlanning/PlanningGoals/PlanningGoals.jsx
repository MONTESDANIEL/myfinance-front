import React, { useState } from 'react';
import { movementPalette } from '@components/Colors';
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
        "progress": 80,
        "type": "Reductivo", // Agregado
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
        "progress": 60,
        "type": "Incremental", // Agregado
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
        "type": "Fijo", // Agregado
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
        "type": "Incremental", // Agregado
        "depositHistory": []
    },
    {
        "id": 5,
        "title": "Gastos Controlados",
        "targetAmount": 500000,
        "currentSpending": 300000,
        "lastExpense": {
            "description": "Compra de ropa",
            "amount": 50000
        },
        "remainingBudget": 200000,
        "progress": 60,
        "type": "Reductivo", // Agregado
        "recentExpenses": [
            { "description": "Zapatos", "amount": 8000 },
            { "description": "Ropa de invierno", "amount": 70000 },
            { "description": "Accesorios", "amount": 15000 }
        ]
    }, {
        "id": 6,
        "title": "No gastar tanto en entretenimiento",
        "targetAmount": 500000,
        "currentSpending": 300000,
        "lastExpense": {
            "description": "Cena en restaurante",
            "amount": 50000
        },
        "remainingBudget": 200000,
        "progress": 70,
        "type": "Reductivo", // Agregado
        "recentExpenses": [
            { "description": "Cine", "amount": 15000 },
            { "description": "Salidas a comer", "amount": 100000 },
            { "description": "Suscripción a plataforma de streaming", "amount": 15000 }
        ]
    },
    {
        "id": 7,
        "title": "Como es y como seria",
        "targetAmount": 400000,
        "currentSpending": 200000,
        "lastExpense": {
            "description": "Frutas y verduras",
            "amount": 20000
        },
        "remainingBudget": 200000,
        "progress": 50,
        "type": "Fijo", // Agregado
        "recentExpenses": [
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
    const [showLegend, setShowLegend] = useState(false);

    const toggleLegend = (type) => {
        setShowLegend((prev) => ({
            ...prev,
            [type]: !prev[type], // Alterna el estado de la leyenda para el tipo específico
        }));
    };

    const handleShowDetails = (goal) => {
        setSelectedGoal(goal);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedGoal(null);
    };

    const groupedGoals = financialGoalsData.reduce((acc, goal) => {
        if (!acc[goal.type]) {
            acc[goal.type] = [];
        }
        acc[goal.type].push(goal);
        return acc;
    }, {});

    function getProgressColor(selectedGoal) {
        const { progress, type } = selectedGoal;

        // No se aplica color si el tipo es "unica"
        if (type === 'unica') return '#e0e0e0';

        let color;

        if (progress <= 25) {
            color = type === 'Reductivo' ? '#198754' : '#dc3545'; // Incremental - Reductivo
        } else if (progress <= 50) {
            color = type === 'Reductivo' ? '#ffc107' : '#fd7e14';
        } else if (progress <= 75) {
            color = type === 'Reductivo' ? '#fd7e14' : '#ffc107';
        } else {
            color = type === 'Reductivo' ? '#dc3545' : '#198754';
        }

        return color;

    }


    return (
        <>

            <div className="row justify-content-center p-3">
                {Object.entries(groupedGoals).map(([type, goals]) => {
                    const isMetaUnica = type === 'Fijo';
                    const title = type === 'Incremental' ? 'Ahorro Progresivo' : type === 'Reductivo' ? 'Reducción de Gastos' : 'Meta Única';
                    const description = type === 'Incremental'
                        ? 'Se logra mediante pequeños pasos constantes, como aumentar ahorros o inversiones mes a mes.'
                        : type === 'Reductivo'
                            ? 'Se enfoca en reducir o eliminar deudas y gastos innecesarios para mejorar tu situación financiera.'
                            : 'Implica completar metas en una sola acción, como establecer un presupuesto o hacer un análisis de patrimonio.';

                    return (
                        <div key={type} className="col-lg-12 p-3 m-2 card">
                            <div className="position-relative">
                                <h4 className="text-center">{title}</h4>
                                <p className="text-center">{description}</p>

                                {/* Botón de información solo para tipos distintos a 'Fijo' */}
                                {!isMetaUnica && (
                                    <button
                                        className="btn btn-link position-absolute"
                                        style={{ top: '-10px', right: '-15px' }} // Ajuste para estar cerca de la esquina
                                        onClick={() => toggleLegend(type)}
                                    >
                                        <i className={`${showLegend[type] ? 'bi bi-dash-circle' : 'bi-question-circle'} text-muted`}></i>
                                    </button>
                                )}

                                {/* Leyenda de colores, solo visible cuando se activa */}
                                {showLegend[type] && (
                                    <div className="color-legend mt-3">
                                        <h5>Interpretación de los Colores</h5>
                                        <ul>
                                            {['#198754', '#ffc107', '#fd7e14', '#dc3545'].map((color, index) => {
                                                const levels = [
                                                    isMetaUnica ? 'Buen progreso, sigue así para alcanzar tu objetivo.' : 'Estas manteniendo un buen control de gastos.',
                                                    isMetaUnica ? 'Avance moderado, aún queda trabajo para alcanzar el objetivo.' : 'Precaución, estás comenzando a acercarte a los límites de gasto.',
                                                    isMetaUnica ? 'Podrías acelerar tus esfuerzos para alcanzar el objetivo.' : 'Se recomienda reducir los gastos para no exeder la meta de reducción de gastos.',
                                                    isMetaUnica ? 'Es importante hacer más depósitos o contribuciones para lograr el objetivo.' : 'Alerta, es necesario reducir gastos para cumplir con la meta.'
                                                ];

                                                return (
                                                    <li key={index} style={{ color }}>
                                                        <strong>{['Verde', 'Amarillo', 'Naranja', 'Rojo'][index]}:</strong> {levels[index]}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <hr />
                            {!isMetaUnica ? (
                                <div className="row justify-content-center">
                                    {goals.map((goal) => (
                                        <div className="col-md-4 p-2 d-flex" key={goal.id}>
                                            <div className="card bg-dark-subtle flex-fill">
                                                <div className="card-body d-flex flex-column">
                                                    <div className="text-center flex-grow-1 align-items-center justify-content-center mb-2">
                                                        <h5 className="my-1">{goal.title}</h5>
                                                    </div>
                                                    <div className="progress mb-2">
                                                        <div
                                                            className="progress-bar text-black"
                                                            role="progressbar"
                                                            style={{
                                                                width: `${goal.progress}%`,
                                                                backgroundColor: getProgressColor({ progress: goal.progress, type: goal.type })
                                                            }}
                                                            aria-valuenow={goal.progress}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        >
                                                            {goal.progress}%
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-secondary border-0"
                                                        onClick={() => handleShowDetails(goal)}
                                                    >
                                                        <span className="ms-2">Ver Detalles</span>
                                                    </button>
                                                    {goal.showDetails && (
                                                        <div className="mt-2">
                                                            <h6>Detalles del objetivo</h6>
                                                            <p>{goal.details}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="rounded">
                                    {goals.map((goal) => (
                                        <div className="list-group-item d-flex justify-content-between p-2 border" key={goal.id}>
                                            <span className='ms-2'>{goal.title}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {selectedGoal && (
                <FloatWindow isOpen={isOpen} onClose={handleClose} title={selectedGoal.title} size="lg">
                    <div>
                        <div className="card p-3">
                            <h3 className="text-center m-0">Detalles</h3>
                            <hr />
                            <div className="row justify-content-center px-3 mb-2">
                                {[
                                    { label: 'Cantidad Objetivo', value: selectedGoal.targetAmount },
                                    selectedGoal.currentSpending !== undefined && {
                                        label: selectedGoal.type === 'Reductivo' ? 'Gastos actuales' : 'Falta depositar',
                                        value: selectedGoal.currentSpending,
                                    },
                                    selectedGoal.remainingBudget !== undefined && {
                                        label: selectedGoal.type === 'Reductivo' ? 'Presupuesto Restante' : 'Depósitos Actuales',
                                        value: selectedGoal.remainingBudget,
                                    }
                                ]
                                    .filter(Boolean)
                                    .map((item, index) => (
                                        <div key={index} className="col-lg-3 text-center m-1 p-2" >
                                            <div className="d-flex flex-column align-items-center">
                                                <h6 className="m-0">{item.label}</h6>
                                                <p className="m-0">${item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div className="mt-2 mb-3">
                                <h6>Progreso:</h6>
                                <div style={{ position: 'relative', width: '100%', height: '15px', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
                                    <div
                                        style={{
                                            width: `${selectedGoal.progress}%`,
                                            height: '100%',
                                            backgroundColor: getProgressColor({ progress: selectedGoal.progress, type: selectedGoal.type }),
                                            borderRadius: '5px'
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
                                        <div className="list-group overflow-auto" style={{ height: selectedGoal.depositHistory.length > 5 ? '200px' : 'auto' }}>
                                            {selectedGoal.depositHistory.map((deposit, index) => (
                                                <div className="list-group-item d-flex justify-content-between" key={index}>
                                                    <span>{deposit.description}</span>
                                                    <span className="text-success ms-2 text-nowrap">$ {deposit.amount}</span>
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
                                        <div className="list-group overflow-auto" style={{ height: selectedGoal.recentExpenses.length > 5 ? '200px' : 'auto' }}>
                                            {selectedGoal.recentExpenses.map((expense, index) => (
                                                <div className="list-group-item d-flex justify-content-between" key={index}>
                                                    <span>{expense.description}</span>
                                                    <span className="text-danger ms-2 text-nowrap">- $ {expense.amount}</span>
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
                </FloatWindow>
            )}

        </>
    );
};

export default PlanningGoals;
