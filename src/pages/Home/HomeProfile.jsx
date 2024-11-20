const HomeProfile = () => {
    return (
        <div className="container">
            <div className="bg-dark-subtle rounded p-3">

                <div className="text-center text-ligth">
                    <h1 className="text-center mb-3">Información del Usuario</h1>
                    <p className="text-muted text-center">Visualiza y gestiona la información del usuario, realizando ediciones según sea necesario.</p>
                    <hr />
                </div>

                <main className="container-fluid rounded p-3 bg-body-tertiary">
                    <form>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="name" className="form-label mb-0">Nombre completo</label>
                                <input type="text" className="form-control" id="name" />
                                <small className="text-muted d-block ms-1">
                                    <i className="bi bi-info-circle">
                                        <span className="ms-1">Tal como aparece en tu identificación.</span>
                                    </i>
                                </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label mb-0">Correo electrónico</label>
                                <input type="email" className="form-control" id="email" />
                                <small className="text-muted d-block ms-1">
                                    <i className="bi bi-info-circle">
                                        <span className="ms-1">Se utilizará para notificaciones importantes.</span>
                                    </i>
                                </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="phone" className="form-label mb-0">Número de teléfono</label>
                                <input type="tel" className="form-control" id="phone" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="id" className="form-label mb-0">Número de identificación</label>
                                <input type="text" className="form-control" id="id" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="birthdate" className="form-label mb-0">Fecha de nacimiento</label>
                                <input type="date" className="form-control" id="birthdate" />
                            </div>
                        </div>
                        <div className="mt-4 d-flex justify-content-end">
                            <button type="button" className="btn btn-warning me-2"><i className="bi bi-pencil-square"> Editar</i></button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default HomeProfile;