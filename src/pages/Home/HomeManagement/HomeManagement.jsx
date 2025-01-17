import React, { useEffect } from 'react';
import { useAppContext } from '@context/AppContext'; // Importar el contexto
import ManageMovements from './ManageMovements';
import ManagePlanning from './ManagePlanning/ManagePlanning';
import ManageReports from './ManageReports';

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
    }
];

const HomeManagement = () => {
    const { state, dispatch } = useAppContext();
    const managementTab = state.tabs ? state.tabs.management : 'movements';

    // Función para manejar el cambio de pestaña
    const handleTabClick = (tabId) => {
        dispatch({ type: 'SET_CURRENT_TAB', payload: { page: 'management', tab: tabId } });
    };

    useEffect(() => {
        if (!managementTab) {
            dispatch({ type: 'SET_CURRENT_TAB', payload: { page: 'management', tab: 'movements' } });
        }
    }, [managementTab, dispatch]);

    return (
        <div className="container-fluid">
            {/* Navbar para dispositivos pequeños */}
            <div className="d-lg-none navbar container-fluid justify-content-center">
                <ul className="nav nav-tabs justify-content-center" id="v-pills-tab" role="tablist">
                    {tabs.map((tab) => (
                        <li className="nav-item" key={tab.id}>
                            <button
                                className={`nav-link ${managementTab === tab.id ? 'active' : ''} text-secondary`}
                                type="button"
                                role="tab"
                                onClick={() => handleTabClick(tab.id)}
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
                                className={`nav-link ${managementTab === tab.id ? 'active' : ''} text-secondary`}
                                type="button"
                                role="tab"
                                onClick={() => handleTabClick(tab.id)}
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
                        className={`tab-pane fade ${managementTab === tab.id ? 'show active' : ''}`}
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
