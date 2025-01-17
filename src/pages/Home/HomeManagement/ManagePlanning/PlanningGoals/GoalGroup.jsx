import React, { useState, useEffect } from 'react';
import { getGoalMovements } from '@api/MovementsApi'

const GoalGroup = ({ type, goals, handleShowDetails }) => {

    const getProgressColor = ({ progress, type }) => {
        if (type === "incremental") {
            if (progress <= 25) return '#dc3545'; // Rojo
            if (progress <= 50) return '#fd7e14'; // Naranja
            if (progress <= 75) return '#ffc107'; // Amarillo
            return '#198754'; // Verde
        } else {
            if (progress <= 25) return '#198754'; // Verde
            if (progress <= 50) return '#ffc107'; // Amarillo
            if (progress <= 75) return '#fd7e14'; // Naranja
            return '#dc3545'; // Rojo
        }
    };

    // Definir el objeto que contiene los títulos y descripciones para cada tipo
    const goalDetails = {
        incremental: {
            title: 'Ahorro Progresivo',
            description: 'Ahorra cuota a cuota para alcanzar un objetivo específico.',
        },
        reductive: {
            title: 'Reducción de Gastos',
            description: 'Disminuir el gasto estableciendo límites o presupuestos.',
        },
    };

    const calculatePercentage = (goal) => {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const fetchMovementsGoal = async () => {
                const result = await getGoalMovements(goal.id);

                // Sumar los amounts de todos los movimientos
                const totalAmount = result.reduce((sum, movement) => {
                    return sum + parseFloat(movement.amount) || 0;
                }, 0);

                // Calcular el porcentaje de progreso
                const calculatedProgress = (totalAmount / goal.targetAmount) * 100;
                setProgress(Math.min(Math.max(Math.round(calculatedProgress), 0), 100));
            };

            fetchMovementsGoal();
        }, [goal.id, goal.targetAmount]);

        return progress;
    };


    // Obtenemos el título y la descripción según el tipo
    const { title, description } = goalDetails[type] || {};

    return (
        <div>
            <div className="col-lg-12 p-3 my-2 card">
                <div className="text-center">
                    <h4 className="text-center">{title}</h4>
                    <p className="text-muted mb-0">{description}</p>
                </div>
                <hr />
                <div className="row justify-content-center" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    {goals.map((goal) => (
                        <div className="col-lg-4 col-md-6 p-2 d-flex" key={goal.id}>
                            <div className="card bg-dark-subtle flex-fill">
                                <div className="card-body d-flex flex-column">
                                    <div className="text-center d-flex align-items-center justify-content-center flex-grow-1 mb-3">
                                        <h5 className="my-1">{goal.title}</h5>
                                    </div>

                                    <div className="position-relative mb-3">
                                        {/* Barra de progreso */}
                                        <div className="progress bg-secondary">
                                            <div
                                                className="progress-bar"
                                                style={{
                                                    width: `${calculatePercentage(goal)}%`,
                                                    backgroundColor: getProgressColor({ progress: calculatePercentage(goal), type: goal.type }),
                                                }}
                                            >
                                                {/* Porcentaje encima de la barra, sobrepuesto */}
                                                <span
                                                    className="position-absolute start-50 translate-middle fw-bold text-black"
                                                    style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                                                >
                                                    {calculatePercentage(goal)}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="btn btn-outline-secondary border-0" onClick={() => handleShowDetails(goal)}>Ver Detalles</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default GoalGroup;
