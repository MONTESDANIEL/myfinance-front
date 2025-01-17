import React, { useEffect, useState, useMemo } from 'react';
import FloatWindow from '@components/FloatWindow';
import { getGoalMovements } from '@api/MovementsApi';

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

const formatNumber = (value) => {
    if (value === null || value === undefined || value === "") return "";
    return Number(value).toLocaleString("en-US");
};

// Función combinada para obtener movimientos, calcular el total y el porcentaje
const calculateGoalDetails = async (goal) => {
    const result = await getGoalMovements(goal.id);  // Obtener los movimientos para la meta

    // Sumar los amounts de todos los movimientos
    const totalAmount = result.reduce((sum, movement) => {
        return sum + parseFloat(movement.amount) || 0; // Asegúrate de convertir el amount a un número
    }, 0);

    // Obtener el objetivo de la meta
    const targetAmount = goal.targetAmount;

    // Calcular lo que falta para alcanzar la meta
    const remainingAmount = targetAmount - totalAmount;

    // Calcular el porcentaje de progreso
    const progress = Math.min(Math.max(Math.round((totalAmount / targetAmount) * 100), 0), 100);

    return {
        totalAmount,
        targetAmount,
        remainingAmount,
        progress,
        movements: result
    };
};

const ListGroup = ({ items, title, isExpense = false }) => {
    return (
        items && (
            <>
                <h6>{title}:</h6>
                {items.length > 0 ? (
                    <div className="list-group overflow-auto" style={{ height: items.length > 5 ? '200px' : 'auto' }}>
                        {items.map((item, index) => (
                            <div className="list-group-item d-flex justify-content-between" key={index}>
                                <span>{item.description}</span>
                                <span className={`ms-2 text-nowrap ${isExpense ? 'text-danger' : 'text-success'}`}>
                                    {isExpense ? `- $ ${item.amount}` : `$ ${item.amount}`}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center m-2">No hay nada para mostrar</p>
                )}
            </>
        )
    );
};

const GoalDetailsWindow = ({ selectedGoal, isOpen, onClose }) => {

    const [goalDetails, setGoalDetails] = useState({
        totalAmount: 0,
        targetAmount: 0,
        remainingAmount: 0,
        progress: 0,
        movements: []
    });

    useEffect(() => {
        const fetchGoalDetails = async () => {
            if (selectedGoal && selectedGoal.id) {
                const details = await calculateGoalDetails(selectedGoal);
                setGoalDetails(details);
            }
        };

        fetchGoalDetails();
    }, [selectedGoal?.id]);

    // Desestructuración para mayor legibilidad
    const { totalAmount, targetAmount, remainingAmount, progress } = goalDetails;

    // Color del progreso
    const progressColor = getProgressColor({ progress, type: selectedGoal.type });

    return (
        <FloatWindow isOpen={isOpen} onClose={onClose} title="Detalles" size="lg">
            <div className="card p-3">
                <h3 className="text-center m-0">{selectedGoal.title}</h3>
                <hr />

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
                            value: formatNumber(Math.abs(remainingAmount)), // Usar el valor absoluto para mantener la claridad
                        },
                    ]
                        .filter(Boolean) // Elimina valores falsos o undefined
                        .map((item, index) => (
                            <div key={index} className="col-lg-4 text-center p-1 my-1">
                                <div className="d-flex flex-column align-items-center">
                                    <h5 className="m-0">{item.label}</h5>
                                    <p className="m-0">${item.value}</p>
                                </div>
                            </div>
                        ))}

                </div>
                <div className="mt-2 mb-3">
                    <h6>Progreso:</h6>
                    <div
                        className='bg-secondary'
                        style={{ position: 'relative', width: '100%', height: '20px', borderRadius: '5px' }}>
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

                {
                    selectedGoal.type === 'incremental' ? (
                        <ListGroup
                            items={goalDetails.movements}
                            title="Historial de Depósitos"
                        />
                    ) : (
                        <ListGroup
                            items={goalDetails.movements}
                            title="Gastos Recientes"
                            isExpense={true}
                        />
                    )
                }
            </div>
        </FloatWindow>
    );
};

export default GoalDetailsWindow;
