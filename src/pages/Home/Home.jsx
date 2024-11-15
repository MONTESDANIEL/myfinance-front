import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ThemeBtn from "../../components/ThemeBtn";
import HomeAbout from './HomeAbout';
import HomeInitial from './HomeInitial/HomeInitial';
import HomeManagement from "./HomeManagement/HomeManagement";
import HomeNews from './HomeNews';
import HomeProfile from './HomeProfile';
import HomeSettings from './HomeSettings/HomeSettings'

import Logo from '../../assets/images/logos/LogoVerde.png';
import LogoSimple from '../../assets/images/logos/Logo.png';

// Redirecciones
function handleHomeRedirect() {
    window.location.href = '/home';
}
function handleWelcomeRedirect() {
    window.location.href = '/';
}

const Home = () => {
    // Recupera la pestaña activa del localStorage o establece 'home' como valor por defecto
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem('activeTab') || 'home';
    });

    // Almacena la pestaña activa en localStorage cada vez que cambia
    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab); // Actualiza la pestaña activa
    };

    const handleClick = () => {
        setActiveTab('home'); // Actualiza la pestaña activa
    };

    const navigate = useNavigate(); // Hook para navegar

    // Agrega la función de cerrar la barra lateral al seleccionar una opción
    useEffect(() => {
        const buttons = document.querySelectorAll('.close-offcanvas');
        buttons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
        return () => {
            buttons.forEach(button => {
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
                        <button
                            className="btn btn-sm d-flex align-items-center"
                            onClick={handleClick}
                        >
                            <img
                                src={Logo}
                                alt="Logo"
                                width="100"
                                height="30"
                                className="d-inline-block align-text-top"
                            />
                        </button>
                        <ul className="navbar-nav d-flex align-items-center mb-0 flex-row">
                            <li className="nav-item mx-2">
                                <ThemeBtn />
                            </li>
                            <li className="nav-item mx-2">
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
                            aria-labelledby="offcanvasNavbarLabel"
                        >
                            <div className="offcanvas-header">
                                <img
                                    src={LogoSimple}
                                    alt="Logo"
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-text-top me-2" />
                                <h5
                                    className="offcanvas-title"
                                    id="offcanvasNavbarLabel">
                                    Bienvenido
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul
                                    className="navbar-nav justify-content-end flex-grow-1"
                                    id="pills-tab"
                                    role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === 'home' ? 'active' : ''} close-offcanvas`}
                                            id="pills-home-tab"
                                            type="button"
                                            onClick={() => handleTabClick('home')}
                                        >
                                            <i className="bi bi-house-door"></i>
                                            <span className="ms-3">Inicio</span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === 'management' ? 'active' : ''} close-offcanvas`}
                                            id="pills-management-tab"
                                            type="button"
                                            onClick={() => handleTabClick('management')}
                                        >
                                            <i className="bi bi-graph-up"></i>
                                            <span className="ms-3">Gestión de finanzas</span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === 'about' ? 'active' : ''} close-offcanvas`}
                                            id="pills-about-tab"
                                            type="button"
                                            onClick={() => handleTabClick('about')}
                                        >
                                            <i className="bi bi-info-circle"></i>
                                            <span className="ms-3">Acerca de</span>
                                        </button>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="me-2">Daniel Amaya Montes</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="dropdown-item close-offcanvas"
                                                    id="pills-profile-tab"
                                                    type="button"
                                                    onClick={() => handleTabClick('profile')}
                                                >
                                                    <i className="bi bi-person"></i>
                                                    <span className="ms-3">Perfil</span>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="dropdown-item close-offcanvas"
                                                    id="pills-settings-tab"
                                                    type="button"
                                                    onClick={() => handleTabClick('settings')}
                                                >
                                                    <i className="bi bi-gear"></i>
                                                    <span className="ms-3">Configuración</span>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="dropdown-item close-offcanvas"
                                                    id="pills-news-tab"
                                                    type="button"
                                                    onClick={() => handleTabClick('news')}
                                                >
                                                    <i className="bi bi-newspaper"></i>
                                                    <span className="ms-3">Novedades</span>
                                                </button>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={handleWelcomeRedirect}
                                                >
                                                    <i className="bi bi-box-arrow-right"></i>
                                                    <span className="ms-3">Cerrar sesión</span>
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
            <main className="pt-5 mt-4 mb-3">
                <div className="tab-content">
                    <div
                        className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                    >
                        <HomeInitial />
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'management' ? 'show active' : ''}`}
                        id="pills-management"
                        role="tabpanel"
                        aria-labelledby="pills-management-tab"
                    >
                        <HomeManagement />
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'about' ? 'show active' : ''}`}
                        id="pills-about"
                        role="tabpanel"
                        aria-labelledby="pills-about-tab"
                    >
                        <HomeAbout />
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`}
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                    >
                        <HomeProfile />
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'settings' ? 'show active' : ''}`}
                        id="pills-settings"
                        role="tabpanel"
                        aria-labelledby="pills-settings-tab"
                    >
                        <HomeSettings />
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'news' ? 'show active' : ''}`}
                        id="pills-news"
                        role="tabpanel"
                        aria-labelledby="pills-news-tab"
                    >
                        <HomeNews />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;
