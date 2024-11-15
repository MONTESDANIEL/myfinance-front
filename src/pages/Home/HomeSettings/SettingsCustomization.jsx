import React, { useState } from 'react';
import { optionsPalette } from '@components/colors.jsx';
import { useMovementPalette } from '../../../context/ColorContext';

const categoryMapping = {
    'INGRESOS': 'income',
    'AHORROS': 'savings',
    'EGRESOS': 'expense'
};

const ColorCategory = ({ label, optionsPalette }) => {
    const { mainColors, updateMainColors } = useMovementPalette();
    const englishLabel = categoryMapping[label];

    const handleColorSelection = (color, category) => {
        updateMainColors({
            [category]: color
        });
    };

    return (
        <div className="col-lg-4 text-center mb-3">
            <div className="dropdown">
                <button
                    className="btn btn-secondary w-100"
                    type="button"
                    id={`${label}-dropdown`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                        backgroundColor: mainColors[englishLabel] ? optionsPalette[mainColors[englishLabel]] : '',
                        border: 'none',
                        height: '60px'
                    }}
                >
                    {label}
                </button>

                <ul className="dropdown-menu w-100 overflow-hidden" aria-labelledby={`${label}-dropdown`}>
                    {Object.keys(optionsPalette).map((color) => (
                        <li key={color} className="m-1">
                            <button
                                className="dropdown-item"
                                onClick={() => handleColorSelection(color, englishLabel)}
                                style={{
                                    backgroundColor: optionsPalette[color],
                                    color: '#fff',
                                    height: '40px'
                                }}
                            >
                                {color}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const SettingsCustomization = () => {

    const { mainColors, updateMainColors } = useMovementPalette();

    // Estado para las etiquetas personalizadas
    const [newLabel, setNewLabel] = useState('');
    const [labels, setLabels] = useState([
        'Ahorro específico',
        'Gastos médicos',
        'Vacaciones',
        'Educación',
        'Entretenimiento',
    ]);

    // Función para añadir nueva etiqueta
    const addNewLabel = () => {
        if (newLabel.trim() !== '') {
            setLabels((prevLabels) => [...prevLabels, newLabel]);
            setNewLabel('');
        }
    };

    // Función para manejar la selección de color
    const handleColorSelection = (color, category) => {
        // Usamos updateMainColors para actualizar el color principal de la categoría
        updateMainColors({
            [category]: color // Actualiza solo el color de la categoría seleccionada
        });
    };

    return (
        <div className="bg-dark-subtle rounded p-3">
            <div className="text-center">
                <h1>Personalización</h1>
                <p className="text-muted">Personaliza tus preferencias para mejorar tu experiencia</p>

                <div className="bg-body-tertiary rounded p-3 mb-3">
                    <h3 className="text-center mb-3 mb-md-0">Ajustes de Finanzas</h3>
                    <p className="text-muted d-none d-md-block">Personaliza los colores para las categorías según tus gustos</p>
                    <hr />
                    <div className="row">
                        <ColorCategory
                            label="INGRESOS"
                            selectedColor={mainColors.income}
                            optionsPalette={optionsPalette}
                            handleColorSelection={handleColorSelection}
                        />
                        <ColorCategory
                            label="AHORROS"
                            selectedColor={mainColors.savings}
                            optionsPalette={optionsPalette}
                            handleColorSelection={handleColorSelection}
                        />
                        <ColorCategory
                            label="EGRESOS"
                            selectedColor={mainColors.expense}
                            optionsPalette={optionsPalette}
                            handleColorSelection={handleColorSelection}
                        />
                    </div>
                </div>

                {/* Agregar Etiquetas Personalizadas */}
                <div className="bg-body-tertiary rounded-3 p-3 shadow-sm">
                    <h3 className="text-center mb-3 m-md-0">Etiquetas personalizadas</h3>
                    <p className="text-muted d-none d-md-block">Agrega tus etiquetas personalizadas y organiza mejor tus movimientos.</p>
                    <hr />
                    <div className="row mb-3">
                        <div className="col-12 col-md-8 p-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nueva etiqueta"
                                value={newLabel}
                                onChange={(e) => setNewLabel(e.target.value)}
                            />
                        </div>
                        <div className="col-12 col-md-4 p-2">
                            <button
                                className="btn btn-primary w-100"
                                onClick={addNewLabel}
                                disabled={!newLabel.trim()}
                            >
                                <span>Agregar Etiqueta</span>
                                <i className="bi bi-plus-circle ms-2"></i>
                            </button>
                        </div>
                    </div>


                    <h5 className="text-secondary">Etiquetas Existentes:</h5>
                    <ul className="list-group">
                        {labels.length > 0 ? (
                            labels.map((label, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    {label}
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => removeLabel(index)}
                                    >
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item text-center text-muted">No hay etiquetas aún.</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SettingsCustomization;
