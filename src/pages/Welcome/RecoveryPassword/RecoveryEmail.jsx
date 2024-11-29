import { useState } from 'react';
import NavBar from '@components/Navbar';
import FormField from '@components/FormField';
import { recoverPassword } from '@api/AuthApi';
import { validateFields } from '@utils/validationUtils';

const RecoveryEmail = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({}); // Limpiar los errores previos
        setMessage(''); // Limpiar mensaje previo

        // Realizar la validación antes de cualquier acción
        const validationErrors = validateFields({ email: email || "" });

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        try {
            const response = await recoverPassword(email);
            setMessage(response); // Mensaje de éxito de la API
        } catch (err) {
            setError({ general: 'Hubo un problema al intentar enviar el correo. <br> Por favor, inténtelo de nuevo.' });
        }
    };

    return (
        <>
            <header>
                <NavBar />
            </header>

            <main className="d-flex justify-content-center align-items-center p-3">
                <div className="card bg-body-tertiary p-3 w-100" style={{ maxWidth: '500px' }}>
                    <h1 className="text-center mb-0">Recuperación de contraseña</h1>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <FormField
                                label="Correo electrónico"
                                id="email"
                                placeholder="Ingresa tu correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {error?.email && <small className="text-danger">{error.email}</small>}
                        </div>

                        <div className='mb-2 ms-1 text-danger'>
                            {error.general && error.general.split('<br>').map((line, index) => (
                                <small key={index}>{line}<br /></small>
                            ))}
                            {message && <small className="text-success">{message}</small>}
                        </div>


                        <button
                            type="submit"
                            className="btn btn-success w-100 mb-2">
                            Enviar correo de recuperación
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

export default RecoveryEmail;
