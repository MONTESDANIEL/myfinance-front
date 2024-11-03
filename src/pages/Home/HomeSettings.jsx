const HomeSettings = () => {
    return (
        <div className="container">
            <div className="bg-dark-subtle rounded p-3 m-2">
                <div className="text-center text-ligth">
                    <h1 className="text-center mb-3">Configuración</h1>
                    <p className="text-muted text-center">Personaliza tus preferencias y ajusta la aplicación para mejorar tu experiencia</p>
                    <hr />
                </div>
                <div className="container-fluid rounded p-4 bg-body-tertiary mb-3">
                    <div className="text-center text-ligth">
                        <h2>Presupuesto</h2>
                        <hr />
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="budgetCategory" className="form-label">Categoría para el Presupuesto</label>
                            <select className="form-select" id="budgetCategory">
                                <option value="food">Alimentación</option>
                                <option value="rent">Renta</option>
                                <option value="utilities">Servicios</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="budgetAmount" className="form-label">Monto del Presupuesto Mensual</label>
                            <input type="number" className="form-control" id="budgetAmount" placeholder="Monto en $" />
                        </div>

                        <div className="mb-3">
                            <button type="button" className="btn btn-primary ms-2">
                                <i className="bi bi-calculator"> Establecer Presupuesto</i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="container-fluid rounded p-4 mb-3 bg-body-tertiary">
                    <div className="text-center text-ligth">
                        <h1>Seguridad</h1>
                        <hr />
                    </div>
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
                    <hr />
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
                <div className="container-fluid rounded p-4 bg-body-tertiary">
                    <div className="text-center text-ligth">
                        <h1>Etiquetas</h1>
                        <hr />
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="categoryName" className="form-label">Nombre de la Categoría</label>
                            <input type="text" className="form-control" id="categoryName" placeholder="Nombre de la Categoría" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="tagName" className="form-label">Nombre de la Etiqueta</label>
                            <input type="text" className="form-control" id="tagName" placeholder="Nombre de la Etiqueta" />
                        </div>

                        <div className="mb-3">
                            <button type="button" className="btn btn-primary"><i className="bi bi-plus-square"> Crear Categoría/Etiqueta</i></button>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="manageCategory" className="form-label">Gestionar Categorías</label>
                            <select className="form-select" id="manageCategory">
                                <option value="food">Alimentación</option>
                                <option value="rent">Renta</option>
                                <option value="utilities">Servicios</option>
                                {/* Agregar más opciones según sea necesario */}
                            </select>
                        </div>

                        <div className="m-3 d-flex justify-content-end">
                            <button type="button" className="btn btn-warning ms-2"><i className="bi bi-pencil-square"> Editar</i></button>
                            <button type="button" className="btn btn-primary ms-2"><i className="bi bi-save"> Guardar</i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomeSettings;