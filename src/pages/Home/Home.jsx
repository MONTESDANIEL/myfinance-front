import { useEffect, useState } from 'react';

import HomeAbout from './HomeAbout';
import HomeInitial from './HomeInitial/HomeInitial';
import HomeManagement from './HomeManagement/HomeManagement';
import HomeNews from './HomeNews';
import HomeProfile from './HomeProfile';
import HomeSettings from './HomeSettings/HomeSettings';

import ThemeBtn from '@components/ThemeBtn';

import Logo from '../../assets/images/logos/LogoVerde.png';
import LogoSimple from '../../assets/images/logos/Logo.png';

function handleWelcomeRedirect() {
    window.location.href = '/';
}

const TABS = [
    { id: 'home', label: 'Inicio', icon: 'bi-house-door', component: <HomeInitial /> },
    { id: 'management', label: 'Gestión de finanzas', icon: 'bi-graph-up', component: <HomeManagement /> },
    { id: 'about', label: 'Acerca de', icon: 'bi-info-circle', component: <HomeAbout /> },
    { id: 'profile', label: 'Perfil', icon: 'bi-person', component: <HomeProfile /> },
    { id: 'settings', label: 'Configuración', icon: 'bi-gear', component: <HomeSettings /> },
    { id: 'news', label: 'Novedades', icon: 'bi-newspaper', component: <HomeNews /> },
];

const Home = () => {
    const [activeTab, setActiveTab] = useState(() => localStorage.getItem('activeTab') || 'home');
    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleClick = () => {
        setActiveTab('home');
    };

    useEffect(() => {
        const buttons = document.querySelectorAll('.close-offcanvas');
        buttons.forEach((button) => {
            button.addEventListener('click', handleButtonClick);
        });
        return () => {
            buttons.forEach((button) => {
                button.removeEventListener('click', handleButtonClick);
            });
        };
    }, []);

    const handleButtonClick = () => {
        const offcanvasElement = document.querySelector('.offcanvas');
        const offcanvasInstance = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvasInstance) {
            offcanvasInstance.hide();
        }
    };

    return (
        <div>
            <header>
                <nav className="navbar bg-body-tertiary fixed-top">
                    <div className="container-fluid">

                        <button className="btn btn-sm" onClick={handleClick}>
                            <img src={Logo} alt="Logo" width="100" height="30" />
                        </button>

                        <ul className="navbar-nav d-flex align-items-center mb-0 flex-row">
                            <li className="nav-item mx-2">
                                <ThemeBtn />
                            </li>
                            <li className="nav-item">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasNavbar"
                                    aria-controls="offcanvasNavbar"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </li>
                        </ul>

                        <div
                            className="offcanvas offcanvas-end"
                            tabIndex="-1"
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">

                            <div className="offcanvas-header">
                                <img src={LogoSimple} alt="Logo" width="25" height="25" className="align-text-top me-2" />
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenido</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1" id="pills-tab" role="tablist">
                                    {TABS.slice(0, 3).map((tab) => (
                                        <li className="nav-item" role="presentation" key={tab.id}>
                                            <button
                                                className={`nav-link ${activeTab === tab.id ? 'active' : ''} close-offcanvas`}
                                                id={`pills-${tab.id}-tab`}
                                                type="button"
                                                onClick={() => handleTabClick(tab.id)}
                                            >
                                                <i className={`bi ${tab.icon}`}></i>
                                                <span className="ms-2">{tab.label}</span>
                                            </button>
                                        </li>
                                    ))}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <span className="me-2">Daniel Amaya Montes</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            {TABS.slice(3).map((tab) => (
                                                <li key={tab.id}>
                                                    <button
                                                        className="dropdown-item close-offcanvas"
                                                        id={`pills-${tab.id}-tab`}
                                                        type="button"
                                                        onClick={() => handleTabClick(tab.id)}
                                                    >
                                                        <i className={`bi ${tab.icon}`}></i>
                                                        <span className="ms-2">{tab.label}</span>
                                                    </button>
                                                </li>
                                            ))}
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <button className="dropdown-item" onClick={handleWelcomeRedirect}>
                                                    <i className="bi bi-box-arrow-right"></i>
                                                    <span className="ms-2">Cerrar sesión</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </nav>
            </header>

            <main className="tab-content pt-5 mt-4 mb-3">
                {TABS.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                        id={`pills-${tab.id}`}
                        role="tabpanel"
                        aria-labelledby={`pills-${tab.id}-tab`}
                    >
                        {tab.component}
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Home;
