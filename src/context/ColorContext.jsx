import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from "@context/UserContext";
import LoadingScreen from '@components/LoadingScreen';

// Crear el contexto
const MovementPaletteContext = createContext();

// Hook personalizado para usar el contexto
export const useMovementPalette = () => {
    return useContext(MovementPaletteContext);
};

// Función para extraer el color del CSS con valor por defecto
const getCSSVariable = (variable) => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(variable);
    return value || '#000000'; // Valor por defecto en caso de que no se encuentre la variable
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

    // Verificar si loading o favoriteColors no están disponibles
    if (loading || !favoriteColors) {
        return <LoadingScreen />;
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

    // Usar useEffect para actualizar los colores si favoriteColors cambia
    useEffect(() => {
        setMainColors({
            income: favoriteColors.incomeColor,
            savings: favoriteColors.savingsColor,
            expense: favoriteColors.expenseColor,
        });

        setColors({
            income: getColorShades(favoriteColors.incomeColor),
            savings: getColorShades(favoriteColors.savingsColor),
            expense: getColorShades(favoriteColors.expenseColor),
        });
    }, [favoriteColors]);

    // Función para actualizar los colores principales y sus tonalidades
    const updateMainColors = (newMainColors) => {
        // Actualiza los colores principales
        setMainColors((prevMainColors) => ({
            ...prevMainColors,
            ...newMainColors,
        }));

        // Actualiza los tonos basados en los nuevos colores principales
        setColors((prevColors) => ({
            ...prevColors,
            ...Object.fromEntries(
                Object.entries(newMainColors).map(([key, color]) => [
                    key,
                    getColorShades(color)
                ])
            ),
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
