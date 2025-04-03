import React, { createContext, useState, useEffect } from 'react';
import { getUserData } from '@api/userApi';
import { getUserMovements } from '@api/MovementsApi'
import { getUserTags } from '@api/TagsApi';
import { getUserEvents } from '@api/EventsApi';
import { getUserGoals } from '@api/GoalsApi'
import { getUserFavoriteColors, getUserSettings } from '@api/SettingUserApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [movements, setMovements] = useState([]);
    const [events, setEvents] = useState([]);
    const [tags, setTags] = useState([]);
    const [goals, setGoals] = useState([]);
    const [favoriteColors, setFavoriteColors] = useState([]);
    const [settings, setSettings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUserData();
                setUser(userData); // Establece los datos del usuario

                if (userData) {
                    const userMovements = await getUserMovements();
                    const userEvents = await getUserEvents();
                    const userTags = await getUserTags();
                    const userGoals = await getUserGoals();
                    const userColors = await getUserFavoriteColors();
                    const userSettings = await getUserSettings()

                    setMovements(userMovements || []);
                    setEvents(userEvents || []);
                    setTags(userTags || []);
                    setGoals(userGoals || []);
                    setFavoriteColors(userColors || []);
                    setSettings(userSettings || []);
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
        <UserContext.Provider value={{ user, movements, tags, events, loading, goals, favoriteColors, settings }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => React.useContext(UserContext);
