const ProfileTags = () => {
    return (
        <>
            <div className="text-center text-ligth d-lg-none">
                <h1>Etiquetas</h1>
                <hr />
            </div>
            <div className="container-fluid rounded p-4 bg-body-tertiary">
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
        </>
    )
}

export default ProfileTags;