import React, { useState } from 'react';
import { optionsPalette } from '@components/colors.jsx';
import { useMovementPalette } from '@context/ColorContext';

// Mapas constantes
const categoryMapping = {
    'INGRESOS': 'income',
    'AHORROS': 'savings',
    'EGRESOS': 'expense',
};

const colorsMapping = {
    blue: 'Azul',
    purple: 'Morado',
    pink: 'Rosado',
    red: 'Rojo',
    orange: 'Naranja',
    yellow: 'Amarillo',
    green: 'Verde',
    teal: 'Turquesa',
    cyan: 'Cian',
};

// Componente de selector de color para categorías
const ColorCategory = ({ label, optionsPalette, selectedColor, onColorSelect }) => {
    const englishLabel = categoryMapping[label];

    return (
        <div className="col-lg-4 text-center mb-3">
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle w-100"
                    type="button"
                    id={`${label}-dropdown`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                        backgroundColor: selectedColor ? optionsPalette[selectedColor] : '',
                        border: 'none',
                        height: '60px',
                    }}
                >
                    <span>{label}</span>
                </button>
                <ul className="dropdown-menu w-100 overflow-hidden" aria-labelledby={`${label}-dropdown`}>
                    {Object.keys(optionsPalette).map((color) => (
                        <li key={color}>
                            <button
                                className="dropdown-item"
                                onClick={() => onColorSelect(color, englishLabel)}
                                style={{
                                    color: optionsPalette[color],
                                    height: '40px',
                                }}
                            >
                                {colorsMapping[color]}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Componente para gestionar etiquetas personalizadas
const CustomLabels = ({ labels, onAddLabel, onRemoveLabel }) => {
    const [newLabel, setNewLabel] = useState('');

    const handleAddLabel = () => {
        if (newLabel.trim() !== '') {
            onAddLabel(newLabel.trim());
            setNewLabel('');
        }
    };

    return (
        <div className="bg-body-tertiary rounded-3 p-3 shadow-sm">
            <div className="text-center">
                <h3 className="mb-3 m-md-1">Etiquetas personalizadas</h3>
                <p className="text-muted d-none d-md-block">
                    Agrega tus etiquetas personalizadas y organiza mejor tus movimientos.
                </p>
                <hr />
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-8 p-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nueva etiqueta"
                        value={newLabel}
                        maxLength={25}
                        onChange={(e) => setNewLabel(e.target.value)}
                    />
                </div>
                <div className="col-12 col-md-4 p-2">
                    <button
                        className="btn btn-primary w-100"
                        onClick={handleAddLabel}
                        disabled={!newLabel.trim()}
                    >
                        <span>Agregar Etiqueta</span>
                        <i className="bi bi-plus-circle ms-2"></i>
                    </button>
                </div>
            </div>

            <h5 className="text-secondary">Etiquetas Existentes:</h5>
            <div className="card-body p-0" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <ul className="list-group">
                    {labels.length > 0 ? (
                        labels.map((label, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <div className="flex-grow-1 text-truncate">{label}</div>
                                <div className="ms-2 d-flex gap-2">
                                    <button
                                        className="btn btn-sm btn-outline-warning"
                                        onClick={() => removeLabel(index)}
                                    >
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => removeLabel(index)}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item text-center text-muted">No hay etiquetas aún.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

// Componente principal
const SettingsCustomization = () => {
    const { mainColors, updateMainColors } = useMovementPalette();

    // Estado para las etiquetas personalizadas
    const [labels, setLabels] = useState([
        'Ahorro específico',
        'Gastos médicos',
        'Vacaciones',
        'Educación',
        'Entretenimiento',
    ]);

    const handleAddLabel = (label) => setLabels((prevLabels) => [...prevLabels, label]);
    const handleRemoveLabel = (index) =>
        setLabels((prevLabels) => prevLabels.filter((_, i) => i !== index));

    const handleColorSelection = (color, category) => {
        updateMainColors({ [category]: color });
    };

    return (
        <>
            <div className="text-center">
                <h1>Personalización</h1>
                <p className="text-muted">Personaliza tus preferencias para mejorar tu experiencia</p>
            </div>

            <div className="bg-body-tertiary rounded p-3 mb-3">
                <div className="text-center">
                    <h3 className="mb-3 mb-md-1">Ajustes de Finanzas</h3>
                    <p className="text-muted d-none d-md-block">
                        Personaliza los colores para las categorías según tus gustos
                    </p>
                    <hr />
                </div>
                <div className="row mb-2">
                    {Object.keys(categoryMapping).map((label) => (
                        <ColorCategory
                            key={label}
                            label={label}
                            selectedColor={mainColors[categoryMapping[label]]}
                            optionsPalette={optionsPalette}
                            onColorSelect={handleColorSelection}
                        />
                    ))}
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    <span>Guardar cambios</span>
                    <i className="bi bi-palette2 ms-2"></i>
                </button>
            </div>

            <CustomLabels
                labels={labels}
                onAddLabel={handleAddLabel}
                onRemoveLabel={handleRemoveLabel}
            />
        </>
    );
};

export default SettingsCustomization;

