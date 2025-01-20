import React, { useEffect, useState } from 'react';
import FloatWindow from '@components/FloatWindow';
import { getGoalMovements } from '@api/MovementsApi';
import { deleteUserGoal } from '@api/GoalsApi';

// Obtener el color del progreso según el tipo de meta y porcentaje
const getProgressColor = ({ progress, type }) => {
    const colors = type === "incremental"
        ? ['#dc3545', '#fd7e14', '#ffc107', '#198754'] // Incremental
        : ['#198754', '#ffc107', '#fd7e14', '#dc3545']; // Decremental

    if (progress <= 25) return colors[0];
    if (progress <= 50) return colors[1];
    if (progress <= 75) return colors[2];
    return colors[3];
};

// Formatear números con separadores de miles
const formatNumber = (value) =>
    value !== null && value !== undefined ? Number(value).toLocaleString("en-US") : "";

// Calcular los detalles de la meta
const calculateGoalDetails = async (goal) => {
    const movements = await getGoalMovements(goal.id);
    const totalAmount = movements.reduce((sum, { amount }) => sum + parseFloat(amount || 0), 0);
    const targetAmount = goal.targetAmount;
    const remainingAmount = targetAmount - totalAmount;
    const progress = Math.min(Math.max(Math.round((totalAmount / targetAmount) * 100), 0), 100);

    return { totalAmount, targetAmount, remainingAmount, progress, movements };
};

// Componente de lista de movimientos (gastos o depósitos)
const ListGroup = ({ items, title, isExpense = false }) => (
    <>
        <h6>{title}:</h6>
        {items?.length > 0 ? (
            <div
                className="list-group overflow-auto"
                style={{ height: items.length > 5 ? '200px' : 'auto' }}
            >
                {items.map(({ description, amount }, index) => (
                    <div className="list-group-item d-flex justify-content-between" key={index}>
                        <span>{description}</span>
                        <span
                            className={`ms-2 text-nowrap ${isExpense ? 'text-danger' : 'text-success'}`}
                        >
                            {isExpense ? `- $ ${amount}` : `$ ${amount}`}
                        </span>
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-center m-2">No hay nada para mostrar</p>
        )}
    </>
);

const GoalDetailsWindow = ({ selectedGoal, isOpen, onClose, handleEdit }) => {
    const [goalDetails, setGoalDetails] = useState({
        totalAmount: 0,
        targetAmount: 0,
        remainingAmount: 0,
        progress: 0,
        movements: []
    });

    // Obtener detalles de la meta cuando cambia `selectedGoal`
    useEffect(() => {
        const fetchGoalDetails = async () => {
            if (selectedGoal?.id) {
                const details = await calculateGoalDetails(selectedGoal);
                setGoalDetails(details);
            }
        };
        fetchGoalDetails();
    }, [selectedGoal?.id]);

    // Manejar la eliminación de la meta
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await deleteUserGoal(selectedGoal.id);
            window.location.reload();
        } catch (error) {
            console.error("Error al eliminar la meta:", error);
        }
    };

    const { totalAmount, targetAmount, remainingAmount, progress, movements } = goalDetails;
    const progressColor = getProgressColor({ progress, type: selectedGoal?.type });

    return (
        <FloatWindow isOpen={isOpen} onClose={onClose} title="Detalles" size="lg">
            <div className="card p-3">
                {/* Título de la meta */}
                <h3 className="text-center m-0">{selectedGoal.title}</h3>
                <hr />

                {/* Detalles principales */}
                <div className="row justify-content-center">
                    {[
                        {
                            label: selectedGoal.type === 'incremental' ? 'Monto Objetivo' : 'Presupuesto Límite',
                            value: formatNumber(targetAmount),
                        },
                        totalAmount !== undefined && {
                            label: selectedGoal.type === 'incremental' ? 'Progreso Acumulado' : 'Gastos Actuales',
                            value: formatNumber(totalAmount),
                        },
                        remainingAmount !== undefined && {
                            label: selectedGoal.type === 'incremental'
                                ? remainingAmount < totalAmount
                                    ? 'Progreso Superior'
                                    : 'Progreso Restante'
                                : remainingAmount < 0
                                    ? 'Presupuesto Excedido'
                                    : 'Presupuesto Restante',
                            value: formatNumber(Math.abs(remainingAmount)),
                        },
                    ]
                        .filter(Boolean)
                        .map(({ label, value }, index) => (
                            <div key={index} className="col-lg-4 text-center p-1 my-1">
                                <div className="d-flex flex-column align-items-center">
                                    <h5 className="m-0">{label}</h5>
                                    <p className="m-0">${value}</p>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Barra de progreso */}
                <div className="mt-2 mb-3">
                    <h6>Progreso:</h6>
                    <div
                        className="bg-secondary"
                        style={{ position: 'relative', width: '100%', height: '20px', borderRadius: '5px' }}
                    >
                        <div
                            style={{
                                width: `${progress}%`,
                                height: '100%',
                                backgroundColor: progressColor,
                                borderRadius: '5px'
                            }}
                        ></div>
                        <span
                            className="position-absolute start-50 translate-middle fw-bold text-black"
                            style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                        >
                            {progress}%
                        </span>
                    </div>
                </div>

                {/* Lista de movimientos */}
                {selectedGoal.type === 'incremental' ? (
                    <ListGroup items={movements} title="Historial de Depósitos" />
                ) : (
                    <ListGroup items={movements} title="Gastos Recientes" isExpense />
                )}

                {/* Botones de acción */}
                <div className="d-flex justify-content-end align-items-center mt-3">
                    <button className="btn btn-sm btn-warning ms-3 border-1" onClick={handleEdit}>
                        <i className="bi bi-pencil-square"> Editar</i>
                    </button>
                    <button className="btn btn-sm btn-danger ms-3 border-0" onClick={handleDelete}>
                        <i className="bi bi-trash-fill text-black"> Eliminar</i>
                    </button>
                </div>
            </div>
        </FloatWindow>
    );
};

export default GoalDetailsWindow;
