import WelcomeMain from './WelcomeMain';
import ThemeBtn from '../../components/ThemeBtn';
import Logo from '../../assets/images/logos/LogoVerde.png';


// Redirecciones
function handleLoginRedirect() {
    window.location.href = '/login';
}
function handleCreateAccountRedirect() {
    window.location.href = '/create-account';
}
function handleWelcomeRedirect() {
    window.location.href = '/';
}

const Welcome = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button
                            className="btn btn-sm d-flex align-items-center"
                            onClick={handleWelcomeRedirect}
                        >
                            <img
                                src={Logo}
                                alt="Logo"
                                width="90"
                                height="27"
                                className="d-inline-block align-text-top"
                            />
                        </button>
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
                                        <button
                                            onClick={handleLoginRedirect}
                                            className="dropdown-item btn btn-sm"
                                            type="button"
                                        >
                                            <i className="bi bi-key me-2 fs-6 lh-sm"></i>
                                            <span>Iniciar sesión</span>
                                        </button>
                                    </li>
                                    <li className="text-center">
                                        <button
                                            onClick={handleCreateAccountRedirect}
                                            className="dropdown-item btn btn-sm"
                                            type="button"
                                        >
                                            <i className="bi bi-person-plus me-2 fs-6 lh-sm"></i>
                                            <span>Crear cuenta</span>
                                        </button>
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