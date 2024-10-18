import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { PlanningEvent } from './PlanningEvent';

const localizer = momentLocalizer(moment);

export const PlanningCalendar = () => {

    // Datos de prueba
    const [events, setEvents] = useState([
        {
            title: 'Ingreso de sueldo',
            start: new Date(2024, 9, 1), // 1 de octubre
            end: new Date(2024, 9, 1),
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
            start: new Date(2024, 9, 1),
            type: 'Ahorro'
        },
        {
            title: 'Ingreso de sueldo',
            start: new Date(2024, 9, 1), // 1 de octubre
            end: new Date(2024, 9, 1),
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
            start: new Date(2024, 9, 1),
            type: 'Ahorro'
        },
        {
            title: 'Pago de servicios',
            start: new Date(2024, 9, 3), // 3 de octubre
            end: new Date(2024, 9, 3),
            type: 'Egreso'
        },
        {
            title: 'Compra de material',
            start: new Date(2024, 9, 4), // 4 de octubre
            end: new Date(2024, 9, 4),
            type: 'Egreso'
        },
        {
            title: 'Ingreso de freelance',
            start: new Date(2024, 9, 5), // 5 de octubre
            end: new Date(2024, 9, 5),
            type: 'Ingreso'
        },
        {
            title: 'Inversión en acciones',
            start: new Date(2024, 9, 6), // 6 de octubre
            end: new Date(2024, 9, 6),
            type: 'Ahorro'
        },
        {
            title: 'Pago de gimnasio',
            start: new Date(2024, 9, 8), // 8 de octubre
            end: new Date(2024, 9, 8),
            type: 'Egreso'
        },
        {
            title: 'Ingreso de bonificación',
            start: new Date(2024, 9, 10), // 10 de octubre
            end: new Date(2024, 9, 10),
            type: 'Ingreso'
        },
        {
            title: 'Inversión en fondo',
            start: new Date(2024, 9, 15), // 15 de octubre
            end: new Date(2024, 9, 15),
            type: 'Ahorro'
        },
        {
            title: 'Pago de suscripción',
            start: new Date(2024, 9, 17), // 17 de octubre
            end: new Date(2024, 9, 17),
            type: 'Egreso'
        },
        {
            title: 'Ingreso de devolución de impuestos',
            start: new Date(2024, 9, 20), // 20 de octubre
            end: new Date(2024, 9, 20),
            type: 'Ingreso'
        },
        {
            title: 'Inversión en criptomonedas',
            start: new Date(2024, 9, 22), // 22 de octubre
            end: new Date(2024, 9, 22),
            type: 'Ahorro'
        },
        {
            title: 'Pago de seguros',
            start: new Date(2024, 9, 25), // 25 de octubre
            end: new Date(2024, 9, 25),
            type: 'Egreso'
        },
        {
            title: 'Ingreso de regalo de cumpleaños',
            start: new Date(2024, 9, 28), // 28 de octubre
            end: new Date(2024, 9, 28),
            type: 'Ingreso'
        },
        {
            title: 'Ahorro para vacaciones',
            start: new Date(2024, 9, 30), // 30 de octubre
            end: new Date(2024, 9, 30),
            type: 'Ahorro'
        }
    ]);

    const cleanEvents = (events) => {
        const eventTypesByDate = {}; // Objeto para rastrear los tipos de eventos por fecha
        return events.reduce((acc, event) => {
            const eventDate = event.start.toISOString().split('T')[0]; // Obtener la fecha en formato YYYY-MM-DD
            let color;

            // Asignar colores en formato hexadecimal
            switch (event.type) {
                case 'Ingreso':
                    color = '#28a745'; // Hexadecimal para success (verde)
                    break;
                case 'Egreso':
                    color = '#ffc107'; // Hexadecimal para warning (amarillo)
                    break;
                case 'Ahorro':
                    color = '#17a2b8'; // Hexadecimal para info (azul)
                    break;
                default:
                    color = '';
            }

            // Inicializamos el objeto para la fecha si no existe
            if (!eventTypesByDate[eventDate]) {
                eventTypesByDate[eventDate] = {};
            }

            // Si aún no hemos agregado un evento de este tipo para esta fecha, lo agregamos
            if (!eventTypesByDate[eventDate][event.type]) {
                eventTypesByDate[eventDate][event.type] = true; // Marcamos este tipo como agregado para esta fecha
                acc.push({
                    ...event,
                    title: '', // Elimina el título
                    color
                });
            }

            return acc; // Devolver el acumulador
        }, []);
    };

    const addColorEvents = (events) => {
        return events.map(event => {
            let color;

            // Asignar colores en formato hexadecimal
            switch (event.type) {
                case 'Ingreso':
                    color = '#28a745'; // Hexadecimal para success (verde)
                    break;
                case 'Egreso':
                    color = '#ffc107'; // Hexadecimal para warning (amarillo)
                    break;
                case 'Ahorro':
                    color = '#17a2b8'; // Hexadecimal para info (azul)
                    break;
                default:
                    color = '';
            }

            return {
                ...event,
                color // Mantiene todos los detalles y agrega el color
            };
        });
    };

    const eventsComplete = addColorEvents(events);  // Para obtener los títulos

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

    const dayPropGetter = (date) => {
        const today = new Date();
        const isToday =
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();

        return isToday ? { style: { backgroundColor: '#8a8a8a' } } : {};
    };

    const eventStyleGetter = (event) => {
        const backgroundColor = event.color || '#ffffff'; // Color por defecto si no se especifica
        return {
            style: {
                backgroundColor,
                padding: '10px',
            },
        };
    };

    const filteredColoredEvents = cleanEvents(events);

    const [selectedDate, setSelectedDate] = useState(null); // Estado para la fecha seleccionada

    const handleDateClick = (slotInfo) => {
        const selectedDateString = slotInfo.start.toISOString().split('T')[0];

        // Si se selecciona el mismo día, forzar un nuevo render
        if (selectedDate === selectedDateString) {
            setSelectedDate(null); // Resetea la fecha seleccionada
            setTimeout(() => {
                setSelectedDate(selectedDateString); // Establece la fecha seleccionada nuevamente
            }, 0);
        } else {
            setSelectedDate(selectedDateString); // Actualiza la fecha seleccionada
        }
    };

    const CustomEvent = (event) => {
        return (
            <div className='p-2'>
            </div>
        );
    };


    return (
        <div style={{ overflowX: 'auto' }}>
            <div
                className="card-body align-items-center justify-content-center"
                style={{ minWidth: '600px', height: '680px' }}
            >
                <Calendar
                    localizer={localizer}
                    events={filteredColoredEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 650 }}
                    dayPropGetter={dayPropGetter}
                    components={{
                        toolbar: renderToolbar,
                        event: CustomEvent,
                    }} // Asignar los componentes personalizados

                    eventPropGetter={eventStyleGetter}
                    selectable // Hacer el calendario seleccionable
                    onSelectEvent={handleDateClick} // Cambia según lo que necesites
                    onSelectSlot={handleDateClick}  // Cambia según lo que necesites
                    onDrillDown={{}}
                />
                <PlanningEvent selectedDate={selectedDate} events={eventsComplete} />
            </div>
        </div >
    );

}