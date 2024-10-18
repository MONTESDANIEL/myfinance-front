import { NavBar } from '../components/Navbar';
import LogoLetra from '../assets/images/logos/Letra.png';

// Validación para que la contraseña sea igual a la confirmación ademas de que tengan valores
function handleRegister(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Aquí enviarías los datos al servidor, por ejemplo usando fetch:
  fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Manejo de la respuesta del servidor
      if (data.success) {
        alert('Registro exitoso');
        // Redirigir o mostrar mensaje
      } else {
        alert('Error en el registro');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error en el registro');
    });
}

// Redirecciones
function handleLoginRedirect() {
  window.location.href = '/login';
}

export const CreateAccount = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="container d-flex flex-column justify-content-center align-items-center p-4">
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
          className="bg-body-tertiary card p-3"
          style={{ width: '350px', height: 'auto' }}
        >
          <div className="text-center">
            <h3>Crea una cuenta</h3>
            <hr className="my-2" />
          </div>
          <form onSubmit={handleRegister}>
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingresa tu nombre completo"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresa tu correo electrónico"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirma tu contraseña"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mt-2">
              Registrar
            </button>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-link text-decoration-none mt-2"
                onClick={handleLoginRedirect}
              >
                Ya tengo una cuenta
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
