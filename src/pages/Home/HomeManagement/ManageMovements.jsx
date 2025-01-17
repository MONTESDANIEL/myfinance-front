import { useState, useEffect } from "react";
import InputCash from "@components/inputCash";
import FormField from "@components/FormField";
import FloatWindow from "@components/FloatWindow";

import { useUser } from "@context/UserContext";
import { useMovementPalette } from "@context/ColorContext";
import {
  newUserMovement,
  deleteUserMovement,
  updateUserMovement,
} from "@api/MovementsApi";

const formatNumber = (value) => {
  if (value === null || value === undefined || value === "") return "";
  return Number(value).toLocaleString("en-US");
};

const unformatNumber = (formattedValue) => {
  if (!formattedValue || typeof formattedValue !== "string") return "0";
  return formattedValue.replace(/,/g, "");
};

const ListItem = ({
  id,
  date,
  description,
  amount,
  movementType,
  goal,
  tag,
  onEdit,
}) => {
  const { colors } = useMovementPalette();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const typeTranslation = {
    income: "Ingreso",
    savings: "Ahorro",
    expense: "Egreso",
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const message = await deleteUserMovement(id); // Llama a la función de API
      console.log(message);
      window.location.reload();
    } catch (error) {
      console.log("Ocurrió un error inesperado");
    }
  };

  const handleEdit = () => {
    onEdit({
      id,
      date,
      description,
      amount,
      movementType,
      tagId: tag ? tag.id : null,
    });
  };

  return (
    <div
      className="border p-3"
      style={{ cursor: "pointer" }}
      onClick={toggleDetails}
      key={id}
    >
      <div className="d-flex justify-content-between align-items-center">
        <span className="fw-bold">{description}</span>
        <div className="d-flex align-items-center">
          <span
            className={`d-none d-md-block`}
            style={{ color: colors[movementType][1] }}
          >
            {amount.toLocaleString("es-ES", {
              style: "currency",
              currency: "COP",
            })}
          </span>
          <span>
            <i
              className={`d-none d-md-block ${isOpen
                ? "bi bi-chevron-compact-up ms-3"
                : "bi bi-chevron-compact-down ms-3"
                }`}
            ></i>
          </span>
          <span>
            <i
              className={`d-block d-md-none ${isOpen
                ? "bi bi-chevron-compact-up ms-3"
                : "bi bi-chevron-compact-down ms-3"
                }`}
              style={{ color: colors[movementType][2] }}
            ></i>
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="m-2">
          <span
            className={`d-block d-md-none`}
            style={{ color: colors[movementType][1] }}
          >
            <strong>Monto:</strong>{" "}
            {amount.toLocaleString("es-ES", {
              style: "currency",
              currency: "COP",
            })}
          </span>

          <div className="row">
            <div className="col-md-6 mb-1">
              <div>
                <strong>Fecha:</strong>{" "}
                {new Date(date).toLocaleDateString("es-ES")}
              </div>
              <div>
                <strong>Tipo:</strong> {typeTranslation[movementType]}
              </div>
              <div>
                <strong>Meta:</strong>{" "}
                {goal ? goal.title : "No tiene una meta asignada"}
              </div>
              <div>
                <strong>Etiqueta:</strong>{" "}
                {tag ? tag.name : "No tiene una etiqueta"}
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center mt-2">
              <button
                className="btn btn-sm btn-warning ms-3 border-1"
                onClick={handleEdit}
              >
                <i className="bi bi-pencil-square"></i>
              </button>
              <button
                className="btn btn-sm btn-danger ms-3 border-0"
                onClick={handleDelete}
              >
                <i className="bi bi-trash-fill text-black"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Movements = ({
  isOpen,
  onClose,
  title,
  id,
  date,
  amount,
  description,
  movementType,
  goalId,
  tagId,
}) => {
  const { tags, goals } = useUser();
  const [amountState, setAmount] = useState(amount);
  const [dateState, setDate] = useState(date);
  const [descriptionState, setDescription] = useState(description);
  const [movementTypeState, setMovementType] = useState(movementType);
  const [selectedTag, setSelectedTag] = useState(tagId);
  const [selectedGoal, setSelectedGoal] = useState(goalId);

  useEffect(() => {
    if (isOpen) {
      setAmount(formatNumber(amount)); // Formatear al abrir
      setDate(date);
      setDescription(description);
      setMovementType(movementType);
      setSelectedTag(tagId);
      setSelectedGoal(goalId);
    }
  }, [isOpen, amount, date, description, movementType, tagId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newMovement = {
      id,
      date: dateState,
      description: descriptionState,
      amount: parseInt(unformatNumber(amountState), 10), // Remueve formato
      movementType: movementTypeState,
      goalId: selectedGoal ? selectedGoal : 0,
      tag: selectedTag ? { id: selectedTag } : null,
    };

    try {
      if (id) {
        await updateUserMovement(newMovement);
      } else {
        await newUserMovement(newMovement);
      }
      window.location.reload();
    } catch (error) {
      console.log("Ocurrió un error inesperado");
    }
  };

  return (
    <FloatWindow isOpen={isOpen} onClose={onClose} title={title} size="lg">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Monto
              </label>
              <InputCash
                value={amountState}
                placeholder="Ingrese el monto"
                onChange={(value) => setAmount(value)}
              />
            </div>
            <div className="mb-3">
              <FormField
                label="Fecha"
                type="date"
                id="movementDate"
                placeholder="Ingresa la fecha en la que se realizó el movimiento"
                value={dateState}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Ingrese una descripción"
                value={descriptionState}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Tipo
              </label>
              <select
                className="form-select"
                id="type"
                value={movementTypeState}
                onChange={(e) => setMovementType(e.target.value)}
              >
                <option value="income">Ingreso</option>
                <option value="expense">Egreso</option>
                <option value="savings">Ahorro</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                Metas
              </label>
              <select
                className="form-select"
                id="tag"
                value={selectedGoal || ""}
                onChange={(e) =>
                  setSelectedGoal(
                    e.target.value ? parseInt(e.target.value) : null
                  )
                }
              >
                <option value="">Sin meta</option>
                {goals.map((goals) => (
                  <option key={goals.id} value={goals.id}>
                    {goals.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                Etiquetas
              </label>
              <select
                className="form-select"
                id="tag"
                value={selectedTag || ""}
                onChange={(e) =>
                  setSelectedTag(
                    e.target.value ? parseInt(e.target.value) : null
                  )
                }
              >
                <option value="">Sin etiqueta</option>
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              <span>Guardar</span>
              <i className="bi bi-save ms-2"></i>
            </button>
          </form>
        </div>
      </div>
    </FloatWindow>
  );
};

const ManageMovements = () => {
  const { movements } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [floatTitle, setFloatTitle] = useState("");
  const [movementProps, setMovementProps] = useState({});

  const handleOpen = (movementData) => {
    setFloatTitle(movementData?.id ? "Editar Movimiento" : "Nuevo Movimiento");
    setMovementProps(
      movementData?.id
        ? movementData
        : {
          id: null,
          date: "",
          description: "",
          amount: "",
          movementType: "income",
          tagId: null,
        }
    );
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="text-center">
        <h1>Movimientos</h1>
        <p className="text-muted">
          Registra y revisa todos tus movimientos financieros
        </p>
      </div>

      <div className="container-fluid rounded px-2 py-3 bg-body-tertiary">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span className="mb-md-0 p-2">Ver Movimientos</span>
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={() => handleOpen({})}
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>

          <div
            className="card-body p-0"
            style={{ maxHeight: "800px", overflowY: "auto" }}
          >
            <div className="list-responsive">
              {movements.length > 0 ? (
                movements.map((row) => (
                  <ListItem key={row.id} {...row} onEdit={handleOpen} />
                ))
              ) : (
                <div className="container p-3 text-center">
                  <span>No existe ningún movimiento</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Movements
        isOpen={isOpen}
        onClose={handleClose}
        title={floatTitle}
        {...movementProps}
      />
    </>
  );
};

export default ManageMovements;
