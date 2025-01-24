import React, { useState } from "react";
import { useUser } from "@context/UserContext";
import { newUserTag, deleteUserTag, updateUserTag } from "@api/TagsApi";

// Componente para gestionar etiquetas personalizadas
const CustomizationTags = () => {
    const [newTag, setNewTag] = useState("");
    const [editingTagId, setEditingTagId] = useState(null);
    const [editedTagName, setEditedTagName] = useState("");
    const { user, tags } = useUser();

    const handleAddTag = async (event) => {
        event.preventDefault();

        if (!newTag.trim()) return;

        const newTagObject = {
            name: newTag,
            isGlobal: false,
            userId: user.id,
        };

        try {
            await newUserTag(newTagObject);
            window.location.reload(); // Refrescar etiquetas
        } catch (error) {
            console.error("Error al agregar etiqueta:", error);
        }
    };

    const handleDeleteTag = async (tagId) => {
        try {
            await deleteUserTag(tagId);
            window.location.reload(); // Refrescar etiquetas
        } catch (error) {
            console.error("Error al eliminar etiqueta:", error);
        }
    };

    const handleUpdateTag = async (tagId) => {
        if (!editedTagName.trim()) return;

        const updatedTag = {
            id: parseInt(tagId),
            name: editedTagName,
            isGlobal: false, // Mantener propiedad existente
            userId: user.id,
        };

        try {
            await updateUserTag(updatedTag);
            setEditingTagId(null); // Salir del modo edición
            window.location.reload(); // Refrescar etiquetas
        } catch (error) {
            console.error("Error al actualizar etiqueta:", error);
        }
    };

    const startEditing = (tag) => {
        setEditingTagId(tag.id);
        setEditedTagName(tag.name); // Inicializar con el nombre actual
    };

    const cancelEditing = () => {
        setEditingTagId(null);
        setEditedTagName("");
    };

    return (
        <div className="bg-body-tertiary rounded px-2 py-3 shadow-sm">
            <div className="text-center">
                <h3 className="mb-3 m-md-1">Etiquetas personalizadas</h3>

            </div>
            <div className="row m-3">
                <div className="col-12 col-md-8 p-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nueva etiqueta"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        maxLength={25}
                    />
                </div>
                <div className="col-12 col-md-4 p-2">
                    <button
                        className="btn btn-primary w-100"
                        onClick={handleAddTag}
                    >
                        <span>Agregar Etiqueta</span>
                        <i className="bi bi-plus-circle ms-2"></i>
                    </button>
                </div>
            </div>

            <h5 className="text-secondary">Etiquetas Existentes:</h5>
            <div
                className="card-body p-0"
                style={{ maxHeight: "300px", overflowY: "auto" }}
            >
                <ul className="list-group">
                    {tags.length > 0 ? (
                        tags.map((tag) => (
                            <li
                                key={tag.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {editingTagId === tag.id ? (
                                    // Modo edición
                                    <>
                                        <input
                                            type="text"
                                            className="form-control flex-grow-1 me-5"
                                            value={editedTagName}
                                            onChange={(e) =>
                                                setEditedTagName(e.target.value)
                                            }
                                            maxLength={25}
                                        />
                                        <div className="ms-2 d-flex align-items-center gap-2">
                                            <button
                                                className="btn btn-sm btn-outline-success"
                                                onClick={() => handleUpdateTag(tag.id)}
                                            >
                                                <i className="bi bi-check-circle"></i>
                                            </button>
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={cancelEditing}
                                            >
                                                <i className="bi bi-x-circle"></i>
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    // Vista normal
                                    <>
                                        <div className="flex-grow-1 text-truncate">
                                            {tag.name}
                                        </div>
                                        <div className="ms-2 d-flex align-items-center gap-2">
                                            {tag.isGlobal ? (
                                                <span className="mx-3">Global</span>
                                            ) : (
                                                <>
                                                    <button
                                                        className="btn btn-sm btn-warning"
                                                        onClick={() => startEditing(tag)}
                                                    >
                                                        <i className="bi bi-pencil-square"></i>
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() =>
                                                            handleDeleteTag(tag.id)
                                                        }
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </>
                                )}
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item text-center text-muted">
                            No hay etiquetas aún.
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CustomizationTags;
