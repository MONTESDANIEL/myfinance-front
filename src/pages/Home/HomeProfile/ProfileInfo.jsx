const ProfileInfo = () => {
    return (
        <>
            <div className="text-center text-ligth d-lg-none">
                <h1>Informacion</h1>
                <hr />
            </div>
            <div className="container-fluid rounded p-4 bg-body-tertiary">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre Completo</label>
                        <input type="text" className="form-control" id="name" placeholder="Nombre Completo" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="Correo Electrónico" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Número de Teléfono</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Número de Teléfono" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">Número de identificación</label>
                        <input type="tel" className="form-control" id="id" placeholder="Número de identificación" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="birthdate" className="form-label">Fecha de Nacimiento</label>
                        <input type="date" className="form-control" id="birthdate" placeholder="Fecha de Nacimiento" />
                    </div>
                    <div className="m-3 d-flex justify-content-end">
                        <button type="button" className="btn btn-warning ms-2"><i className="bi bi-pencil-square"> Editar</i></button>
                        <button type="button" className="btn btn-primary ms-2"><i className="bi bi-save"> Guardar</i></button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default ProfileInfo;