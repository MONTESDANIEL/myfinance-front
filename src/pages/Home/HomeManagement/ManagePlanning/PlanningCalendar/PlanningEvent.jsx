import React, { useState, useEffect } from 'react';
import FloatWindow from '@components/FloatWindow';

const PlanningEvent = ({ selectedDate, events }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [eventDetails, setEventDetails] = useState([]);

    useEffect(() => {
        if (selectedDate) {
            const eventsForDate = events.filter(event =>
                event.start.toISOString().split('T')[0] === selectedDate
            );

            const details = eventsForDate.map(event => {
                const isSingleDayEvent = new Date(event.originalStart).toLocaleDateString('es-ES') === new Date(event.originalEnd).toLocaleDateString('es-ES');

                return {
                    title: event.title,
                    start: event.originalStart
                        ? new Date(event.originalStart).toLocaleDateString('es-ES')
                        : new Date(event.start).toLocaleDateString('es-ES'),
                    end: event.originalEnd
                        ? new Date(event.originalEnd).toLocaleDateString('es-ES')
                        : new Date(event.end).toLocaleDateString('es-ES'),
                    type: event.type,
                    color: event.color,
                    message: isSingleDayEvent ? 'Este evento es solo de un día.' : ''
                };
            });

            setEventDetails(details);
            setIsOpen(details.length > 0);
        } else {
            setIsOpen(false);
        }
    }, [selectedDate, events]);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <FloatWindow isOpen={isOpen} onClose={handleClose} title={`Eventos del día ${selectedDate}`}>
                {
                    eventDetails.map((event, index) => (
                        <div
                            key={index}
                            className="border rounded p-3 mb-2"
                            style={{ backgroundColor: event.color, color: 'black' }}
                        >
                            <span className="fw-bold">{event.title}</span>
                            <div className="ms-2 mt-1">
                                {new Date(event.start).toLocaleDateString() === new Date(event.end).toLocaleDateString() ? (
                                    <div><strong>Este evento es solo de un día.</strong></div>
                                ) : (
                                    <>
                                        <div><strong>Fecha Inicio:</strong> {event.start}</div>
                                        <div><strong>Fecha Fin:</strong> {event.end}</div>
                                    </>
                                )}
                                <div><strong>Tipo:</strong> {event.type}</div>
                            </div>
                        </div>
                    ))
                }
            </FloatWindow>
        </>
    );
};

export default PlanningEvent;
