import React, { useState, useEffect } from "react";

import FloatWindow from "@components/FloatWindow";
import { newUserEvent, updateUserEvent } from "@api/EventsApi";

const PlanningEventForm = ({ isOpen, onClose, event }) => {
    const isEdit = Boolean(event);

    const formatNumber = (value) => {
        if (value === null || value === undefined || value === "") return "";
        return Number(value).toLocaleString("en-US");
    };

    const initialEventData = isEdit
        ? {
            id: event?.id || null,
            userId: event?.userId || null,
            title: event?.title || "",
            amount: event?.amount || 0,
            date: event?.date || "",
            type: event?.type || "income",
        }
        : {
            title: "",
            amount: 0,
            date: "",
            type: event?.type || "income",
        };

    const [eventData, setEventData] = useState(initialEventData);

    useEffect(() => {
        if (isEdit && event) {
            setEventData(event);
        }
    }, [isEdit, event]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Filtrar el valor para solo aceptar números si el campo es 'amount'
        const filteredValue = name === "amount" ? value.replace(/[^0-9]/g, "") : value;

        // Guardar el valor filtrado como número para 'amount', o como string para otros campos
        setEventData((prev) => ({
            ...prev,
            [name]: name === "amount" ? Number(filteredValue) : filteredValue,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEdit) {
                await updateUserEvent(eventData);
            } else {
                await newUserEvent(eventData);
            }
            window.location.reload();
        } catch (error) {
            console.log("Ocurrió un error inesperado");
        }
    };


    return (
        <FloatWindow isOpen={isOpen} title={isEdit ? "Editar Evento" : "Agregar Evento"} onClose={onClose}>
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Título
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={eventData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                        Cantidad
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="amount"
                        name="amount"
                        value={formatNumber(eventData.amount)}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="start" className="form-label">
                        Fecha
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={eventData.date}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                        Tipo
                    </label>
                    <select
                        className="form-select"
                        id="type"
                        name="type"
                        value={eventData.type}
                        onChange={handleInputChange}
                    >
                        <option value="income">Ingreso</option>
                        <option value="expense">Egreso</option>
                        <option value="savings">Ahorro</option>
                    </select>
                </div>
                <button type="submit" className={`btn ${isEdit ? "btn-primary" : "btn-success"}`}>
                    <span>{isEdit ? "Guardar Cambios" : "Agregar Evento"}</span>
                    <i className={`bi ${isEdit ? "bi-pencil-square" : "bi-plus-square-dotted"} ms-2`}></i>
                </button>
            </form>
        </FloatWindow>
    );
};

export default PlanningEventForm;
