import React, { useState, useEffect } from "react";
import FloatWindow from "@components/FloatWindow";
import { newUserGoal, updateUserGoal } from "@api/GoalsApi";

const GoalForm = ({ isOpen, onClose, goal }) => {
    const isEdit = Boolean(goal);

    // Inicializar datos de la meta
    const initialGoalData = {
        id: goal?.id || null,
        userId: goal?.userId || null,
        title: goal?.title || "",
        targetAmount: goal?.targetAmount || 0,
        type: goal?.type || "reductive",
    };

    const [goalData, setGoalData] = useState(initialGoalData);

    // Actualizar los datos de la meta si se recibe una nueva meta en modo edición
    useEffect(() => {
        if (isEdit && goal) {
            setGoalData({
                ...initialGoalData,
                ...goal,
            });
        }
    }, [isEdit, goal]);

    // Formatear números con separadores de miles
    const formatNumber = (value) =>
        value !== null && value !== undefined ? Number(value).toLocaleString("en-US") : "";

    // Filtrar y actualizar los valores de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setGoalData((prev) => ({
            ...prev,
            [name]: name === "targetAmount" ? Number(value.replace(/[^0-9]/g, "")) : value,
        }));
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEdit) {
                await updateUserGoal(goalData);
            } else {
                await newUserGoal(goalData);
            }
            window.location.reload();
        } catch (error) {
            console.error("Ocurrió un error inesperado", error);
        }
    };

    return (
        <FloatWindow isOpen={isOpen} title={isEdit ? "Editar Meta" : "Agregar Meta"} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                {/* Campo de título */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Título
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={goalData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Campo de valor objetivo */}
                <div className="mb-3">
                    <label htmlFor="targetAmount" className="form-label">
                        Valor objetivo
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="targetAmount"
                        name="targetAmount"
                        value={formatNumber(goalData.targetAmount)}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Campo de tipo */}
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                        Tipo
                    </label>
                    <select
                        className="form-select"
                        id="type"
                        name="type"
                        value={goalData.type}
                        onChange={handleInputChange}
                    >
                        <option value="incremental">Incremental</option>
                        <option value="reductive">Reductivo</option>
                    </select>
                </div>

                {/* Botón de acción */}
                <button type="submit" className={`btn ${isEdit ? "btn-primary" : "btn-success"}`}>
                    <span>{isEdit ? "Guardar Cambios" : "Agregar Meta"}</span>
                    <i className={`bi ${isEdit ? "bi-pencil-square" : "bi-plus-square-dotted"} ms-2`}></i>
                </button>
            </form>
        </FloatWindow>
    );
};

export default GoalForm;
