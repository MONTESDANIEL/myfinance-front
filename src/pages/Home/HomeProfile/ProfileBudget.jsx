const ProfileBudget = () => {
    return (
        <>
            <div className="text-center text-ligth d-lg-none">
                <h1>Presupuesto</h1>
                <hr />
            </div>
            <div className="container-fluid rounded p-4 bg-body-tertiary">
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
        </>
    )
}

export default ProfileBudget;