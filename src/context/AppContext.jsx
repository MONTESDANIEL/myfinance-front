import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
    currentPage: 'management', // Página activa por defecto
    tabs: {
        management: 'movements', // Pestaña activa por defecto en 'management'
        settings: 'security',    // Pestaña activa por defecto en 'settings'
    },
    availableTabs: {
        management: ['movements', 'planning', 'reports', 'due'],
        settings: ['security', 'customization', 'financial'],
    },
};

const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };

        case 'SET_CURRENT_TAB':
            const { page, tab } = action.payload;
            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    [page]: tab,
                },
            };

        default:
            return state;
    }
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState, (initial) => {
        const savedState = localStorage.getItem('appState');
        return savedState ? JSON.parse(savedState) : initial;
    });

    useEffect(() => {
        localStorage.setItem('appState', JSON.stringify(state)); // Guardar el estado cada vez que cambie
    }, [state]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
