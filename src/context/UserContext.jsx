import React, { createContext, useState, useEffect } from 'react';
import { getUserData } from '@api/userApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserData();
                setUser(data); // Establece los datos del usuario (o null si no hay datos)
            } catch (error) {
                console.error('Error obteniendo datos del usuario:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => React.useContext(UserContext);
