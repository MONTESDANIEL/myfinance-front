import React, { useEffect } from 'react';
import { useAppContext } from '@context/AppContext'; // Usamos el contexto
import SettingsSecurity from './SettingsSecurity';
import SettingsCustomization from './SettingsCustomization';
import SettingsFinancial from './SettingsFinancial';

const tabs = [
    {
        id: 'security',
        label: 'Seguridad',
        icon: 'bi-shield-lock',
        component: <SettingsSecurity />
    },
    {
        id: 'customization',
        label: 'Personalización',
        icon: 'bi-palette',
        component: <SettingsCustomization />
    },
    {
        id: 'financial',
        label: 'Financiero',
        icon: 'bi-calculator',
        component: <SettingsFinancial />
    }
];

const HomeProfile = () => {
    const { state, dispatch } = useAppContext(); // Usamos el contexto
    const { tabs: { settings } } = state; // Extraemos la pestaña activa para la página 'settings'

    // Función para manejar el cambio de pestaña
    const handleTabChange = (tabId) => {
        dispatch({ type: 'SET_CURRENT_TAB', payload: { page: 'settings', tab: tabId } });
        localStorage.setItem('activeSettingsTab', tabId); // Guardar el cambio en el localStorage
    };

    // Usar useEffect para restaurar la pestaña activa del localStorage al cargar el componente
    useEffect(() => {
        const savedTab = localStorage.getItem('activeSettingsTab');
        if (savedTab && savedTab !== settings) {
            dispatch({ type: 'SET_CURRENT_TAB', payload: { page: 'settings', tab: savedTab } }); // Restaurar la pestaña
        } else if (!savedTab) {
            dispatch({ type: 'SET_CURRENT_TAB', payload: { page: 'settings', tab: 'security' } }); // Valor predeterminado
        }
    }, [settings, dispatch]);

    return (
        <div className="container-fluid">
            {/* Navbar para dispositivos pequeños */}
            <div className="d-lg-none navbar container-fluid justify-content-center">
                <ul className="nav nav-tabs justify-content-center" id="v-pills-tab" role="tablist">
                    {tabs.map((tab) => (
                        <li className="nav-item" key={tab.id}>
                            <button
                                className={`nav-link ${settings === tab.id ? 'active' : ''} text-secondary`}
                                type="button"
                                role="tab"
                                onClick={() => handleTabChange(tab.id)} // Cambiar la pestaña activa al hacer clic
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
                                className={`nav-link ${settings === tab.id ? 'active' : ''} text-secondary`}
                                type="button"
                                role="tab"
                                onClick={() => handleTabChange(tab.id)} // Cambiar la pestaña activa al hacer clic
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
                        className={`tab-pane fade ${settings === tab.id ? 'show active' : ''}`}
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

export default HomeProfile;
