import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

const NotFound = () => {
    return (
        <div className="d-flex flex-column">
            <header>
                <NavBar />
            </header>
            <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <div className="text-center">
                    <h1 className="display-1 text-danger">404</h1>
                    <h2 className="mb-3">Página No Encontrada</h2>
                    <p className="lead">
                        Lo sentimos, la página que buscas no existe.
                    </p>
                    <Link to="/" className="btn btn-secondary btn-lg btn-sm">
                        Volver a la Página de Inicio
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default NotFound;
