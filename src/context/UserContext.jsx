import React, { createContext, useState, useEffect } from 'react';
import { getUserData } from '@api/userApi';
import { getUserMovements } from '@api/MovementsApi'
import { getUserTags } from '@api/TagsApi';
import { getUserEvents } from '@api/EventsApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [movements, setMovements] = useState([]);
    const [events, setEvents] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUserData();
                setUser(userData); // Establece los datos del usuario

                if (userData) {
                    const userMovements = await getUserMovements(); // Obtén los movimientos del usuario si existe
                    const userEvents = await getUserEvents(); // Obtén los movimientos del usuario si existe
                    const userTags = await getUserTags()
                    setMovements(userMovements || []); // Asegúrate de que movimientos sea un arreglo
                    setEvents(userEvents || []); // Asegúrate de que movimientos sea un arreglo
                    setTags(userTags || []); // Asegúrate de que movimientos sea un arreglo
                }


            } catch (error) {
                console.error('Error obteniendo datos del usuario o movimientos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ user, movements, tags, events, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => React.useContext(UserContext);
