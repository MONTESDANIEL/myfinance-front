const ProfileSecurity = () => {
    return (
        <>
            <div className="text-center text-ligth d-lg-none">
                <h1>Seguridad</h1>
                <hr />
            </div>
            <div className="container-fluid rounded p-4 mb-3 bg-body-tertiary">
                <form>
                    <div className="mb-3">
                        <label htmlFor="currentPassword" className="form-label">Contraseña Actual</label>
                        <input type="password" className="form-control" id="currentPassword" placeholder="Contraseña Actual" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">Nueva Contraseña</label>
                        <input type="password" className="form-control" id="newPassword" placeholder="Nueva Contraseña" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmNewPassword" className="form-label">Confirmar Nueva Contraseña</label>
                        <input type="password" className="form-control" id="confirmNewPassword" placeholder="Confirmar Nueva Contraseña" />
                    </div>
                    <div className="m-3 d-flex justify-content-end">
                        <button type="button" className="btn btn-warning ms-2"><i className="bi bi-pencil-square"> Editar</i></button>
                        <button type="button" className="btn btn-primary ms-2"><i className="bi bi-save"> Guardar</i></button>
                    </div>
                </form>
            </div>
            <div className="container-fluid rounded p-4 bg-body-tertiary">
                <form>
                    <div className="mb-3">
                        <label htmlFor="securityQuestion1" className="form-label">Pregunta de Seguridad 1</label>
                        <select className="form-select" id="securityQuestion1">
                            <option value="pet">¿Cuál es el nombre de tu primera mascota?</option>
                            <option value="school">¿En qué escuela primaria estudiaste?</option>
                            <option value="city">¿En qué ciudad naciste?</option>
                        </select>
                        <input type="text" className="form-control mt-2" id="securityAnswer1" placeholder="Respuesta" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="securityQuestion2" className="form-label">Pregunta de Seguridad 2</label>
                        <select className="form-select" id="securityQuestion2">
                            <option value="street">¿En qué calle vivías de niño?</option>
                            <option value="teacher">¿Cómo se llamaba tu maestro/a favorito/a?</option>
                            <option value="car">¿Cuál fue tu primer auto?</option>
                        </select>
                        <input type="text" className="form-control mt-2" id="securityAnswer2" placeholder="Respuesta" />
                    </div>
                    <div className="m-3 d-flex justify-content-end">
                        <button type="button" className="btn btn-warning ms-2"><i className="bi bi-pencil-square"> Editar</i></button>
                        <button type="button" className="btn btn-primary ms-2"><i className="bi bi-save"> Guardar</i></button>
                    </div>
                </form >
            </div >
        </>

    )
}

export default ProfileSecurity;

