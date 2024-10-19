import WelcomeMain from './WelcomeMain';
import ThemeBtn from '../../components/ThemeBtn';
import Logo from '../../assets/images/logos/LogoVerde.png';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link to="/"
                            className="btn btn-sm d-flex align-items-center"
                            type="button">
                            <img
                                src={Logo}
                                alt="Logo"
                                width="100"
                                height="30"
                                className="d-inline-block align-text-top"
                            />
                        </Link>
                        <div className="d-flex justify-content-end align-items-center">
                            <div className="d-flex flex-lg-none">
                                <ThemeBtn />
                            </div>
                            <div className="vr d-lg-flex m-2 me-3 bs-body-color"></div>
                            <div className="dropdown">
                                <button
                                    className="btn btn-sm btn-success align-items-center"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span >Acceder</span>
                                    <i className="bi bi-box-arrow-in-right ms-1 fs-6 lh-sm"></i>
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    style={{ minWidth: 'auto' }}
                                >
                                    <li className="text-center">
                                        <Link to="/login"
                                            className="dropdown-item btn btn-sm"
                                            type="button">
                                            <i className="bi bi-key me-2 fs-6 lh-sm"></i>
                                            <span>Iniciar sesión</span>
                                        </Link>
                                    </li>
                                    <li className="text-center">
                                        <Link to="/create-account"
                                            className="dropdown-item btn btn-sm"
                                            type="button">
                                            <i className="bi bi-person-plus me-2 fs-6 lh-sm"></i>
                                            <span>Crear cuenta</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="d-flex flex-column justify-content-center align-items-center p-4">
                <div className="container-fluid text-center">
                    <WelcomeMain />
                </div>
            </main>
        </div >
    );
};

export default Welcome;