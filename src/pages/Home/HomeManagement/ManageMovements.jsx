import { useState } from 'react';
import { movementsData, tags } from '@data/movementsData'

const ListItem = ({ date, description, amount, type, tag }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border p-3" style={{ cursor: 'pointer' }} onClick={toggleDetails} key={amount.id}>
            <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">{description}</span>
                <div className="d-flex align-items-center">

                    <span className={`d-none d-md-block ${amount < 0 ? 'text-danger' : 'text-success'}`}>
                        {amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}
                    </span>
                    <span><i className={isOpen ? "bi bi-chevron-compact-up ms-3" : "bi bi-chevron-compact-down ms-3"}></i></span>
                </div>
            </div>
            {isOpen && (
                <div className="m-2">
                    <span className={`d-block d-md-none ${amount < 0 ? 'text-danger' : 'text-success'}`}>
                        <strong>Monto:</strong> {amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}
                    </span>
                    <div><strong>Fecha:</strong> {new Date(date).toLocaleDateString('es-ES')}</div>
                    <div><strong>Tipo:</strong> {type}</div>
                    <div><strong>Etiqueta:</strong> {tag}</div>
                </div>
            )}
        </div>

    );
};

const ManageMovements = () => {
    return (
        <>

            <div className="text-center text-ligth d-lg-none">
                <h1>Movimientos</h1>
                <hr />
            </div>

            <div className="container-fluid rounded p-2 mb-3 bg-body-tertiary">
                <h2 className='my-4 mt-3 text-center'>Nuevos Movimientos</h2>
                <div className="card">
                    <div className="card-header text-center text-md-start">
                        Registrar Movimiento
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="amount" className="form-label">Monto</label>
                                <input type="number" className="form-control" id="amount" placeholder="Ingrese el monto" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Descripción</label>
                                <input type="text" className="form-control" id="description" placeholder="Ingrese una descripción" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Tipo</label>
                                <select className="form-select" id="type">
                                    <option value="income">Ingreso</option>
                                    <option value="expense">Gasto</option>
                                    <option value="expense">Ahorro</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Etiquetas</label>
                                <select className="form-control">
                                    {tags.map((tags) => (
                                        <option key={tags.value} value={tags.value}>
                                            {tags.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary">
                                <span>Agregar</span>
                                <i className="bi bi-plus-circle ms-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div >

            <div className="container-fluid rounded p-2 bg-body-tertiary">
                <h2 className='my-4 mt-3 text-center'>Historial de Movimientos</h2>
                <div className="card">
                    <div className="card-header d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <span className="mb-md-0 p-2">Ver Movimientos</span>
                        <form className="d-flex p-2" role="search">
                            <input
                                className="form-control form-control-sm mx-2"
                                type="search"
                                placeholder="Buscar"
                                aria-label="Search" />
                            <button
                                className="btn btn-outline-success btn-sm"
                                type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>

                    <div className="card-body p-0" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                        <div className="list-responsive">
                            {movementsData.length > 1 ? (
                                movementsData.map((row, index) => (
                                    <ListItem key={index} {...row} />
                                ))

                            ) : (
                                <div className='container p-3 text-center' >
                                    <span>No existe ningún movimiento</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default ManageMovements;