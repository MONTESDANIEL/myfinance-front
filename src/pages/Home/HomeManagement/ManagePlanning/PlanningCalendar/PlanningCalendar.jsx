import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import PlanningEvent from './PlanningEvent';
import CardInfo from '@components/CardInfo';
import { movementPalette as colors } from '@components/Colors';
import FloatWindow from '@components/FloatWindow';
import events from '@data/eventsData.js'

const localizer = momentLocalizer(moment);

const PlanningCalendar = () => {

    const renderToolbar = (toolbar) => {
        const [isOpen, setIsOpen] = useState(false);
        const [eventDetails, setEventDetails] = useState([]);
        const [newEvent, setNewEvent] = useState({
            title: '',
            start: '',
            end: '',
            type: 'Ingreso' // Valor por defecto
        });

        const handleClose = () => {
            setIsOpen(false);
        };

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setNewEvent({ ...newEvent, [name]: value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Añadir el nuevo evento a la lista de eventos
            setEventDetails([...eventDetails, newEvent]);
            setNewEvent({ title: '', start: '', end: '', type: 'Ingreso' }); // Reiniciar el formulario
            handleClose();
        };

        return (
            <div className="d-flex align-items-center mb-2">
                <button
                    onClick={() => toolbar.onNavigate('PREV')}
                    className="btn btn-light me-2 btn-sm"
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    onClick={() => toolbar.onNavigate('TODAY')}
                    className="btn btn-light me-2 btn-sm"
                >
                    <span>Hoy</span>
                </button>
                <button
                    onClick={() => toolbar.onNavigate('NEXT')}
                    className="btn btn-light btn-sm"
                >
                    <i className="bi bi-chevron-right"></i>
                </button>
                <div className="flex-grow-1 text-center mx-2">
                    <span>{`${toolbar.label}`}</span>
                </div>
                <div className="ms-auto">
                    <button
                        onClick={() => { setIsOpen(true); }}
                        className="btn btn-success btn-sm"
                    >
                        Agregar Evento
                    </button>
                </div>

                {/* Ventana flotante para agregar eventos */}
                {isOpen && (
                    <FloatWindow isOpen={isOpen} onClose={handleClose} title={`Agregar Evento`}>
                        <form onSubmit={handleSubmit} className="mb-3">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Título</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={newEvent.title}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="start" className="form-label">Fecha de Inicio</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="start"
                                    name="start"
                                    value={newEvent.start}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="end" className="form-label">Fecha de Fin</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="end"
                                    name="end"
                                    value={newEvent.end}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Tipo</label>
                                <select
                                    className="form-select"
                                    id="type"
                                    name="type"
                                    value={newEvent.type}
                                    onChange={handleInputChange}
                                >
                                    <option value="Ingreso">Ingreso</option>
                                    <option value="Egreso">Egreso</option>
                                    <option value="Ahorro">Ahorro</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-success">
                                <span>Agregar Evento</span>
                                <i className="bi bi-plus-square-dotted ms-2"></i>
                            </button>
                        </form>
                    </FloatWindow>
                )}
            </div>
        );
    };

    const complementEvents = (events) => {
        const eventColors = {
            'Ingreso': colors.income[1],
            'Egreso': colors.expense[1],
            'Ahorro': colors.savings[1]
        };

        const getDaysBetween = (startDate, endDate) => {
            const days = [];
            let currentDate = new Date(startDate);
            while (currentDate <= endDate) {
                days.push(new Date(currentDate)); // Añade una copia de la fecha actual
                currentDate.setDate(currentDate.getDate() + 1); // Avanza un día
            }
            return days;
        };

        return events.flatMap(event => {
            const days = getDaysBetween(new Date(event.start), new Date(event.end));
            return days.map(day => {
                const isSingleDayEvent = event.start.toISOString().split('T')[0] === event.end.toISOString().split('T')[0];
                return {
                    ...event,
                    start: day,
                    end: day, // Establece la fecha de fin al mismo día
                    color: eventColors[event.type],
                    ...(isSingleDayEvent ? {} : { originalStart: new Date(event.start), originalEnd: new Date(event.end) }), // Agrega originalStart solo si no es un evento de un solo día
                };
            });
        });

    };

    // Funcion para filtrar los tipos de eventos existentes en cada dia
    const filterEventsByType = (events) => {
        const filteredEvents = {};

        events.forEach(event => {
            const eventDate = event.start.toDateString(); // Convierte la fecha a una cadena para usarla como clave
            const eventType = event.type;

            // Verifica si ya hay un evento del mismo tipo para esta fecha
            if (!filteredEvents[eventDate]) {
                filteredEvents[eventDate] = {}; // Inicializa un objeto para la fecha si no existe
            }

            // Si no hay un evento de este tipo para esta fecha, lo agrega
            if (!filteredEvents[eventDate][eventType]) {
                filteredEvents[eventDate][eventType] = event;
            }
        });

        // Convierte el objeto de eventos filtrados a un array
        return Object.values(filteredEvents).flatMap(dateEvents => Object.values(dateEvents));
    };

    const handleDateClick = (slotInfo) => {
        const selectedDateString = slotInfo.start.toISOString().split('T')[0];

        setSelectedDate(null);
        setTimeout(() => {
            setSelectedDate(selectedDateString);
        }, 0);
    };

    // Fecha seleccionada por el usuario
    const [selectedDate, setSelectedDate] = useState(null);

    return (

        < >
            <div className="row d-flex m-2">
                <div className="col-md-4 text-center">
                    <CardInfo
                        title='INGRESOS'
                        icon='bi bi-graph-up'
                        backgroundColor={colors.income[1]}
                        mb="mb-0"
                    />
                </div>
                <div className="col-md-4 text-center">
                    <CardInfo
                        title='AHORRO'
                        icon='bi bi-piggy-bank'
                        backgroundColor={colors.savings[1]}
                        mb="mb-0"
                    />
                </div>
                <div className="col-md-4 text-center">
                    <CardInfo
                        title='EGRESOS'
                        icon='bi bi-graph-down'
                        backgroundColor={colors.expense[1]}
                        mb="mb-0"
                    />
                </div>
            </div>

            <div className="card" style={{ overflowX: 'auto' }}>
                <div
                    className="card-body"
                    style={{ minWidth: '600px', height: '680px' }}
                >
                    <Calendar
                        localizer={localizer}
                        events={filterEventsByType(complementEvents(events))}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 650 }}
                        dayPropGetter={
                            (date) => {
                                const isToday = date.toDateString() === new Date().toDateString();
                                return isToday ? { style: { backgroundColor: '#9f9f9f' } } : {};
                            }
                        }
                        components={{
                            toolbar: renderToolbar,
                            event: () => (
                                <div className='p-2'></div>
                            )
                        }}
                        eventPropGetter={(event) => ({
                            style: {
                                backgroundColor: event.color,
                                padding: '5px',
                            },
                        })}
                        onSelectEvent={handleDateClick}
                        onDrillDown={{}}
                    />
                    <PlanningEvent selectedDate={selectedDate} events={complementEvents(events)} />
                </div>
            </div >

        </>
    );

}

export default PlanningCalendar;