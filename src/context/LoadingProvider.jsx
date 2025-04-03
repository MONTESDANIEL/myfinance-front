import React, { createContext, useContext, useState } from "react";
import LoadingScreen from "@components/LoadingScreen";

// Crea el contexto para el estado de carga
const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => setIsLoading(false);

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
            {children}
            {isLoading && <LoadingScreen />}
        </LoadingContext.Provider>
    );
};
1
// Hook para usar el contexto de carga
export const useLoading = () => useContext(LoadingContext);