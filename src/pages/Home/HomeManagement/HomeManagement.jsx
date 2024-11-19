import React, { useEffect } from 'react';
import { useAppContext } from '@context/AppContext'; // Importar el contexto
import ManageMovements from './ManageMovements';
import ManagePlanning from './ManagePlanning/ManagePlanning';
import ManageReports from './ManageReports';
import ManageDue from './ManageDue';

const tabs = [
    {
        id: 'movements',
        label: 'Movimientos',
        icon: 'bi-arrow-left-right',
        component: <ManageMovements />
    },
    {
        id: 'planning',
        label: 'Planificación financiera',
        icon: 'bi-calendar-event',
        component: <ManagePlanning />
    },
    {
        id: 'reports',
        label: 'Reportes',
        icon: 'bi-file-earmark-text',
        component: <ManageReports />
    },
    {
        id: 'due',
        label: 'Control de deudas',
        icon: 'bi-receipt',
        component: <ManageDue />
    }
];

const HomeManagement = () => {
    const { state, dispatch } = useAppContext(); // Acceder al estado global del contexto
    const { tabs: { management } } = state; // Extraemos la pestaña activa para la página 'management'

    // Manejar el cambio de pestaña
    const handleTabClick = (tabId) => {
        dispatch({ type: 'SET_CURRENT_TAB', payload: { page: 'management', tab: tabId } });
    };

    useEffect(() => {
        if (!management) {
            dispatch({ type: 'SET_CURRENT_TAB', payload: { page: 'management', tab: 'movements' } });
        }
    }, [management, dispatch]);

    return (
        <div className="container-fluid">
            {/* Navbar para dispositivos pequeños */}
            <div className="d-lg-none navbar container-fluid justify-content-center">
                <ul className="nav nav-tabs justify-content-center" id="v-pills-tab" role="tablist">
                    {tabs.map((tab) => (
                        <li className="nav-item" key={tab.id}>
                            <button
                                className={`nav-link ${management === tab.id ? 'active' : ''} text-secondary`}
                                type="button"
                                role="tab"
                                onClick={() => handleTabClick(tab.id)} // Cambiar la pestaña activa al hacer clic
                            >
                                <i className={`bi ${tab.icon}`}></i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Navbar para dispositivos grandes */}
            <div className="d-none d-lg-block">
                <ul className="nav nav-tabs justify-content-center" id="v-pills-tab" role="tablist">
                    {tabs.map((tab) => (
                        <li className="nav-item" key={tab.id}>
                            <button
                                className={`nav-link ${management === tab.id ? 'active' : ''} text-secondary`}
                                type="button"
                                role="tab"
                                onClick={() => handleTabClick(tab.id)} // Cambiar la pestaña activa al hacer clic
                            >
                                <i className={`bi ${tab.icon}`}></i>
                                <span className="ms-2">{tab.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contenido de las pestañas */}
            <div className="tab-content container py-3" id="v-pills-tabContent">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tab-pane fade ${management === tab.id ? 'show active' : ''}`}
                        role="tabpanel"
                        aria-labelledby={`v-pills-${tab.id}-tab`}
                        tabIndex="0"
                    >
                        <div className="bg-dark-subtle rounded p-3">
                            {tab.component}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeManagement;
