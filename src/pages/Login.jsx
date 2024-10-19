import NavBar from '../components/Navbar';
import FormField from '../components/FormField';
import { useState } from 'react';
import LogoLetra from '../assets/images/logos/Letra.png';

// Redirecciones
function handleHomeRedirect() {
  window.location.href = '/home';
}
function handleCreateAccountRedirect() {
  window.location.href = '/create-account';
}

const Login = () => {
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

      <main className="container d-flex flex-column justify-content-center align-items-center p-3 pb-4">
        <div className="bg-body-tertiary card p-3 w-100 w-lg-auto" style={{ maxWidth: '450px' }}>
          <h3 className="text-center">Iniciar sesión</h3>
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
          </form>
        </div>
      </main >
    </div >
  );
};


export default Login;