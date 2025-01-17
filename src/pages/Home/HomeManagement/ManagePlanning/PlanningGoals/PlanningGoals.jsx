import React, { useState } from 'react';

import { useUser } from "@context/UserContext";

import GoalGroup from './GoalGroup';
import GoalDetailsWindow from './GoalDetailWindow';

import FloatWindow from '@components/FloatWindow';

const PlanningGoals = () => {
    const { goals } = useUser();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState('all');
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [selectedGoalDetails, setSelectedGoalDetails] = useState(null);

    const goalOptions = {
        'all': 'Todos',
        'reductive': 'Reducción de Gastos',
        'incremental': 'Ahorro Progresivo'
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsDetailsOpen(false);
        setSelectedGoalDetails(null);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleSelect = (goal) => {
        setSelectedGoal(goal);
    };

    const groupedGoals = () => {
        return goals.reduce((acc, goal) => {
            if (!acc[goal.type]) acc[goal.type] = [];
            acc[goal.type].push(goal);
            return acc;
        }, {});
    };

    const filteredGoals = selectedGoal === 'all'
        ? Object.entries(groupedGoals())
        : Object.entries(groupedGoals()).filter(([type]) => type === selectedGoal);

    return (
        <>

            <div className="row justify-content-center">
                <div className="row justify-content-between align-items-center p-2">
                    <div className="col-auto">
                        <div className="dropdown">
                            <button
                                className="btn btn-sm btn-success dropdown-toggle"
                                type="button"
                                id="filterDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span>Filtrar</span>
                            </button>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="filterDropdown"
                            >
                                {Object.keys(goalOptions).map((goal) => (
                                    <li key={goal}>
                                        <button
                                            className={'dropdown-item btn btn-sm'}
                                            onClick={() => handleSelect(goal)}
                                            aria-checked={selectedGoal === goal}
                                        >
                                            {goalOptions[goal]}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-auto">
                        <button
                            className="btn btn-link"
                            onClick={handleOpen}
                        >
                            <i className="bi-question-circle text-muted"></i>
                        </button>
                    </div>
                </div>

                <FloatWindow isOpen={isOpen} onClose={handleClose} title="Interpretación de los Colores">
                    <div className="color-legend d-flex justify-content-center align-items-center">
                        <div className="legend-section p-1">
                            <ul className="list-unstyled">
                                <li style={{ color: '#198754' }} className='my-2'>
                                    <strong>Verde:</strong> Estás logrando un gran progreso, ¡sigue así! Estás cerca de alcanzar tu objetivo.
                                </li>
                                <li style={{ color: '#ffc107' }} className='my-2'>
                                    <strong>Amarillo:</strong> Tienes un avance moderado, pero aún hay margen para seguir mejorando.
                                </li>
                                <li style={{ color: '#fd7e14' }} className='my-2'>
                                    <strong>Naranja:</strong> El progreso es insuficiente, necesitas mejorar para no quedarte atrás.
                                </li>
                                <li style={{ color: '#dc3545' }} className='my-2'>
                                    <strong>Rojo:</strong> El progreso es bajo, ¡actúa rápidamente para evitar llegar a un punto crítico!
                                </li>
                            </ul>
                        </div>
                    </div>
                </FloatWindow>

                {filteredGoals.map(([type, goals]) => (
                    <GoalGroup
                        key={type}
                        type={type}
                        goals={goals}
                        handleShowDetails={(goal) => {
                            setSelectedGoalDetails(goal);
                            setIsDetailsOpen(true);
                        }}
                    />
                ))}
            </div>

            {selectedGoalDetails && (
                <GoalDetailsWindow
                    selectedGoal={selectedGoalDetails}
                    isOpen={isDetailsOpen}
                    onClose={handleClose}
                />
            )}
        </>
    );
};

export default PlanningGoals;
