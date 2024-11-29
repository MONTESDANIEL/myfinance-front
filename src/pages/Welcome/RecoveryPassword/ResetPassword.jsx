import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '@components/Navbar';
import FormField from '@components/FormField';
import { resetPassword } from '@api/AuthApi'; // Tu API de cambio de contraseña

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const ResetPassword = () => {
    const query = useQuery();
    const token = query.get('token'); // Obtener el token del query parameter
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({});
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});
        setMessage('');

        if (password !== confirmPassword) {
            setError({ confirmPassword: 'Las contraseñas no coinciden.' });
            return;
        }

        if (password.trim().length < 6) {
            setError({ password: 'La contraseña debe tener al menos 6 caracteres.' });
            return;
        }

        try {
            const response = await resetPassword(token, password, confirmPassword); // Token incluido
            setMessage(response);
        } catch (err) {
            setError({ general: 'Hubo un problema al intentar cambiar la contraseña. Por favor, inténtelo de nuevo.' });
        }
    };

    return (
        <>
            <header>
                <NavBar />
            </header>

            <main className="d-flex justify-content-center align-items-center p-3">
                <div className="card bg-body-tertiary p-3 w-100" style={{ maxWidth: '500px' }}>
                    <h1 className="text-center mb-0">Cambiar contraseña</h1>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <FormField
                                label="Nueva contraseña"
                                type="password"
                                id="password"
                                placeholder="Ingresa tu nueva contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error?.password && <small className="text-danger">{error.password}</small>}
                        </div>

                        <div className="mb-3">
                            <FormField
                                label="Confirmar contraseña"
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirma tu nueva contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {error?.confirmPassword && <small className="text-danger">{error.confirmPassword}</small>}
                        </div>

                        {error?.general && <p className="text-danger">{error.general}</p>}
                        {message && <p className="text-success">{message}</p>}

                        <button type="submit" className="btn btn-success w-100 mb-2">
                            Cambiar contraseña
                        </button>

                        <div className="d-flex flex-column align-items-center">
                            <button
                                type="button"
                                className="btn btn-link text-decoration-none"
                                onClick={() => window.location.href = '/login'}
                            >
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default ResetPassword;
