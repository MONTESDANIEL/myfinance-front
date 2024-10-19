import NavBar from '../components/Navbar';
import FormField from '../components/FormField';

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

const CreateAccount = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="container d-flex flex-column justify-content-center align-items-center p-4">
        <div className="bg-body-tertiary card p-3 w-100 w-lg-auto" style={{ maxWidth: '600px' }}>
          <h3 className='text-center'>Crea una cuenta</h3>
          <hr />
          <form onSubmit={handleRegister}>
            <FormField
              label="Nombre completo"
              type="text"
              id="name"
              placeholder="Ingresa tu nombre completo"
              required
            />
            <FormField
              label="Correo electrónico"
              type="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
              required
            />
            <FormField
              label="Contraseña"
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              required
            />
            <FormField
              label="Confirmar contraseña"
              type="password"
              id="confirmPassword"
              placeholder="Confirma tu contraseña"
              required
            />
            <button type="submit" className="btn btn-success w-100 my-2">
              Registrar
            </button>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-link text-decoration-none my-2"
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

export default CreateAccount;