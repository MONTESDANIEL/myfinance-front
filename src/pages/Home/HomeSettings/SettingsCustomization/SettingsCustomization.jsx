import React from 'react';
import { optionsPalette } from '@components/colors.jsx';
import { useMovementPalette } from '@context/ColorContext';
import CustomizationTags from './CustomizationTags'

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


// Componente principal
const SettingsCustomization = () => {
    const { mainColors, updateMainColors } = useMovementPalette();

    const handleColorSelection = (color, category) => {
        updateMainColors({ [category]: color });
    };

    return (
        <>
            <div className="text-center">
                <h1>Personalización</h1>
                <p className="text-muted">Personaliza tus preferencias para mejorar tu experiencia</p>
            </div>

            <div className="bg-body-tertiary rounded px-2 py-3 mb-3">
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

            <CustomizationTags />
        </>
    );
};

export default SettingsCustomization;

