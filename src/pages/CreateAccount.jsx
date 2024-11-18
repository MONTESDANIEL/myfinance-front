import NavBar from '@components/Navbar';
import FormField from '@components/FormField';

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

      <main className="d-flex justify-content-center align-items-center p-3">
        <div className="card bg-body-tertiary p-3 w-100" style={{ maxWidth: '1000px' }}>
          <h3 className='text-center mb-0'>Crea una cuenta</h3>
          <hr />
          <form>

            <div className="row">
              <div className="col-md-6">
                <FormField
                  label="Nombre completo"
                  type="text"
                  id="name"
                  placeholder="Ingresa tu nombre completo"
                  required
                />
              </div>
              <div className="col-md-6">
                <FormField
                  label="Número de identificación"
                  type="number"
                  id="id"
                  placeholder="Ingresa tu número de identificación"
                  required
                />
              </div>
            </div>

            <FormField
              label="Correo electrónico"
              type="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
              required
            />

            <div className="row">
              <div className="col-md-6">
                <FormField
                  label="Contraseña"
                  type="password"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
              <div className="col-md-6">
                <FormField
                  label="Confirmar contraseña"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirma tu contraseña"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FormField
                  label="Número de teléfono"
                  type="phoneNumber"
                  id="phoneNumber"
                  placeholder="Ingresa tu número de teléfono"
                  required
                />
              </div>
              <div className="col-md-6">
                <FormField
                  label="Fecha de nacimiento"
                  type="date"
                  id="birthDate"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100 my-2">
              Registrar
            </button>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-link text-decoration-none"
                onClick={handleLoginRedirect}
              >
                Ya tengo una cuenta
              </button>
            </div>

          </form>
        </div>
      </main >
    </div >
  );
};

export default CreateAccount;