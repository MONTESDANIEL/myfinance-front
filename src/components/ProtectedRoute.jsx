import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@context/UserContext";
import LoadingScreen from '@components/LoadingScreen';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useUser();

    if (loading) {
        return <LoadingScreen></LoadingScreen>;
    }

    if (!user) {
        console.warn("Usuario no autenticado. Redirigiendo...");
        return <Navigate to="/expired-session" replace />;
    }

    return children; // Si el usuario está autenticado, renderiza el contenido protegido
};

export default ProtectedRoute;
