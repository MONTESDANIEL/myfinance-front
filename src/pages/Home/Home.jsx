import { ThemeBtn } from "../../components/ThemeBtn"
import { About } from './HomeAbout';
import { Initial } from './HomeInitial';
import { HomeManagement } from "./HomeManagement/HomeManagement";
import { News } from './HomeNews';
import { Profile } from './HomeProfile/HomeProfile';
import { useEffect } from 'react';

function handleHomeRedirect() {
    window.location.href = '/home';
}

function handleWelcomeRedirect() {
    window.location.href = '/';
}

export const Home = () => {

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
                        <button className="btn btn-sm d-flex align-items-center" onClick={handleHomeRedirect}>
                            <img src="src\assets\images\Logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            MyFinance
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
                                <img src="src\assets\images\Logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2" />
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
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
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active close-offcanvas"
                                            id="pills-home-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-home"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-home"
                                            aria-selected="true"
                                        >
                                            <i className="bi bi-house-door"> Inicio</i>
                                             
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link close-offcanvas"
                                            id="pills-management-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-management"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-management"
                                            aria-selected="true"
                                        >
                                            <i className="bi bi-graph-up"> Gestión de finanzas</i>
                                            
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link close-offcanvas"
                                            id="pills-about-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-about"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-about"
                                            aria-selected="false"
                                        >
                                            <i className="bi bi-info-circle"> Acerca de</i>
                                            
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
                                            Daniel Amaya Montes
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="dropdown-item close-offcanvas"
                                                    id="pills-profile-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-profile"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-person"> Perfil</i>
                                                    
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="dropdown-item close-offcanvas"
                                                    id="pills-news-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-news"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-news"
                                                    aria-selected="false"
                                                >
                                                    <i className="bi bi-newspaper"> Novedades</i>
                                                    
                                                </button>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={handleWelcomeRedirect}
                                                >
                                                    <i className="bi bi-box-arrow-right"> Cerrar sesión</i> 
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
            <main className="mt-5 p-4">
                <div className="tab-content mt-2">
                    <div
                        className="tab-pane show fade active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                    >
                        <Initial />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-management"
                        role="tabpanel"
                        aria-labelledby="pills-management-tab"
                    >
                        <HomeManagement />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-about"
                        role="tabpanel"
                        aria-labelledby="pills-about-tab"
                    >
                        <About />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                    >
                        <Profile />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-news"
                        role="tabpanel"
                        aria-labelledby="pills-news-tab"
                    >
                        <News />
                    </div>
                </div>
            </main>
        </div>

    )
}