import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import PlanningEvent from "./PlanningEvent";
import PlanningEventForm from "./PlanningEventForm";

import CardInfo from "@components/CardInfo";

import { useMovementPalette } from "@context/ColorContext";
import { useUser } from "@context/UserContext";

const localizer = momentLocalizer(moment);

const PlanningCalendar = () => {
  const { events } = useUser();
  const { colors } = useMovementPalette();

  const [selectedDate, setSelectedDate] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = (date) => {
    setSelectedDate(date);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const renderToolbar = (toolbar) => {
    const handleNavigate = (action) => {
      if (toolbar.onNavigate) {
        toolbar.onNavigate(action);
      }
    };

    return (
      <div className="d-flex align-items-center mb-2">
        <button
          onClick={() => handleNavigate("PREV")}
          className="btn btn-light me-2 btn-sm"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          onClick={() => handleNavigate("TODAY")}
          className="btn btn-light me-2 btn-sm"
        >
          <span>Hoy</span>
        </button>
        <button
          onClick={() => handleNavigate("NEXT")}
          className="btn btn-light btn-sm"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
        <div className="flex-grow-1 text-center mx-2">
          <span>{`${toolbar.label}`}</span>
        </div>
        <div className="ms-auto">
          <button
            onClick={() => openForm(null)}
            className="btn btn-success btn-sm"
          >
            Agregar Evento
          </button>
        </div>
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

  const handleEventClick = (event) => {
    const selectedDate = new Date(event.startDate);
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
                backgroundColor: event.color,
                padding: "5px",
              },
            })}
            onSelectEvent={handleEventClick} // Aquí debería llamarse correctamente a openEventDetails
            onDrillDown={{}}
          />
          <PlanningEvent
            selectedDate={selectedDate}
            events={filterEventsByType(events)} // Asegúrate de pasar todos los eventos al componente
          />
        </div>
      </div>


      {/* Formulario flotante para agregar evento */}
      {isFormOpen && (
        <PlanningEventForm
          isOpen={isFormOpen}
          onClose={closeForm}
        />
      )}
    </>
  );
};

export default PlanningCalendar;
