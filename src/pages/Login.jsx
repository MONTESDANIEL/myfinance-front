import { useState } from 'react';

import NavBar from '@components/Navbar';
import FormField from '@components/FormField';

// Redirecciones
function handleHomeRedirect() {
  window.location.href = '/home';
}
function handleCreateAccountRedirect() {
  window.location.href = '/create-account';
}

const Login = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="d-flex justify-content-center align-items-center p-3">
        <div className="card bg-body-tertiary p-3 w-100" style={{ maxWidth: '500px' }}>
          <h3 className="text-center mb-0">Iniciar sesión</h3>
          <hr />
          <form>

            <FormField
              label="Correo electrónico o usuario"
              type="email"
              id="email"
              placeholder="Ingresa tu correo o usuario"
              required
            />

            <div className="position-relative">
              <FormField
                label="Contraseña"
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Ingresa tu contraseña"
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary position-absolute end-0"
                style={{
                  top: 'calc(50% - 5px)',
                  border: 'none',
                  background: 'transparent'
                }}
                onClick={togglePasswordVisibility}
                aria-label={
                  passwordVisible
                    ? 'Ocultar contraseña'
                    : 'Mostrar contraseña'
                }
              >
                <i
                  className={`bi ${passwordVisible ? 'bi-eye-slash' : 'bi-eye'
                    } fs-5 text-success`}
                ></i>
              </button>
            </div>

            <input
              type="checkbox"
              className="form-check-input mb-3"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Recuérdame
            </label>

            <button
              onClick={handleHomeRedirect}
              type="submit"
              className="btn btn-success w-100 mb-2"
            >
              Iniciar sesión
            </button>

            <div className="d-flex flex-column align-items-center">
              <button
                onClick={handleCreateAccountRedirect}
                type="button"
                className="btn btn-link text-decoration-none"
              >
                Registrarse
              </button>
              <button
                onClick={handleCreateAccountRedirect}
                type="button"
                className="btn btn-link text-decoration-none"
              >
                Olvidé mi contraseña
              </button>
            </div>
          </form>
        </div>
      </main >
    </>
  );
};

export default Login;