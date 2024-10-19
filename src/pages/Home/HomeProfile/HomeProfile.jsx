const HomeProfile = () => {
    return (
        <div className="container-fluid">
            <div className="d-lg-none navbar container-fluid justify-content-center">
                <ul className="nav nav-tabs justify-content-center" id="v-pills-tab" role="tablist">
                    <li className="nav-item">
                        <button className="nav-link active text-secondary" id="v-pills-userdata-tab-i" data-bs-toggle="pill" data-bs-target="#v-pills-userdata" type="button" role="tab" aria-controls="v-pills-userdata" aria-selected="true">
                            <i className="bi bi-person"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-configuration-tab-i" data-bs-toggle="pill" data-bs-target="#v-pills-configuration" type="button" role="tab" aria-controls="v-pills-configuration" aria-selected="false">
                            <i className="bi bi-gear"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-tags-tab-i" data-bs-toggle="pill" data-bs-target="#v-pills-tags" type="button" role="tab" aria-controls="v-pills-tags" aria-selected="false">
                            <i className="bi bi-tags"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-budget-tab-i" data-bs-toggle="pill" data-bs-target="#v-pills-budget" type="button" role="tab" aria-controls="v-pills-budget" aria-selected="false">
                            <i className="bi bi-wallet"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-goals-tab-i" data-bs-toggle="pill" data-bs-target="#v-pills-goals" type="button" role="tab" aria-controls="v-pills-goals" aria-selected="false">
                            <i className="bi bi-piggy-bank"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="d-none d-lg-block">
                <ul className="nav nav-tabs justify-content-center" id="v-pills-tab" role="tablist">
                    <li className="nav-item">
                        <button className="nav-link active text-secondary" id="v-pills-userdata-tab" data-bs-toggle="pill" data-bs-target="#v-pills-userdata" type="button" role="tab" aria-controls="v-pills-userdata" aria-selected="true">
                            <i className="bi bi-person"> Datos personales</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-configuration-tab" data-bs-toggle="pill" data-bs-target="#v-pills-configuration" type="button" role="tab" aria-controls="v-pills-configuration" aria-selected="false">
                            <i className="bi bi-gear"> Configuración</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-tags-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tags" type="button" role="tab" aria-controls="v-pills-tags" aria-selected="false">
                            <i className="bi bi-tags"> Categorías y Etiquetas</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-budget-tab" data-bs-toggle="pill" data-bs-target="#v-pills-budget" type="button" role="tab" aria-controls="v-pills-budget" aria-selected="false">
                            <i className="bi bi-wallet"> Presupuesto</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-secondary" id="v-pills-goals-tab" data-bs-toggle="pill" data-bs-target="#v-pills-goals" type="button" role="tab" aria-controls="v-pills-goals" aria-selected="false">
                            <i className="bi bi-piggy-bank"> Objetivos de Ahorro</i>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-userdata" role="tabpanel" aria-labelledby="v-pills-userdata-tab" tabIndex="0">
                    <div className="container p-3">
                        <div className="p-3 bg-body-tertiary">
                            <div className="text-center mb-3 text-success">
                                <h2>Información Básica</h2>
                            </div>
                            <hr />
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
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-configuration" role="tabpanel" aria-labelledby="v-pills-configuration-tab" tabIndex="0">
                    <div className="p-3">
                        <div className="p-3 bg-body-tertiary">
                            <div className="text-center mb-3 text-success">
                                <h2>Seguridad</h2>
                            </div>
                            <hr />
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
                                <hr />
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
                            </form>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-tags" role="tabpanel" aria-labelledby="v-pills-tags-tab" tabIndex="0">
                    <div className="p-3">
                        <div className="p-3 mb-2 bg-body-tertiary">
                            <div className="text-center mb-3 text-success">
                                <h2>Categorías y Etiquetas</h2>
                            </div>
                            <hr />
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
                <div className="tab-pane fade" id="v-pills-budget" role="tabpanel" aria-labelledby="v-pills-budget-tab" tabIndex="0">
                    <div className="p-3">
                        <div className="p-3 mb-2 bg-body-tertiary">
                            <div className="text-center mb-3 text-success">
                                <h2>Presupuesto</h2>
                            </div>
                            <hr />
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="budgetCategory" className="form-label">Categoría para el Presupuesto</label>
                                    <select className="form-select" id="budgetCategory">
                                        <option value="food">Alimentación</option>
                                        <option value="rent">Renta</option>
                                        <option value="utilities">Servicios</option>
                                        {/* Agregar más opciones según sea necesario */}
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
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-goals" role="tabpanel" aria-labelledby="v-pills-goals-tab" tabIndex="0">
                    <div className="p-3">
                        <div className="p-3 mb-2 bg-body-tertiary">
                            <div className="text-center mb-3 text-success">
                                <h2>Objetivos de Ahorro</h2>
                            </div>
                            <hr />
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="savingGoalName" className="form-label">Nombre del Objetivo de Ahorro</label>
                                    <input type="text" className="form-control" id="savingGoalName" placeholder="Ej. Ahorro para vacaciones" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="savingGoalAmount" className="form-label">Monto del Objetivo de Ahorro</label>
                                    <input type="number" className="form-control" id="savingGoalAmount" placeholder="Monto en $" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="savingGoalDate" className="form-label">Fecha Límite para el Objetivo</label>
                                    <input type="date" className="form-control" id="savingGoalDate" />
                                </div>

                                <div className="mb-3">
                                    <button type="button" className="btn btn-primary ms-2"><i className="bi bi-bullseye"> Definir Objetivo de Ahorro</i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProfile;