import React, { useState } from 'react';
import { useUser } from "@context/UserContext";

import GoalGroup from './GoalGroup';
import GoalForm from './GoalForm';
import GoalDetailsWindow from './GoalDetailWindow';
import FloatWindow from '@components/FloatWindow';

const PlanningGoals = () => {
    const { goals } = useUser();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState('all');
    const [detailsWindow, setDetailsWindow] = useState({ isOpen: false, goal: null });
    const [formWindow, setFormWindow] = useState({ isOpen: false, isEdit: false, goal: null });

    const goalOptions = {
        all: 'Todos',
        reductive: 'Reducción de Gastos',
        incremental: 'Ahorro Progresivo',
    };

    const groupedGoals = () =>
        goals.reduce((acc, goal) => {
            if (!acc[goal.type]) acc[goal.type] = [];
            acc[goal.type].push(goal);
            return acc;
        }, {});

    const filteredGoals = () =>
        selectedGoal === 'all'
            ? Object.entries(groupedGoals())
            : Object.entries(groupedGoals()).filter(([type]) => type === selectedGoal);

    const handleWindowToggle = (type, payload = {}) => {
        if (type === "details") {
            setDetailsWindow({ isOpen: !detailsWindow.isOpen, goal: payload.goal || null });
            // Cerrar el formulario al abrir detalles
            if (formWindow.isOpen) {
                setFormWindow({ isOpen: false, isEdit: false, goal: null });
            }
        } else if (type === "form") {
            setFormWindow({ isOpen: !formWindow.isOpen, isEdit: payload.isEdit || false, goal: payload.goal || null });
            // Cerrar los detalles al abrir el formulario
            if (detailsWindow.isOpen) {
                setDetailsWindow({ isOpen: false, goal: null });
            }
        }
    };

    return (
        <>
            {/* Header */}
            <div className="row justify-content-center">
                <div className="row justify-content-between align-items-center p-2">
                    <div className="col-auto">
                        <button className="btn btn-success" onClick={() => handleWindowToggle("form", { isEdit: false })}>
                            Nueva meta
                        </button>
                    </div>
                    <div className="d-flex col-auto">
                        <button className="btn mx-2" onClick={() => setIsOpen(!isOpen)}>
                            <i className="bi-question-circle text-muted d-flex justify-content-center align-items-center"></i>
                        </button>
                        <div className="dropdown-center">
                            <button
                                className="btn btn-sm btn-success dropdown-toggle"
                                type="button"
                                id="filterDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span>Filtrar</span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="filterDropdown">
                                {Object.keys(goalOptions).map((key) => (
                                    <li key={key}>
                                        <button
                                            className="dropdown-item btn btn-sm"
                                            onClick={() => setSelectedGoal(key)}
                                            aria-checked={selectedGoal === key}
                                        >
                                            {goalOptions[key]}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Leyenda de colores */}
                <FloatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} title="Interpretación de los Colores">
                    <div className="color-legend d-flex justify-content-center align-items-center">
                        <div className="legend-section p-1">
                            <ul className="list-unstyled">
                                <li style={{ color: '#198754' }} className="my-2">
                                    <strong>Verde:</strong> Estás logrando un gran progreso, ¡sigue así! Estás cerca de alcanzar tu objetivo.
                                </li>
                                <li style={{ color: '#ffc107' }} className="my-2">
                                    <strong>Amarillo:</strong> Tienes un avance moderado, pero aún hay margen para seguir mejorando.
                                </li>
                                <li style={{ color: '#fd7e14' }} className="my-2">
                                    <strong>Naranja:</strong> El progreso es insuficiente, necesitas mejorar para no quedarte atrás.
                                </li>
                                <li style={{ color: '#dc3545' }} className="my-2">
                                    <strong>Rojo:</strong> El progreso es bajo, ¡actúa rápidamente para evitar llegar a un punto crítico!
                                </li>
                            </ul>
                        </div>
                    </div>
                </FloatWindow>

                {/* Lista de metas */}
                {
                    filteredGoals().length > 0 ? (
                        filteredGoals().map(([type, goals]) => (
                            <GoalGroup
                                key={type}
                                type={type}
                                goals={goals}
                                handleShowDetails={(goal) => handleWindowToggle("details", { goal })}
                            />
                        ))
                    ) : (
                        <div>
                            <div className="p-3 my-2 card text-center">
                                <span>
                                    {selectedGoal === 'all'
                                        ? "No hay metas para mostrar."
                                        : `No hay metas para mostrar de  ${selectedGoal === 'reductive' ? "reducción de gastos" : "ahorro progresivo"}.`}
                                </span>
                            </div>
                        </div>
                    )
                }

            </div>

            {/* Ventana de detalles */}
            {detailsWindow.isOpen && (
                <GoalDetailsWindow
                    selectedGoal={detailsWindow.goal}
                    isOpen={detailsWindow.isOpen}
                    onClose={() => handleWindowToggle("details")}
                    handleEdit={() => handleWindowToggle("form", { isEdit: true, goal: detailsWindow.goal })}
                />
            )}

            {/* Formulario de meta */}
            {formWindow.isOpen && (
                <GoalForm
                    isOpen={formWindow.isOpen}
                    onClose={() => handleWindowToggle("form")}
                    goal={formWindow.isEdit ? formWindow.goal : null}
                />
            )}
        </>
    );
};

export default PlanningGoals;
