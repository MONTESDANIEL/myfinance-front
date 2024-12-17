import { useState } from 'react';
import NavBar from '@components/Navbar';
import FormField from '@components/FormField';
import { loginUser } from '@api/AuthApi';
import { validateFields } from '@utils/validationUtils'; // Importa la función de validación

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError({}); // Limpiar los errores previos

    if (email === "" && password === "") {
      setError({ general: "Por favor ingresa tus datos." }); // Crear un nuevo objeto de error
      return;
    }

    // Validar los campos relevantes (email y password)
    const validationErrors = validateFields({ email: email || "", password: password || "" });

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors); // Establecer los errores de validación
      return;
    }

    try {
      // Llamada a la API
      const token = await loginUser({ email, password });

      // Guardar el token en localStorage
      localStorage.setItem('authToken', token);

      // Redirigir al home
      window.location.href = '/home';
    } catch (err) {
      setError({ general: 'Error al iniciar sesión, por favor intente nuevamente.' });
    }
  };

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="d-flex justify-content-center align-items-center p-3">
        <div className="card bg-body-tertiary p-3 w-100" style={{ maxWidth: '500px' }}>
          <h1 className="text-center mb-0">Iniciar sesión</h1>
          <hr />
          <form onSubmit={handleLogin}>

            <div className="mb-3">
              <FormField
                label="Correo electrónico"
                type="text"
                id="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error?.email && <small className="text-danger ms-2">{error.email}</small>}
            </div>

            <div className="position-relative">
              <FormField
                label="Contraseña"
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary position-absolute end-0"
                style={{ top: 'calc(50% - 8%)', border: 'none', background: 'transparent' }}
                onClick={togglePasswordVisibility}
                aria-label={passwordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                <i className={`bi ${passwordVisible ? 'bi-eye-slash' : 'bi-eye'} fs-5 text-success`} />
              </button>
            </div>
            {error.password && <small className="text-danger mt-1">{error.password}</small>}

            <div className="my-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                <span className='ms-2'>Recuérdame</span>
              </label>
            </div>

            {error?.general && <small className="text-danger">{error.general}</small>}

            <button type="submit" className="btn btn-success w-100 my-2">
              Iniciar sesión
            </button>

            <div className="d-flex flex-column align-items-center">
              <button
                type="button"
                className="btn btn-link text-decoration-none"
                onClick={() => window.location.href = '/create-account'}
              >
                Registrarse
              </button>
              <button
                type="button"
                className="btn btn-link text-decoration-none"
                onClick={() => window.location.href = '/recovery-email'}
              >
                Olvidé mi contraseña
              </button>
            </div>
          </form >
        </div >
      </main >
    </>
  );
};

export default Login;
