import { ThemeBtn } from "./ThemeBtn"
import Logo from '../assets/images/logos/Logo500.png';

function handleWelcomeRedirect() {
    window.location.href = '/';
}
export const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary top">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <button
                        className="btn btn-sm d-flex align-items-center"
                        onClick={handleWelcomeRedirect}
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                            width="25"
                            height="25"
                            className="d-inline-block align-text-top"
                        />
                    </button>
                    <div className="d-flex align-items-center">
                        {/* Botón de Tema */}
                        <div className="d-flex">
                            <ThemeBtn />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
