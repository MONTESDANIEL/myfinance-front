import React, { useState } from 'react';

import financialGoalsData from '@data/goalsData.js';

import GoalGroup from './GoalGroup';
import GoalDetailsWindow from './GoalDetailWindow';
import FloatWindow from '@components/FloatWindow';

const PlanningGoals = () => {

    const getProgressColor = ({ progress, type }) => {
        if (type === 'unica') return '#e0e0e0';

        if (progress <= 25) return type === 'Reductivo' ? '#198754' : '#dc3545';
        if (progress <= 50) return type === 'Reductivo' ? '#ffc107' : '#fd7e14';
        if (progress <= 75) return type === 'Reductivo' ? '#fd7e14' : '#ffc107';
        return type === 'Reductivo' ? '#dc3545' : '#198754';
    };

    const [isOpen, setIsOpen] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState('Todos');

    const goalOptions = {
        'Todos': 'Todos',
        'Reductivo': 'Reducción de Gastos',
        'Incremental': 'Ahorro Progresivo',
        'Fijo': 'Objetivo a Plazo Fijo'
    };

    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [selectedGoalDetails, setSelectedGoalDetails] = useState(null);

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
        return financialGoalsData.reduce((acc, goal) => {
            if (!acc[goal.type]) acc[goal.type] = [];
            acc[goal.type].push(goal);
            return acc;
        }, {});
    };

    const filteredGoals = selectedGoal === 'Todos'
        ? Object.entries(groupedGoals()) // Llama a la función aquí
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
                    <div className="color-legend">
                        <ul>
                            <li style={{ color: '#198754' }}>Verde: Buen progreso</li>
                            <li style={{ color: '#ffc107' }}>Amarillo: Avance moderado</li>
                            <li style={{ color: '#fd7e14' }}>Naranja: Precaución</li>
                            <li style={{ color: '#dc3545' }}>Rojo: Alerta</li>
                        </ul>
                    </div>
                </FloatWindow>

                {filteredGoals.map(([type, goals]) => (
                    <GoalGroup
                        key={type}
                        type={type}
                        goals={goals}
                        getProgressColor={getProgressColor}
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
