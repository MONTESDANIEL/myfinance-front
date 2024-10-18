import React, { useState, useEffect } from 'react';
import FloatWindow from '../../../../components/FloatWindow';

export const PlanningEvent = ({ selectedDate, events }) => {
    const [isOpen, setIsOpen] = useState(false); // Estado para manejar la ventana flotante
    const [eventDetails, setEventDetails] = useState([]); // Estado para almacenar detalles de eventos

    // Filtrar eventos para la fecha seleccionada
    useEffect(() => {
        if (selectedDate) {
            const eventsForDate = events.filter(event =>
                event.start.toISOString().split('T')[0] === selectedDate
            );

            const details = eventsForDate.map(event => ({
                title: event.title,
                date: new Date(event.start).toLocaleDateString('es-ES'),
                type: event.type || 'N/A', // Asume un tipo por defecto
                color: event.color || '#fff', // Color de fondo por defecto
            }));

            setEventDetails(details); // Establecer detalles de eventos en el estado
            setIsOpen(details.length > 0); // Abrir la ventana flotante solo si hay eventos
        }
    }, [selectedDate, events]); // Dependencias: cambia cuando selectedDate o events cambian

    const handleClose = () => {
        setIsOpen(false); // Cerrar la ventana flotante
    };

    return (
        <>
            {/* Ventana flotante para mostrar eventos */}
            <FloatWindow isOpen={isOpen} onClose={handleClose} title={`Eventos del día ${selectedDate}`}>
                {eventDetails.length > 0 ? (
                    eventDetails.map((event, index) => (
                        <div
                            key={index}
                            className="border rounded p-3 mb-2"
                            style={{ backgroundColor: event.color, color: 'black' }} // Asignar color de fondo desde el evento
                        >
                            <span className="fw-bold">{event.title}</span>
                            <div className="ms-2 mt-1">
                                <div><strong>Fecha:</strong> {event.date}</div>
                                <div><strong>Tipo:</strong> {event.type}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay eventos para el día {selectedDate}.</p>
                )}
            </FloatWindow>
        </>
    );
};
