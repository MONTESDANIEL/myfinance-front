import React, { createContext, useContext, useState } from 'react';
import { movementsPalette } from '@data/movementsPalette';

// Crear el contexto
const MovementPaletteContext = createContext();

// Hook personalizado para usar el contexto
export const useMovementPalette = () => {
    return useContext(MovementPaletteContext);
};

// Función para extraer el color del css
const getCSSVariable = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

// Función para obtener los tonos de un color
const getColorShades = (color) => {
    return {
        1: getCSSVariable(`--${color}-300`),
        2: getCSSVariable(`--${color}-400`),
        3: getCSSVariable(`--${color}-500`),
    };
};

// Proveedor para envolver la aplicación o los componentes que necesiten acceder al contexto
export const MovementPaletteProvider = ({ children }) => {
    // Estado para los colores principales
    const [mainColors, setMainColors] = useState({
        income: movementsPalette.income,
        savings: movementsPalette.savings,
        expense: movementsPalette.expense,
    });

    // Estado para los tonos de cada color
    const [colors, setColors] = useState({
        income: getColorShades(movementsPalette.income),
        savings: getColorShades(movementsPalette.savings),
        expense: getColorShades(movementsPalette.expense),
    });

    // Función para actualizar los colores principales y sus tonalidades
    const updateMainColors = (newMainColors) => {
        // Actualiza los colores principales
        setMainColors((prevMainColors) => ({
            ...prevMainColors,
            ...newMainColors,
        }));

        // Actualiza los tonos basados en los nuevos colores principales
        const updatedColors = {};
        Object.keys(newMainColors).forEach((key) => {
            updatedColors[key] = getColorShades(newMainColors[key]);
        });

        setColors((prevColors) => ({
            ...prevColors,
            ...updatedColors,
        }));
    };

    return (
        <MovementPaletteContext.Provider value={{
            colors,
            mainColors,
            updateMainColors
        }}>
            {children}
        </MovementPaletteContext.Provider>
    );
};
