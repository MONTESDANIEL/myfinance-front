import { useState } from 'react';
import NavBar from '@components/Navbar';
import FormField from '@components/FormField';
import { registerUser } from '@api/AuthApi';
import { validateFields } from '@utils/validationUtils'; // Importa la función de validación

function handleLoginRedirect() {
  window.location.href = '/login';
}

const CreateAccount = () => {
  const [id, setId] = useState('');
  const [idType, setIdType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlRegister = async (e) => {
    e.preventDefault();
    setErrors({});

    console.info(birthDate);

    const validationErrors = validateFields({
      id,
      name,
      email,
      password,
      confirmPassword,
      phoneNumber,
      birthDate,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await registerUser({ id, idType, name, email, phoneNumber, birthDate, password });
      console.info(response);
      window.location.href = '/login';
    } catch (err) {
      setErrors({ submit: 'Error al registrar la cuenta, por favor intente nuevamente.' });
    }
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main className="d-flex justify-content-center align-items-center p-3">
        <div className="card bg-body-tertiary p-3 w-100" style={{ maxWidth: '1000px' }}>
          <h1 className="text-center mb-1">Crea una cuenta</h1>
          <hr />
          <form onSubmit={handlRegister}>
            <div className="row">
              <div className="col-md-12 mb-2">
                <FormField
                  label="Nombre completo"
                  type="text"
                  id="name"
                  placeholder="Ingresa tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

            </div>

            <div className="row">
              <div className="col-md-6 mb-2">
                <label htmlFor="idType" className='form-label'>Tipo de identificación</label>
                <select
                  className="form-control"
                  id="idType"
                  value={idType}
                  onChange={(e) => setIdType(e.target.value)}
                >
                  <option value="">Selecciona el tipo de identificación</option>
                  <option value="CC">Cédula de Ciudadanía (CC)</option>
                  <option value="CE">Cédula de Extranjería (CE)</option>
                  <option value="NIT">Número de Identificación Tributaria (NIT)</option>
                  <option value="PAS">Pasaporte (PAS)</option>
                  <option value="NIE">Número de Identidad de Extranjero (NIE)</option>
                  <option value="RUT">Registro Único Tributario (RUT)</option>
                  <option value="CEX">Carné de Extranjería (CEX)</option>
                </select>
              </div>
              <div className="col-md-6 mb-2">
                <FormField
                  label="Número de identificación"
                  type="text"
                  id="id"
                  placeholder="Ingresa tu número de identificación"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                {errors.id && <small className="text-danger">{errors.id}</small>}
              </div>
            </div>

            <div className="mb-2">
              <FormField
                label="Correo electrónico"
                type="text"
                id="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            <div className="row">
              <div className="col-md-6 mb-2">
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
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>
              <div className="col-md-6 mb-2">
                <FormField
                  label="Confirmar contraseña"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirma tu contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-2">
                <FormField
                  label="Número de teléfono"
                  type="text"
                  id="phoneNumber"
                  placeholder="Ingresa tu número de teléfono"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
              </div>
              <div className="col-md-6 mb-2">
                <FormField
                  label="Fecha de nacimiento"
                  type="date"
                  id="birthDate"
                  placeholder="Ingresa tu fecha de nacimiento"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
                {errors.birthDate && <small className="text-danger">{errors.birthDate}</small>}
              </div>
            </div>

            {errors.submit && <div className="alert alert-danger mt-2">{errors.submit}</div>}
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
      </main>
    </div>
  );
};

export default CreateAccount;
