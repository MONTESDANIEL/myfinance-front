import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import PlanningEvent from './PlanningEvent';
import CardInfo from '@components/CardInfo';

import colors from '@components/Colors';

const localizer = momentLocalizer(moment);

const PlanningCalendar = () => {

    const [events, setEvents] = useState([
        // Día con múltiples eventos de diferentes tipos
        {
            title: 'Ingreso de sueldo',
            start: new Date(2024, 9, 1), // 1 de octubre
            end: new Date(2024, 9, 3),
            type: 'Ingreso'
        },
        {
            title: 'Pago de alquiler',
            start: new Date(2024, 9, 1), // 1 de octubre
            end: new Date(2024, 9, 1),
            type: 'Egreso'
        },
        {
            title: 'Inversión en acciones',
            start: new Date(2024, 9, 1), // 1 de octubre
            end: new Date(2024, 9, 1),
            type: 'Ahorro'
        },
        {
            title: 'Gasto de emergencia',
            start: new Date(2024, 9, 1), // 1 de octubre
            end: new Date(2024, 9, 1),
            type: 'Egreso'
        },

        // Día con un solo tipo de evento
        {
            title: 'Inversión en acciones',
            start: new Date(2024, 9, 2), // 2 de octubre
            end: new Date(2024, 9, 2),
            type: 'Ahorro'
        },

        // Día con pocos eventos
        {
            title: 'Pago de servicios',
            start: new Date(2024, 9, 4), // 4 de octubre
            end: new Date(2024, 9, 4),
            type: 'Egreso'
        },

        // Día con múltiples eventos de un tipo
        {
            title: 'Ingreso de freelance',
            start: new Date(2024, 9, 5), // 5 de octubre
            end: new Date(2024, 9, 5),
            type: 'Ingreso'
        },
        {
            title: 'Ingreso de royalties',
            start: new Date(2024, 9, 5), // 5 de octubre
            end: new Date(2024, 9, 5),
            type: 'Ingreso'
        },
        {
            title: 'Ingreso por venta de artículo',
            start: new Date(2024, 9, 5), // 5 de octubre
            end: new Date(2024, 9, 5),
            type: 'Ingreso'
        },

        // Otro día con eventos variados
        {
            title: 'Inversión en criptomonedas',
            start: new Date(2024, 9, 6), // 6 de octubre
            end: new Date(2024, 9, 6),
            type: 'Ahorro'
        },
        {
            title: 'Pago de gimnasio',
            start: new Date(2024, 9, 6), // 6 de octubre
            end: new Date(2024, 9, 6),
            type: 'Egreso'
        },

        // Un día con varios eventos de diferentes tipos
        {
            title: 'Ingreso de bonificación',
            start: new Date(2024, 9, 10), // 10 de octubre
            end: new Date(2024, 9, 10),
            type: 'Ingreso'
        },
        {
            title: 'Inversión en fondo',
            start: new Date(2024, 9, 10), // 10 de octubre
            end: new Date(2024, 9, 10),
            type: 'Ahorro'
        },
        {
            title: 'Pago de suscripción',
            start: new Date(2024, 9, 10), // 10 de octubre
            end: new Date(2024, 9, 10),
            type: 'Egreso'
        },

        // Día con solo un evento
        {
            title: 'Gasto de salud',
            start: new Date(2024, 9, 15), // 15 de octubre
            end: new Date(2024, 9, 15),
            type: 'Egreso'
        },

        // Varios eventos en un día
        {
            title: 'Ingreso de devolución de impuestos',
            start: new Date(2024, 9, 20), // 20 de octubre
            end: new Date(2024, 9, 20),
            type: 'Ingreso'
        },
        {
            title: 'Ahorro para vacaciones',
            start: new Date(2024, 9, 20), // 20 de octubre
            end: new Date(2024, 9, 20),
            type: 'Ahorro'
        },
        {
            title: 'Pago de seguros',
            start: new Date(2024, 9, 20), // 20 de octubre
            end: new Date(2024, 9, 20),
            type: 'Egreso'
        },

        // Un día más con varios eventos de diferentes tipos
        {
            title: 'Ingreso de regalo de cumpleaños',
            start: new Date(2024, 9, 28), // 28 de octubre
            end: new Date(2024, 9, 28),
            type: 'Ingreso'
        },
        {
            title: 'Inversión en acciones',
            start: new Date(2024, 9, 28), // 28 de octubre
            end: new Date(2024, 9, 28),
            type: 'Ahorro'
        },
    ]);

    // Barra de herramientas/Opciones del calendario
    const renderToolbar = (toolbar) => {
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
                        onClick={() => { alert(`No hay eventos para el día.`); }} // Abre la ventana modal
                        className="btn btn-success btn-sm"
                    >
                        Agregar Evento
                    </button>
                </div>
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
    console.log(complementEvents(events));

    //
    const handleDateClick = (slotInfo) => {
        const selectedDateString = slotInfo.start.toISOString().split('T')[0];

        setSelectedDate(null);
        setTimeout(() => {
            setSelectedDate(selectedDateString);
        }, 0);

    };

    // Fecha seleccionada por el usuario
    const [selectedDate, setSelectedDate] = useState(null);

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

    return (

        < >

            <h2 className='my-4 text-center'>Calendario de planificación</h2>

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

                        // Agregamos una barra de herramientas y unos eventos personalizados en el calendario
                        components={{
                            toolbar: renderToolbar,
                            event: () => (
                                <div className='p-2'></div>
                            )
                        }}

                        // Aplica un estilo personalizados a los eventos
                        eventPropGetter={(event) => ({
                            style: {
                                backgroundColor: event.color,
                                padding: '5px',
                            },
                        })}

                        onSelectEvent={handleDateClick}
                        onDrillDown={{}} // Elimina la funcion por defecto del click en los números
                    />
                    <PlanningEvent selectedDate={selectedDate} events={complementEvents(events)} />
                </div>
            </div >

        </>
    );

}

export default PlanningCalendar;