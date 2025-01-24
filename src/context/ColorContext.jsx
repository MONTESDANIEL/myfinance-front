import React, { createContext, useContext, useState } from 'react';
import { useUser } from "@context/UserContext";
import LoadingScreen from '@components/LoadingScreen';

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
        1: getCSSVariable(`--${color}-1`),
        2: getCSSVariable(`--${color}-2`),
        3: getCSSVariable(`--${color}-3`),
    };
};


// Proveedor para envolver la aplicación o los componentes que necesiten acceder al contexto
export const MovementPaletteProvider = ({ children }) => {

    const { favoriteColors, loading } = useUser();

    if (loading) {
        return <LoadingScreen></LoadingScreen>;
    }

    // Estado para los colores principales
    const [mainColors, setMainColors] = useState({
        income: favoriteColors.incomeColor,
        savings: favoriteColors.savingsColor,
        expense: favoriteColors.expenseColor,
    });

    // Estado para los tonos de cada color
    const [colors, setColors] = useState({
        income: getColorShades(favoriteColors.incomeColor),
        savings: getColorShades(favoriteColors.savingsColor),
        expense: getColorShades(favoriteColors.expenseColor),
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
