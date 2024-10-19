// AppContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {};

const appReducer = (state, action) => {
    switch (action.type) {
        // Define tus acciones aquí
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
        localStorage.setItem('appState', JSON.stringify(state));
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