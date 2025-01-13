import React, { useState, useEffect, useMemo } from "react";
import FloatWindow from "@components/FloatWindow";
import PlanningEventForm from "./PlanningEventForm";
import { deleteUserEvent } from "@api/EventsApi";

// Función para formatear las fechas
const formatDate = (date) => {
  return `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getFullYear()}`;
};

// Función para formatear números
const formatNumber = (value) => {
  if (value == null || value === "") return "";
  return Number(value).toLocaleString("en-US");
};

// Función para transformar el tipo de evento
const translateType = (type) => {
  const types = {
    income: "Ingreso",
    expense: "Egreso",
    savings: "Ahorro",
  };
  return types[type] || type;
};

const PlanningEvent = ({ selectedDate, events }) => {
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);
  const [updateIsOpen, setUpdateIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [adjustedSelectedDate, setAdjustedSelectedDate] = useState("");

  // Lógica para ajustar la fecha seleccionada
  useEffect(() => {
    if (selectedDate) {
      const adjustedDate = formatDate(selectedDate);
      setAdjustedSelectedDate(adjustedDate);
    }
  }, [selectedDate]);

  // Filtramos y formateamos los eventos solo cuando cambia la fecha seleccionada o los eventos
  const eventDetails = useMemo(() => {
    if (!selectedDate) return [];

    // Convertir selectedDate a un formato sin hora para comparación
    const selectedDateFormatted = new Date(selectedDate).toLocaleDateString("es-CO");

    const eventsForDate = events.filter((event) => {
      // Convertir startDate del evento a un formato sin hora
      const eventStartDateFormatted = new Date(event.startDate).toLocaleDateString("es-CO");
      return eventStartDateFormatted === selectedDateFormatted;
    });

    return eventsForDate.map((event) => {
      return {
        id: event.id,
        userId: event.userId,
        title: event.title,
        date: event.date,
        amount: formatNumber(event.amount),
        type: event.type,
        color: event.color,
      };
    });
  }, [selectedDate, events]);

  // Abrir la ventana manualmente cuando el usuario selecciona una fecha con eventos
  useEffect(() => {
    if (selectedDate && eventDetails.length > 0) {
      setDetailsIsOpen(true); // Abrir solo si hay eventos para la fecha seleccionada
    }
  }, [selectedDate, eventDetails]);

  const handleCloseDetails = () => {
    setDetailsIsOpen(false);
  };

  const handleCloseUpdate = () => {
    setUpdateIsOpen(false);
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();

    try {
      await deleteUserEvent(id);
      window.location.reload();
    } catch (error) {
      console.log("Ocurrió un error inesperado");
    }
  }

  const unformatNumber = (formattedValue) => {
    if (!formattedValue || typeof formattedValue !== "string") return "0";
    return formattedValue.replace(/,/g, "");
  };

  const handleUpdate = (event) => {
    const { color, amount, ...rest } = event; // Extrae `color` y `amount`, mantiene el resto

    const unformattedAmount = unformatNumber(amount); // Quita el formato del campo `amount`

    setSelectedEvent({
      ...rest, // Los demás campos del evento
      amount: unformattedAmount, // `amount` sin formato
    });

    setDetailsIsOpen(false); // Cierra la ventana de detalles
    setUpdateIsOpen(true); // Abre la ventana de actualización
  };

  return (
    <>
      <FloatWindow
        isOpen={detailsIsOpen}
        onClose={handleCloseDetails}
        title={`Eventos del día ${adjustedSelectedDate}`}
      >
        {eventDetails.length === 0 ? (
          <p>No hay eventos para esta fecha.</p>
        ) : (
          eventDetails.map((event, index) => (
            <div
              key={index}
              className="border rounded p-3 mb-2"
              style={{ backgroundColor: event.color, color: "black" }}
            >
              <div className="row">
                <div className="col-10 mt-1">
                  <h5 className="fw-bold">{event.title}</h5>
                  <div>
                    <strong>Cantidad:</strong> {event.amount}
                  </div>
                  <div>
                    <strong>Tipo:</strong> {translateType(event.type)}
                  </div>
                </div>
                <div className="col-2 d-flex flex-column justify-content-center align-items-end pe-4">
                  <div className="d-flex flex-column">
                    <button className="btn btn-sm btn-dark mb-2 border-1" onClick={() => handleUpdate(event)}>
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-sm btn-dark border-0" onClick={(e) => handleDelete(e, event.id)}>
                      <i className="bi bi-trash-fill"></i>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </FloatWindow>
      <PlanningEventForm
        isOpen={updateIsOpen}
        onClose={handleCloseUpdate}
        event={selectedEvent}
      />
    </>
  );
};

export default PlanningEvent;
