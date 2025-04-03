import React, { useState } from 'react';
import { optionsPalette } from '@components/colors.jsx';
import { useMovementPalette } from '@context/ColorContext';
import CustomizationTags from './CustomizationTags'
import { resetToDefaultColors, updateUserFavoriteColors } from '@api/SettingUserApi';

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
const ColorCategory = ({ label, optionsPalette, saveColors, selectedColors, setSelectedColors }) => {

    const englishLabel = categoryMapping[label];

    const handleChangeColor = (color, type) => {
        console.log(color, type);

        setSelectedColors((prevColors) => ({
            ...prevColors, // Copia las propiedades actuales
            [`${type}Color`]: color, // Actualiza solo la propiedad correspondiente
        }));
    };

    return (
        <div className="col-lg-4 text-center my-1">
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle w-100"
                    type="button"
                    id={`${label}-dropdown`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                        backgroundColor: optionsPalette[selectedColors[englishLabel + 'Color']],
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
                                onClick={() => handleChangeColor(color, englishLabel)}
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
    const { mainColors } = useMovementPalette();
    const [selectedColors, setSelectedColors] = useState({
        incomeColor: mainColors.income,
        savingsColor: mainColors.savings,
        expenseColor: mainColors.expense,
    });

    const handleRestartColors = async (e) => {
        e.preventDefault();

        try {
            await resetToDefaultColors();
            window.location.reload();
        } catch (error) {
            console.error("Ocurrió un error inesperado", error);
        }
    }

    const handleSaveColors = async (e) => {
        e.preventDefault();

        try {
            await updateUserFavoriteColors(selectedColors);
            window.location.reload();
        } catch (error) {
            console.error("Ocurrió un error inesperado", error);
        }
    }

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
                <div className="card p-3 mb-3">
                    <div className="row">
                        {Object.keys(categoryMapping).map((label) => (
                            <ColorCategory
                                key={label}
                                label={label}
                                saveColors={mainColors[categoryMapping[label]]}
                                selectedColors={selectedColors}
                                setSelectedColors={setSelectedColors}
                                optionsPalette={optionsPalette}
                            />
                        ))}
                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-4 my-1">
                        <button type="submit" className="btn btn-primary w-100" onClick={(e) => handleSaveColors(e)}>
                            <span>Guardar cambios</span>
                            <i class="bi bi-save ms-2"></i>
                        </button>
                    </div>
                    <div className="col-md-4 my-1">
                        <button type="submit" className="btn btn-warning w-100" onClick={(e) => handleRestartColors(e)}>
                            <span>Restablecer colores</span>
                            <i class="bi bi-arrow-clockwise ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <CustomizationTags />
        </>
    );
};

export default SettingsCustomization;

