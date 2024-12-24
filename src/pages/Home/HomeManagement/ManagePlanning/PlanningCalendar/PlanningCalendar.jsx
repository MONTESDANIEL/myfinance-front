import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import PlanningEvent from "./PlanningEvent";

import CardInfo from "@components/CardInfo";
import FloatWindow from "@components/FloatWindow";

import { useMovementPalette } from "@context/ColorContext";
import { useUser } from "@context/UserContext";

const localizer = momentLocalizer(moment);

const PlanningCalendar = () => {
  const { events } = useUser();
  const { colors } = useMovementPalette();

  const [isOpen, setIsOpen] = useState(false);

  const [newEvent, setNewEvent] = useState({
    amount: 0,
    title: "",
    start: "",
    type: "Ingreso",
  });

  const [selectedDate, setSelectedDate] = useState(null);

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
    setNewEvent({ title: "", start: "", type: "Ingreso" });
    handleClose();
  };

  const renderToolbar = (toolbar) => {
    return (
      <div className="d-flex align-items-center mb-2">
        <button
          onClick={() => toolbar.onNavigate("PREV")}
          className="btn btn-light me-2 btn-sm"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          onClick={() => toolbar.onNavigate("TODAY")}
          className="btn btn-light me-2 btn-sm"
        >
          <span>Hoy</span>
        </button>
        <button
          onClick={() => toolbar.onNavigate("NEXT")}
          className="btn btn-light btn-sm"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
        <div className="flex-grow-1 text-center mx-2">
          <span>{`${toolbar.label}`}</span>
        </div>
        <div className="ms-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-success btn-sm"
          >
            Agregar Evento
          </button>
        </div>
        {/* Ventana flotante para agregar eventos */}
        {isOpen && (
          <FloatWindow
            isOpen={isOpen}
            onClose={handleClose}
            title={`Agregar Evento`}
          >
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
                  value={newEvent.title}
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
                  id="start"
                  name="start"
                  value={newEvent.start}
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

  function convertToLocalDate(dateString) {
    const date = new Date(dateString);
    const localDate = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    );
    return localDate;
  }

  // Función para filtrar los eventos por tipo
  const filterEventsByType = (events) => {
    const filteredEvents = [];

    events.forEach((event) => {
      const eventDate = convertToLocalDate(event.date);

      const formattedEvent = {
        ...event,
        startDate: eventDate,
        endDate: eventDate,
        color:
          event.type === "income"
            ? colors.income[1]
            : event.type === "expense"
            ? colors.expense[1]
            : event.type === "savings"
            ? colors.savings[1]
            : "",
      };

      filteredEvents.push(formattedEvent);
    });

    return filteredEvents;
  };

  const filterAndFormatEvents = (events) => {
    const filteredEvents = {};

    events.forEach((event) => {
      const eventDate = convertToLocalDate(event.date).toDateString(); // Convertir fecha a local y a cadena
      const eventType = event.type;

      const formattedEvent = {
        ...event,
        startDate: convertToLocalDate(event.date),
        endDate: convertToLocalDate(event.date),
        color:
          event.type === "income"
            ? colors.income[1]
            : event.type === "expense"
            ? colors.expense[1]
            : event.type === "savings"
            ? colors.savings[1]
            : "",
      };

      // Inicializar el objeto para la fecha si no existe
      if (!filteredEvents[eventDate]) {
        filteredEvents[eventDate] = {};
      }

      // Si no existe un evento de este tipo para esta fecha, lo agrega
      if (!filteredEvents[eventDate][eventType]) {
        filteredEvents[eventDate][eventType] = formattedEvent;
      }
    });

    // Convertir el objeto de eventos filtrados a un array
    return Object.values(filteredEvents).flatMap((dateEvents) =>
      Object.values(dateEvents)
    );
  };

  // Función para manejar el clic en un día del calendario
  const handleDateClick = (slotInfo) => {
    const selectedDate = new Date(slotInfo.startDate);
    setSelectedDate(selectedDate);
  };

  return (
    <>
      <div className="row d-flex m-2">
        <div className="col-md-4 text-center">
          <CardInfo
            title="INGRESOS"
            icon="bi bi-graph-up"
            backgroundColor={colors.income[1]}
            mb="mb-0"
          />
        </div>
        <div className="col-md-4 text-center">
          <CardInfo
            title="AHORRO"
            icon="bi bi-piggy-bank"
            backgroundColor={colors.savings[1]}
            mb="mb-0"
          />
        </div>
        <div className="col-md-4 text-center">
          <CardInfo
            title="EGRESOS"
            icon="bi bi-graph-down"
            backgroundColor={colors.expense[1]}
            mb="mb-0"
          />
        </div>
      </div>

      <div className="card" style={{ overflowX: "auto" }}>
        <div
          className="card-body"
          style={{ minWidth: "600px", height: "680px" }}
        >
          <Calendar
            localizer={localizer}
            events={filterAndFormatEvents(events)}
            startAccessor="startDate"
            endAccessor="endDate"
            style={{ height: 650 }}
            dayPropGetter={(date) => {
              const isToday = date.toDateString() === new Date().toDateString();
              return isToday ? { style: { backgroundColor: "#767676" } } : {};
            }}
            components={{
              toolbar: renderToolbar,
              event: () => <div className="p-2"></div>,
            }}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.color, // Asegúrate de que el color esté disponible
                padding: "5px",
              },
            })}
            onSelectEvent={handleDateClick} // Aquí se pasa la función handleDateClick
            onDrillDown={{}}
          />
          <PlanningEvent
            selectedDate={selectedDate}
            events={filterEventsByType(events)}
          />
        </div>
      </div>
    </>
  );
};

export default PlanningCalendar;
