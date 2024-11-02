import React from 'react';
import FloatWindow from '@components/FloatWindow';

const getProgressColor = ({ progress, type }) => {
    if (type === 'unica') return '#e0e0e0';

    if (progress <= 25) return type === 'Reductivo' ? '#198754' : '#dc3545';
    if (progress <= 50) return type === 'Reductivo' ? '#ffc107' : '#fd7e14';
    if (progress <= 75) return type === 'Reductivo' ? '#fd7e14' : '#ffc107';
    return type === 'Reductivo' ? '#dc3545' : '#198754';
};

const GoalDetailsWindow = ({ selectedGoal, isOpen, onClose }) => {
    return (
        <FloatWindow isOpen={isOpen} onClose={onClose} title={selectedGoal.title} size="lg">
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
        </FloatWindow>
    );
};

export default GoalDetailsWindow;
