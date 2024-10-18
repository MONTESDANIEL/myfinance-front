import React, { useState } from 'react';
import { PlanningCalendar } from './PlanningCalendar';
import FloatWindow from '../../../../components/FloatWindow';

const financialGoalsData = [
    {
        "id": 1,
        "title": "Ahorro para diciembre",
        "targetAmount": 5000,
        "savedAmount": 2500,
        "lastDeposit": "500 el 1 de octubre",
        "weeklyGoal": 300,
        "progress": 50,
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
        "progress": 60,
        "recentExpenses": [
            "Cine: $15",
            "Salidas a comer: $100",
            "Suscripción a plataforma de streaming: $15"
        ]
    }
];


export const ManagePlanning = () => {

    const [selectedGoal, setSelectedGoal] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleShowDetails = (goal) => {
        setSelectedGoal(goal);
        setIsOpen(true);
    };

    const handleClose = () => {
        setSelectedGoal(null);
        setIsOpen(false);
    };

    return (
        <>
            <div className="text-center text-ligth p-1">
                <h2>Planificación financiera</h2>
            </div>
            <hr />

            <div className="container rounded p-2 my-2 bg-body-tertiary">

                <div className="row d-flex m-3">
                    {/** Tarjeta total ingresos */}
                    <div className="col-md-4 text-center my-1">
                        <div className="card income text-white">
                            <div className="card-body d-flex align-items-center">
                                <h5 className="card-title fs-6 d-flex justify-content-center w-100 mb-0">
                                    <i className="bi bi-graph-up me-2"></i>
                                    <span className="ms-1">INGRESOS</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/** Tarjeta total ahorro */}
                    <div className="col-md-4 text-center my-1">
                        <div className="card savings text-white">
                            <div className="card-body d-flex align-items-center">
                                <h5 className="card-title fs-6 d-flex justify-content-center w-100 mb-0">
                                    <i className="bi bi-piggy-bank me-2"></i>
                                    <span className="ms-1">AHORRO</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/** Tarjeta total gastos */}
                    <div className="col-md-4 text-center my-1">
                        <div className="card expense text-white">
                            <div className="card-body d-flex align-items-center">
                                <h5 className="card-title fs-6 d-flex justify-content-center w-100 mb-0">
                                    <i className="bi bi-graph-down me-2"></i>
                                    <span className="ms-1">EGRESOS</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <PlanningCalendar />
                </div>

            </div>

            <div className="container rounded p-3 bg-body-tertiary">

                <h3 className="mb-3">Metas Financieras</h3>
                <div className="row">
                    {financialGoalsData.map((goal) => (
                        <div className="col-xl-6 mb-3" key={goal.id}>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <div className="text-center">
                                        <h5>{goal.title}: ${goal.targetAmount}</h5>
                                    </div>
                                    <div className="progress my-3">
                                        <div
                                            className="progress-bar bg-custom text-muted"
                                            role="progressbar"
                                            style={{ width: `${goal.progress}%` }}
                                            aria-valuenow={goal.progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100">{goal.progress}%
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

                {/* Modal for Detailed View */}
                {isOpen && selectedGoal && (
                    <FloatWindow isOpen={isOpen} onClose={handleClose} title={selectedGoal.title}>
                        <div className="text-center mb-3">
                            <h5 className="text-muted">Detalles Financieros</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="text-success">
                                    <i className="bi bi-cash-coin fs-4"></i>
                                    <span className="ms-2 fw-bold">${selectedGoal.savedAmount || selectedGoal.currentSpending}</span>
                                </div>
                                <div className="text-warning">
                                    <i className="bi bi-arrow-up-right fs-3"></i>
                                    <span className="ms-2">{selectedGoal.lastDeposit || 'N/A'}</span>
                                </div>
                            </div>
                        </div>

                        <h6><strong>Objetivo semanal:</strong> {selectedGoal.weeklyGoal}</h6>

                        {/* Tabla de Historial de Depósitos */}
                        <h6 className="mt-3"><strong>Historial de Depósitos:</strong></h6>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Monto</th>
                                    <th>Comentario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedGoal.depositHistory && selectedGoal.depositHistory.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td className="text-success">${item.amount}</td>
                                        <td>{item.comment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Tabla de Gastos Recientes */}
                        <h6 className="mt-3"><strong>Gastos Recientes:</strong></h6>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Monto</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedGoal.recentExpenses && selectedGoal.recentExpenses.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td className="text-danger">${item.amount}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </FloatWindow>

                )}
            </div>

        </>
    );
};
