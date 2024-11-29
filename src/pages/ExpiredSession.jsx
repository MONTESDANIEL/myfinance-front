import { Link } from 'react-router-dom';
import NavBar from '@components/Navbar';

const ExpiredSession = () => {
    return (
        <div className="d-flex flex-column">
            <header>
                <NavBar />
            </header>
            <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <div className="text-center">
                    <h1 className="display-1 text-warning">Sesión Expirada</h1>
                    <h3 className="mb-3">La sesión ya no es válida</h3>
                    <p className="lead">
                        Por favor, inicia sesión nuevamente para continuar.
                    </p>
                    <Link to="/login" className="btn btn-success">
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default ExpiredSession;