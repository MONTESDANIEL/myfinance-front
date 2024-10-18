import { NavBar } from '../components/Navbar';
import { useState } from 'react';
import LogoLetra from '../assets/images/logos/Letra.png';

// Redirecciones
function handleHomeRedirect() {
  window.location.href = '/home';
}
function handleCreateAccountRedirect() {
  window.location.href = '/create-account';
}

export const Login = () => {
  // Definir función para cambiar estado de contraseña a visible e invisible
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="container d-flex flex-column justify-content-center align-items-center p-3 pb-4">
          <figure
            className="d-flex justify-content-center align-items-center"
            style={{ width: '300px', height: 'auto' }}
          >
            <img
              src={LogoLetra}
              alt="Logo"
              className="img-fluid w-100"
            />
          </figure>
          <div
            className="bg-body-tertiary card p-4"
            style={{ maxWidth: '400px' }}
          >
            <div className="text-center">
              <h3>Iniciar sesión</h3>
              <hr className="my-3" />
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico o usuario
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Ingresa tu correo o usuario"
                  aria-label="Correo electrónico o usuario"
                />
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  aria-label="Contraseña"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary position-absolute end-0"
                  style={{
                    top: 'calc(50% - 5px)',
                    right: '10px',
                    border: 'none',
                    background: 'transparent',
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
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Recuérdame
                </label>
              </div>
              <button
                onClick={handleHomeRedirect}
                type="submit"
                className="btn btn-success w-100 mb-2"
              >
                Iniciar sesión
              </button>
              <div className="row pt-3">
                <div className="d-flex justify-content-center">
                  <button
                    onClick={handleCreateAccountRedirect}
                    type="button"
                    className="btn btn-link text-decoration-none"
                  >
                    Registrarse
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={handleCreateAccountRedirect}
                    type="button"
                    className="btn btn-link text-decoration-none"
                  >
                    Olvidé mi contraseña
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
